const { Comment } = require('../models');

const commentData = [{
        comment_text: "Let this be my frist comment",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Let this be my second comment",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Let this be my thrid comment",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments