import CriticsImage from "../images/Critics.png";
import RecipesListImage from "../images/Recipelist.png";
import ExpensableImage from "../images/Expensable.png";
import ReservationsApiImage from "../images/ReservationsAPI.jpg";

export const STORE = [
  {
    title: "ReservationsApi",
    image: ReservationsApiImage,
    tags: ["API", "Trailblazer", "Doorkeeper", "Docker", "Rspec", "Swagger"],
    description:
      "API that simulates the management of a restaurant chain, assinging managers, managing calendars and simulating customer reservations",
    deploy_link:
      "https://reservationsapi-production.up.railway.app/api-docs/index.html",
    deploy_icon: "https://railway.app/brand/logo-dark.svg",
    repo_link: "https://github.com/AlvaroJTorres/reservations_api",
  },
  {
    title: "Critics",
    image: CriticsImage,
    tags: ["Ruby on Rails", "erb", "css"],
    description:
      "App for rating and reviewing games and publisher companies, built on Ruby on Rails",
    deploy_link: "https://critics-production.up.railway.app/",
    deploy_icon: "https://railway.app/brand/logo-dark.svg",
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
    repo_link: "https://github.com/AlvaroJTorres/Expensable",
  },
];
