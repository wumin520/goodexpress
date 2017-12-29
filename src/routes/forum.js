import user from '../services/user.js'


// GET     /                 ->  index
// GET     /new              ->  new
// POST    /                 ->  create
// GET     /:id              ->  show
// GET     /:id/edit         ->  edit
// PUT     /:id              ->  update
// DELETE  /:id              ->  destroy
exports.index = async function (req, res) {
  let result = 0
  console.log('conn')
  await user.getAll().then((res) => {
    console.log(res)
    result = res
  })
  console.log('result: ', result)
  res.render('user', { advs: result });
};

exports.new = function (req, res) {
  // res.send('new forum');
  res.json({id: 1})
};

exports.create = function (req, res) {
  console.log(req)
  console.log(req.params)
  console.log(req.body)
  console.log(req.route)
  res.send('create forum');
};

exports.show = function (req, res) {
  res.send('show forum ' + req.params.forum);
};

exports.edit = function (req, res) {
  res.send('edit forum ' + req.params.forum);
};

exports.update = function (req, res) {
  res.send('update forum ' + req.params.forum);
};

exports.destroy = function (req, res) {
  res.send('destroy forum ' + req.params.forum);
};