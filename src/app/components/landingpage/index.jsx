"use client";
import { useCallback, useEffect } from "react";
import WaitingList from "./waiting-list";
import Form from "./form";
import Cards from "./cards";
import Faq from "./faq";
import Footer from "./footer";
import VideoThumbnail from "../common/videoThumbnail";
import Input from "react-phone-number-input/input";
import Header from "./header";
import { useTheme } from "next-themes";

const LandingPage = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    console.log({ newTheme });
    handleTheme(newTheme);
  };

  const handleTheme = useCallback(
    (value) => {
      setTheme(value);
      document.querySelector("html")?.setAttribute("data-theme", value);
    },
    [setTheme]
  );

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "dark";
    handleTheme(currentTheme);
  }, [handleTheme]);

  return (
    <div className="bg-background">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <div className="ion-padding ">
        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center justify-center gap-20 w-full max-w-[1280px]">
            <div className="flex flex-col items-center justify-center max-w-[739px] gap-10">
              <div className="px-4 text-center text-wrap">
                <h1 className="text-6xl">
                  Learn and Grow
                  <br /> with Expert-Led Courses
                </h1>
                <p className="text-lg">
                  Unlock your potential with tailored e-learning courses
                  designed to elevate your skills.
                </p>
              </div>
              <div className="w-full flex flex-col gap-1 px-2">
                <span className="text-base">Phone number</span>
                <div className="flex bg-secondaryBtn justify-between h-20 text-lg items-center p-2 rounded-lg">
                  <div className="flex justify-start gap-2 p-4">
                    {"+1 "}{" "}
                    <Input
                      className="bg-secondaryBtn w-full border-none focus:outline-none"
                      country="US"
                      international
                      placeholder="201-555-5555"
                      onChange={() => {}}
                    />
                  </div>
                  <button className="hidden lg:block bg-primary text-primaryBtn rounded-lg py-5 px-10 min-w-[287px]">
                    SUBSCRIBE NOW
                  </button>
                </div>
                <button className="mt-6 bg-primary w-full lg:hidden text-base py-4 px-10 rounded-lg">
                  SUBSCRIBE NOW
                </button>
              </div>
            </div>
            <VideoThumbnail videoId={"LXb3EKWsInQ"} />
            <WaitingList />
            <Form />
            <Cards />
            <Faq />
            <div className="px-4">
              <div className="flex flex-col lg:flex-row justify-between items-center bg-secondaryBtn rounded-2xl gap-10 p-10 w-full max-w-[1280px]">
                <div className="flex flex-col gap-2 justify-center text-left">
                  <h1 className="text-5xl">
                    Start Your Learning Journey Today!
                  </h1>
                  <p className="text-base">
                    Join our e-learning platform and access a world of knowledge
                    tailored to your goals.
                  </p>
                </div>
                <button className="bg-primary text-primaryBtn py-7 leading-5 px-10 w-full text-lg rounded-lg lg:w-[282px]">
                  VIEW COURSES
                </button>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
