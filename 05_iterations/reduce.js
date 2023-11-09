const myNums = [1,2,3,4,5]

const initialValue = 0;

const sum = myNums.reduce((acc, cur)=> {
    return acc + cur
}, initialValue)

console.log(sum);