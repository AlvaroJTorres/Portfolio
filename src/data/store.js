import CriticsImage from "../images/Critics.png";
import RecipesListImage from "../images/Recipelist.png";
import ExpensableImage from "../images/Expensable.png";

export const STORE = [
  {
    title: "Critics",
    image: CriticsImage,
    tags: ["Ruby on Rails", "erb", "css"],
    description:
      "App for rating and reviewing games and publisher companies, built on Ruby on Rails",
    deploy_link: "https://critics-app.herokuapp.com/",
    deploy_icon:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQGmNZMDOpmMQg/company-logo_200_200/0/1519905610801?e=2159024400&v=beta&t=D5lu9rTbQ_aW1ubme8GIq_QhKIm8WTiXTtoBlEHPcA8",
    repo_link: "https://github.com/AlvaroJTorres/Critics",
  },
  {
    title: "Recipes List",
    image: RecipesListImage,
    tags: ["Ruby on Rails", "React", "Tailwindcss"],
    description:
      "App for searching and publishing food recipes, built on Ruby on Rails using ReactJS for the frontend",
    deploy_link: "https://recipes-list-v1.herokuapp.com/",
    deploy_icon:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQGmNZMDOpmMQg/company-logo_200_200/0/1519905610801?e=2159024400&v=beta&t=D5lu9rTbQ_aW1ubme8GIq_QhKIm8WTiXTtoBlEHPcA8",
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
