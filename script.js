// Step 1
const arr = ['Nesha', 'Mervin', 24, 'Toronto', 'Frontend Developer'];

// Step 2
const firstName = arr[0];
const age = arr[Math.floor(arr.length / 2)];
const dreamJob = arr[arr.length - 1];
console.log(firstName, age, dreamJob);

// Step 3
const arrLength = arr.length;
console.log(arrLength);

// Step 4
arr.unshift('Humber College');
console.log(arr);

arr.pop();
console.log(arr);

arr.splice(0, 1, 'Humber Polytechnic');
console.log(arr);

// Step 5
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(elem => console.log(elem));

// Step 6
const [schoolName, fName, ...rest] = arr;
console.log(schoolName, fName, rest);
