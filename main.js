//number, string, boolean, null, undefined, NaN
//object, array, function

const a = 4
const b = a

const user1 = { //#567
    name: 'Bob',
    age: 23,
    isStudent: true
}

const user2 = user1 //#567
user2.name = 'Ann'
console.log(user1.name)

// const copyUser = {} //new Object()
// copyUser.name = user1.name
// copyUser.age = user1.age
// copyUser.isStudent = user1.isStudent

const copyUser = { ...user1 }

console.log(copyUser)
console.log(copyUser === user1)
//copyUser.isStudent = false

const copyUser1 = { ...user1, isStudent: false }
const copyUser2 = { ...user1, isMarried: false }

const address = {
    country: 'Thailand',
    city: 'Bangkok'
}

const copyUser3 = { ...user1, ...address }
console.log(copyUser3)

const student = {
    name: 'Bob',
    age: 23,
    isStudent: true,
    address: {
        country: 'Thailand',
        city: 'Bangkok'
    },
    courses: [
        'HTML', 'CSS', 'JS'
    ]
}

const studentCopy = { ...student }
studentCopy.courses.push('React')
console.log(student)

const studentCopy2 = { ...student, courses: [...student.courses, 'Redux'] }
console.log(student.courses)
console.log(studentCopy2.courses)

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
        address: {
            country: 'Sudan',
            city: 'Hartum'
        }
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
        address: {
            country: 'Sudan',
            city: 'Hartum'
        }
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
        address: {
            country: 'Sudan',
            city: 'Hartum'
        }
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
        address: {
            country: 'Sudan',
            city: 'Hartum'
        }
    }
]

const newUser = {
    id: 5,
    name: 'Alex',
    isStudent: true,
    address: {
        country: 'Belarus',
        city: 'Minsk'
    }
}

const users2 = [...users, newUser] // add new element

//delete element with id === 3

const users3 = users.filter(u => u.id !== 3)
console.log(users3)

//id = 1, new city = 'Sudan'

const users4 = users.map(u => u.id === 1 ? { ...u, address: { ...u.address, city: 'Sudan' } } : u)
const users5 = users.map(u => u.id === 1 ? { ...u, name: 'Ali' } : u)