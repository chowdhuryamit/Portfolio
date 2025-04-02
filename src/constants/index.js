import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    devops,
    dsa,
    backend1,
    doceasy,
    nitashopi,
    blog,
    frontend1,
    github,
    mysql,
    cpp,
    codechef,
    codeforces,
    gfg,
    leetcode
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id:"tech",
      title:"Technologies"
    },
    {
      id:"projects",
      title:"Projects"
    },
    {
      id:'achievements',
      title:"Achievements"
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer(FullStack)",
      icon: web,
    },
    {
      title: "Problem Solver(DSA)",
      icon: mobile,
    },
    {
      title: "Backend Developer(NodeJs)",
      icon: backend,
    },
    {
      title: "Frontend Developer(ReactJs)",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "GitHub",
      icon: github,
    },
    {
      name: "mysql",
      icon: mysql
    },
    {
      name: "c++",
      icon: cpp
    }
  ];
  
  const experiences = [
    {
      title: "Problem Solving",
      company_name: "DSA",
      icon: dsa,
      iconBg: "#383E56",
      date: "C++ , JavaScript",
      points: [
        "I have solved 700+ questions on LeetCode and 150+ questions on GeeksforGeeks, strengthening my problem-solving skills.",
        "I have a strong grasp of Data Structures and Algorithms (DSA), including topics like dynamic programming, graphs, trees, and recursion.",
        "I actively participate in coding challenges to enhance my analytical thinking.",
        " My focus is on writing optimized and scalable solutions to tackle real-world problems efficiently.🚀",
      ],
    },
    {
      title: "Frontend Development",
      company_name: "ReactJs",
      icon: frontend1,
      iconBg: "#E6DEDD",
      date: "React , React Libraries",
      points: [
        "I have a strong understanding of React.js and its ecosystem, including libraries like Context API, Redux Toolkit, React Router DOM, and more.",
        "I specialize in building interactive and responsive frontend applications with optimized state management.",
        "My expertise includes creating dynamic UI components, handling API integrations, and improving performance.",
        "I focus on writing clean, scalable, and maintainable React code for seamless user experiences.🚀",
      ],
    },
    {
      title: "Backend Development",
      company_name: "Nodejs",
      icon: backend1,
      iconBg: "#383E56",
      date: "Expess, MongoDB, Multer",
      points: [
        "I have a solid foundation in backend development, working with technologies like Node.js and Express.js to build scalable and efficient server-side applications.",
        "I have hands-on experience with Multer for file uploads, Bcrypt for authentication, JWT (JSON Web Tokens) for secure authorization, and Cookie-based authentication.",
        "Additionally, I have implemented email services using Nodemailer and built RESTful APIs for seamless client-server communication.",
        " My focus is on creating secure, high-performance, and well-structured backend systems. 🚀",
      ],
    },
    {
      title: "Containerization & Cloud Storage",
      company_name: "DevOps",
      icon: devops,
      iconBg: "#E6DEDD",
      date: "Docker , Cloudinary",
      points: [
        " have experience working with Docker to containerize applications, ensuring a consistent and scalable deployment environment.",
        "I am proficient in using third-party storage solutions like Cloudinary for handling and optimizing static assets such as images and videos.",
        "My expertise includes integrating cloud-based storage into applications for efficient media management.",
        "I focus on building scalable, secure, and high-performance solutions with modern cloud technologies.🚀",
      ],
    },
  ];
  
  const achievements = [
    {
      id: 1,
      text: "3 ⭐ on CodeChef | Secured global Rank 20th in Starters 113 Div 4 (Rated)",
      link: "https://www.codechef.com/users/camit8546",
      icon: codechef,
    },
    {
      id: 2,
      text: "🏆 I have competed in Codeforces Round 918 (Div. 4) and gained +107 rating points taking place 4166",
      link: "https://codeforces.com/bestRatingChanges/12232251",
      icon: codeforces,
    },
    {
      id: 3,
      text: "3 ⭐ on GeegksForGeeks | Secured rank 256 on GfG Weekly - 199 [Rated Contest] | Global rank 4742",
      link: "https://www.geeksforgeeks.org/user/camitztex/",
      icon: gfg,
    },
    {
      id: 4,
      text: "💡 700+ questions solved on Leetcode.Max rating 1567.Secured rank 6090 on weekly contest 391",
      link: "https://leetcode.com/u/camit8546/",
      icon: leetcode,
    },
    {
      id: 5,
      text: "🐳20 Repos on Github and total 199 contributions.Constantly building,learning,pushing code to create impactful projects",
      link: "https://github.com/chowdhuryamit?tab=stars",
      icon: github,
    }
  ];  
  
  const projects = [
    {
      name: "DocEasy",
      description:
        "A web-based platform that allows users to search for doctors, book appointments, and manage their medical consultations seamlessly. Doctors can efficiently manage their appointments, ensuring better workflow and patient care. An admin panel provides complete control over the platform, allowing administrators to manage users, doctors, and appointments for smooth operations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "cloudinary",
          color: "orange-text-gradient"
        }
      ],
      image: doceasy,
      source_code_link: "https://github.com/chowdhuryamit/DocEasy",
    },
    {
      name: "NITA-SHOPI",
      description:
        "A web-based platform designed for college students to buy and sell unused products within their campus community. Students can list items for sale, browse available products, and connect with buyers or sellers effortlessly. Each listing includes product details and seller information, ensuring transparency. The platform provides a secure and convenient marketplace, making it easy for students to find affordable items while reducing waste.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "cloudinary",
          color: "orange-text-gradient"
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: nitashopi,
      source_code_link: "https://github.com/chowdhuryamit/NITA-Shopi",
    },
    {
      name: "Bloging Website",
      description:
        "A web-based platform where users can register, write, and publish blogs, while others can comment and engage with the content. Each blog displays the author's name, ensuring proper attribution. Users can also log out securely, and the platform provides a seamless and interactive blogging experience. Additionally, users can edit or delete their own blogs, maintaining full control over their content.",
      tags: [
        {
          name: "nodejs",
          color: "orange-text-gradient",
        },
        {
          name: "ejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient"
        }
      ],
      image: blog,
      source_code_link: "https://github.com/chowdhuryamit/Bloging-application-nodejs-project-",
    },
  ];
  
  export { services, technologies, experiences, achievements, projects };