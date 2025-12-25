import { readLines } from "../utils/input";

const year = 2025;
const day = 3;

const lines = readLines(year, day);

let totalJoltage = 0
for (const line of lines) {
    totalJoltage += calculateJoltage(line)
}
console.log(totalJoltage)

function calculateJoltage(line: string) {
    const maxes = new Array<string>(12).fill('0')
    let nextIndex = 0
    for (let i = 0; i < 12; i++) {
        for (let j = nextIndex; j < line.length-11+i; j++) {
            const curr = line[j] ?? '0'
            if (curr > (maxes[i] ?? 0)) {
                maxes[i] = curr
                nextIndex = j + 1
            }
        }
    }
    return Number(maxes.join(''))
}
