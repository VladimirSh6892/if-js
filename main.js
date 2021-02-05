let user = 'John Doe';
console.log(user); //output John Doe
const student = 'Vladimir';
console.log(student); //output Vladimir
user = student;
console.log(user); //output Vladimir

let test = 1;
test += 1;
console.log(test); //output 2
test += '1';
console.log(test); //output 21
test -= 1;
console.log(test); //output 20
console.log(Boolean(test)); //output true

const arr1 = [2, 3, 5, 8];
let result = 1;
for ( i = 0; i<arr1.length; i++ ) {
    result *= arr1[i];
}
console.log(result);

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for(i = 0; i<arr2.length; i++) {
    if( arr2[i]>5 && arr2[i] < 10 ){
        console.log(arr2[i]);
    }
}

const arr3 = [2, 5 ,8, 15, 0, 6, 20, 3];
for( i=0 ; i<arr3.length ; i++ ) {
    if(!(arr3[i] % 2 )) {
        console.log(arr3[i]);
    }
}