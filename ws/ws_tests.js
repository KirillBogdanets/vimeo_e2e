
const chakram = require('chakram');
const expect = chakram.expect;
const Vimeo = require('vimeo').Vimeo;
const CLIENT_ID = '23568834058e5fca2fc35130466304c75d72a928';
const CLIENT_SECRET = 'fAizy4lH/aJiPJfuJz6bTYJ9Mk6gqh7eY6XYJyZlUPLIytgzNXQywpPTqzxvA0GWgQpJlq1zSRu4+Oz4FrfetMs0NxJAtAif0oj4fis9gepBJFQ2AzoH7vlR8ZPArPl5';
const ACCESS_TOKEN = 'cb1af12a0da01f9936819f1151daed96';

describe('Vimeo Web-Services Tests', function() {
    const client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);
    this.slow(6000);
    let request;
    before(() => {
        request = chakram.post("https://api.vimeo.com/oauth/authorize", client, ['public']);
        return request;
    });

    it('authentication should run with 200 status', () => {
        return expect(request).to.have.status(200);
    });

    it('should return data', () => {
        return expect(request).to.have.json((json) => {
            expect(json.length).to.be.greaterThan(0);
        });
    });

    it('number of videos should be greater than 0', () => {
        return chakram.get("https://vimeo.com/channels/staffpicks", client, {
            query: {
                page: 1,
                per_page: 10
            },
            headers: {
                "Content-Type": "application/json"
            }
        }).then(val => {
            return expect(val).to.have.json((json) => {
                expect(json.indexOf('video')).to.be.greaterThan(0);
                return chakram.wait();
            });
        });
    });
});

