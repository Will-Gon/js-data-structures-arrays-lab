// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(name){
    drivers.shift()
}

function appendDriver(name){
    let newDriver = [...drivers, name]
    return newDriver
}

function prependDriver(name){
    let addDriver = [name, ...drivers]
    return addDriver
}

function removeLastDriver(){
    let lastDriver = drivers.slice(0, drivers.length - 1)
    return lastDriver
}

function removeFirstDriver(){
    let firstDriver  = drivers.slice(1)
    return firstDriver
}
