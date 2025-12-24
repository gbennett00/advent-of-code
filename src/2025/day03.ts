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
    let firstMax = line[0] ?? '0'
    let firstMaxIdx = 0
    for (let i = 0; i < line.length-1; i++) {
        const curr = line[i] ?? '0'
        if (curr > firstMax) { 
            firstMax = curr
            firstMaxIdx = i
        }
    }

    let secondMax = line[firstMaxIdx + 1] ?? '0'
    for (let i = firstMaxIdx + 1; i < line.length; i++) {
        const curr = line[i] ?? '0'
        if (curr > secondMax) secondMax = curr
    }
    return (Number(firstMax) * 10) + Number(secondMax)
}
