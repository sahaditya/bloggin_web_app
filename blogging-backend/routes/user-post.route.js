const express = require('express');
const router = express.Router();

const user_post_controller = require('../controllers/user-post.controller');

router.get('/', user_post_controller.test);
router.post('/create', user_post_controller.create_blog);
router.get('/:id', user_post_controller.get_post_by_id);
router.put('/:id/update', user_post_controller.update_post);

module.exports = router;
