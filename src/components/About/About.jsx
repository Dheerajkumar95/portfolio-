import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Dheeraj&nbsp;Kumar
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-cyan-400 leading-tight whitespace-nowrap">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'MERN Stack Developer',
                'React Native Developer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-cyan-400">{cursor}</span>
              )}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate Full-Stack Developer specializing in 
            <span className="text-cyan-400 font-semibold"> MERN </span> stack and 
            <span className="text-cyan-400 font-semibold"> MongoDB </span>. 
            With strong skills in building scalable web and mobile applications, 
            I have worked on projects like CRM systems, quiz/test portals,  WhatsApp Clone, 
            food ordering platforms, and real-time chat applications. 
            My expertise includes creating seamless user experiences, 
            integrating APIs, managing databases with 
            <span className="text-cyan-400 font-semibold"> MongoDB </span>, 
            and delivering end-to-end solutions with modern technologies.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/14Z4TvypDsmCEgpXRACFC0IwE6A_Av-sU/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-2 px-8 rounded-lg mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #00bcd4, #2196f3)',
              boxShadow: '0 0 2px #00bcd4, 0 0 2px #00bcd4, 0 0 40px #00bcd4',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 mt-8 flex justify-center md:justify-end">
          <Tilt
            className="w-40 h-40 sm:w-54 sm:h-54 md:w-[20rem] md:h-[20rem] border-4 border-cyan-400 rounded-lg "
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Dheeraj Kumar"
              className="w-full h-full rounded object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
