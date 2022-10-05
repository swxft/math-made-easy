// const func = require('./index.js')
const minAndMax = (arr) => {
    const minMax = []
    minMax.push(Math.min(...arr))
    minMax.push(Math.max(...arr))
    return minMax
}

const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)]

test('returns the smallest and largest number of the given array', () => {
    expect(minAndMax([1, 5, 233, 6])).toStrictEqual([1, 233])
    expect(minAndMax([-1, 5, -233, 6])).toStrictEqual([-233, 6])
    expect(minAndMax([-1, 5.99, -233, 6])).toStrictEqual([-233, 6])
})

test('returns a random item from a given array', () => {
    const list = ['red', 'blue', 'green']
    const rc = randomChoice(list)
    expect(rc).toBe((rc))
})
