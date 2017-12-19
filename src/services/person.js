
import {Person} from '../models/person'


exports.get = async function g(id) {
    let result
    if (result) {
        console.log('connect exists: ', result)
        return result
    }
    await Person.then((s) => {
        result = s
    })
    console.log('connect exists: ', result)
    return result
}

exports.test = async function test(id) {
    let result
    let userId
    await Person.then((s) => {
        result = s
    })
    await result.getAsync(id).then((person) => {
        userId = person.id
    })
    return userId
}