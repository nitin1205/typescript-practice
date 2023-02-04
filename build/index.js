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
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv(path_1.default.join(__dirname, '..', 'data', 'football.csv'));
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
// const summary = new Summary(new WinsAnalysis('Man United'), /*new ConsoleReport() */ new HtmlReport());
