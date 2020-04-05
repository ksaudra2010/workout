const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
    dbWorkout.forEach(function(workout,index){
      var total = 0;
     workout.exercises.forEach(function(exercise){
       total += exercise.duration
     })
      dbWorkout[index].totalDuration = total
      console.log(workout)
    })
      // console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req,res) => {
  console.log(req.body)
  Workout.updateOne({_id:req.params.id},{
    $push:{
       exercises:req.body
    }
      
  })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
