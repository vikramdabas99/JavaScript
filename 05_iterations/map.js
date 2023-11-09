const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((num) => num + 10)

// channing

const newNums = myNums
.map(num => num * 10)
.map(prev => prev + 5)
.filter(prev => prev >= 50)
console.log(newNums);