import * as firebase from 'firebase';
import { loadavg } from 'os';

  // Initialize Firebase
  var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };

/* 
  // child_removed
  database.ref('Expenses').on('child_removed', (snapshot) =>{
    console.log(snapshot.key, snapshot.val());
  });

  // child_changed
  database.ref('Expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  // shild_added
  database.ref('Expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
 */

/*   database.ref('Expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot)=>{
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        console.log(expenses);
    })
    .catch((e) => {
        console.log(e);
    }); */

/*     database.ref('Expenses').on('value', (snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot)=>{
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        console.log(expenses);
    }); */

/*   database.ref('Expenses').push({
    description: 'Creadit card',
    note:'Something delicious',
    amount:823,
    createdAt: 1000000
  }); */



/* 
  database.ref('notes').push({
    title: 'To do',
    body: 'sdfsdfsdfsdf'
  });
 */

  /*   database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
  }); */

/*   database.ref()
    .once('value')
    .then((snaphot)=>{
        const val = snaphot.val();
        console.log(val);
    }).catch(()=>{
        console.log('Error fetching data.');
    }); */


  /*
   database.ref().set({
    name: 'Petri Posti',
    age : 100,
    stressLevel: 6,
    job:{
        title: 'Software devloper',
        company: 'Google'
    },
    location: {
        city:'Tornio',
        country:'Finland'
    }
  }).then(()=>{
      console.log('Data is saved.');
  }).catch((e)=>{
      console.log('update failed.',e);
  });


  database.ref().update({
    stressLevel: 9,
    'job/company':'Amazon',
    'location/city':'Seattle'
  }).then(()=>{
    console.log('Data is updated.');
}).catch((e)=>{
    console.log('update failed.',e);
});;

  /*  database.ref('location/country')
  .remove()
  .then(()=>{
    console.log('data removed');
}).catch(()=>{
    console.log('data not removed.');
}); 

*/
