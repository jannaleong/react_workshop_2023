import ProjectItem from "../Components/ProjectItem";
import "./Projects.module.css";

function Projects() {
  return (
    <section>
      <h1>My Projects</h1>
      <ProjectItem
        key="m1"
        id="m1"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
        title="This is a first meetup"
        description="This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
      />

      <ProjectItem
        key="m2"
        id="m2"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
        title="This is a second meetup"
        description="This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
      />
    </section>
  );
}

export default Projects;
