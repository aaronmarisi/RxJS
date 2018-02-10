var promise = new Promise((resolve, reject) => {
    // do work
    // resolve('resolve');
    reject('error');
});

promise.then(val => console.log(val), err => console.log(err));