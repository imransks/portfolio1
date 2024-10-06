import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/assets/viberr.png";
import freshBurger from "../../assets/assets/fresh-burger.png"
import hipsterGlasses from "../../assets/assets/hipsster.png"
import fitlift from "../../assets/assets/fitlift.png"
import ProjectCard from "../../common/ProjectCard";
const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>

        <ProjectCard
        src={viberr} 
        link={"#"} h3="Viberr"
        p="Streaming App"
        />
        <ProjectCard
        src={freshBurger} 
        link={"#"} h3="Fresh Burger"
        p="Restaurant"
        />
        <ProjectCard
        src={hipsterGlasses} 
        link={"#"} h3="Hipster Glasses"
        p="Glasses Shop"
        />
        <ProjectCard
        src={fitlift} 
        link={"#"} h3="FitLift"
        p="Fitness App"
        />

      </div>
    </section>
  );
};

export default Projects;
