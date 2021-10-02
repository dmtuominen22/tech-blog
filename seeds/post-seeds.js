const { Post } = require('../models');

const postData = [{
        title: 'Post 1',
        content: 'This is where you would put the content for the post 1.',
        user_id: 1

    },
    {
        title: 'Post 2',
        content: 'This is where you put the content for the post 2',
        user_id: 2
    },
    {
        title: 'Post 3',
        content: 'This is where you put the content for the post 3.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;