function Super(name) {
    this.name = name
}
Super.prototype.add = function() {
   Super.age = Super.age + 1
}
Super.age =1


const a = new Super('A')
const b = new Super('B')
a.add()




function Person(){
    this.pro1 = 'test'
    this.pro2  =1
}
Person.prototype.age =18
const fnObj = Object.create(Person.prototype)

console.log('obj====>',fnObj.age)

const personObj ={
    age:1
}
const obj = Object.create(personObj)
console.log(obj.age)