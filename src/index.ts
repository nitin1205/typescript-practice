import { Sorter } from "./Sorter";
import { CharacterCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -4, 2]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort()
// console.log(numbersCollection.data);

const characterCollection = new CharacterCollection('XjsdAHSLcsHytsfa');
const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data)