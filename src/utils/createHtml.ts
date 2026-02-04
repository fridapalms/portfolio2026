import { projects } from "../data/myProjects";

export const createHtml = () => {
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
      button1.innerHTML = "GITHUB";
      button1.href = project.ghlink;
      button1.target = "_blank";
      button2.className = "pinkbtn";
      button2.innerHTML = "DEMO";
      button2.href = project.demolink;
      button2.target = "_blank";

      if (project.headline === "Innekatt") {
        const button3 = document.createElement("a");
        button3.className = "pinkbtn";
        button3.innerHTML = "FIGMA";
        button3.href = project.figmalink;
        button3.target = "_blank";
        navigation.appendChild(button3);
      }

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
};
