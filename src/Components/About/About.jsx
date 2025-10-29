import React from "react";
import { Tilt } from "react-tilt";
import ReactTypingEffect from "react-typing-effect";
import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] xl:px-[13vw] font-sans mt-16 md:mt-1"
    >
      <div className="flex flex-col gap-10 xl:gap-30 xl:flex-row justify-between items-center">

        {/* Left Side */}
        <div className="xl:w-[33vw] xl:mt-10 2xl:mt-1 items-center text-center xl:items-start xl:text-left flex flex-col justify-center xl:justify-end">

          {/* Profile Picture */}
          <div
            className="w-48 h-48 sm:h-64 md:w-[15rem] md:h-[15rem] border-2 border-purple-700 rounded-full"
          >
            <img
              src={profileImage}
              alt="Sanzid Sahil"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </div>

          {/* Brief Description */}
          <div className="text-gray-300 mt-6">

            {/* Greeting */}
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Sanzid Sahil
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-lg lg:text-2xl lg:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Frontened Developer',
                'UI/UX Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
            <p>
              A passionate frontend developer dedicated to crafting amazing, user-friendly web applications. Skilled in HTML, CSS, JavaScript, and modern frameworks, I bring ideas to life through clean and efficient code
            </p>
          </div>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1YHxa_bTprnwYRLehkyT9riwBsr0Yo7jh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="h-full w-full max-w-xl mx-auto bg-gray-50 from-[#000000] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] shadow-lg min-w-0 px-2 sm:px-0">
          <div className="flex flex-row">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-[#000000]">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-xs text-gray-500 text-gray-400 font-mono">
              coder.js
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-gray-300 border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
            <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-5 opacity-10 filter blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-5 opacity-10 filter blur-3xl"></div>
            <div className="relative flex">
              <div className="hidden md:flex flex-col items-end pr-4 text-gray-400 text-gray-500 font-mono text-xs">
                <div className="leading-relaxed select-none opacity-70">1</div>
                <div className="leading-relaxed select-none opacity-70">2</div>
                <div className="leading-relaxed select-none opacity-70">3</div>
                <div className="leading-relaxed select-none opacity-70">4</div>
                <div className="leading-relaxed select-none opacity-70">5</div>
                <div className="leading-relaxed select-none opacity-70">6</div>
                <div className="leading-relaxed select-none opacity-70">7</div>
                <div className="leading-relaxed select-none opacity-70">8</div>
                <div className="leading-relaxed select-none opacity-70">9</div>
                <div className="leading-relaxed select-none opacity-70">10</div>
                <div className="leading-relaxed select-none opacity-70">11</div>
                <div className="leading-relaxed select-none opacity-70">12</div>
              </div>
              <code className="font-mono text-xs md:text-sm lg:text-base w-full relative">
                <div>
                  <span className="mr-2 font-mono text-purple-700 text-pink-400">
                    const
                  </span>
                  <span className="mr-2 text-blue-600 font-mono text-violet-400">
                    coder
                  </span>
                  <span className="mr-2 text-purple-700 font-mono text-pink-400">=</span>
                  <span className="text-gray-500 text-gray-400 font-mono">{"{"}</span>
                </div>
                <div className="pl-6">
                  <span className="text-gray-800 text-white font-mono">name: </span>
                  <span className="text-gray-500 text-gray-400 font-mono">'</span>
                  <span className="text-emerald-600 text-green-400 font-mono">
                    Sanzid Sahil
                  </span>
                  <span className="text-gray-500 font-mono text-gray-400">',</span>
                </div>
                <div className="pl-6">
                  <span className="text-gray-800 font-mono text-white">role: </span>
                  <span className="text-gray-500 font-mono text-gray-400">'</span>
                  <span className="text-emerald-600 font-mono text-green-400">
                    Frontend Developer
                  </span>
                  <span className="text-gray-500 font-mono text-gray-400">',</span>
                </div>
                <div className="pl-6">
                  <span className="text-gray-800 font-mono text-white">seniority: </span>
                  <span className="text-gray-500 font-mono text-gray-400">'</span>
                  <span className="text-emerald-600 font-mono text-green-400">
                    Junior
                  </span>
                  <span className="text-gray-500 font-mono text-gray-400">',</span>
                </div>
                <div className="pl-6">
                  <span className="text-gray-800 font-mono text-white">location: </span>
                  <span className="text-gray-500 font-mono text-gray-400">'</span>
                  <span className="text-emerald-600 font-mono text-green-400">
                    Bangladesh
                  </span>
                  <span className="text-gray-500 font-mono text-gray-400">',</span>
                </div>
                <div className="pl-6">
                  <span className="text-gray-800 font-mono text-white">email: </span>
                  <span className="text-gray-500 font-mono text-gray-400">'</span>
                  <span className="text-emerald-600 font-mono text-green-400">
                    sanzid.sahil.999@gmail.com 
                  </span>
                  <span className="text-gray-500 font-mono text-gray-400">',</span>
                </div>
                <div className="pl-6">
                  <span className="text-gray-800 font-mono text-white">skills: </span>
                  <span className="text-gray-500 font-mono text-gray-400">[</span>
                  <div className="pl-6 flex font-mono flex-wrap">
                    <span className="tech-item font-mono">
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-cyan-400 font-mono">React</span>
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-gray-500 font-mono text-gray-400 mr-3">, </span>
                    </span>
                    <span className="tech-item">
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-cyan-400 font-mono">TailwindCSS</span>
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-gray-500 font-mono text-gray-400 mr-3">, </span>
                    </span>
                    <span className="tech-item">
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-cyan-400 font-mono">NodeJS</span>
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-gray-500 font-mono text-gray-400 mr-3">, </span>
                    </span>
                    <span className="tech-item">
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-cyan-400 font-mono">CSS</span>
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-gray-500 font-mono text-gray-400 mr-3">, </span>
                    </span>
                    <span className="tech-item">
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-cyan-400 font-mono">HTML</span>
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-gray-500 font-mono text-gray-400 mr-3">, </span>
                    </span>
                    <span className="tech-item">
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-cyan-400 font-mono">Figma</span>
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-gray-500 font-mono text-gray-400 mr-3">, </span>
                    </span>
                    <span className="tech-item">
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-cyan-400 font-mono">Git</span>
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-gray-500 font-mono text-gray-400 mr-3">, </span>
                    </span>
                    <span className="tech-item">
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-cyan-400 font-mono">GitHub</span>
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-gray-500 font-mono text-gray-400 mr-3">, </span>
                    </span>
                    <span className="tech-item">
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-cyan-400 font-mono">JavaScript</span>
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-gray-500 font-mono text-gray-400 mr-3">, </span>
                    </span>
                    <span className="tech-item">
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                      <span className="text-cyan-400 font-mono">TypeScript</span>
                      <span className="text-gray-500 font-mono text-gray-400">'</span>
                    </span>
                  </div>
                  <div className="pl-0">
                    <span className="text-gray-500 font-mono text-gray-400">],</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500 text-gray-400 font-mono">{"};"}</span>
                </div>
              </code>
            </div>
            <div className="mt-6 border-t border-gray-300 border-gray-800 pt-3 text-xs text-gray-500 flex justify-between items-center">
              <div className=" font-mono">UTF-8</div>
              <div className=" font-mono">JavaScript</div>
              <div className=" font-mono">Ln 14, Col 2</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
