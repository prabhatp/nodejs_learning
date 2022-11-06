console.log('start execution');
a = 10;
b = 0;
console.log('logic execution');


let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 2000);
});
console.log('complete execution');
waitingData.then((b) => {
    console.log(a+b);
})

