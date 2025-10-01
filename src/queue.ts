export class Queue<T> {
    private capacity: number;
    private queue: (T | undefined)[] = [];
    private _size: number;

    constructor(capacity: number) {
        this.queue = new Array<T>(capacity);
        this.capacity = capacity;
        this._size = 0;
    }

    public get size(): number {
        return this._size;
    }

    public push(value: T): void {
        if (value == null || this._size == this.capacity) {
            console.log("full");
            return;
        }

        this.queue[this._size++] = value;
    }

    public pop(): T | undefined {
        if (this._size == 0) return;

        this._size--;
        const r: T | undefined = this.queue[this._size];
        this.queue[this._size] = undefined;
        return r;
    }

    public top(): T | undefined {
        return this.queue[this._size - 1];
    }

    public front(): T | undefined {
        return this.queue[0];
    }

    public isEmpty(): boolean {
        return this._size == 0;
    }

    public enqueue(value: T): void {
        if (value == null || this._size == this.capacity) {
            console.log("full");
            return;
        }

        this.queue[this._size++] = value;
    }

    public dequeue(): T | undefined {
        if (this._size == 0) return;

        const r: T | undefined = this.queue[0];
        this._size--;
        for (let i = 0; i < this._size; i++) {
            this.queue[i] = this.queue[i + 1];
        }
        this.queue[this._size] = undefined;
        return r;
    }
}