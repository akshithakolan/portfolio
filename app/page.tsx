import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
              <div className="relative w-80 h-[28rem] md:order-2 group perspective-1000 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600/10 backdrop-blur-[2px] transform transition-all duration-500 group-hover:backdrop-blur-none"></div>
                <div className="relative w-full h-full overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-blue-500/20">
                  <div className="w-full h-full relative transform transition-all duration-500 group-hover:scale-105">
                    <Image
                      src="/profile.png"
                      alt="Akshitha Kolanupaka"
                      fill
                      sizes="(max-width: 768px) 320px, 320px"
                      className="object-cover object-[50%_-15%] transition-all duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/30 to-transparent opacity-0 transform translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-white text-sm font-light tracking-wider">Software Developer</p>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left md:order-1 md:flex-1 animate-slide-in-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Akshitha Kolanupaka</h1>
                <div className="flex justify-center md:justify-start gap-6 mb-8">
                  <Link href="https://linkedin.com/in/akshitha-kolanupaka" 
                    className="hover:text-blue-200 transition-all duration-300 hover:scale-110 flex items-center gap-2">
                    <span>LinkedIn</span>
                  </Link>
                  <Link href="https://github.com/AkshithaKolanu" 
                    className="hover:text-blue-200 transition-all duration-300 hover:scale-110 flex items-center gap-2">
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Professional Summary</h2>
          <div className="max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
            <p className="text-gray-700 leading-relaxed animate-slide-up">
              Dedicated and detail-oriented professional with a strong foundation in software development and a passion for creating efficient solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-slide-up">
              <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
              <p className="text-gray-600">Computer Science and Engineering</p>
              <p className="text-gray-500">Jawaharlal Nehru Technological University</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Skills</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-slide-up">
                <h3 className="font-semibold mb-2">Programming Languages</h3>
                <p className="text-gray-600">Python, Java, JavaScript</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-slide-up [animation-delay:200ms]">
                <h3 className="font-semibold mb-2">Web Technologies</h3>
                <p className="text-gray-600">HTML, CSS, React.js</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-slide-up [animation-delay:400ms]">
                <h3 className="font-semibold mb-2">Tools & Frameworks</h3>
                <p className="text-gray-600">Git, VS Code, Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Certifications</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-slide-up">
                <h3 className="text-xl font-semibold mb-2">AWS Certified Cloud Practitioner</h3>
                <p className="text-gray-600">Amazon Web Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Projects</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8">
              <div className="bg-gray-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-slide-up group">
                <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                <p className="text-gray-700 mb-4">A personal portfolio website built using Next.js and Tailwind CSS.</p>
                <div className="flex gap-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm group-hover:bg-blue-200 transition-colors duration-300">Next.js</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm group-hover:bg-blue-200 transition-colors duration-300">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <p>&copy; {new Date().getFullYear()} Akshitha Kolanupaka. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
