const str = 'shin';
const num = 123;
const bool = true;
const arr = [1, 2, 3];
const obj = {
  name: 'shin',
  email: 'shin@shin.kr',
};

function func() {
  console.log('I love shin!');
}

console.log('--- str ---');
console.log(str); // run shin
console.dir(str);
console.log('--- num ---');
console.log(num); // run 123
console.dir(num);
console.log('--- bool ---');
console.log(bool); // run true
console.dir(bool);
console.log('--- arr ---'); 
console.log(arr); // run [1, 2, 3]
console.dir(arr);
console.log('--- obj ---');
console.log(obj); // run { name: 'shin', email: 'shin@shin.kr' } 
console.dir(obj);
console.log('--- func ---');
console.log(func); // run [λ: func] 
console.dir(func);