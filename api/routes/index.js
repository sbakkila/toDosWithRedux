const mongoose = require('mongoose');

// blog post model
const Tasks = mongoose.model('Tasks');
const Post = mongoose.model('Post');


export default router => {

  router.get('/tasks/:id', function(req, res, next) {
    let userID = req.params.id;

    Tasks.find({user: userID}, null, {sort:'createdDate'})
      .then(allTasks => {
        console.log(allTasks);
        res.send(allTasks);
      })
      .catch(err => !console.log(err) && next(err)); // pass DB errors to Express error handler
  });

  router.post('/add/task/', function(req, res, next) {
    const newTasks = new Tasks(req.body);

    newTasks.save()
      .then(savedTask => res.json(savedTask[0] || savedTask)) // sometimes returns array of [savedPost, 1], not sure if this a MongoDB or Mongoose version thing
      .catch(err => !console.log(err) && next(err)); // pass DB errors to Express error handler
  });

  router.delete('/delete/task/:id', function(req, res, next) {
    Tasks.remove({_id: req.params.id})
      .then(deletedTask => res.status(200).json(deletedTask))
      .catch(err => !console.log(err) && next(err)); // pass DB errors to Express error handler
  });

//-----------


  // Get initial app data
  router.get('/post', function(req, res, next) {
    Post.find({}, null, {sort:'-createdDate'})
      .then(allPosts => res.json(allPosts))
      .catch(err => !console.log(err) && next(err)); // pass DB errors to Express error handler
  });

  router.post('/post', function(req, res, next) {
    const newPost = new Post(req.body);
    newPost.save()
      .then(savedPost => res.json(savedPost[0] || savedPost)) // sometimes returns array of [savedPost, 1], not sure if this a MongoDB or Mongoose version thing
      .catch(err => !console.log(err) && next(err)); // pass DB errors to Express error handler
  });

  router.put('/post/:id', function(req, res, next) {
    Post.findByIdAndUpdate(req.params.id, req.body, { new:true }) // new option here says return the updated object to the following promise, vs. object prior to update
      .then(updatedPost => res.status(200).json(updatedPost))
      .catch(err => !console.log(err) && next(err)); // pass DB errors to Express error handler
  });

  router.delete('/post/:id', function(req, res, next) {
    Post.findByIdAndRemove(req.params.id)
      .then(deletedPost => res.status(200).json(deletedPost))
      .catch(err => !console.log(err) && next(err)); // pass DB errors to Express error handler
  });

  return router;
}
