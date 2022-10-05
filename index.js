class M {
	constructor() {
		this._math = Math
	}

    abs(...args) {
        return this._math.abs(...args);
    }

    acos(...args) {
		return this._math.acos(...args)
	}

    acosh(...args) {
		return this._math.acosh(...args)
	}

    asin(...args) {
		return this._math.asin(...args)
	}

    asinh(...args) {
		return this._math.asinh(...args)
	}

    cos(...args) {
		return this._math.cos(...args)
	}

    cosh() {
		return this._math.cosh(...args)
	}

    E(){
		return this._math.E(...args)
	}

    exp(...args) {
		return this._math.exp(...args)
	}

    max(...args) {
		return this._math.max(...args)
	}

    min() {
		return this._math.min(...args)
	}

    PI() {
		return this._math.getFullYear()
	}

    pow(...args) {
		return this._math.pow(...args)
	}

    random() {
        return this._math.random(...args);
	}

    round(...args) {
      return this._math.round(...args);
    }

}

// takes an array of numbers and outpus an array of the min and max value
const minAndMax = (arr) => {
    const minMax = []
    minMax.push(Math.min(...arr))
    minMax.push(Math.max(...arr))
    return minMax
}

const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)]


a = new M()
console.log(a.abs(-2.5))
console.log(randomChoice(['red', 'blue', 'green']))
