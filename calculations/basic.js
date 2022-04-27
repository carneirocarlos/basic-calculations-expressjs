/*
    Variance is a measurement of the spread between numbers in a data set.
    Meaning it is a measure of how far a set of numbers is spread out from their mean.

    examples:
    variance of 8, 10, 13 = 4.222222222222222 // returns 4
    variance of 1, 33, 50 = 412.6666666666667 // returns 412
*/
export function variance(inputs) {
    if (inputs) {
        let mean = inputs.reduce((a, b) => a + b) / inputs.length;

        let arr = inputs.map((k)=>{
            return (k - mean) ** 2
        })

        let sum = arr.reduce((acc, curr)=> acc + curr, 0);
        let variance = sum / arr.length

		return Math.trunc(variance)
    }

    throw 'Failed to calculate variance'
}

/*
    The mean is the arithmetic average of a set of given numbers.

    examples:
    mean of 8, 10, 12 = 10
    mean of 1, 33, 50 = 28
*/
export function mean(inputs) {
    if (inputs) {
        return inputs.reduce((a, b) => a + b) / inputs.length;
    }

    throw 'Failed to calculate mean'
}