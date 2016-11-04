const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

    // this property will hold blog post's title
    text: {
        type: String,
        default: 'Write your task here!'
    },

    // this property will hold the date the blog post was created
    createdDate: {
        type: Number,
        default: Date.now
    },

    user: {
      type: String,
      required: true
    }
});

mongoose.model('Tasks', TaskSchema);
