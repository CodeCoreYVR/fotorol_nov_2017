const path = require('path');
const multer = require('multer');
const express = require('express');
const router = express.Router();
const knex = require('../db'); // In node if you require
// a file named index in a directory, you can omit the
// filname, 'index', from the require.
// const knex = require('../db/index');

const UPLOADS_DIR = 'uploads';
const upload = multer({dest: path.join(__dirname, '..', 'public', UPLOADS_DIR)});

// PATH: /posts/new VERB: GET Serves form for creating posts
router.get('/new', (request, response) => {
  response.render('posts/new');
});

// PATH: /posts VERB: POST Creating new posts
router.post('/', upload.single('picture'), (request, response) => {
  const username = request.body.username;
  const content = request.body.content;

  // This if checks that each value exists. If any of them is undefined or something
  // that is not truthy, it will go to the else block.
  if (username && content && request.file) {
    const filename = request.file.filename;
    const picture_path = path.join(UPLOADS_DIR, filename);

    knex
    .insert({username: username, content: content, picture_path: picture_path})
    .into('posts')
    .returning('id')
    .then(result => response.redirect('/posts'))
    .catch(error => response.send(error));
  } else {
    response.locals.flash.push('Username, content and picture are required!')
    response.render('posts/new');
  }
});

// PATH: /posts VERB: GET List all the posts
router.get('/', (request, response) => {
  knex
    .select()
    .from('posts')
    .orderBy('created_at', 'DESC')
    .then(posts => {
      response.render('posts/index', {posts: posts});
    });
})

module.exports = router;






// bump
