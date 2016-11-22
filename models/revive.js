var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviveSchema = new Schema({
    reviveShowName: {
        type: String,
        required: true
    },
    reviveGoal: {
        type: Number,
        required: true
    },
    reviveTitle: {
        type: String,
        required: true
    },
    revivePhoto: {
        type: String
    },
    reviveVideo: {
        type: String
    },
    reviveStory: {
<<<<<<< HEAD
        type: String
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
=======
      type: String
>>>>>>> 6c9ade23264c694403e9fdda8aa52794d0f76161
    }
});


module.exports = mongoose.model('Revive', reviveSchema);
