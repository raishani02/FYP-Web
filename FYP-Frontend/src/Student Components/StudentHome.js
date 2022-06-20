import React from "react";
import StudentMenu from "./StudentMenu";

function StudentHome() {
  return (
    <div>
      <StudentMenu />
      <div
        style={{
          float: "right",
          height: "100%",
          width: "75%",
          backgroundColor: "lightgray",
        }}
      >
        <img
          src="/images/progress.png"
          alt="progress"
          style={{
            width: "300px",
            height: "200px",
            marginTop: "70px",
            marginLeft: "100px",
          }}
        />

<img
          src="/images/assignments.png"
          alt="dueassignment"
          style={{
            float: "right",
            width: "300px",
            height: "200px",
            marginTop: "70px",
            marginRight: "100px",
          }}
        />

        <img
          src="/images/progress2.png"
          alt="assignmentprogress"
          style={{
            float: "bottom",
            width: "300px",
            height: "200px",
            marginTop: "80px",
            marginLeft: "100px",
          }}
        />

        <img
          src="/images/db.png"
          alt="dueassignment"
          style={{
            float: "right",
            width: "150px",
            height: "200px",
            marginTop: "80px",
            marginRight: "100px",
          }}
        />
        <img
          src="/images/oop.png"
          alt="dueassignment"
          style={{
            float: "right",
            width: "150px",
            height: "200px",
            marginTop: "80px",
            marginRight: "0px",
          }}
        />
      </div>
    </div>
  );
}

export default StudentHome;