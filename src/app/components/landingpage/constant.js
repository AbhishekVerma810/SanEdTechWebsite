// src/app/components/landingpage/constants.js
export const femaleData = {
  title: "Female Courses",
  subTitle: "Courses for Women",
  image: "female.svg",
  count: 50,
  totalCount: 250,
  list: [
    { id: 51, name: "Women in Technology" },
    { id: 52, name: "Empowering Women Entrepreneurs" },
    { id: 53, name: "Leadership Skills for Women" },
    { id: 54, name: "Digital Marketing for Women" },
    { id: 55, name: "Data Science for Women" },
    { id: 56, name: "Women in Leadership" },
    { id: 57, name: "Coding for Women" },
  ],
};

export const menData = {
  title: "Male Courses",
  subTitle: "Courses for Men",
  image: "men.svg",
  count: 100,
  totalCount: 250,
  list: [
    { id: 101, name: "Introduction to Programming" },
    { id: 102, name: "Advanced Web Development" },
    { id: 103, name: "Entrepreneurship Skills for Men" },
    { id: 104, name: "Data Science and AI" },
    { id: 105, name: "Project Management Basics" },
    { id: 106, name: "Personal Finance for Men" },
    { id: 107, name: "Marketing Strategies" },
  ],
};

export const studentData = {
  femaleCourses: femaleData,
  maleCourses: menData,
};

export const accordionsData = [
  {
    title: "How do I enroll in a course?",
    section:
      "To enroll in a course, browse through our course catalog, select the course you're interested in, and click the 'Enroll' button. You can complete the payment process online to start learning immediately.",
    id: "01",
  },
  {
    title: "Can I access the courses on mobile devices?",
    section:
      "Yes, all our courses are mobile-friendly and can be accessed on any device, including smartphones and tablets, through our app or web platform.",
    id: "02",
  },
  {
    title: "Do I get a certificate after completing a course?",
    section:
      "Yes, upon successfully completing a course, you will receive a digitally verified certificate that you can share on your resume or LinkedIn profile.",
    id: "03",
  },
  {
    title: "What is the refund policy for purchased courses?",
    section:
      "We offer a 7-day refund policy for courses. If you're not satisfied, you can request a refund within 7 days of purchase, provided you haven't completed more than 20% of the course content.",
    id: "04",
  },
  {
    title: "Can I interact with instructors during the course?",
    section:
      "Yes, our platform allows you to interact with instructors through discussion forums, live sessions, and Q&A sections for personalized guidance and support.",
    id: "05",
  },
];

export const courseData = {
  title: "Available Courses",
  subTitle: "Explore a wide range of courses",
  image: "courses.svg",
  count: 150,
  totalCount: 500,
  list: [
    ...femaleData.list,
    ...menData.list,
  ],
};