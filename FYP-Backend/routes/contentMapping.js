const router = require("express").Router();
const verify = require('./verifyToken');
const Course = require("../model/Course")
const contentMapping = require("../model/ContentMapping");
const TeacherCourseSection = require("../model/teacher_course_section");
const setStudentCourses = require("../model/StudentCourse")

router.post('/add-weekly-breakdown', verify, async(req,res,next) => {
  console.log("user id in break down is "+req.body.user_id);
  console.log("user type in course is "+req.body.course_section + req.body.Week + req.body.Topics_To_Be_Covered);
  // finding course id
  var course_id = await Course.findOne({c_name:req.body.course_name});
  var c_id = course_id._id;

<<<<<<< HEAD
  //finding cts_id
  const tcsObj = await TeacherCourseSection.findOne({ teacher_id: req.body.user_id, course_id: c_id, section: req.body.section}); 


 if(req.post.type=== "Teacher"){
       const mapping = new contentMapping({
        cts_id: tcsObj._id,
         week_no: req.body.week_no,
         topics_to_be_covered: req.body.topics_to_be_covered,
         topic_detail: req.body.topic_detail,
         reading: req.body.reading,
         project_deliverable: req.body.project_deliverable
       });
       console.log(mapping);
       try {
         //saved the new user to database
         const savedContentMapping = await mapping.save();
         res.status(200).json(savedContentMapping);
         console.log("1 document of 'content mapping' inserted");
       } catch (err) {
         res.status(400).send(err);
       }
     }
=======
  const tcsObj = await TeacherCourseSection.findOne({ teacher_id: req.body.user_id, course_id: c_id, section: req.body.course_section}); 

  console.log("id is"+tcsObj._id);
      const mapping = new contentMapping({
      cts_id:tcsObj._id,
      Week: req.body.Week,
      Topics_To_Be_Covered: req.body.Topics_To_Be_Covered,
      Topic_Details: req.body.Topic_Details,
      Reading_From_TextBook: req.body.Reading_From_TextBook,
      Project_Deliverable: req.body.Project_Deliverable
    });
    console.log("mapping is"+mapping);
    try {
      //saved the new user to database
      const savedContentMapping = await mapping.save();
      console.log("1 document of 'content mapping' inserted");
      res.status(200).json(savedContentMapping);
    } catch (err) {
      res.status(400).send(err);
    }
     
>>>>>>> master
})
router.get('/get-weekly-breakdown', verify, async(req,res,next) => {
  // console.log("user id in content mapping is "+req.query.user_id);
  // console.log("name in content mapping is "+  req.query.section);
  

  // console.log("user type in course is "+req.query.type);
  // finding course id
  if(req.query.user_type=="Teacher")
  {
    var course_id = await Course.findOne({c_name:req.query.course_name});
    if(!course_id){
      console.log("No course found");
      }
    var c_id = course_id._id;
  
    const tcsObj = await TeacherCourseSection.findOne({ teacher_id: req.query.user_id, course_id: c_id, section: req.query.section}); 
  
    try{
  
      const content = await contentMapping.find({cts_id:tcsObj._id});
      res.send(content);
    }catch{
      console.log("error in get content");
      res.send("error in get content");
    }
  }
  else{
    var student_course = await setStudentCourses.findOne({course_name:req.query.course_name});
    if(!student_course){
      console.log("No course found");
      }
    var cts_id = student_course.cts_id;
    console.log("course name and id"+student_course.course_name + cts_id)
    try{
  
      const content = await contentMapping.find({cts_id:cts_id});
      res.send(content);
    }catch{
      console.log("error in get content");
      res.send("error in get content");
    }
  }
  

})

// *****************************delete API me route link adjust krna hai..............

router.delete('/delete-weekly-breakdown', verify, async(req, res, next) => {
  try {
    contentMapping.deleteOne({ _id: req.body._id }).then(function() {}).catch(function(error) {});
      res.status(200).send("Post deleted")
  } catch (err) {
      res.status(400).send("Post cant be deleted")
  }
})


// **********************patch API me route link adjust krna hai..............


router.patch('/update-weekly-breakdown', verify, async(req, res, next) => {

  console.log("Id is"+req.body._id);
  contentMapping.findByIdAndUpdate({
      _id: req.body._id
  }, {
      $set: req.body
  }).then(() => {
      res.send({ message: "success" });
  });
})
 



module.exports = router;