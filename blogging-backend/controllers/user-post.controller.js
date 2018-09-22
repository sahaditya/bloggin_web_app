const UserPost = require('../models/user-post');

exports.test = function(req, res){
  res.send("Hello, its working! i am from user post controller :)");
}

exports.create_blog = function(req, res){
  let user_post = new UserPost({
    title : req.body.title,
    authorName : req.body.authorName,
    article : req.body.article
  });

  user_post.save(function(err){
    if(err){
      console.log("failed to create blog", err);
    }
    res.send("new blog createed successfully");
  });
}

exports.get_post_by_id = function(req, res){
    UserPost.findById(req.params.id, function(err, user_post){
        if(err) return next (err);
        res.send(user_post);
    })
}
exports.get_blog = function(req, res){
    UserPost.findByIdAndUpdate(req.params.id, {$set : req.body}, function(err, user_post){
        if(err) return next (err);
        res.send(user_post);
    })
}
