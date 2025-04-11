import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import AnimatedText from '../components/AnimatedText.jsx'; 

const About = () => {
  const [hasCopied, setHasCopied] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setHasCopied(text === 'vishwagautam57@gmail.com' ? 'email' : 'number');
    setTimeout(() => setHasCopied(''), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      {/* Animated About Me Heading */}
      <AnimatedText text="About Me" />

      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* About Me Content */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="about-me" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I'm Kumar Gautam</p>
              <p className="grid-subtext">
                A passionate Web Developer from Muzaffarpur, India. I love crafting full-stack web apps and IoT-based smart systems that create real impact. Currently pursuing B.Tech in ECE (VLSI & Embedded Systems) from IIIT Manipur.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/techStack.png" alt="tech-stack" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed tracking-wide grid-subtext">
                <span className='font-bold text-green-500'>MERN Stack Developer —</span> <br />
                <span className="font-semibold text-gray-300">Frontend:</span> HTML, CSS, JavaScript, React.js, GSAP, Material UI, Framer Motion. <br />
                <span className="font-semibold text-gray-300">Backend:</span> Node.js, Express.js, JWT Authentication. <br />
                <span className="font-semibold text-gray-300">Database:</span> MongoDB, MongoDB Atlas, MySQL, Cloudinary. <br />
                <span className="font-semibold text-gray-300">Payment Integration:</span> Stripe, Razorpay. <br />
                <span className="font-semibold text-gray-300">Tools & Deployment:</span> VS Code, Git, GitHub, Vercel, Render. <br />
                <span className="font-semibold text-gray-300">IoT & Embedded Systems:</span> Arduino, IoT Platforms, LoRa, GSM Communication.
              </p>
            </div>
          </div>
        </div>

        {/* Globe View */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 26.12, lng: 85.39, text: 'I live here', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Available for Collaboration & Remote Work</p>
              <p className="grid-subtext">
                I'm open to freelance opportunities, internships, and collaborative projects worldwide.
              </p>
              <Button name="Let's Connect" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Projects Passion */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="projects" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Projects & Passion</p>
              <p className="grid-subtext">
                I am driven by a passion for leveraging technology to build innovative solutions that solve real-world problems and enhance user experiences.
                My project portfolio showcases a diverse skill set across modern web development and IoT systems.
                Key projects include a Real-Time Crypto Tracker enabling users to monitor live cryptocurrency prices and market trends with interactive UI, a fully-featured eCommerce Platform with secure payment gateways and optimized performance, and an IoT-based Forest Fire Warning System designed using Arduino & LoRa communication for real-time environmental monitoring and early warning alerts.
                Each project reflects my commitment to building scalable, user-centric, and performance-driven solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Me */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid4.png" alt="contact" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
            <div className="space-y-2 mt-4 items-start">
              <p className="text-lg text-left text-green-500">Contact Me</p>

              <div className="pt-4 copy-container" onClick={() => handleCopy('vishwagautam57@gmail.com')}>
                <img src={hasCopied === 'email' ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-xl text-gray_gradient text-white font-bold">
                  vishwagautam57@gmail.com
                </p>
              </div>

              <div className="pt-4 copy-container" onClick={() => handleCopy('+91 8789034892')}>
                <img src={hasCopied === 'number' ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-xl text-gray_gradient text-white font-bold">
                  +91 8789034892
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
