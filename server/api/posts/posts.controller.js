import Post from './../../models/post';

export function getPosts(req, res) {
  Post.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

export function addPost(req, res) {
  if (!req.body.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}
