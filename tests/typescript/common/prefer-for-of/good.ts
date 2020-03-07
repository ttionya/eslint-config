const arr = [1, 2, 3]

for (const x of arr) {
  console.log(x)
}

for (let i = 0; i < arr.length; i++) {
  arr[i] = 0
}

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i])
}
