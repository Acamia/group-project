const mongoose = require("mongoose")

const Bookschema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String
  },
  available: {
    type: String,
    required: true,
    // default: 'Available'
  },
  checkOutBy: {
    type: String,
    required: true
  }
})

const Tutorial = mongoose.model('book', Bookschema);

module.exports = Tutorial;

  // module.exports = mongoose =>{
  //   var schema = mongoose.Schema(
  //     {
  //       title: String,
  //       description: String,
  //       published: Boolean
  //     },
  //     {timestamps: true}
  //   );

  //   schema.method("toJSON", function(){
  //     const { __v, _id, ...object } = this.toObject();
  //     object.id = _id;
  //     return object;
  //   });

  //   const Tutorial = mongoose.model("tutorial", schema);
  //   return Tutorial;
  // }