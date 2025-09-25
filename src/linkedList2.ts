class Node<T> {
    value: T;
    next: Node<T> | null;
    prev: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class LinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // 요소 추가
    append(value: T): void {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        }
        length++;
    }


    // 특정 값 삭제
    delete(value: T): void {
        if (!this.head) {
            return;
        }

        let i: Node<T> | null = this.head;
        while (i) {
            if (i.value == value) {
                i.next = i.prev;
                this.length--;
                return;
            }
            i = i.next;
        }
    }

    // 특정 값 검색
    search(value: T): T | null {
        if (!this.head) return null;

        let i: Node<T> | null = this.head;
        while (i) {
            if (i.value = value) return i.value;
            i = i.next;
        }
        return null;
    }

    // 크기 반환
    size(): number {
        return this.length;
    }

    // 리스트 정방향 출력
    printList(): T[] {
        if (!this.tail) return [];

        let result: T[] = [];
        let i: Node<T> | null = this.head;
        while (i) {
            result.push(i.value);
            i = i.next;
        }
        return result;
    }

    // 리스트 역방향 출력
    printListReverse(): T[] {
        if (!this.tail) return [];

        let result: T[] = [];
        let i: Node<T> | null = this.tail;
        while (i) {
            result.push(i.value);
            i = i.prev;
        }
        return result;
    }

    // 첫 번째 값
    getFirst(): T | null {
        if (this.head) return this.head.value;
        return null;
    }

    // 마지막 값
    getLast(): T | null {
        if (this.tail) return this.tail.value;
        return null;
    }
}