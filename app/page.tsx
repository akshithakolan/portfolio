import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      {/* Navigation */}
      <nav className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-screen-xl w-full mx-auto flex py-4 sm:py-6 md:py-8 w-full items-center justify-between relative">
        <Link href="/" className="font-black text-xl z-50 relative">
          AK_
            </Link>
        <div className="hidden md:flex items-center text-sm justify-between gap-8 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
          <Link href="#education" className="hover:text-primary transition-colors">Education</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
        <div className="md:hidden relative">
          <input type="checkbox" id="menu-toggle" className="hidden peer"/>
          <label htmlFor="menu-toggle" className="cursor-pointer z-50 relative w-6 h-6 flex items-center justify-center group">
            <span className="absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out group-hover:bg-primary origin-center hamburger-line-top"></span>
            <span className="absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out group-hover:bg-primary origin-center hamburger-line-middle"></span>
            <span className="absolute w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out group-hover:bg-primary origin-center hamburger-line-bottom"></span>
          </label>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-12 sm:py-16 md:py-20 w-full overflow-x-hidden bg-[radial-gradient(#98a69e,transparent_1px)] [background-size:16px_16px] lg:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-screen-xl w-full mx-auto w-full">
          <div className="py-6 px-6 mx-auto w-full text-center lg:py-12 lg:px-12">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
              Building the Future, Line by Line.
            </h1>
            <p className="mb-6 font-normal text-slate-800 text-sm lg:text-base sm:px-16 xl:px-48">
              I'm Akshitha, a Software Developer passionate about building efficient and scalable solutions.
            </p>
            <div className="flex mb-6 lg:mb-12 space-y-4 flex-wrap justify-center gap-4">
              <div>
                <Link href="#projects" className="btn-primary">
                  <span className="relative z-10 gap-2 flex items-center justify-center">See projects</span>
                </Link>
              </div>
              <div>
                <Link href="#contact" className="btn-secondary">
                  <span className="relative z-10 gap-2 flex items-center justify-center">Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <div className="flex flex-col text-2xl items-center animate-bounce">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="m7 6 5 5 5-5"></path>
              <path d="m7 13 5 5 5-5"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 sm:py-16 md:py-20">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-screen-xl w-full mx-auto w-full max-w-screen-xl">
          <div className="flex flex-col-reverse md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-8 animated">
            <div className="md:w-1/2 lg:w-3/5">
              <h1 className="section-title">About</h1>
              <p className="text-slate-700 leading-relaxed sm:leading-loose text-sm max-w-2xl mt-4">
                I am Akshitha, a software developer passionate about building and exploring how technology works.
                My journey in programming began with a curiosity for creating solutions that make a difference.
                Beyond coding, my interests include learning new technologies, contributing to open-source projects,
                and staying updated with the latest industry trends.
              </p>
              
                            <h2 className="font-black text-sm sm:text-base mt-4 sm:mt-6">Programming Languages</h2>
              <div className="flex gap-2 sm:gap-3 flex-wrap mt-2 sm:mt-3">
                <div className="tech-tag">
                  <span>Python</span>
                </div>
                <div className="tech-tag">
                  <span>JavaScript</span>
                </div>
                <div className="tech-tag">
                  <span>TypeScript</span>
                </div>
                <div className="tech-tag">
                  <span>Java</span>
                </div>
                <div className="tech-tag">
                  <span>Linux/Unix</span>
                </div>
                <div className="tech-tag">
                  <span>Objective-C</span>
                          </div>
                        </div>

              <h2 className="font-black text-sm sm:text-base mt-4 sm:mt-6">Backend Frameworks</h2>
              <div className="flex gap-2 sm:gap-3 flex-wrap mt-2 sm:mt-3">
                <div className="tech-tag">
                  <span>Django</span>
                      </div>
                <div className="tech-tag">
                  <span>Flask</span>
                    </div>
                <div className="tech-tag">
                  <span>FastAPI</span>
                      </div>
                <div className="tech-tag">
                  <span>Spring Boot</span>
                      </div>
                <div className="tech-tag">
                  <span>Maven</span>
                    </div>
              </div>
              
              <h2 className="font-black text-sm sm:text-base mt-4 sm:mt-6">Frontend Frameworks</h2>
              <div className="flex gap-2 sm:gap-3 flex-wrap mt-2 sm:mt-3">
                <div className="tech-tag">
                  <span>React</span>
                </div>
                <div className="tech-tag">
                  <span>Angular</span>
                </div>
                <div className="tech-tag">
                  <span>HTML</span>
                </div>
                <div className="tech-tag">
                  <span>CSS3</span>
                </div>
              </div>

              <h2 className="font-black text-sm sm:text-base mt-4 sm:mt-6">Databases</h2>
              <div className="flex gap-2 sm:gap-3 flex-wrap mt-2 sm:mt-3">
                <div className="tech-tag">
                  <span>PostgreSQL</span>
                </div>
                <div className="tech-tag">
                  <span>MySQL</span>
                </div>
                <div className="tech-tag">
                  <span>Oracle</span>
                </div>
                <div className="tech-tag">
                  <span>Redis</span>
                </div>
                <div className="tech-tag">
                  <span>MongoDB</span>
            </div>
                <div className="tech-tag">
                  <span>Cassandra</span>
          </div>
                <div className="tech-tag">
                  <span>NoSQL</span>
        </div>
              </div>
              
              <h2 className="font-black text-sm sm:text-base mt-4 sm:mt-6">Cloud Technologies & Tools</h2>
              <div className="flex gap-2 sm:gap-3 flex-wrap mt-2 sm:mt-3">
                <div className="tech-tag">
                  <span>AWS</span>
                </div>
                <div className="tech-tag">
                  <span>GCP</span>
                </div>
                <div className="tech-tag">
                  <span>Azure</span>
                </div>
                <div className="tech-tag">
                  <span>Git</span>
                </div>
                <div className="tech-tag">
                  <span>Docker</span>
                          </div>
                <div className="tech-tag">
                  <span>Jenkins</span>
                        </div>
                <div className="tech-tag">
                  <span>Kubernetes</span>
                      </div>
                <div className="tech-tag">
                  <span>Terraform</span>
                    </div>
                <div className="tech-tag">
                  <span>Kafka</span>
                      </div>
                        </div>

              <h2 className="font-black text-sm sm:text-base mt-4 sm:mt-6">Certifications</h2>
              <div className="flex gap-2 sm:gap-3 flex-wrap mt-4 sm:mt-5">
                <div className="tech-tag bg-green-50 border-green-200 text-green-800">
                  <span>AWS Certified Cloud Practitioner</span>
                        </div>
                      </div>
                    </div>
            <div className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
              <div className="relative">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 p-3 sm:p-4 backdrop-blur-sm border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/profile.png"
                      alt="Akshitha Kolanupaka"
                      width={400}
                      height={400}
                      className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-12 sm:py-16 md:py-20">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-screen-xl w-full mx-auto">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-16 xl:gap-32 2xl:gap-40 animated">
            <div className="mb-6 sm:mb-8 lg:mb-0">
              <h2 className="font-black text-xl sm:text-2xl relative before:absolute before:w-8 sm:before:w-10 before:rounded-lg before:-top-3 sm:before:-top-4 before:bg-primary before:h-1.5 sm:before:h-2">
                Experience
              </h2>
              <p className="mt-4 sm:mt-6 max-w-[600px] text-sm sm:text-base leading-loose">
                Contributed to professional software projects and collaborated with teams.
              </p>
            </div>
            <div className="flex flex-col w-full items-start gap-6">
              <div className="relative w-full">
                <div className="group relative flex items-start w-full space-x-4 pb-8">
                  <div className="absolute left-6 top-12 h-full w-0.5 bg-gray-200 group-last:hidden"></div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-gray-100 dark:bg-gray-800 dark:ring-gray-700">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-sm">C</span>
                      </div>
                            </div>
                          </div>
                  <div className="min-w-0 flex-1 w-full">
                    <div className="relative rounded-xl border border-gray-200 bg-white py-4 px-5 shadow-sm before:content-[''] before:absolute before:left-[-8px] before:top-6 before:h-0 before:w-0 before:border-t-8 before:border-r-8 before:border-b-8 before:border-l-0 before:border-transparent before:border-r-gray-200">
                      <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">Software Developer</h3>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Cavaro.io – Self Initiated</p>
                        </div>
                        <div className="mt-1 sm:mt-0 sm:text-right">
                          <time className="text-xs font-medium text-gray-600 dark:text-gray-400">May 2025 - Present</time>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                        <div>
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">Full-time</span>
                        </div>
                        <div>
                          <span className="inline-flex items-center text-xs font-medium gap-1 px-2 py-1 bg-gray-100 rounded-full">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Remote</span>
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Designed and deployed a SaaS platform for real-time cloud solutions using Python, React, PostgreSQL, Docker, and AWS (S3, Lambda, RDS, Route 53); handled full-stack development and AWS infrastructure.
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Collaborated with early users to develop scalable backend services with real-time collaboration features using WebSockets and PostgreSQL transaction isolation to ensure multi-user consistency without data loss.
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Utilized Lambda for low-latency global access and more than 99% uptime, supporting 50+ daily active users post-MVP launch.
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Containerized backend and frontend using Docker and implemented IaC for deployment via Terraform and GitHub Actions, allowing automated builds and multi-environment rollouts.
                        </p>
                            </div>
                          </div>
                        </div>
                        </div>
                        
                <div className="group relative flex items-start w-full space-x-4 pb-8">
                  <div className="absolute left-6 top-12 h-full w-0.5 bg-gray-200 group-last:hidden"></div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-gray-100 dark:bg-gray-800 dark:ring-gray-700">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-sm">GMU</span>
                      </div>
                            </div>
                          </div>
                  <div className="min-w-0 flex-1 w-full">
                    <div className="relative rounded-xl border border-gray-200 bg-white py-4 px-5 shadow-sm before:content-[''] before:absolute before:left-[-8px] before:top-6 before:h-0 before:w-0 before:border-t-8 before:border-r-8 before:border-b-8 before:border-l-0 before:border-transparent before:border-r-gray-200">
                      <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">Software Engineer - GTA</h3>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">George Mason University</p>
                        </div>
                        <div className="mt-1 sm:mt-0 sm:text-right">
                          <time className="text-xs font-medium text-gray-600 dark:text-gray-400">Aug 2023 - May 2025</time>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                        <div>
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">Graduate Assistant</span>
                        </div>
                        <div>
                          <span className="inline-flex items-center text-xs font-medium gap-1 px-2 py-1 bg-gray-100 rounded-full">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Fairfax, VA</span>
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Collaborated and mentored 35+ AI/ML teams through end-to-end product cycles, streamlining multi-cloud migrations on AWS and GCP; provided technical guidance on backend and frontend development, cloud architecture, and debugging.
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Built reusable infrastructure modules and CI/CD pipelines with Terraform & Jenkins to automate cloud environment setup and deployments, reducing cloud provisioning time by 30%.
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Used log tracing and test automation (Python, Selenium, Pytest) to identify and fix bugs in over 50 microservices, improving project reliability and reducing support overhead by 35%.
                        </p>
                            </div>
                          </div>
                        </div>
                        </div>
                        
                <div className="group relative flex items-start w-full space-x-4 pb-8">
                  <div className="absolute left-6 top-12 h-full w-0.5 bg-gray-200 group-last:hidden"></div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-gray-100 dark:bg-gray-800 dark:ring-gray-700">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-sm">V</span>
                      </div>
                            </div>
                          </div>
                  <div className="min-w-0 flex-1 w-full">
                    <div className="relative rounded-xl border border-gray-200 bg-white py-4 px-5 shadow-sm before:content-[''] before:absolute before:left-[-8px] before:top-6 before:h-0 before:w-0 before:border-t-8 before:border-r-8 before:border-b-8 before:border-l-0 before:border-transparent before:border-r-gray-200">
                      <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">Backend Software Engineer Intern</h3>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Verzeo</p>
                        </div>
                        <div className="mt-1 sm:mt-0 sm:text-right">
                          <time className="text-xs font-medium text-gray-600 dark:text-gray-400">Jan 2023 - July 2023</time>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                        <div>
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">Internship</span>
                        </div>
                        <div>
                          <span className="inline-flex items-center text-xs font-medium gap-1 px-2 py-1 bg-gray-100 rounded-full">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Remote</span>
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Developed and integrated backend services for an NLP-based customer support platform using Python, Docker, and REST APIs; worked on model integration and production deployment with 30+ production commits.
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Diagnosed production issues using API logs and debug tools & automated testing in agile development cycles. Supported API integration and microservices development for systems interfacing with enterprise decisioning platforms.
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Streamlined deployment workflows by containerizing Python microservice with Docker, accelerating release with CI pipelines.
                        </p>
                          </div>
                        </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-lg md:pt-sm w-full relative">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-screen-xl w-full mx-auto animated">
          <h2 className="font-black text-xl sm:text-2xl relative before:absolute before:w-8 sm:before:w-10 before:rounded-lg before:-top-3 sm:before:-top-4 before:bg-primary before:h-1.5 sm:before:h-2">
            Showcase
          </h2>
          <p className="mt-2 text-sm sm:text-base">
            My open source contributions and side projects.
          </p>
          <div className="mt-8 z-10 flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:auto-rows-[minmax(200px,auto)]">
            
            <div className="col-span-2">
              <div className="break-inside-avoid rounded-2xl shadow-md border border-gray-200 bg-white overflow-hidden flex flex-col h-full row-span-1 col-span-1 sm:col-span-2 lg:col-span-2">
                <div className="flex flex-col flex-grow p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-xl truncate">Cavaro.io</h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-800 mb-4 text-xs sm:text-sm flex-grow leading-relaxed">
                    Designed and deployed a SaaS platform for real-time cloud solutions using Python, React, PostgreSQL, Docker, and AWS (S3, Lambda, RDS, Route 53). Handled full-stack development and AWS infrastructure with real-time collaboration features using WebSockets and PostgreSQL transaction isolation.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">Python</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">React</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">PostgreSQL</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">Docker</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">AWS</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">WebSockets</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              </div>
              
            <div className="col-span-1">
              <div className="break-inside-avoid rounded-2xl shadow-md border border-gray-200 bg-white overflow-hidden flex flex-col h-full row-span-1">
                <div className="flex flex-col flex-grow p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                      </svg>
                          </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-xl truncate">Personal Finance Tracker</h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-800 mb-4 text-xs sm:text-sm flex-grow leading-relaxed">
                    Built a secure full-stack budgeting tool using FastAPI, PostgreSQL, and React (TypeScript), integrating Plaid API for real-time bank transactions and categorization. Added an OpenAI-powered chat assistant to interpret natural language queries.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">FastAPI</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">React</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">PostgreSQL</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">TypeScript</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">OpenAI</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                      </div>
                        </div>

            <div className="col-span-2">
              <div className="break-inside-avoid rounded-2xl shadow-md border border-gray-200 bg-white overflow-hidden flex flex-col h-full row-span-1 col-span-1 sm:col-span-2 lg:col-span-2">
                <div className="flex flex-col flex-grow p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                      </svg>
                        </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-xl truncate">IaC Web Dashboard</h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-800 mb-4 text-xs sm:text-sm flex-grow leading-relaxed">
                    Developed a web-based dashboard with Python and Terraform to automate provisioning, monitoring, and teardown of AWS environments (dev/staging/prod). Enabled single-click deployment of EC2, RDS, VPC, and IAM roles from the frontend via AWS CDK integration.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">Python</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">Terraform</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">AWS</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">CDK</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">EC2</span>
                    <span className="px-1.5 py-0.5 bg-green-50 text-green-800 text-xs rounded-full border border-green-100">RDS</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full py-12 sm:py-16 md:py-20">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-screen-xl w-full mx-auto">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-16 xl:gap-32 2xl:gap-40 animated">
            <div className="mb-6 sm:mb-8 lg:mb-0">
              <h2 className="font-black text-xl sm:text-2xl relative before:absolute before:w-8 sm:before:w-10 before:rounded-lg before:-top-3 sm:before:-top-4 before:bg-primary before:h-1.5 sm:before:h-2">
                Education
              </h2>
              <p className="mt-4 sm:mt-6 max-w-[600px] text-sm sm:text-base leading-loose">
                Academic background and educational achievements.
              </p>
                          </div>
            <div className="flex flex-col w-full items-start gap-6">
              <div className="relative w-full">
                <div className="group relative flex items-start w-full space-x-4 pb-8">
                  <div className="absolute left-6 top-12 h-full w-0.5 bg-gray-200 group-last:hidden"></div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-gray-100 dark:bg-gray-800 dark:ring-gray-700">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-sm">GMU</span>
                      </div>
                    </div>
                      </div>
                  <div className="min-w-0 flex-1 w-full">
                    <div className="relative rounded-xl border border-gray-200 bg-white py-4 px-5 shadow-sm before:content-[''] before:absolute before:left-[-8px] before:top-6 before:h-0 before:w-0 before:border-t-8 before:border-r-8 before:border-b-8 before:border-l-0 before:border-transparent before:border-r-gray-200">
                      <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">Master's degree in Computer Software Engineering</h3>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">George Mason University</p>
                        </div>
                        <div className="mt-1 sm:mt-0 sm:text-right">
                          <time className="text-xs font-medium text-gray-600 dark:text-gray-400">May 2025</time>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                        <div>
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">Graduate</span>
                        </div>
                        <div>
                          <span className="inline-flex items-center text-xs font-medium gap-1 px-2 py-1 bg-gray-100 rounded-full">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Fairfax, VA</span>
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • GPA: 3.50/4.00
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Focus on software engineering principles, cloud computing, and modern development practices
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Relevant coursework in distributed systems, machine learning, and software architecture
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
              
                <div className="group relative flex items-start w-full space-x-4 pb-8">
                  <div className="absolute left-6 top-12 h-full w-0.5 bg-gray-200 group-last:hidden"></div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-gray-100 dark:bg-gray-800 dark:ring-gray-700">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-sm">JNTU</span>
              </div>
            </div>
          </div>
                  <div className="min-w-0 flex-1 w-full">
                    <div className="relative rounded-xl border border-gray-200 bg-white py-4 px-5 shadow-sm before:content-[''] before:absolute before:left-[-8px] before:top-6 before:h-0 before:w-0 before:border-t-8 before:border-r-8 before:border-b-8 before:border-l-0 before:border-transparent before:border-r-gray-200">
                      <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">Bachelor's degree in Computer Science</h3>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Jawaharlal Nehru Technological University</p>
        </div>
                        <div className="mt-1 sm:mt-0 sm:text-right">
                          <time className="text-xs font-medium text-gray-600 dark:text-gray-400">May 2023</time>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                        <div>
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">Undergraduate</span>
                        </div>
                        <div>
                          <span className="inline-flex items-center text-xs font-medium gap-1 px-2 py-1 bg-gray-100 rounded-full">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Hyderabad, TS</span>
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • GPA: 3.75/4.00
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Comprehensive foundation in computer science fundamentals and programming
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          • Core subjects included data structures, algorithms, databases, and software engineering
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 md:py-lg md:pt-sm flex flex-col items-center gap-6 overflow-x-hidden sm:flex-row md:gap-12">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-screen-xl w-full mx-auto flex flex-col w-full animated">
          <h2 className="section-title">Contact me</h2>
          <div className="w-full flex flex-col lg:flex-row justify-between gap-6 mt-6">
            <div className="flex flex-col gap-8">
              <p className="text-sm sm:text-base">
                Feel free to contact me any time, my inbox is always open.
              </p>
              <div className="flex gap-6 text-xl">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile" className="hover:text-primary transition-colors">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Connect with me on LinkedIn" className="hover:text-primary transition-colors">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </div>
                      </div>
            <form className="w-full" action="https://formsubmit.co/your-email@example.com" method="POST">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-4">
                  <input className="bg-white p-4 rounded-lg focus:border-primary border-gray-300 focus:ring-primary focus:outline-none border-2" placeholder="Name" required name="name"/>
                  <input className="bg-white p-4 rounded-lg focus:border-primary border-gray-300 focus:ring-primary focus:outline-none border-2" placeholder="Email address" type="email" required name="email"/>
                  <input className="bg-white p-4 rounded-lg focus:border-primary border-gray-300 focus:ring-primary focus:outline-none border-2" placeholder="Subject" required name="_subject"/>
                      </div>
                <div className="flex md:col-span-2 gap-4">
                  <textarea className="bg-white border-gray-300 p-4 w-full rounded-lg focus:border-primary focus:ring-primary focus:outline-none border-2 resize-y min-h-60 md:min-h-full" name="message" placeholder="Your message" required></textarea>
                </div>
              </div>
              <div className="w-full flex justify-end mt-8">
                <button className="btn-primary">
                  <span className="relative z-10 flex gap-2 items-center justify-center">
                    Send email
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"></path>
                      <path d="M6 12h16"></path>
                    </svg>
                  </span>
                </button>
            </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-screen-xl w-full mx-auto py-10 border-t border-gray-300 flex w-full flex-col justify-between gap-4 sm:flex-row text-slate-700">
        <span className="text-sm">Copyright © 2025 Akshitha Kolanupaka. All rights reserved.</span>
        <div className="flex gap-6 text-lg text-slate-600">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile" className="hover:text-primary transition-colors">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Connect with me on LinkedIn" className="hover:text-primary transition-colors">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}