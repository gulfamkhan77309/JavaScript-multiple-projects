//const promiseOne = new Promise (function (resolve, reject) {
    // do an async task 
    // DB calls , cryptography , network calls
//     setTimeout(function () {
//         console.log('async task is completed')
//         resolve()
//     } , 1000)
// })

// promiseOne.then(function () {
//     console.log('promise consumed');
    
// })

// new Promise (function (resolve, reject) {
//     // do an async task 
//     // DB calls , cryptography , network calls
//     setTimeout(function () {
//         console.log('async task is completed')
//         resolve()
//     } , 1000)
// }).then(function (){
//     console.log("task2 consumed");
    
// })

// const promiseThree = new Promise (function (resolve , reject) {
//     setTimeout(function () {
//         resolve('user data is fetched')
//     } , 1000)
// })
// promiseThree.then(function (user) {
//     console.log(user);
// })

// const promiseFour = new Promise (function (resolve, reject) {
//     setTimeout(function() {
//         let error = false 
//         if(!error) {
//             resolve({name : 'john' , age : 30}) 
//         } else {
//             reject('Error : something went wrong')
//         }

//     } , 1000)
// }) 
// promiseFour.then(function (message){
//     console.log(message);
//     return message.age6
// }).then(function (age) {
//     console.log(age)
// }).catch(function (error) {
//     console.log(error);
// }).finally(function () {
//     console.log('promise is either resolved or rejected');
// })

// const promiseFive = new Promise (function (resolve, reject) {
//     setTimeout(function() {
//         let error = true 
//         if(!error) {
//             resolve({name : 'Abdul' , age : 30}) 
//         } else {
//             reject('Error : something went wrong')
//         }

//     } , 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// async function getUserData () {
//     const response = await fetch("https://randomuser.me/api/")
//     const data = await response.json()
//     console.log(data);
    
// }
// getUserData()

fetch("https://randomuser.me/api/")
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);
})