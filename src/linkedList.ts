class Node<T> {
    public readonly data: T;
    public prev: Node<T> | null = null;
    public next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

export class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private _size: number = 0;

    public size(): number {
        return this._size;
    }

    public append(data: T): void {
        const newNode = new Node<T>(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail !== null) { // head가 null이 아닌데 tail이 null인 경우가 있나..
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        }
        this._size++;
    }

    public printList(): T[] | null {
        const result: T[] = [];
        let current: Node<T> | null = this.head;

        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    public removeNode(nodeToRemove: Node<T>): void {
        if (nodeToRemove === this.head && nodeToRemove === this.tail) {
            this.head = null;
            this.tail = null;
        } else if (nodeToRemove === this.head) {
            this.head = this.head.next;
            if (this.head !== null) {
                this.head.prev = null;
            }
        } else if (nodeToRemove === this.tail) {
            this.tail = this.tail.prev;
            if (this.tail !== null) {
                this.tail.next = null;
            }
        } else {
            if (nodeToRemove.prev !== null) {
                nodeToRemove.prev.next = nodeToRemove.next;
            }
            if (nodeToRemove.next !== null) {
                nodeToRemove.next.prev = nodeToRemove.prev;
            }
        }
        this._size--;
    }

    public delete(data: T): boolean {
        if (this.head === null) { // 리스트가 비어있는 경우 제외
            return false;
        }
        let current: Node<T> | null = this.head;
        while (current !== null) {
            if (current.data === data) {
                this.removeNode(current);
                break;
            }
            current = current.next;
        }
        return false;
    }

    public search(data: T): T | null {
        let current: Node<T> | null = this.head;
        while (current !== null) {
            if (current.data === data) {
                return current.data;
            }
            current = current.next;
        }
        return null;
    }

    public printListReverse(): T[] | null {
        const result: T[] = []

        let current: Node<T> | null = this.tail;
        while (current !== null) {
            result.push(current.data);
            current = current.prev;
        }
        return result;
    }

    // public getFirst() : T | null {
    //     if (this.head === null) {
    //         return null;
    //     }

    //     return this.head.data;
    // }

    public getFirst(): T | null {
        return this.head?.data ?? null; // 새로운 문법 **Optional Chaining (?.)**과 **Nullish Coalescing (??)**
        // 만약 this.head가 존재하면 data 속성에 접근하고, 그 과정에서 null이나 undefined가 되면 최종적으로 null을 반환
    }

    public getLast(): T | null {
        return this.tail?.data ?? null;
    }

    public isEmpty(): boolean {
        return this._size === 0;
    }

    public clear(): void {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }
}