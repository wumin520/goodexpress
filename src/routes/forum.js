import ss from '../services/user.js'
console.log(ss)
exports.index = async function(req, res){
    let result = 0
    console.log('conn')
    await ss.then((res) => {
      console.log(res)
      result = res
    })
    console.log('result: ', result)
    res.render('user', { advs: result });
};

const sd = 1

exports.new = function(req, res){
    res.send('new forum');
};

exports.create = function(req, res){
    res.send('create forum');
};

exports.show = function(req, res){
    res.send('show forum ' + req.params.forum);
};

exports.edit = function(req, res){
    res.send('edit forum ' + req.params.forum);
};

exports.update = function(req, res){
    res.send('update forum ' + req.params.forum);
};

exports.destroy = function(req, res){
    res.send('destroy forum ' + req.params.forum);
};