// davaleba 1


const func = (n)=>{
    if(n < 2) throw new Error('error');
  
    const first = n[0] + n[1]
  
    const second = n.slice(2).reduce((accum,cur)=> accum * cur)
  
    console.log(first,second)
    return [first,second]
  }
  
  const result = func([10,20,3,5,8,4])
  console.log(result)


// davaleba 2

const user = {
    firstname: 'Lebron',
    lastname: 'James',
    banks: {
        bank1: 'TBC',
        bank2: 'BOG',
        address: {
            city: 'Tbilisi'
        }
    }
}

const {firstname, lastname, banks:{bank1, bank2, address:{city}={}}} = user

console.log(firstname,lastname,bank1,bank2,city)


// davaleba 3


const person = {
    firstname: 'Novak',
    lastname: 'Djokovic',
    profile: {
        age:36,
        nickname: 'The Joker'
    },
    titles: ['Australian Open', 'French Open', 'Wimbledon', 'US Open']
} 

const person2 ={
    ...person,
    profile: {
        ...person.profile
    },
    titles:[...person.titles]
}

person.profile.age = 55
person.titles =['Maiami Open', 'Madrid Open', 'Cincinnati Masters','Shanghai Masters']

console.log(person.profile.age, person.titles)
console.log(person2.profile.age, person2.titles)
