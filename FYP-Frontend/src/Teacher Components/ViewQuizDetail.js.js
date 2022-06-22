import React from "react";
import TeacherMenu from "./TeacherMenu";
import { useState } from 'react';
import { Button } from "react-bootstrap";


const ViewQuizDetail = () => {

    const data = [
        { Quiz_No: "1", weightage: "2%", Difficulty_Level: "Medium",Total_Submissions_Recieved:"34", Posted_On:"2-April-2022", Deadline:	"3-April-2022" },
      ]

      const [quizNumber, setQuizNo] = useState('');

    return (
      <div>
        
        <TeacherMenu />
        <div className="container">
        <h1 style={{ marginTop: "50px", textAlign: "center" }}>QUIZ</h1>

          <div
            class="card border-primary "
            style={{
              marginLeft: "500px",
              width: "400px",
              height: "250px",
              textAlign: "center",
              marginTop: "60px",
            }}
          >
            <div class="card-body">
              <h5 class="card-title"> <strong> Quiz No: </strong> </h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <form>
                  <div class="form-group">
                    <label for="quiz">Enter Quiz number</label>
                    <input
                      type="text"
                      class="form-control"
                      id="quiz"
                      aria-describedby="quizHelp"
                      placeholder="Quiz No."
                      onChange={event => setQuizNo(event.target.value)}
                      value={quizNumber}
                    />
                    <small id="QuizHelp" class="form-text text-muted">
                      Write Quiz no. you want to view data of; e.g 1,2,3,...
                    </small>
                  </div>
                </form>
              </li>
            </ul>
            <div class="card-body">
              <Button >
                <a href=" " style={{color:"white"}}> View</a></Button>
            </div>
          </div>
        </div>

        <div className="container">
          <table
            style={{
              border: "2px solid skyblue",
              width: "800px",
              height: "200px",
              marginTop: "40px",
              marginLeft: "380px",
            }}
          >
            <tr>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Quiz No</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Weightage</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Difficulty Level</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Total Submissions Recieved</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Posted On</strong>
              </th>
              <th
                style={{
                  borderBottom: " 1px solid skyblue",
                  borderRight: "1px solid skyblue",
                  textAlign: "center",
                }}
              >
                <strong>Deadline</strong>
              </th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Quiz_No}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.weightage}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Difficulty_Level}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Total_Submissions_Recieved}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Posted_On}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      borderRight: "1px solid skyblue",
                    }}
                  >
                    {val.Deadline}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        {/* <a href="/teacher-course-details?course_name=OOP" class="btn btn-primary"> VIEW </a> */}
      </div>
    );
}; 
    
export default ViewQuizDetail;
