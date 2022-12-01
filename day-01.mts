import { readFileSync } from "fs";

export function day1_a(): number {
    const lines = readFileSync('day-01.txt').toString().split('\n')
    const numbers = lines.map(n => Number(n))

    let max = 0
    let acc = 0
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element !== 0) {
            acc = acc + element
        } else {
            if (acc > max) {
                max = acc
            }
            acc = 0
        }
    }

    return max
}

export function day1_b(): number {
    const lines = readFileSync('day-01.txt').toString().split('\n')
    const numbers = lines.map(n => Number(n))

    let sums = []

    let acc = 0
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element !== 0) {
            acc = acc + element
        } else {
            sums.push(acc)
            acc = 0
        }
    }

    sums.sort((a, b) => a - b)
    return sums[sums.length - 1] + sums[sums.length - 2] + sums[sums.length - 3]
}