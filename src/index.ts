// import { Sorter } from "./Sorter";
// import { CharacterCollection } from "./CharactersCollection";
// import { NumbersCollection } from "./NumbersCollection";
// import { LinkedList } from "./LinkedList";

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
import path from 'path';

import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
 
const reader = new CsvFileReader(path.join(__dirname, '..', 'data', 'football.csv'));
reader.read();


let manUnitedWins = 0;

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    };
};

console.log(`Man United won ${manUnitedWins} game`);