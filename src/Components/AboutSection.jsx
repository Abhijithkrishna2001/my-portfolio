import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              I'm a self-learner and passionate front-end developer
            </h3>

            <p className="text-muted-foreground">
              I'm a self-taught front-end developer with a good foundation in
              HTML, CSS, JavaScript, React.js, and Tailwind CSS. I'm organized,
              pay attention to details, and enjoy building clean, functional
              websites. I'm excited to be part of a team where I can keep
              learning and improving my front-end skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Resume.pdf" // Update this with your actual CV path
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h5 className="font-semibold text-lg">Front-End Services</h5>
                  <ul className="text-muted-foreground list-disc list-inside">
                    <li>
                      Building responsive websites with HTML, CSS, and
                      JavaScript
                    </li>
                    <li>Create front-end projects using React.js</li>
                    <li>
                      Styling with Tailwind CSS for clean and modern designs
                    </li>
                    <li>Focused on user-friendly layouts and performance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h5 className="font-semibold text-lg">About Me</h5>
                  <p className="text-muted-foreground">
                    I’m a self-learner who enjoys working on front-end projects,
                    which helps me stay organized and detail-focused. I like
                    solving problems and learning new tools to improve my
                    skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h5 className="font-semibold text-lg">Career Goals</h5>
                  <p className="text-muted-foreground">
                    I’m looking to grow as a front-end developer by working with
                    a team on real-world projects. My goal is to build clean,
                    user-friendly web apps and keep learning new technologies
                    like Next.js or TypeScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
