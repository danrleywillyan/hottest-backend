const { Schema, model } = require('mongoose');

const ProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  male: {
    type: Boolean,
    // required: true,
  },
}, {
  timestamps: true, //createAt (save date and hour when was created
  // on DB), updateAt (save date and hour of the last updat )
});

ProfileSchema.statics.showAll = function() {
  return this.find({  });
}

module.exports = model('Profile', ProfileSchema);