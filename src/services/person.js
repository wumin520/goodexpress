import personDAO from '../models/person'

const getById = (id) => {
  return personDAO.init().then((person) => {
    return person.getAsync(id).then((rows) => {
      return rows
    })
  })
}

export default {
  getById
}