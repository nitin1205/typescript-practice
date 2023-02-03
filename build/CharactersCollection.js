"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
class CharacterCollection {
    constructor(data) {
        this.data = data;
    }
    ;
    get length() {
        return this.data.length;
    }
    compare(leftIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[leftIndex + 1].toLowerCase();
    }
    ;
    swap(leftIndex) {
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[leftIndex + 1];
        characters[leftIndex + 1] = leftHand;
        this.data = characters.join('');
    }
    ;
}
exports.CharacterCollection = CharacterCollection;
;
