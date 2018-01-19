
const promise = new Promise((resolve, reject) => {

    setTimeout(()=>{
        //resolve('this is resolved data.');

        resolve({
            name: 'Nimi',
            age: 100 
        });
        //reject('Jotain ongelmia...');
    },2000);
    
});

console.log('1st');

promise.then((data)=>{
    console.log(data);
}).catch((error) =>{
    console.log('error: ', error);
});

console.log('2nd');
