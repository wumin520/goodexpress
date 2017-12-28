import person from '../services/person'

exports.index = async function (req, res) {
  let userId = 0
  await person.getById(1).then((person) => {
    userId = person.id
  })
  console.log('userId: ', userId)
  res.cookie('islogin', 'sucess', { maxAge: 60000 });
  console.log(req.headers.cookie)
  res.render('person', {id: userId})
}