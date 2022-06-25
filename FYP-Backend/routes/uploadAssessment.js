const router = require("express").Router();
const verify = require('./verifyToken');
const Course = require("../model/Course")
const Assessment = require("../model/assessments");
const TeacherCourseSection = require("../model/teacher_course_section")

router.post('/uploadassessment', verify, async(req,res,next) => {
  console.log("i am in uploading");
  console.log("user id in course is "+ req.body.user_id);
  console.log("user type in course is "+req.body.type);
  // finding course id
  console.log("c_name"+req.body.course_name);
  var course_id = await Course.findOne({c_name:req.body.course_name});

  // console.log("course "+course_id);
  var c_id = course_id._id;
  // console.log("c_id is"+c_id + "section"+req.body.section);

  var date = new Date().toDateString();


//  if(req.body.type=== "Teacher"){

  const tcsObj = await TeacherCourseSection.findOne({ teacher_id: req.body.user_id, course_id: c_id, section: req.body.section}); 
  
  console.log("cts is content is"+ req.body.content);
       const assessment = new Assessment({
        
         type: req.body.type,
         cts_id:tcsObj._id,
         content: req.body.content,
         difficulty_level: req.body.difficulty_level,
         posted_on: date,
         due_date: req.body.due_date,
         weightage: req.body.weightage,
         assessment_name:"quiz-1"
         
       });
       console.log(assessment);
       try {
         //saved the new user to database
         const savedAssessment = await assessment.save();
         console.log("1 document of 'upload assessment' inserted");

         res.status(200).json(savedAssessment);
       } catch (err) {
         res.status(400).send(err);
       }
     }
//}
)
 




module.exports = router;