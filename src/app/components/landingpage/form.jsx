import React, { useState } from "react";
import Input from "react-phone-number-input/input";

const Form = () => {
  const [gender, setGender] = useState("female"); // Track selected gender
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log({
      gender,
      firstName,
      phoneNumber,
    });
  };

  return (
    <div className="flex flex-col px-4 lg:flex-row items-center lg:justify-between gap-10 w-full max-w-[1280px]">
      <div className="flex flex-col gap-10 w-full max-w-[519px]">
        <h1 className="text-5xl">Why join our E-learning Platform?</h1>
        <p className="text-base text-primary italic">
          Our platform offers a comprehensive learning experience, helping you
          gain new skills and advance your career. Whether you're looking to
          learn a new language, improve your coding skills, or master a
          professional certification, we provide courses for all learning
          levels.
        </p>
        <p className="text-base">
          As a member, you'll have access to high-quality resources, expert
          instructors, and a community of learners who are committed to growing
          and succeeding. Our courses cover a wide range of subjects and are
          designed to be engaging and easy to follow. Join us today and start
          your learning journey!
        </p>
      </div>
      <div className="flex flex-col gap-5 justify-between md:p-14 p-4 bg-itemBackground border border-borderColor rounded-2xl w-full max-w-[640px]">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col lg:flex-row w-full justify-between gap-7">
            <div
              onClick={() => setGender("female")}
              className={`h-16 min-w-[230px] flex justify-center items-center gap-3 py-2 px-14 bg-secondaryBtn border rounded-lg cursor-pointer ${
                gender === "female" ? "bg-primary" : ""
              }`}
            >
              <input
                className="w-6 h-6 custom-radio"
                type="radio"
                name="gender"
                checked={gender === "female"}
              />{" "}
              <span>Female</span>
            </div>
            <div
              onClick={() => setGender("male")}
              className={`h-16 min-w-[230px] flex justify-center items-center gap-3 py-2 px-14 bg-secondaryBtn border rounded-lg cursor-pointer ${
                gender === "male" ? "bg-primary" : ""
              }`}
            >
              <input
                className="w-6 h-6 custom-radio"
                type="radio"
                name="gender"
                checked={gender === "male"}
              />{" "}
              <span>Male</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base">First name</span>
            <input
              className="border bg-secondaryBtn rounded-lg px-6 py-5"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base">Phone number</span>
            <div className="flex justify-start gap-2 px-6 py-5 border bg-secondaryBtn rounded-lg">
              {"+1 "}
              <Input
                className="bg-secondaryBtn w-full border-none focus:outline-none"
                country="US"
                international
                placeholder="201-555-5555"
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary py-5 px-10 rounded-lg text-primaryBtn"
          >
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
