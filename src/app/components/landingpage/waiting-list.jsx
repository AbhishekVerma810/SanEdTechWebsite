import React from "react";
import Image from "next/image";
import { courseData, studentData, accordionsData } from "./constant";
const WaitingList = () => {
  return (
    <div className="flex flex-col gap-10 max-w-[1114px] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-10 justify-center w-full">
        <div className="px-4 flex flex-col items-center justify-center max-w-[600px]">
          <div className="text-center justify-center text-wrap flex flex-col gap-3">
            <h2 className="text-lg text-primary">Waiting List</h2>
            <h1 className="text-3xl font-bold">Exclusive E-Learning Awaits!</h1>
            <p className="md:text-justify text-center text-base">
              Join our waiting list to get exclusive access to the next batch of
              personalized e-learning courses. Be the first to experience
              tailored learning paths and advance your skills. Don't miss out —
              sign up now and start your learning journey!
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="w-full px-4 flex flex-col justify-center items-center gap-5">
          <div className="w-full h-3 bg-progressbarBackground rounded-full">
            <div className="h-3 bg-primary rounded-full w-[30%]"></div>
          </div>
          <h1 className="text-5xl font-bold text-primary">150 / 500</h1>
          <h3 className="text-2xl">Students Joined</h3>
        </div>
      </div>

      {/* Courses and Students Section */}
      <div className="flex justify-between py-2 px-4 flex-col lg:flex-row gap-16">
        {/* Courses List */}
        <div className="w-full bg-itemBackground rounded-2xl">
          <div className="flex justify-center items-center gap-2 border-b-2 p-2">
            <Image width={32} height={32} src="/courses.svg" alt="courses" />
            <div className="flex w-full items-center justify-between">
              <div>
                <h1 className="text-3xl">{courseData.title}</h1>
                <h2 className="text-base">{courseData.subTitle}</h2>
              </div>
              <h1 className="text-3xl">
                {courseData.count} / {courseData.totalCount}
              </h1>
            </div>
          </div>
          <ul>
            {courseData.list.map((course) => (
              <li
                key={course.id}
                className="flex items-center gap-4 border-b border-borderColor text-lg py-6 px-4 hover:bg-listHover hover:text-hoverColor"
              >
                <span>{course.id}</span>
                <h4>{course.name}</h4>
              </li>
            ))}
          </ul>
        </div>

        {/* Students List */}
        <div className="w-full bg-itemBackground rounded-2xl">
          <div className="flex justify-center items-center gap-2 border-b-2 p-2">
            <div className="flex w-full items-center justify-between">
              <div>
                <h1 className="text-3xl">{studentData.femaleCourses.title}</h1>
                <h2 className="text-base">
                  {studentData.femaleCourses.subTitle}
                </h2>
              </div>
              <h1 className="text-3xl">
                {studentData.femaleCourses.count} /{" "}
                {studentData.femaleCourses.totalCount}
              </h1>
            </div>
          </div>
          <ul>
            {studentData.femaleCourses.list.map((student) => (
              <li
                key={student.id}
                className="flex items-center gap-4 border-b border-borderColor text-lg py-6 px-4 hover:bg-listHover hover:text-hoverColor"
              >
                <span>{student.id}</span>
                <h4>{student.name}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Invitation Section */}
      <div className="px-4">
        <div className="flex flex-col bg-secondaryBtn lg:flex-row justify-between items-center rounded-2xl gap-10 p-10">
          <div className="flex flex-col gap-2 justify-center text-left">
            <h1 className="text-2xl">
              Hi, Theresa! You're close to joining our exclusive learning
              platform!
            </h1>
            <p className="text-base">
              You're 54th in line, out of 50 people who will be accepted into
              the next batch. Increase your chances of being accepted by
              inviting your friends to join the waiting list!
            </p>
          </div>
          <button className="w-full py-6 leading-5 lg:w-[282px] text-nowrap bg-primary rounded-md text-lg text-primaryBtn">
            ADVANCE POSITION
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitingList;
