"use strict";
// import { Sorter } from "./Sorter";
// import { CharacterCollection } from "./CharactersCollection";
// import { NumbersCollection } from "./NumbersCollection";
// import { LinkedList } from "./LinkedList";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const numbersCollection = new NumbersCollection([10, 3, -4, 2]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// const characterCollection = new CharacterCollection('XjsdAHSLcsHytsfa');
// characterCollection.sort();
// console.log(characterCollection.data)
// const linkedList = new LinkedList();
// linkedList.add(28)
// linkedList.add(19)
// linkedList.add(-28)
// linkedList.add(8)
// linkedList.add(0)
// linkedList.add(34)
// linkedList.add(-10)
// linkedList.print();
// console.log('gsdfs')
// linkedList.sort();
// linkedList.print();
// 2nd project (CSV)
const path_1 = __importDefault(require("path"));
const CsvFileReader_1 = require("./CsvFileReader");
// const matches = 
const reader = new CsvFileReader_1.CsvFileReader(path_1.default.join(__dirname, '..', 'data', 'football.csv'));
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
;
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
    ;
}
;
console.log(`Man United won ${manUnitedWins} game`);
