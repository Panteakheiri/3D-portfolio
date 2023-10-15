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
    git,
    ecommerce,
    threeD,
    dashboard,
    threejs,
    cosmetic,
    portfolio,
    admin,
    sass,
    mui,
    swiperjs
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React js Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Material Ui",
      icon: mui,
    },
    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "Swiper Js",
      icon: swiperjs,
    },
   
  ];
  
  const experiences = [
    {
      title: "Ecommerce Website",
      company_name: "self-employed",
      icon: ecommerce,
      iconBg: "#383E56",
      date: "august 2023",
      points: [
        "developed with react js and used pure css for styling.",
        "including login and sign up with validation, product detail ,shopping cart and check out pages.",
        "using some libraries like swiper.js ,react-compare-image , framer motion for better style."
      ],
    },
    {
      title: "Admin Dashboard",
      company_name: "self-employed",
      icon: dashboard,
      iconBg: "#E6DEDD",
      date: "september 2023",
      points: [
        "develped with react js and material ui for styling.",
        "including dark/light theme, charts, calendar, form, FAQ, contacts & ...",
        "using nivochart, fullcalendar, react pro sidebar, formik and yup for form (validated), react-router-dom(SPA)."
      ],
    },
    {
      title: "3D portfolio",
      company_name: "self-employed",
      icon: threeD,
      iconBg: "#383E56",
      date: "October 2023",
      points: [
        "developed with react.js and used tailwind css framwork for style.",
        "using three.js library for dynamic 3d models.",
        "using framer motion for animations, maath, react-tilt and react vertical timeline component. "
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ecommerce website",
      description:
        "this cosmetic website has the ability to filter products and to show the most related items.login and signup form are validated.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "pure css",
          color: "green-text-gradient",
        },
        {
          name: "swiper js",
          color: "pink-text-gradient",
        },
      ],
      image: cosmetic,
      source_code_link: "https://github.com/Panteakheiri/ecommerce-website",
      netlify_link: "https://eccomerce-pantea.netlify.app/"
    },
    {
      name: "Dashboard",
      description:
        "admin panel dashboard that uses data grid and variable charts to manage tasks.it also has form and calendar.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Material Ui",
          color: "green-text-gradient",
        },
        {
          name: "formik",
          color: "pink-text-gradient",
        },
      ],
      image: admin,
      source_code_link: "https://github.com/Panteakheiri/dashboard",
      netlify_link: "https://dashboard-pantea.netlify.app"
    },
    {
      name: "3D portfolio",
      description:
        "this professional portfolio is 3d and has used three js library for this visual effects.it contains my most important projects.",
      tags: [
        {
          name: "react js",
          color: "blue-text-gradient",
        },
        {
          name: "three js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Panteakheiri/3D-portfolio",
      netlify_link:"#"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };