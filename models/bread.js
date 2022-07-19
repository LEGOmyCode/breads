//require mongoose
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor
const { Schema } = mongoose

//Schema
const breadSchema = new Schema({
  //we will write our schema here
  name: {type:String, required: true},
  hasGluten: Boolean,
  image:{type:String }, // default: 'url link' 
  baker:{
    type: Schema.Types.ObjectId,
    ref: 'Baker'
  }
})
//Helper methods
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker}`
}
//model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread