import styled from "styled-components";
import { useState } from "react";
import { Button } from "@mui/material";
import { DestinationData } from "./DestinationData";
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
`;
const Form = styled.div`
  position: relative;
  padding: 32px;
  border-radius: 13px;
  width: 100%;
  max-width: 640px;
  background-color: #fff;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
  form {
    text
  }
  .Close {
    position: absolute;
    top: 16px;
    right: 16px;
    text-align: center;
    color: rgb(249, 249, 249);
    text-transform: none;
    background: rgb(73, 138, 244);
  }
`;

export const DestionationForm = (props) => {
  return props.trigger ? (
    <>
      <Container>
        <Form>
          {DestinationData.map((data) => {
            return (
              <>
                <h3>{data.title + " Travel Form"}</h3>
                <form className="form" onSubmit={handleSubmit}>
                  <Toaster />

                  <div className="placeholder_wrapper">
                    <h2 className="studentProfile">Student Profile</h2>

                    <div className="desc1">
                      <p>
                        The name and photo associated with your Google account
                        will be recorded when you upload files and submit this
                        form. Your email is not part of your response.
                      </p>
                    </div>

                    <div className="forInput">
                      <label>Student Number</label>
                      <p className="nameFormat">
                        <small>Format: XXXX-XXXXX </small>
                      </p>
                      <input
                        placeholder="Student Number"
                        value={studentNumber}
                        onChange={(e) => setstudentNumber(e.target.value)}
                        type="text"
                        pattern="^[0-9\d-]+$"
                        required
                      />
                    </div>
                    <div className="forInput">
                      <label>Email</label>
                      <p className="nameFormat">
                        <small>Format: ____@plm.edu.ph</small>
                      </p>
                      <input
                        placeholder="Email"
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        pattern="^.*@plm.edu.ph$"
                        required
                      />
                    </div>

                    <div className="forInput">
                      <label>First Name</label>
                      <p className="nameFormat">
                        <small>Input your first name</small>
                      </p>
                      <input
                        placeholder="Name"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="forInput">
                      <label>Last Name</label>
                      <p className="nameFormat">
                        <small>Input your last name</small>
                      </p>
                      <input
                        placeholder="Name"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="forInput">
                      <label>Contact Number</label>
                      <p className="nameFormat">
                        <small>Format: 09XX XXX XXXX</small>
                      </p>
                      <input
                        placeholder="Contact Number"
                        value={contactNumber}
                        onChange={(e) => setcontactNumber(e.target.value)}
                        type="text"
                        pattern="^[0-9\d-\s]+$"
                        required
                      />
                    </div>

                    <div className="forInput">
                      <label>Current College</label>

                      <select
                        placeholder="Current College"
                        value={currentCollege}
                        onChange={(e) => setcurrentCollege(e.target.value)}
                        required
                      >
                        <option value="">
                          What College are you currently in?
                        </option>
                        <option value="College of Architecture and Urban Planning">
                          College of Architecture and Urban Planning
                        </option>
                        <option value="College of Education">
                          College of Education
                        </option>
                        <option
                          selected
                          value="College of Engineering and Technology"
                        >
                          College of Engineering and Technology
                        </option>
                        <option value="College of Humanities, Arts, and Social Sciences">
                          College of Humanities, Arts, and Social Sciences
                        </option>
                        <option value="College of Law">College of Law</option>
                        <option value="College of Medicine">
                          College of Medicine
                        </option>
                        <option value="College of Nursing">
                          College of Nursing
                        </option>
                        <option value="College of College of Physical Therapy">
                          College of College of Physical Therapy
                        </option>
                        <option value="College of Science">
                          College of Science
                        </option>
                        <option value="PLM Business School">
                          PLM Business School
                        </option>
                        <option value="PLM School of Government">
                          PLM School of Government
                        </option>
                      </select>
                    </div>

                    <div className="forInput">
                      <label>Current Year Level</label>
                      <select
                        placeholder="Current Year"
                        value={currentYear}
                        onChange={(e) => setcurrentYear(e.target.value)}
                        required
                      >
                        <option value="">
                          What Year Level are you currently in?
                        </option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="5th Year">5th Year</option>
                        <option value="6th Year">6th Year</option>
                        <option value="7th Year">7th Year</option>
                      </select>
                    </div>

                    <div className="forInput">
                      <label>Classification of Concerns</label>
                      <select
                        placeholder=""
                        value={classConcern}
                        // value={ !!classConcern ? {classConcern} : toast.error("Please Identify Classification of Concern")}
                        onChange={(e) => setclassConcern(e.target.value)}
                        required
                      >
                        <option value="">
                          Select the classification of your concern
                        </option>
                        <option value="Grievances">Grievances</option>
                        <option value="Queries">Queries</option>
                        <option value="Suggestions">Suggestions</option>
                      </select>
                    </div>

                    <div className="forInput">
                      <label>Nature of Concerns</label>
                      <select
                        placeholder=""
                        value={natureConcern}
                        onChange={(e) => setnatureConcern(e.target.value)}
                        required
                      >
                        <option value="">
                          Select the nature of your concerns
                        </option>
                        <option value="Academic">Academic</option>
                        <option value="Non-Academic">Non-Academic</option>
                      </select>
                    </div>
                  </div>

                  <div className="forInput">
                    <label>Give a short narrative of your concern</label>
                    <p className="nameFormat">
                      <small>Minimum of 50 characters</small>
                    </p>
                    <textarea
                      placeholder="Message"
                      value={concern}
                      onChange={(e) => setConcern(e.target.value)}
                      minlength="50"
                      required
                    ></textarea>
                  </div>

                  <div className="forInput">
                    <button
                      type="submit"
                      style={{ background: loader ? "#ccc" : "#F4E12F" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <Button
                  className="Close"
                  onClick={() => props.setTrigger(false)}
                >
                  Close
                </Button>
                {props.children}
              </>
            );
          })}
        </Form>
      </Container>
    </>
  ) : (
    ""
  );
};

export default DestionationForm;
