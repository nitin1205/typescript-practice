export class NumbersCollection {
    constructor(public data: number[]) {};

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number): boolean {
        return this.data[leftIndex] > this.data[leftIndex + 1];
    };

    swap(leftIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[leftIndex + 1];
        this.data[leftIndex + 1] = leftHand;
    }
};