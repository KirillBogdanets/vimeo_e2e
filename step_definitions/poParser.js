'use strict';

const world = require('../po/world');

const parser = (element) => {
    let elementsArray = element.split(" > ");
    let finalElement;
    elementsArray.map(value => {
        if (finalElement === undefined) {
            finalElement = world[value];
        } else {
            finalElement = finalElement[value];
        }
    });
    return finalElement;
};

module.exports = {
  parser
};