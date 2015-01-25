/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create: function(req,res, next) {
    var params = req.params.all();

    // Post.create(params);
    // res.json(post);
    Post.create(params).exec(function(err,post){
      if (err) return next(err);
      res.status(201);
      res.json(post);
    });

  }
};

