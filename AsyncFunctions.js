class Person{
    constructor(name, age, occupation){
        this.name = name
        this.age = age
        this.occupation = occupation
        this.personData = [{
            name : 'Manikandan',
            age : 25,
            occupation : 'Web Developer',
        }];
    }

    pushPersonData = () => {
        console.log(this.personData);
        this.personData.push({name : this.name, age : this.age, occupation : this.occupation})
        return this.personData
    }
}

module.exports = Person