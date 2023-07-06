const echo = <T>(arg: T): T => arg

//////////////////////////////////

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj('Tuan'))
console.log(isObj([1, 2, 3]))
console.log(isObj({ name: 'Nguyen Han' }))
console.log(isObj(null))

///////////////////////////////////

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Hung'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({})) // modified
console.log(isTrue({ name: 'Hung' }))
console.log(isTrue([])) // modified
console.log(isTrue([1, 2, 3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

////////////////////////////////////

interface BoolCheck<T> {
    value: T,
    is: boolean,
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false }
    }
    return { value: arg, is: !!arg }
}

//////////////////////////////////////


interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    // process the user with logic here 
    return user
}

console.log(processUser({ id: 1, name: 'Hung' }))
//console.log(processUser({ name: 'Hung'}))

///////////////////////////////////////


const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Tran Quoc Tuan",
        "username": "Tuan",
        "email": "Tranquoctuan@gmail.com",
        "address": {
            "street": "Tran Hung Dao",
            "suite": "Apt. 556",
            "city": "Saigon",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "+8455638862",
        "website": "https://www.britannica.com/biography/Tran-Hung-Dao",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Tran Nguyen Han",
        "username": "Nguyenhan",
        "email": "nguyenhan@hotmail.com",
        "address": {
            "street": "Tran Nguyen Han",
            "suite": "Suite 879",
            "city": "Hai Phong",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "+84355641322",
        "website": "https://zh.wikipedia.org/zh-hk/%E9%99%B3%E5%85%83%E6%89%9E",
        "company": {
            "name": "Tran Nguyen Han",
            "catchPhrase": "The greatest military leader of Blue Mountain Rebel Force",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))

///////////////////////////////////////

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject("Tuan")
console.log(store.state)
store.state = "Hung"
//store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = ['Hung', 32, true]
console.log(myState.state)