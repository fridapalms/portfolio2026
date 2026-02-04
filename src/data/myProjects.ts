import { Project } from "../models/Project";

const innekatt: Project = new Project("Innekatt", "I designed this webshop in Figma and developed it using HTML, SCSS and TypeScript", "/innekatt.png", "https://github.com/fridapalms/innekatt-webshop.git", "https://fridapalms-innekatt.vercel.app/", "https://www.figma.com/design/ZpVxzqIwMQTSQMdiOtaWx2/Innekatt-webbshop?node-id=10-956&t=NLOrtOFBl8kKfypF-1");
const coffeeshop: Project = new Project("Coffeeshop", "Group project from JavaScript course at Medieinstitutet, creating a webshop", "/coffeeshop.png", "https://github.com/fridapalms/coffee-webshop.git", "https://fridapalms-coffeeshop.vercel.app/", "#");
const moviefinder: Project = new Project("Movie Finder", "Using OMDB API, search for movies, read about them and add them to your watchlist", "/moviefinder.png", "https://github.com/fridapalms/movie-finder.git", "https://fridapalms-movie-finder.vercel.app", "#");
const todolist: Project = new Project("To do-list", "Assignment from JavaScript course at Medieinstitutet, creating a to do-list", "/todolist.png", "https://github.com/fridapalms/the-todos.git", "https://fridapalms.github.io/the-todos/", "#");

export const projects: Project[] = [innekatt, coffeeshop, moviefinder, todolist];
