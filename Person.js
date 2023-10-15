const person = [{
    name : 'Manikandan',
    age : 25,
}]
const isValid = true;

PushPerson = (personData, callback) => {
    person.push(personData)
    callback();
    
}

getPersons = () => {
    // console.log(`Using callback`);
    console.log(person)
}

personPromise = (person) => {
    return new Promise((resolve, reject) => {
        if(isValid){
            resolve(PushPerson(person, getPersons))            
        }else{
            reject('Not authorise for promise')
        }
    })
}


PushPerson({name : 'tejas', age: 25}, getPersons) // using callback
personPromise({name : 'anya', age: 25}, getPersons).then(() => { // using promise
    console.log('Promise Sucess')
}).catch((err) => {
    console.log(err)
})


PushPerson2 = (personData) => {
    person.push(personData)
    
}

async function PushPersonAsync() { // using Asc Await
    await PushPerson2({name : 'nithin', age: 25})
    console.log('Data update via Async Await')
    getPersons();
}
PushPersonAsync();