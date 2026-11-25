import { useState } from "react";
import heroImage from "./assets/hero.png";

const projects = [
  
{
  number: "01",
  title: "SpeakUp AI",
  category: "Flutter / AI Application",
  description:
    "A Flutter-based AI speaking practice application designed to help users improve their communication skills through interactive speaking experiences.",
  tags: ["Flutter", "Dart", "AI", "Mobile App"],
  github: "https://github.com/chavanyashashree44-prog/SpeakUp-AI",
  demo: "https://chavanyashashree44-prog.github.io/SpeakUp-AI/",
},

  
{
  number: "02",
  title: "Customer Churn Prediction",
  category: "Big Data / Machine Learning",
  description:
    "An interactive customer churn prediction dashboard that analyzes customer data and uses machine learning models to identify customers at risk of leaving.",
  tags: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
  github: "https://github.com/chavanyashashree44-prog/BigData-Customer-Churn",
  demo: "https://bigdata-customer-churn-prediction-yankmrmlr9jbcb5kfocke4.streamlit.app/",
},

  {
  number: "03",
  title: "CampusChain",
  category: "Blockchain / Web Application",
  description:
    "A blockchain-based student attendance management system with role-based access for students, faculty, and administrators.",
  tags: ["React", "Node.js", "Express.js", "MongoDB", "Blockchain"],
  github:
    "https://github.com/chavanyashashree44-prog/CampusChain-Blockchain-Student-Attendance-System",
  demo:
    "https://campus-chain-blockchain-student-att-phi.vercel.app/",
},


{
  number: "04",
  title: "AI Resume Analyzer",
  category: "AI / Career Development",
  description:
    "An AI-powered resume analysis tool that reviews resumes and provides insights to help users improve their resumes for job opportunities.",
  tags: ["AI", "Python", "Resume Analysis", "NLP"],
  github:
    "https://github.com/chavanyashree44-prog/AI-Resume-Analyzer",
  demo:
    "https://ai-resume-analyzer-gamma-five.vercel.app/",
},


{
  number: "05",
  title: "AgroRover Website",
  category: "Web Development / Internship",
  description:
    "An agriculture-focused digital platform developed collaboratively during an internship, using modern web technologies.",
  tags: ["Next.js", "React", "Tailwind CSS"],
  github: "https://github.com/chavanyashashree44-prog/AgroRover-Internship-Project",
  demo: "https://www.agrorover.com/",
},


];

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "Dart", "SQL", "C"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "React.js", "Vite", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    skills: ["Spring Boot", "Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    title: "AI & Generative AI",
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit",
    ],
  },
  {
    title: "Database Management",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "Mobile Development",
    skills: ["Flutter"],
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "MySQL Workbench",
      "Docker",
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      "Object-Oriented Programming (OOP)",
      "Data Structures and Algorithms (DSA)",
      "DBMS",
      "Blockchain",
      "Big Data",
    ],
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumePasswordOpen, setResumePasswordOpen] = useState(false);
  const [resumePassword, setResumePassword] = useState("");
  const [resumePasswordError, setResumePasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const RESUME_PASSWORD = "change-this-password";

const handleResumePasswordSubmit = (event) => {
  event.preventDefault();

  if (resumePassword === RESUME_PASSWORD) {
    window.open("/resume.pdf", "_blank");
    setResumePasswordOpen(false);
    setResumePassword("");
    setResumePasswordError("");
  } else {
    setResumePasswordError("Incorrect password. Please try again.");
  }
};

  const theme = darkMode
    ? {
        page: "bg-[#08080d] text-white",
        surface: "bg-[#11111a]",
        card: "bg-[#11111a] border-white/10",
        muted: "text-gray-400",
        border: "border-white/10",
        nav: "bg-[#08080d]/90 border-white/10",
        input: "bg-white/5 border-white/10 text-white",
      }
    : {
        page: "bg-[#f8f8fc] text-[#171722]",
        surface: "bg-white",
        card: "bg-white border-black/10",
        muted: "text-gray-600",
        border: "border-black/10",
        nav: "bg-white/90 border-black/10",
        input: "bg-white border-black/15 text-gray-900",
      };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${theme.page}`}
    >
      {/* Navigation */}
      <header
        className={`fixed top-0 z-50 w-full border-b backdrop-blur-xl ${theme.nav}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#home"
            className="font-serif text-xl font-bold tracking-wide md:text-2xl"
          >
            YASHASHREECH<span className="text-violet-500">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle light and dark mode"
              className={`flex h-10 w-10 items-center justify-center rounded-full border ${theme.border} transition hover:border-violet-500`}
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            className={`flex flex-col gap-5 border-t px-6 py-6 md:hidden ${theme.border}`}
          >
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <main>
        <section
          id="home"
          className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 pb-16 pt-32 md:flex-row md:px-10 md:pt-24"
        >
          <div className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />

          <div className="w-full animate-fade-up md:w-1/2">
            <p className="mb-5 flex items-center gap-3 text-sm tracking-[0.25em] text-violet-400">
              <span className="h-px w-10 bg-violet-500" />
              ASPIRING AI SOFTWARE DEVELOPER | FULL STACK DEVELOPER
            </p>


          {/* Availability Badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-3 text-sm font-medium text-violet-300">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Available for Internship & Freelance
          </div>

          
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I’m
              <br />
              <span className="text-violet-400">Yashashree</span>
              <br />
              Chavan.
            </h1>

            <p
              className={`mt-7 max-w-xl text-base leading-8 md:text-lg ${theme.muted}`}
            >
              A final-year Computer Science Engineering student passionate about
              AI and software development. I enjoy exploring emerging
              technologies and building meaningful digital products.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-500"
              >
                Explore My Work <span className="ml-2">↗</span>
              </a>

              <button
                  type="button"
                  onClick={() => {
                    setResumePasswordOpen(true);
                    setResumePasswordError("");
                  }}
                  className={`rounded-full border px-7 py-3.5 text-sm font-semibold transition hover:border-violet-500 ${theme.border}`}
                  >
                    View Resume ↓
                  </button>
              </div>

            <div className="mt-10 flex items-center gap-5 text-sm">
              <a
                href="#contact"
                className="text-violet-400 transition hover:text-violet-300"
              >
                Get in touch ↗
              </a>
              <span className={theme.muted}>|</span>
              <span className={theme.muted}>Based in India</span>
            </div>
          </div>

          <div className="relative flex w-full justify-center md:w-1/2">
            <div className="absolute bottom-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl md:h-96 md:w-96" />

            <div className="relative h-[360px] w-[300px] overflow-hidden rounded-[48%_48%_28%_28%] border border-violet-400/30 bg-gradient-to-b from-violet-500/20 to-transparent sm:h-[440px] sm:w-[360px]">
              <img
                src={heroImage}
                alt="Anime-style portrait representing Yashashree"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div
              className={`absolute bottom-8 left-0 rounded-2xl border px-5 py-4 shadow-xl backdrop-blur-xl ${theme.card}`}
            >
              <p className="text-xs tracking-widest text-violet-400">
                CURRENTLY
              </p>
              <p className="mt-1 text-sm font-semibold">
                Learning · Building · Growing
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm tracking-[0.25em] text-violet-400">
            ABOUT ME
            </p>

            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                Curious mind.
                <br />
                <span className="text-violet-400">Creative builder.</span>
              </h2>

              <div>
                <p className={`text-base leading-8 ${theme.muted}`}>
                  I’m Yashashree Chavan, a final-year Computer Science
                  Engineering student at Dnyanshree Institute of Engineering &
                  Technology, graduating in 2027.
                </p>

                <p className={`mt-5 text-base leading-8 ${theme.muted}`}>
                  I’m interested in artificial intelligence, software
                  development, and creating user-friendly applications. I enjoy
                  learning by building projects and turning ideas into practical
                  solutions.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className={`rounded-2xl border p-5 ${theme.card}`}>
                    <p className="font-serif text-3xl font-bold text-violet-400">
                      2027
                    </p>
                    <p className={`mt-2 text-sm ${theme.muted}`}>
                      Graduation Year
                    </p>
                  </div>

                  <div className={`rounded-2xl border p-5 ${theme.card}`}>
                    <p className="font-serif text-3xl font-bold text-violet-400">
                      AI
                    </p>
                    <p className={`mt-2 text-sm ${theme.muted}`}>
                      Career Interest
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Education Section */}
<section id="education" className="px-6 py-24 md:px-12 lg:px-20">
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
      Academic Background
    </p>

    <h2 className="mb-12 text-4xl font-bold md:text-5xl">
      My <span className="text-violet-400">Education</span>
    </h2>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Bachelor's Degree */}
      <article className="rounded-3xl border border-violet-500/20 bg-white/[0.03] p-7 transition duration-300 hover:border-violet-400/50">
        <span className="mb-4 inline-block rounded-full bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-300">
          2023 – 2027
        </span>

        <h3 className="text-xl font-bold">
          Bachelor of Engineering
        </h3>

        <p className="mt-1 text-violet-300">
          Computer Science
        </p>

        <p className="mt-4 text-sm leading-6 text-gray-400">
          Dnyanshree Institute of Engineering & Technology, Satara
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Dr. Babasaheb Ambedkar Technological University (DBATU)
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-sm text-gray-400">
            CGPA
          </p>
          <p className="mt-1 text-3xl font-bold text-violet-300">
            7.30
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Up to 6th Semester | 2026
          </p>
        </div>
      </article>

      {/* HSC */}
      <article className="rounded-3xl border border-violet-500/20 bg-white/[0.03] p-7 transition duration-300 hover:border-violet-400/50">
        <span className="mb-4 inline-block rounded-full bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-300">
          Higher Secondary
        </span>

        <h3 className="text-xl font-bold">
          Higher Secondary Certificate
        </h3>

        <p className="mt-1 text-violet-300">
          HSC | 2021
        </p>

        <p className="mt-4 text-sm leading-6 text-gray-400">
          Chhatrapati Shahu Academy School, Satara
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-sm text-gray-400">
            Percentage
          </p>
          <p className="mt-1 text-3xl font-bold text-violet-300">
            87.00%
          </p>
        </div>
      </article>

      {/* SSC */}
      <article className="rounded-3xl border border-violet-500/20 bg-white/[0.03] p-7 transition duration-300 hover:border-violet-400/50 md:col-span-2">
        <span className="mb-4 inline-block rounded-full bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-300">
          Secondary Education
        </span>

        <h3 className="text-xl font-bold">
          Secondary School Certificate
        </h3>

        <p className="mt-1 text-violet-300">
          SSC | 2023
        </p>

        <p className="mt-4 text-sm leading-6 text-gray-400">
          Chhatrapati Shahu Academy & Science Junior College, Satara
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-sm text-gray-400">
            Percentage
          </p>
          <p className="mt-1 text-3xl font-bold text-violet-300">
            67.67% 
          </p>
        </div>
      </article>
    </div>
  </div>
</section>


{/* Certifications & Training Section */}
<section id="certifications" className="px-6 py-24 md:px-12 lg:px-20">
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
      Learning & Development
    </p>

    <h2 className="mb-12 text-4xl font-bold md:text-5xl">
      Certifications <span className="text-violet-400">& Training</span>
    </h2>

    <div className="grid gap-5 md:grid-cols-2">
      {[
        {
          title: "Python Full Stack Developer",
          organization: "EduSkills Academy / AICTE",
          date: "October – December 2024",
          type: "Virtual Internship",
        },
        {
          title: "Java Full Stack Developer",
          organization: "EduSkills Academy / AICTE",
          date: "January – March 2025",
          type: "Virtual Internship",
        },
        {
          title: "Front-End Web Development",
          organization: "IBM SkillsBuild in collaboration with CSRBOX",
          date: "June – August 2024",
          type: "Internship",
        },
        {
          title: "German – I",
          organization: "NPTEL, IIT Madras",
          date: "July – October 2026",
          type: "Score: 54%",
        },
        {
          title: "Five-Day Workshop on Soft Skills",
          organization: "Dnyanshree Institute of Engineering & Technology",
          date: "January – February 2024",
          type: "Workshop",
        },
      ].map((certificate, index) => (
        <article
          key={index}
          className="rounded-3xl border border-violet-500/20 bg-white/[0.03] p-6 transition duration-300 hover:border-violet-400/50"
        >
          <div className="mb-4 flex items-start justify-between gap-3">
            <span className="rounded-full bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
              {certificate.type}
            </span>
            <span className="text-xs text-gray-500">
              {certificate.date}
            </span>
          </div>

          <h3 className="text-lg font-bold leading-snug">
            {certificate.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            {certificate.organization}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>


{/* Achievements & Project Exhibitions Section */}
<section id="achievements" className="px-6 py-24 md:px-12 lg:px-20">
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
      Milestones & Recognition
    </p>

    <h2 className="mb-12 text-4xl font-bold md:text-5xl">
      Achievements <span className="text-violet-400">& Exhibitions</span>
    </h2>

    <div className="relative space-y-6 border-l border-violet-500/30 pl-6 md:pl-10">
      {[
        {
          title: "MATRIX 2026 – State Level Project Competition",
          description:
            "Participated in the Mini Project Exhibition organised by Dnyanshree Institute of Engineering & Technology, Satara.",
          date: "May 2026",
        },
        {
          title: "ROTAREX 2026 – State Level Project Exhibition",
          description:
            "Presented CareerOS AI at Yashoda Technical Campus, Satara.",
          date: "April 2026",
        },
        {
          title: "AI Mini Hackathon – DACOE, Karad",
          description:
            "Participated in an AI-focused hackathon and developed an AI-Based Resume Builder.",
          date: "March 2026",
        },
        {
          title: "TECHBEATS 2K26 – Project Expo",
          description:
            "Presented a School Management Website at College of Engineering, Phaltan.",
          date: "March 2026",
        },
        {
          title: "Marathi Navdurga Utsav",
          description:
            "Invited as an event anchor at Chandukaka Jewels, Satara; received an appreciation certificate.",
          date: "2025",
        },
      ].map((achievement, index) => (
        <article key={index} className="relative">
          <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-violet-400 bg-[#0b0b12] md:-left-[47px]" />

          <div className="rounded-2xl border border-violet-500/20 bg-white/[0.03] p-6 transition duration-300 hover:border-violet-400/50">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-violet-300">
              {achievement.date}
            </p>

            <h3 className="text-lg font-bold leading-snug">
              {achievement.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {achievement.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


{/* Languages Section */}
<section id="languages" className="px-6 py-24 md:px-12 lg:px-20">
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
      Communication
    </p>

    <h2 className="mb-12 text-4xl font-bold md:text-5xl">
      Languages <span className="text-violet-400">I Speak</span>
    </h2>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { name: "English", level: "Conversational" },
        { name: "Hindi", level: "Conversational" },
        { name: "Marathi", level: "Conversational" },
        { name: "German", level: "A1 · Beginner" },
      ].map((language) => (
        <article
          key={language.name}
          className="rounded-2xl border border-violet-500/20 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50"
        >
          <h3 className="text-xl font-bold">
            {language.name}
          </h3>

          <p className="mt-3 text-sm text-violet-300">
            {language.level}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>


        {/* Projects */}
        <section id="projects" className={`px-6 py-24 ${theme.surface} md:px-10`}>
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm tracking-[0.25em] text-violet-400">
              PROJECTS
            </p>

            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="font-serif text-4xl font-bold md:text-5xl">
                Things I’ve
                <br />
                <span className="text-violet-400">been building.</span>
              </h2>

              <p className={`max-w-md leading-7 ${theme.muted}`}>
                A selection of projects where I explore ideas, learn new
                technologies, and develop practical solutions.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className={`group rounded-3xl border p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/60 ${theme.card}`}
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="font-serif text-3xl text-violet-400/70">
                      {project.number}
                    </span>
                    <span className="text-2xl text-violet-400 transition group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>

                  <p className="mb-3 text-xs tracking-widest text-violet-400">
                    {project.category}
                  </p>

                  <h3 className="font-serif text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className={`mt-4 text-sm leading-7 ${theme.muted}`}>
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-violet-500/20 px-3 py-1 text-xs text-violet-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                                    {/* GitHub and Live Demo buttons */}
                  <div className="mt-8 flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full border border-violet-500/30 px-4 py-3 text-center text-sm font-medium transition hover:border-violet-400 hover:bg-violet-500/10"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full bg-violet-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-400"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="px-6 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm tracking-[0.25em] text-violet-400">
            SKILLS
            </p>

            <h2 className="font-serif text-4xl font-bold md:text-5xl">
              Tools I work
              <br />
              <span className="text-violet-400">and learn with.</span>
            </h2>

            <p className={`mt-6 max-w-xl leading-7 ${theme.muted}`}>
              Technologies and tools I’m learning and using throughout my
              software development journey.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {skillCategories.map((category) => (
    <div
      key={category.title}
      className={`rounded-2xl border p-6 transition duration-300 hover:border-violet-500/60 ${theme.border}`}
    >
      <h3 className="mb-5 text-lg font-semibold text-violet-400">
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={`rounded-full border px-3 py-2 text-sm transition hover:border-violet-500 hover:text-violet-400 ${theme.border}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className={`px-6 py-24 ${theme.surface} md:px-10`}
        >
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm tracking-[0.25em] text-violet-400">
            CONTACT
            </p>

            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                  Let’s create
                  <br />
                  <span className="text-violet-400">something meaningful.</span>
                </h2>

                <p className={`mt-6 max-w-md leading-8 ${theme.muted}`}>
                  I’m open to opportunities, collaborations, and conversations
                  about AI and software development.
                </p>

                <a
                  href="mailto:yashashreechavan81@gmail.com"
                  className="mt-8 inline-flex items-center gap-3 text-violet-400 transition hover:text-violet-300"
                >
                  <span className="text-xl">✉</span>
                  yashashreechavan81@gmail.com
                </a>
              </div>

            <form
              action="https://formspree.io/f/meagnrwq"
              method="POST"
              className="space-y-5"
            >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className={`w-full rounded-2xl border px-5 py-4 outline-none transition focus:border-violet-500 ${theme.input}`}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className={`w-full rounded-2xl border px-5 py-4 outline-none transition focus:border-violet-500 ${theme.input}`}
                />

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your message"
                  required
                  className={`w-full resize-none rounded-2xl border px-5 py-4 outline-none transition focus:border-violet-500 ${theme.input}`}
                />

                <button
                  type="submit"
                  className="w-full rounded-full bg-violet-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-violet-500"
                >
                  Send Message ↗
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`border-t px-6 py-8 ${theme.border} md:px-10`}>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <a href="#home" className="font-serif text-lg font-bold">
            YASHASHREECH<span className="text-violet-500">.</span>
          </a>

          <p className={`text-sm ${theme.muted}`}>
            Designed & built with curiosity · © 2026 Yashashree Chavan
          </p>


{/* Social Media Links */}
<div className="flex flex-wrap items-center gap-4 text-sm">
  <a
    href="https://www.linkedin.com/in/yashashree-chavan-79613a28a/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-violet-400 transition hover:text-violet-300"
  >
    LinkedIn ↗
  </a>

  <a
    href="https://github.com/chavanyashashree44-prog"
    target="_blank"
    rel="noopener noreferrer"
    className="text-violet-400 transition hover:text-violet-300"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.instagram.com/yashashreech/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-violet-400 transition hover:text-violet-300"
  >
    Instagram ↗
  </a>
</div>


          <a
            href="#home"
            className="text-sm text-violet-400 transition hover:text-violet-300"
          >
            Back to top ↑
          </a>
        </div>
      </footer>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .nav-link {
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #a78bfa;
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out both;
        }
      `}</style>

            {resumePasswordOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div
            className={`w-full max-w-md rounded-3xl border p-7 shadow-2xl ${theme.card}`}
          >
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/15 text-2xl text-violet-400">
                🔒
              </div>

              <h2 className="text-2xl font-bold">
                Resume Access
              </h2>

              <p className={`mt-2 text-sm ${theme.muted}`}>
                Enter the password to view my resume.
              </p>
            </div>

            <form
              onSubmit={handleResumePasswordSubmit}
              className="space-y-4"
            >
              <input
                type="password"
                placeholder="Enter password"
                value={resumePassword}
                onChange={(event) =>
                  setResumePassword(event.target.value)
                }
                required
                autoFocus
                className={`w-full rounded-xl border px-4 py-3 outline-none focus:border-violet-500 ${theme.input}`}
              />

              {resumePasswordError && (
                <p className="text-sm text-red-400">
                  {resumePasswordError}
                </p>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setResumePasswordOpen(false);
                    setResumePassword("");
                    setResumePasswordError("");
                  }}
                  className={`flex-1 rounded-full border px-5 py-3 text-sm font-semibold transition hover:border-violet-500 ${theme.border}`}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
                >
                  Unlock Resume
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;