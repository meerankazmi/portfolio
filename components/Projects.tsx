import Card from "./Card";

export default function Projects() {
  const projectsArray = [
    {
      id: 93029,
      imageUrl: "/img/WorkRemote.png",
      title: "WorkRemote",
      technologies: ["React", "Node", "SQLite3"],
      url: "https://workremote.herokuapp.com/",
    },
    {
      id: 34365,
      imageUrl: "/img/Apex Tracker.png",
      title: "Apex Tracker(try RmLyz)",
      technologies: ["Vue", "Node"],
      url: "https://dry-refuge-70781.herokuapp.com",
    },
    {
      id: 238478,
      imageUrl: "/img/Photophile.png",
      title: "Photophile",
      technologies: ["HTML", "CSS", "JS"],
      url: "https://photophile.netlify.app/",
    },
  ];

  return (
    <div>
      <div
        id="projects"
        style={{ height: "90vh" }}
        className="grid place-items-center"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-semibold text-primary-light">
            Projects
          </h1>
          <div className="flex flex-row items-center justify-between mt-20">
            {projectsArray.map((el) => {
              return (
                <Card
                  key={el.id}
                  title={el.title}
                  technologies={el.technologies}
                  imageUrl={el.imageUrl}
                  url={el.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
