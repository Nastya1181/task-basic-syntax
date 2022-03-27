const numbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }; //можно было придумать алгоритм с использованием switch, но так больше нравится
export function romanToInteger(str) {
    let lastElemIndex = str.length - 1;
    let result = numbers[str[lastElemIndex]];
    for (let i = lastElemIndex; i > 0; i--) {
        if (numbers[str[i - 1]] >= numbers[str[i]]) {
            result += numbers[str[i - 1]];
        } else {
            result -= numbers[str[i - 1]];
        }
    }
    return result;
}
