export function simpleSort(arr: number[], order = "asc"): number[] {
    // asc or desc

    const sortedArr = [...arr];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (compare(sortedArr[j], sortedArr[j + 1], order)) {
                const temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }
    return sortedArr;
}

function compare(a: number, b: number, order: string) {
    if (order == 'asc') return a > b;
    else return a < b;
}