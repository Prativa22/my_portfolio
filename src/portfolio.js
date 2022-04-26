const greeting = {
  title: "Prativa Sahoo",
  logo_name: "Prativa Sahoo",
  nickname: "Front end Developer",
  subTitle:
    "A passionate individual who always thrives to work on both client side and server of application to develop sustainable and scalable fully functional PWA.",
  resumeLink:
    "https://docs.google.com/document/d/14H7ntwQQVGwA2AuoPH671quYGN3KwidN/edit?usp=sharing&ouid=109087560830997103475&rtpof=true&sd=true",
  portfolio_repository: "https://github.com/Prativa22",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Prativa22",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prativa-sahoo-725a93233/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:prativa.s@myitjobmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/vikash.patel.37454/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/uniquevikash/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const degrees = {
  degrees: [
    {
      title: "silicon Institute of Technology",
      subtitle: "Master in Computer Application",
      logo_path: "silicon_u.png",
      alt_name: "Silicon",
      duration: "2011 - 2014",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://silicon.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "MERN Bootcamp",
    //   subtitle: "- Hitesh Choudhary",
    //   logo_path: "lco_logo.png",
    //   certificate_link:
    //     "https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/50332/3536377_50332.pdf?1617907530",
    //   alt_name: "Learn Code Online",
    //   color_code: "#8C151599",
    // },
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle: "- Quincy Larson",
      logo_path: "freeCodeCamp_logo.svg",
      certificate_link:
        "https://freecodecamp.org/certification/PrativaSahoo/javascript-algorithms-and-data-structures",
      alt_name: "Free Code Camp",
      color_code: "#00000099",
    },
    {
      title: "Front End Libraries",
      subtitle: "- Quincy Larson",
      logo_path: "freeCodeCamp_logo.svg",
      certificate_link:
        "https://freecodecamp.org/certification/PrativaSahoo/front-end-development-librariess",
      alt_name: "freeCodeCamp.org",
      color_code: "#0C9D5899",
    },
    {
      title: "Responsive Web Design",
      subtitle: "- Quincy Larson",
      logo_path: "freeCodeCamp_logo.svg",
      certificate_link:
        "https://freecodecamp.org/certification/PrativaSahoo/responsive-web-design",
      alt_name: "freeCodeCamp.org",
      color_code: "#1F70C199",
    },
    // {
    //   title: "Modern Javascript",
    //   subtitle: "- EdYoda Digital University, Qaifi Khan",
    //   logo_path: "udemy_icon.svg",
    //   certificate_link:
    //     "https://www.udemy.com/certificate/UC-274f04a9-1ce5-4b0f-930f-00043151e559/",
    //   alt_name: "Udemy",
    //   color_code: "#D83B0199",
    // },
    {
      title: "Complete Responsive Web Development",
      subtitle: "- Udemy",
      logo_path: "udemy_icon.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-02b129db-2a15-46d8-aae1-6468088df7ac/",
      alt_name: "Creative Online School",
      color_code: "#1F70C199",
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create React web app projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Irving,Texas",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "/",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 614-526-4821",
  },
};

export {
  greeting,
  socialMediaLinks,
  degrees,
  certifications,
  projectsHeader,
  contactPageData,
};
