import {Person, sss} from '../models/person'
import {test, get} from '../services/person'
exports.index = async function (req, res) {
    let userId = 0

    await test(1).then((id) => {
        userId = id
    })
    console.log('userId: ', userId)
    res.cookie('islogin', 'sucess', { maxAge: 60000 });
    console.log(req.headers.cookie)
    res.render('person', {id: userId})
}