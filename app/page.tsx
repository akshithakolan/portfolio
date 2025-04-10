import Image from "next/image";
import Link from "next/link";
import AnimatedBackground from "./components/AnimatedBackground";
import TypewriterText from "./components/TypewriterText";
import TerminalIcon from "./components/TerminalIcon";
import Timeline from "./components/Timeline";
import SkillBars from "./components/SkillBars";
import FlipCard from './components/FlipCard';
import AnimatedWindow from './components/AnimatedWindow';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-gray-700 font-semibold hover:text-gray-900 transition-colors">
              The Kolanupaka's Konsole 🖥️
            </Link>
            <div className="flex gap-8">
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#education" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                Education
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#certifications" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                Certifications
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 animate-pulse"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
              <div className="relative w-80 h-[28rem] md:order-2 group perspective-1000 animate-fade-in">
                <AnimatedBackground />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100/10 backdrop-blur-[2px] transform transition-all duration-500 group-hover:backdrop-blur-none"></div>
                <div className="relative w-full h-full overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-blue-200/20 group-hover:scale-[1.02]">
                  <div className="w-full h-full relative transform transition-all duration-700 group-hover:scale-110">
                    <Image
                      src="/profile.png"
                      alt="Akshitha Kolanupaka"
                      fill
                      sizes="(max-width: 768px) 320px, 320px"
                      className="object-cover object-[50%_-15%] transition-all duration-700 group-hover:brightness-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left md:order-1 md:flex-1 animate-fade-in-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-3 animate-fade-in-down text-gray-800">
                  <TypewriterText text="Akshitha Kolanupaka" />
                </h1>
                <div className="mb-6 animate-fade-in opacity-0 [animation-delay:2s] [animation-fill-mode:forwards]">
                  <TerminalIcon text="Turning coffee into code and bugs into features ✨" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section id="about" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-2/3">
                <FlipCard 
                  frontContent={
                    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                      <div className="absolute inset-0">
                        <Image
                          src="/summary.gif"
                          alt="Professional Summary"
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 768px) 100vw, 600px"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8">
                          <div className="text-center px-4">
                            <h3 className="text-2xl font-bold text-white mb-3">Click to read my professional summary</h3>
                            <p className="text-white/90 text-lg">Click to explore</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="bg-white p-6 rounded-lg h-full overflow-y-auto">
                      {/* Notebook ruled lines */}
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_1.5rem,rgba(0,0,0,0.05)_1.5rem,rgba(0,0,0,0.05)_1.6rem,transparent_1.6rem)] bg-[length:100%_2rem]"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,transparent_0%,transparent_2rem,rgba(0,0,0,0.05)_2rem,rgba(0,0,0,0.05)_2.1rem,transparent_2.1rem)] bg-[length:2.5rem_100%]"></div>
                      </div>
                      
                      {/* Notebook corners */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <p className="text-gray-600 leading-relaxed animate-slide-up mb-4">
                          Dedicated and detail-oriented software developer with a strong foundation in full-stack development. Passionate about creating efficient, scalable solutions and delivering exceptional user experiences. Experienced in modern web technologies and committed to writing clean, maintainable code.
                        </p>
                        <p className="text-gray-600 leading-relaxed animate-slide-up mb-4">
                          Proficient in developing responsive web applications using React.js, Next.js, and modern JavaScript. Strong background in building RESTful APIs, working with databases, and implementing secure authentication systems. Experienced in version control with Git and collaborative development workflows.
                        </p>
                        <p className="text-gray-600 leading-relaxed animate-slide-up">
                          Actively seeking opportunities to contribute to innovative projects and collaborate with forward-thinking teams. Committed to continuous learning and staying updated with the latest industry trends and best practices.
                        </p>
                      </div>
                    </div>
                  }
                />
              </div>
              
              <div className="md:w-1/3">
                <AnimatedWindow 
                  title="Who am I?"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <AnimatedWindow 
                  title="My Level-Up Journey"
                />
              </div>
              
              <div className="md:w-2/3">
                <FlipCard 
                  frontContent={
                    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                      <div className="absolute inset-0">
                        <Image
                          src="/education.gif"
                          alt="Education animation"
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 768px) 100vw, 600px"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8">
                          <div className="text-center px-4">
                            <h3 className="text-2xl font-bold text-white mb-3">Click to view my education details</h3>
                            <p className="text-white/90 text-lg">Click to explore</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="bg-white p-6 rounded-lg h-full overflow-y-auto">
                      {/* Notebook ruled lines */}
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_1.5rem,rgba(0,0,0,0.05)_1.5rem,rgba(0,0,0,0.05)_1.6rem,transparent_1.6rem)] bg-[length:100%_2rem]"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,transparent_0%,transparent_2rem,rgba(0,0,0,0.05)_2rem,rgba(0,0,0,0.05)_2.1rem,transparent_2.1rem)] bg-[length:2.5rem_100%]"></div>
                      </div>
                      
                      {/* Notebook corners */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 space-y-8">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">George Mason University</h3>
                          <p className="text-gray-600 mt-2">Master of Science in Computer Software Engineering • Fairfax, VA</p>
                          <p className="text-gray-600 mt-1">Expected May 2025</p>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-800">CMR College of Engineering and Technology</h3>
                          <p className="text-gray-600 mt-2">Bachelor's in Computer Science • Hyderabad, TS</p>
                          <p className="text-gray-600 mt-1">July 2023</p>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-2/3">
                <FlipCard 
                  frontContent={
                    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                      <div className="absolute inset-0">
                        <Image
                          src="/skills.gif"
                          alt="Skills animation"
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 768px) 100vw, 0px"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8">
                          <div className="text-center px-4">
                            <h3 className="text-2xl font-bold text-white mb-3">Click to view my skill set</h3>
                            <p className="text-white/90 text-lg">Click to explore</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="bg-white p-6 rounded-lg h-full overflow-y-auto relative">
                      {/* Notebook ruled lines */}
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_1.5rem,rgba(0,0,0,0.05)_1.5rem,rgba(0,0,0,0.05)_1.6rem,transparent_1.6rem)] bg-[length:100%_2rem]"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,transparent_0%,transparent_2rem,rgba(0,0,0,0.05)_2rem,rgba(0,0,0,0.05)_2.1rem,transparent_2.1rem)] bg-[length:2.5rem_100%]"></div>
                      </div>
                      
                      {/* Notebook corners */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 space-y-8">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">Programming Languages</h3>
                          <p className="text-gray-600 mt-2">Python, Java, JavaScript, HTML, CSS, ReactJS, NodeJS, NextJS, C++, Kotlin, Scala, Swift, iOS</p>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-xl font-bold text-gray-800">Database Technologies</h3>
                          <p className="text-gray-600 mt-2">Databricks, SQL, MySQL, Postgres, NoSQL, MongoDB, DynamoDB</p>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-xl font-bold text-gray-800">Cloud Technologies & Tools</h3>
                          <p className="text-gray-600 mt-2">Gen AI, AWS services, Azure, Git, Gitlab, Docker, Jenkins, Terraform, GCP, REST</p>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-xl font-bold text-gray-800">Relevant Courses</h3>
                          <p className="text-gray-600 mt-2">Data Structures & Algorithms, Design Patterns, Objective-C, Artificial Intelligence, Distributed Systems, Ruby on Rails</p>
                        </div>
                      </div>
              </div>
                  }
                />
              </div>
              
              <div className="md:w-1/3">
                <AnimatedWindow 
                  title="Code Ingredients"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <AnimatedWindow 
                  title="The Credential Collection"
                />
              </div>
              
              <div className="md:w-2/3">
                <FlipCard 
                  frontContent={
                    <div className="flex flex-col items-center justify-start h-full relative overflow-hidden">
                      <div className="absolute inset-0 pt-4">
                        <Image
                          src="/certi.png"
                          alt="Certifications"
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 768px) 100vw, 600px"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8">
                          <div className="text-center px-4">
                            <h3 className="text-2xl font-bold text-white mb-3">My Certifications</h3>
                            <p className="text-white/90 text-lg">Click to explore</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="bg-white p-6 rounded-lg h-full overflow-y-auto relative">
                      {/* Notebook ruled lines */}
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_1.5rem,rgba(0,0,0,0.05)_1.5rem,rgba(0,0,0,0.05)_1.6rem,transparent_1.6rem)] bg-[length:100%_2rem]"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,transparent_0%,transparent_2rem,rgba(0,0,0,0.05)_2rem,rgba(0,0,0,0.05)_2.1rem,transparent_2.1rem)] bg-[length:2.5rem_100%]"></div>
                      </div>
                      
                      {/* Notebook corners */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 space-y-8">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">AWS Certified Cloud Practitioner</h3>
                          <p className="text-gray-600 mt-1">Amazon Web Services</p>
                          <p className="text-gray-600 mt-2">Demonstrated comprehensive knowledge of AWS cloud services, architecture, security, and best practices, enabling effective cloud-based solutions and analytical skills.</p>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-xl font-bold text-gray-800">JP Morgan Virtual Experience</h3>
                          <p className="text-gray-600 mt-1">Forage</p>
                          <p className="text-gray-600 mt-2">Set up a development environment, fixed repository issues, and utilized JPMorgan's perspective library to create a real-time data visualization tool for traders.</p>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-xl font-bold text-gray-800">Walmart Advanced Software Engineering Virtual Experience</h3>
                          <p className="text-gray-600 mt-1">Forage</p>
                          <p className="text-gray-600 mt-2">Designed and implemented data structures, UML diagrams, and database models to solve complex technical challenges demonstrating software engineering skills.</p>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-2/3">
                <FlipCard 
                  frontContent={
                    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                      <div className="absolute inset-0">
                        <Image
                          src="/study.jpeg"
                          alt="Experience illustration"
                          fill
                          className="object-cover rounded-lg"
                          sizes="(max-width: 768px) 100vw, 600px"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8">
                          <div className="text-center px-4">
                            <h3 className="text-2xl font-bold text-white mb-3">Click to view my experience</h3>
                            <p className="text-white/90 text-lg">Click to explore</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="bg-white p-6 rounded-lg h-full overflow-y-auto relative">
                      {/* Notebook ruled lines */}
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_1.5rem,rgba(0,0,0,0.05)_1.5rem,rgba(0,0,0,0.05)_1.6rem,transparent_1.6rem)] bg-[length:100%_2rem]"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,transparent_0%,transparent_2rem,rgba(0,0,0,0.05)_2rem,rgba(0,0,0,0.05)_2.1rem,transparent_2.1rem)] bg-[length:2.5rem_100%]"></div>
                      </div>
                      
                      {/* Notebook corners */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 space-y-8">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">Project Manager | GTA | GMU | DAEN 690</h3>
                          <p className="text-gray-600 mt-1">Jan 2025 – Present</p>
                          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                            <li>Managing 20+ data analytics project teams, ensuring timely deliverables and quality standards</li>
                            <li>Mentoring students in data analytics concepts and project management methodologies</li>
                            <li>Conducting code debugging reviews and providing technical guidance</li>
                          </ul>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <h3 className="text-xl font-bold text-gray-800">Graduate Teaching Assistant | GMU | AIT 580 – Big Data</h3>
                          <p className="text-gray-600 mt-1">Aug 2024 – Dec 2024</p>
                          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                            <li>Delivered lectures on Python and Big Data concepts to 50+ graduate students</li>
                            <li>Assisted students with cloud infrastructure setup and troubleshooting</li>
                            <li>Evaluated projects and provided constructive feedback for improvement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
              
              <div className="md:w-1/3">
                <AnimatedWindow 
                  title="Mission: Experience"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <AnimatedWindow 
                  title="Git Commit – My Creations "
                />
              </div>
              
              <div className="md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FlipCard 
                    frontContent={
                      <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                        <div className="absolute inset-0">
                          <Image
                            src="/proj.jpeg"
                            alt="Financial Analytics"
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 600px"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8">
                            <div className="text-center px-4">
                              <h3 className="text-2xl font-bold text-white mb-3">Financial Analytics API</h3>
                              <p className="text-white/90 text-lg">Click to explore</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    backContent={
                      <div className="bg-white p-6 rounded-lg h-full overflow-y-auto relative">
                        {/* Notebook ruled lines */}
                        <div className="absolute top-0 left-0 w-full h-full">
                          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_1.5rem,rgba(0,0,0,0.05)_1.5rem,rgba(0,0,0,0.05)_1.6rem,transparent_1.6rem)] bg-[length:100%_2rem]"></div>
                          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,transparent_0%,transparent_2rem,rgba(0,0,0,0.05)_2rem,rgba(0,0,0,0.05)_2.1rem,transparent_2.1rem)] bg-[length:2.5rem_100%]"></div>
                        </div>
                        
                        {/* Notebook corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-xl font-bold text-gray-800">Financial Analytics API</h3>
                          <p className="text-gray-600 mt-2">Developed a secure, stable, scalable low-latency financial analytics API using Typescript (front-end) & Python for retrieving financial data, processing 5K+ financial records efficiently with PostgreSQL & Alembic, reducing data retrieval time by 35%.</p>
                          <p className="text-gray-600 mt-2">Applied software development lifecycle, DevOps methodologies to test software and ensure CI/CD using Docker & GitHub actions.</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Python</span>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Jenkins</span>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Docker</span>
                          </div>
                        </div>
                      </div>
                    }
                  />

                  <FlipCard 
                    frontContent={
                      <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                        <div className="absolute inset-0">
                          <Image
                            src="/proj.jpeg"
                            alt="Generative AI"
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 600px"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8">
                            <div className="text-center px-4">
                              <h3 className="text-2xl font-bold text-white mb-3">Generative AI Content Creation</h3>
                              <p className="text-white/90 text-lg">Click to explore</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    backContent={
                      <div className="bg-white p-6 rounded-lg h-full overflow-y-auto relative">
                        {/* Notebook ruled lines */}
                        <div className="absolute top-0 left-0 w-full h-full">
                          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_1.5rem,rgba(0,0,0,0.05)_1.5rem,rgba(0,0,0,0.05)_1.6rem,transparent_1.6rem)] bg-[length:100%_2rem]"></div>
                          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,transparent_0%,transparent_2rem,rgba(0,0,0,0.05)_2rem,rgba(0,0,0,0.05)_2.1rem,transparent_2.1rem)] bg-[length:2.5rem_100%]"></div>
                        </div>
                        
                        {/* Notebook corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-xl font-bold text-gray-800">Generative AI Content Creation Web Application</h3>
                          <p className="text-gray-600 mt-2">Architected and developed a secure, stable & reliable cloud-native AI-powered application using JS, Python & Node.JS, designed a MongoDB data storage model for content, ensuring fast indexing & retrieval for seamless personalization by 30%.</p>
                          <p className="text-gray-600 mt-2">Integrated PyTorch for model fine-tuning & LangChain for efficient AI-based financial content personalization.</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Gen-AI</span>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">JavaScript</span>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">NodeJS</span>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">MongoDB</span>
                          </div>
                        </div>
                      </div>
                    }
                  />

                  <FlipCard 
                    frontContent={
                      <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                        <div className="absolute inset-0">
                          <Image
                            src="/proj.jpeg"
                            alt="Microservices"
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 600px"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8">
                            <div className="text-center px-4">
                              <h3 className="text-2xl font-bold text-white mb-3">Microservices Web Application</h3>
                              <p className="text-white/90 text-lg">Click to explore</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    backContent={
                      <div className="bg-white p-6 rounded-lg h-full overflow-y-auto relative">
                        {/* Notebook ruled lines */}
                        <div className="absolute top-0 left-0 w-full h-full">
                          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_1.5rem,rgba(0,0,0,0.05)_1.5rem,rgba(0,0,0,0.05)_1.6rem,transparent_1.6rem)] bg-[length:100%_2rem]"></div>
                          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,transparent_0%,transparent_2rem,rgba(0,0,0,0.05)_2rem,rgba(0,0,0,0.05)_2.1rem,transparent_2.1rem)] bg-[length:2.5rem_100%]"></div>
                        </div>
                        
                        {/* Notebook corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-xl font-bold text-gray-800">Microservices based Full Stack Web Application</h3>
                          <p className="text-gray-600 mt-2">Developed a high quality, resilient scalable microservices architecture with Java, Spring framework, implementing CRUD operations using Spring Data JPA and PostgreSQL automated deployment using Jenkins, reducing manual effort by 40%.</p>
                          <p className="text-gray-600 mt-2">Designed & deployed RESTful APIs with Docker/Kubernetes, ensuring 99% uptime & high availability shipping efficiency.</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">EC2</span>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">S3</span>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Java</span>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Spring Boot</span>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Maven</span>
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Picture */}
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg relative transform transition-all duration-500 hover:scale-105">
                    <Image
                      src="/contact.jpeg"
                      alt="Anime Profile Picture"
                      fill
                      className="object-cover object-center"
                      sizes="192px"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Connect Links */}
              <div className="md:w-2/3">
                <div className="pt-0">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Want to connect, build or have a coffee chat? </h2>
                  <div className="space-y-4">
                    <a href="https://linkedin.com/in/akshitha-kolanupaka" className="group flex items-center gap-6">
                      <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">LinkedIn</span>
                        <p className="text-gray-600 mt-1">Let’s Turn Connections Into Collaborations</p>
                      </div>
                    </a>
                    
                    <a href="https://github.com/AkshithaKolan" className="group flex items-center gap-6">
                      <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">GitHub</span>
                        <p className="text-gray-600 mt-1">My Code Lives Here. Sometimes It Even Works 🙂‍↔️</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-blue-50">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Akshitha Kolanupaka. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

