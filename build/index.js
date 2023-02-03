"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([10, 3, -4, 2]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort()
// console.log(numbersCollection.data);
const characterCollection = new CharactersCollection_1.CharacterCollection('XjsdAHSLcsHytsfa');
const sorter = new Sorter_1.Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data);
