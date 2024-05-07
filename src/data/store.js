import React from "react";
import CriticsImage from "../assets/portfolio/Critics.png";
import RecipesListImage from "../assets/portfolio/Recipelist.png";
import ExpensableImage from "../assets/portfolio/Expensable.png";
import ReservationsApiImage from "../assets/portfolio/ReservationsAPI.jpg";
import StoreImage from "../assets/portfolio/Store.png";
import DiscoverBarranquillaImage from  "../assets/portfolio/DiscoverBarranquilla.jpg"
import EarthquakeDataImage from "../assets/portfolio/EarthquakeData.jpg"
import StudentAPIImage from "../assets/portfolio/StudentAPI.png"
import { FaChalkboardTeacher, FaReact } from "react-icons/fa";
import { DiRuby } from "react-icons/di";

export const portfolio = [
  {
    title: "ReservationsApi",
    image: ReservationsApiImage,
    tags: ["API", "Trailblazer", "Doorkeeper", "Docker", "Rspec", "Swagger"],
    description:
      "API that simulates the management of a restaurant chain, assinging managers, managing calendars and simulating customer reservations",
    deploy_link:
      "https://reservationsapi-production.up.railway.app/api-docs/index.html",
    deploy_icon: "https://railway.app/brand/logo-dark.svg",
    deploy_status: false,
    repo_link: "https://github.com/AlvaroJTorres/reservations_api",
  },
  {
    title: "Store",
    image: StoreImage,
    tags: ["Ruby on Rails", "Stripe", "Doorkeeper", "Docker", "Rspec"],
    description:
      "App that simulates online shopping in a candy store, includes Stripe API to simulate credit card transaction and a API only functionality",
    deploy_link: "https://rails-2gd8.onrender.com/",
    deploy_icon: 
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWvUeHYyK0QKh9T_Bg34MDIkfEfNcCCMhVcnwG0z8mtDxJQULT",
    deploy_status: false,
    repo_link: "https://github.com/AlvaroJTorres/Store",
  },
  {
    title: "Critics",
    image: CriticsImage,
    tags: ["Ruby on Rails", "erb", "css"],
    description:
      "App for rating and reviewing games and publisher companies, built on Ruby on Rails",
    deploy_link: "https://critics-production.up.railway.app/",
    deploy_icon: "https://railway.app/brand/logo-dark.svg",
    deploy_status: false,
    repo_link: "https://github.com/AlvaroJTorres/Critics",
  },
  {
    title: "Recipes List",
    image: RecipesListImage,
    tags: ["Ruby on Rails", "React", "Tailwindcss"],
    description:
      "App for searching and publishing food recipes, built on Ruby on Rails using ReactJS for the frontend",
    deploy_link: "https://recipes-list-production.up.railway.app/",
    deploy_icon: "https://railway.app/brand/logo-dark.svg",
    deploy_status: false,
    repo_link: "https://github.com/AlvaroJTorres/Recipes-List",
  },
  {
    title: "Expensable",
    image: ExpensableImage,
    tags: ["React", "Tailwindcss"],
    description:
      "App for organize incomes and expenses by monthly basis, built on ReactJS",
    deploy_link: "https://expensable.netlify.app/",
    deploy_icon:
      "https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png",
    deploy_status: true,
    repo_link: "https://github.com/AlvaroJTorres/Expensable",
  },
  {
    title: "Discover Barranquilla",
    image: DiscoverBarranquillaImage,
    tags: ["React", "Tailwindcss"],
    description:
      "App",
    deploy_link: "",
    deploy_icon:
      "",
    deploy_status: false,
    repo_link: "https://github.com/AlvaroJTorres/Discover-Barranquilla",
  },
  {
    title: "Earthquake Data",
    image: EarthquakeDataImage,
    tags: ["Ruby on Rails", "React", "Bootstrap", "PostgreSQL"],
    description:
      "App",
    deploy_link: "",
    deploy_icon:
      "",
    deploy_status: false,
    repo_link: "https://github.com/AlvaroJTorres/earthquake_data",
  },
  {
    title: "Student API",
    image: StudentAPIImage,
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    description:
      "App",
    deploy_link: "",
    deploy_icon:
      "",
    deploy_status: false,
    repo_link: "https://github.com/AlvaroJTorres/SpringAPITest",
  },
];

export const experience = [
  {
    title: 'Programming Instructor',
    workplace: 'Crack The Code',
    location: 'Lima, PE',
    description: "Teaching virtual courses on coding and web application development for children and young learners.",
    duration: 'ago 2023 - current',
    icon: React.createElement(FaChalkboardTeacher)
  },
  {
    title: 'Full Stack Web Developer (React, NodeJs)',
    workplace: 'Holinsys',
    location: 'Lima, PE',
    description: "Developing customizable and dynamic frontend components using React and integrating API connections while contributing to the development of new modules for a logistics request handling API in Node.js with TypeScript.",
    duration: 'ago 2023 - dec 2023',
    icon: React.createElement(FaReact)
  },
  {
    title: 'Back End Developer (Ruby on Rails, PostgreSQL, Docker)',
    workplace: 'Applaudo',
    location: 'San Salvador, SV',
    description: "Developing and managing API endpoints with Service Objects and the Trailblazer framework, handling OAuth 2.0 authorization with Doorkeeper and Pundit, implementing Docker containers for application development.",
    duration: 'jun 2022 - may 2023',
    icon: React.createElement(DiRuby)
  },
]