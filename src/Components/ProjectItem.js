//creating projectitem component. a project item component outputs a box with an image, description and title for each project on the project page

import Card from "./Card";
import classes from "./ProjectItem.module.css";

function ProjectItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}></div>
      </Card>
    </li>
  );
}

export default ProjectItem;
