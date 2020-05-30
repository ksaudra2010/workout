const mongoose = require("mongoose");
// create mongoose schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
//   Create workoutSchema criteria
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
    type: Array
  },
  totalDuration: {
    type: Number,
    default: 0
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
