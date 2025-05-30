import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Weather-App",
    description: "A weather app using React and TailwindCss",
    image: "/Projects/weather-app.png",
    tags: ["React", "TailwindCss", "Openweathermap Api"],
    url: "https://abhijithkrishna2001.github.io/weather-app/",
    githubUrl: "https://github.com/Abhijithkrishna2001/weather-app",
  },
  {
    id: 2,
    title: "Todo-App",
    description:
      "A basic task management app that helps users keep track of their daily tasks easily.",
    image: "/Projects/todo-app.png",
    tags: ["React"],
    url: "https://abhijithkrishna2001.github.io/Todo-App/",
    githubUrl: "https://github.com/Abhijithkrishna2001/Todo-App",
  },
  {
    id: 3,
    title: "Login Page",
    description: "A single-page login form built with HTML and CSS",
    image: "/Projects/loginpage.png",
    tags: ["HTML", "Css"],
    url: "https://abhijithkrishna2001.github.io/HTML-AND-CSS-PROJECT/",
    githubUrl: "https://github.com/Abhijithkrishna2001/HTML-AND-CSS-PROJECT",
  },
  {
    id: 4,
    title: "Bavana-Studio",
    description:
      "A clone of the Bavana Studio website, created to practice front-end design and development skills",
    image: "/Projects/studio.png",
    tags: ["HTML", "Css", "JavaScript", "Bootstrap"],
    url: "https://abhijithkrishna2001.github.io/Bhavana-Studio/",
    githubUrl: "https://github.com/Abhijithkrishna2001/Bhavana-Studio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4  relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My<span className="text-primary"> Work</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was carefully built to
          practice and improve my skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag}   className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.url}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={"https://github.com/Abhijithkrishna2001"}
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
