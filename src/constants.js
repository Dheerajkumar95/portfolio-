// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import render from "./assets/tech_logo/render.png";
// Experience Section Logo's
import wyreflowlogo from "./assets/company_logo/wyreflowlogo.png";

// Education Section Logo's
import tit from "./assets/education_logo/tit.png";
import bseb from "./assets/education_logo/bseb.png";

// Project Section Logo's
import food from "./assets/work_logo/food.png";
import WhatsApp from "./assets/work_logo/WhatsApp.png";
import exam from "./assets/work_logo/examTestPortal.png";
import dShare from "./assets/work_logo/dShare.jpg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "React Native", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Sass", logo: sassLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Render", logo: render },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: wyreflowlogo,
    role: "Frontend Intern",
    company: "Wyreflow",
    date: "December 2024 - April 2025",
    desc: "Developed a Exam Test-Portal Website. Implemented responsive designs with CSS & JavaScript.",
    skills: ["HTML", "CSS", "Javascript"],
  },
];

export const education = [
  {
    id: 0,
    img: tit,
    school: "TITE College, Bhopal (RGPV University)",
    date: "Sept 2022 - July 2026",
    grade: "7.19 CGPA",
    desc: "I have currently pursuing my  Bachelor's degree (B.Tech) in Computer Science from TITE College, Bhopal. During my time at TITE, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at TITE College has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor in Computer Science - B.Tech",
  },
  {
    id: 1,
    img: bseb,
    school: "BSEB, Bihar",
    date: "Apr 2020 - March 2022",
    grade: "63%",
    desc: "I completed my class 12 education from MPS College, Darbhanga, under the BSEB board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "BSEB(XII) - PCM",
  },
  {
    id: 3,
    img: bseb,
    school: "BSEB, Bihar",
    date: "March 2020",
    grade: "75%",
    desc: "I completed my class 10 education from BSEB, Bihar",
    degree: "BSEB(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Food Ordering Platform",
    description:
      "A Food ordering platform where users can search and select multiple foods, view them in the cart, and place orders. Additional features include creating a new account, login, adding addresses, and notifications for newly added food items.",
    image: food, // yaha apna project ka logo ya default image
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/Dheerajkumar95/newd",
    webapp: "https://restaurants-pbd2.onrender.com",
  },
  {
    id: 1,
    title: "WhatsApp Clone",
    description:
      "A real-time chat application inspired by WhatsApp, featuring secure login, one-to-one messaging, media and text message support, and a chat UI built with React. User data and messages are stored in MongoDB for persistence.",
    image: WhatsApp,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/Dheerajkumar95/chatnew",
    webapp: "https://chatnew-bnsz.onrender.com",
  },
  {
    id: 2,
    title: "Exam Test Portal",
    description:
      "A web-based platform for conducting online quizzes and tests with real-time evaluation. Features include user authentication, section-wise questions with timers, sidebar navigation, tab-switch detection, fullscreen enforcement, cheating prevention, result calculation, and leaderboard ranking.",
    image: exam, // yaha apna project ka logo ya default image
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/Dheerajkumar95/TestPortal",
    webapp: "#", // agar live site nahi hai, ya placeholder
  },
  {
    id: 3,
    title: "DShare",
    description:
      "A full-stack mobile chat application built with React Native and Expo. Users can write and post custom messages in real-time, with authentication, secure storage, and real-time communication implemented using Node.js, Express.js, MongoDB, Socket.io, and JWT.",
    image: dShare, // yaha apna project ka logo ya default image
    tags: [
      "React Native",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/Dheerajkumar95/share",
    webapp: "https://dshare.expo.dev",
  },
];
