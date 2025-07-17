import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Meraki",
      description:
        "A simple club membership tracker with full attendance tracking and announcements.",
      tech: ["React", "TypeScript", "Next.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/MomaPuffy/Meraki",
      live: "https://meraki-psi.vercel.app",
      image: "/meraki.png",
    },
    {
      title: "HSI Task Tracker",
      description:
        "A task management application for tracking tasks and projects.",
      tech: ["Node.js", "Express", "MongoDB", "React", "TypeScript"],
      github: "https://github.com/adriandanao-hs/hsi_tasktracker",
      live: "https://hsi-tasktracker.vercel.app",
      image: "/chrono_logo_white.png",
    },
    {
      title: "Personal School Project Portfolio",
      description:
        "A simple compilation of school projects showcasing my skills and interests.",
      tech: ["HTML", "CSS", "PHP"],
      github: "https://github.com/AFDanao/NCP3106_Website",
      live: "https://afdanao.github.io/NCP3106_Website/",
      image: "/pfp.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
      {/* Header */}
      <header className="container mx-auto px-8 py-20 text-center relative">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-pulse delay-75"></div>
        </div>

        <div className="mb-8 animate-fade-in-up relative z-10">
          <div className="relative">
            <Image
              src="/profile.jpg"
              alt="Adrian's Profile Picture"
              width={180}
              height={180}
              className="rounded-full mx-auto border-4 border-white dark:border-slate-600 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4 animate-fade-in-up delay-100">
          Adrian Danao
        </h1>
        <p className="text-2xl text-slate-700 dark:text-slate-200 mb-4 animate-fade-in-up delay-200">
          🚀 Full Stack Developer
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 animate-fade-in-up delay-300">
          Crafting intelligent solutions with code ✨
        </p>
        <div className="flex gap-6 justify-center animate-fade-in-up delay-500 relative z-10">
          <a
            href="https://github.com/adriandanano22"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl hover:from-slate-700 hover:to-slate-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-2">🐙 GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/adrian-danao-91a4ba333/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-2">💼 LinkedIn</span>
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-8 py-20 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              About Me 👨‍💻
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl transition-shadow duration-300">
                <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                  I&apos;m a passionate{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    🎓 BS Computer Engineering student
                  </span>{" "}
                  with a deep focus on{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    🤖 Machine Learning/AI
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    🌐 Web Development
                  </span>
                  .
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200/50 dark:border-purple-500/20">
                <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                  From building neural networks to crafting responsive web
                  applications, I&apos;m constantly exploring how technology can
                  solve real-world problems! 🌟
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">🧠</div>
                <div className="font-semibold">AI/ML</div>
                <div className="text-sm opacity-90">Neural Networks</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">🌐</div>
                <div className="font-semibold">Web Dev</div>
                <div className="text-sm opacity-90">Full Stack</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold">Fast Learner</div>
                <div className="text-sm opacity-90">Always Growing</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold">Problem Solver</div>
                <div className="text-sm opacity-90">Creative Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-8 py-20 bg-gradient-to-r from-slate-50/50 to-blue-50/50 dark:from-slate-900/50 dark:to-purple-900/20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            My Projects 🚀
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mt-4">
            Here are some of my favorite projects I&apos;ve worked on
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20 dark:border-slate-700/50"
            >
              <div className="h-52 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} Image`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-700 dark:to-purple-900/50 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-blue-200/50 dark:border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                  >
                    🐙 GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                  >
                    🚀 Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="container mx-auto px-8 py-20 text-center relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-10 animate-bounce delay-75"></div>
        </div>

        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/50 max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Get In Touch 📬
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            I&apos;m always open to discussing new opportunities and exciting
            projects! ✨
          </p>
          <a
            href="mailto:adrian.danao22@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            📧 Contact Me
          </a>
        </div>
      </footer>
    </div>
  );
}
