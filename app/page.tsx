import Image from "next/image";
import Link from "next/link";
import AnimatedBackground from "./components/AnimatedBackground";
import TypewriterText from "./components/TypewriterText";
import TerminalIcon from "./components/TerminalIcon";
import Timeline from "./components/Timeline";
import SkillBars from "./components/SkillBars";
import FlipCard from './components/FlipCard';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-gray-700 font-semibold hover:text-gray-900 transition-colors">
              AK
            </Link>
            <div className="flex gap-6">
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
              <Link href="#education" className="text-gray-600 hover:text-gray-900 transition-colors">Education</Link>
              <Link href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</Link>
              <Link href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
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
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-down text-gray-800 relative inline-block mx-auto">
            <span className="relative z-10">Professional Summary</span>
          </h2>
          <div className="max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300 relative">
            <FlipCard 
              frontContent={
                <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/study.jpeg"
                      alt="Study illustration"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 600px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-6">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-white mb-2">Click to read my professional summary</h3>
                        <p className="text-white/80">Tap to flip</p>
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
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-down text-gray-800 relative inline-block mx-auto">
            <span className="relative z-10">Education</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <FlipCard 
              frontContent={
                <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src="/edu.jpeg"
                      alt="Graduation illustration"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 600px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-6">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-white mb-2">Click to view my education details</h3>
                        <p className="text-white/80">Tap to flip</p>
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
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-down text-gray-800 relative inline-block">
            <span className="relative z-10">Skills</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FlipCard 
                frontContent={
                  <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                    <div className="absolute inset-0">
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                        <div className="text-center p-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          <h3 className="text-xl font-semibold text-gray-800">Programming Languages</h3>
                          <p className="text-gray-600 mt-2">Click to view skills</p>
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
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="font-semibold mb-4 text-gray-800">Programming Languages</h3>
                      <p className="text-gray-600">Python, Java, JavaScript, HTML, CSS, ReactJS, NodeJS, NextJS, C++, Kotlin, Scala, Swift, iOS</p>
                    </div>
                  </div>
                }
              />

              <FlipCard 
                frontContent={
                  <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                    <div className="absolute inset-0">
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                        <div className="text-center p-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1.5 3 3 3h10c1.5 0 3-1 3-3V7c0-2-1.5-3-3-3H7c-1.5 0-3 1-3 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6" />
                          </svg>
                          <h3 className="text-xl font-semibold text-gray-800">Database Technologies</h3>
                          <p className="text-gray-600 mt-2">Click to view skills</p>
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
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="font-semibold mb-4 text-gray-800">Database Technologies</h3>
                      <p className="text-gray-600">Databricks, SQL, MySQL, Postgres, NoSQL, MongoDB, DynamoDB</p>
                    </div>
                  </div>
                }
              />

              <FlipCard 
                frontContent={
                  <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                    <div className="absolute inset-0">
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                        <div className="text-center p-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                          </svg>
                          <h3 className="text-xl font-semibold text-gray-800">Cloud Technologies & Tools</h3>
                          <p className="text-gray-600 mt-2">Click to view skills</p>
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
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="font-semibold mb-4 text-gray-800">Cloud Technologies & Tools</h3>
                      <p className="text-gray-600">Gen AI, AWS services, Azure, Git, Gitlab, Docker, Jenkins, Terraform, GCP, REST</p>
                    </div>
                  </div>
                }
              />

              <FlipCard 
                frontContent={
                  <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                    <div className="absolute inset-0">
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                        <div className="text-center p-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          <h3 className="text-xl font-semibold text-gray-800">Relevant Courses</h3>
                          <p className="text-gray-600 mt-2">Click to view courses</p>
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
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="font-semibold mb-4 text-gray-800">Relevant Courses</h3>
                      <p className="text-gray-600">Data Structures & Algorithms, Design Patterns, Objective-C, Artificial Intelligence, Distributed Systems, Ruby on Rails</p>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-down text-gray-800 relative inline-block mx-auto">
            <span className="relative z-10">Experience</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <FlipCard 
              frontContent={
                <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/expe.png"
                      alt="Experience illustration"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 600px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-6">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-white mb-2">Click to view my experience</h3>
                        <p className="text-white/80">Tap to flip</p>
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
                      <h3 className="text-xl font-bold text-gray-800">Project Manager | GTA | GMU | DAEN 690</h3>
                      <p className="text-gray-600 mt-1">Jan 2025 – Present</p>
                      <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                        <li>Managing 20+ data analytics project teams, ensuring timely deliverables and quality standards</li>
                        <li>Mentoring students in data analytics concepts and project management methodologies</li>
                        <li>Conducting code debugging reviews and providing technical guidance</li>
                      </ul>
                    </div>

                    <div>
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
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-down text-gray-800 relative inline-block mx-auto">
            <span className="relative z-10">Certifications</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <FlipCard 
              frontContent={
                <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                      <div className="text-center p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <h3 className="text-2xl font-semibold text-gray-800">My Certifications</h3>
                        <p className="text-gray-600 mt-2">Click to view all certifications</p>
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
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">AWS Certified Cloud Practitioner</h3>
                      <p className="text-gray-600">Amazon Web Services</p>
                      <p className="text-gray-600 mt-2">Demonstrated comprehensive knowledge of AWS cloud services, architecture, security, and best practices, enabling effective cloud-based solutions and analytical skills.</p>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-xl font-semibold text-gray-800">JP Morgan Virtual Experience</h3>
                      <p className="text-gray-600">Forage</p>
                      <p className="text-gray-600 mt-2">Set up a development environment, fixed repository issues, and utilized JPMorgan's perspective library to create a real-time data visualization tool for traders.</p>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-xl font-semibold text-gray-800">Walmart Advanced Software Engineering Virtual Experience</h3>
                      <p className="text-gray-600">Forage</p>
                      <p className="text-gray-600 mt-2">Designed and implemented data structures, UML diagrams, and database models to solve complex technical challenges demonstrating software engineering skills.</p>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in-down text-gray-800 relative inline-block">
            <span className="relative z-10">Projects</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8">
              <FlipCard 
                frontContent={
                  <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
                    <div className="absolute inset-0">
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                        <div className="text-center p-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <h3 className="text-xl font-semibold text-gray-800">Financial Analytics API</h3>
                          <p className="text-gray-600 mt-2">Click to view details</p>
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
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Financial Analytics API</h3>
                      <p className="text-gray-600 mb-4">Developed a secure, stable, scalable low-latency financial analytics API using Typescript (front-end) & Python for retrieving financial data, processing 5K+ financial records efficiently with PostgreSQL & Alembic, reducing data retrieval time by 35%.</p>
                      <p className="text-gray-600 mb-4">Applied software development lifecycle, DevOps methodologies to test software and ensure CI/CD using Docker & GitHub actions.</p>
                      <div className="flex flex-wrap gap-2">
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
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                        <div className="text-center p-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <h3 className="text-xl font-semibold text-gray-800">Generative AI Content Creation Web Application</h3>
                          <p className="text-gray-600 mt-2">Click to view details</p>
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
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Generative AI Content Creation Web Application</h3>
                      <p className="text-gray-600 mb-4">Architected and developed a secure, stable & reliable cloud-native AI-powered application using JS, Python & Node.JS, designed a MongoDB data storage model for content, ensuring fast indexing & retrieval for seamless personalization by 30%.</p>
                      <p className="text-gray-600 mb-4">Integrated PyTorch for model fine-tuning & LangChain for efficient AI-based financial content personalization.</p>
                      <div className="flex flex-wrap gap-2">
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
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                        <div className="text-center p-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          <h3 className="text-xl font-semibold text-gray-800">Microservices based Full Stack Web Application</h3>
                          <p className="text-gray-600 mt-2">Click to view details</p>
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
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-200 rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-200 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-200 rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-200 rounded-br-lg"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Microservices based Full Stack Web Application</h3>
                      <p className="text-gray-600 mb-4">Developed a high quality, resilient scalable microservices architecture with Java, Spring framework, implementing CRUD operations using Spring Data JPA and PostgreSQL automated deployment using Jenkins, reducing manual effort by 40%.</p>
                      <p className="text-gray-600 mb-4">Designed & deployed RESTful APIs with Docker/Kubernetes, ensuring 99% uptime & high availability shipping efficiency.</p>
                      <div className="flex flex-wrap gap-2">
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
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in-down text-gray-800">Connect With Me! ☺️</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center gap-12">
              <a href="https://linkedin.com/in/akshitha-kolanupaka" className="group flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <span className="mt-3 text-gray-600 group-hover:text-blue-600 transition-colors duration-300">LinkedIn</span>
              </a>
              
              <a href="https://github.com/AkshithaKolan" className="group flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="mt-3 text-gray-600 group-hover:text-blue-600 transition-colors duration-300">GitHub</span>
              </a>
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

