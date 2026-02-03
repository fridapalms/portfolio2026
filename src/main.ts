import { Project } from "./models/Project";
import "./style.scss";

const innekatt: Project = new Project("Innekatt", "I designed this webshop in Figma and developed it using HTML, SCSS and TypeScript", "/innekatt.png", "https://github.com/fridapalms/innekatt-webshop.git", "https://fridapalms-innekatt.vercel.app/");
const coffeeshop: Project = new Project("Coffeeshop", "Group project from JavaScript course at Medieinstitutet, creating a webshop", "/coffeeshop.png", "https://github.com/fridapalms/coffee-webshop.git", "https://fridapalms-coffeeshop.vercel.app/");
const moviefinder: Project = new Project("Movie Finder", "Using OMDB API, search for movies, read about them and add them to your watchlist", "/moviefinder.png", "https://github.com/fridapalms/movie-finder.git", "https://fridapalms-movie-finder.vercel.app");
const todolist: Project = new Project("To do-list", "Assignment from JavaScript course at Medieinstitutet, creating a to do-list", "/todolist.png", "https://github.com/fridapalms/the-todos.git", "https://fridapalms.github.io/the-todos/");

const projects: Project[] = [innekatt, coffeeshop, moviefinder, todolist];

projects.forEach((project) => {
  const work = document.getElementById("workprojects");

  if (work) {
    //skapa
    const projectcard = document.createElement("div");
    const infosection = document.createElement("div");
    const imagesection = document.createElement("div");
    const h4 = document.createElement("h4");
    const info = document.createElement("p");
    const image = document.createElement("img");
    const navigation = document.createElement("div");
    const button1 = document.createElement("a");
    const button2 = document.createElement("a");

    //ändra
    projectcard.className = "project";
    infosection.className = "infosection";
    imagesection.className = "imagesection";
    h4.innerHTML = project.headline;
    info.className = "info";
    info.innerHTML = project.info;
    image.className = "project-img";
    image.src = project.image;
    navigation.className = "project-nav";
    button1.className = "pinkbtn";
    button1.innerHTML = "GITHUB REPO";
    button1.href = project.ghlink;
    button1.target = "_blank";
    button2.className = "pinkbtn";
    button2.innerHTML = "LIVE DEMO";
    button2.href = project.demolink;
    button2.target = "_blank";

    //placera
    work.appendChild(projectcard);
    projectcard.appendChild(infosection);
    infosection.appendChild(h4);
    infosection.appendChild(info);
    projectcard.appendChild(imagesection);
    imagesection.appendChild(image);
    imagesection.appendChild(navigation);
    navigation.appendChild(button1);
    navigation.appendChild(button2);
  }
});
