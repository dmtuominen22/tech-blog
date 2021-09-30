const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const { route } = require('../routes/api/post-routes');
const withAuth = require('../utils/auth');

//route to load dashboard 
route.get


//route to edit a single Posts


module.exports = router;