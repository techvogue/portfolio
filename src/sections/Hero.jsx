import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { Leva } from 'leva';
import { Suspense, useEffect, useRef } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';

import Button from '../components/Button.jsx';
import Cube from '../components/Cube.jsx';
import { HackerRoom } from '../components/HackerRoom.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import CanvasLoader from '../components/Loading.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Rings from '../components/Rings.jsx';
import Target from '../components/Target.jsx';
import { calculateSizes } from '../constants/index.js';
import BlurIn from '../components/BlurIn';
const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const downloadButtonRef = useRef();

  useEffect(() => {
    if (!isMobile) {
      gsap.to(downloadButtonRef.current, {
        y: -50,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 0.8,
      });
    }
  }, [isMobile]);


  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      {/* Text Content */}
      <div className="w-full mx-auto flex flex-col sm:mt-24 mt-20 c-space gap-3 z-10">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans mb-4">
          Hi, I am Kumar Gautam <span className="waving-hand">👋</span>
        </p>
        <BlurIn>Tech Enthusiast | Full Stack Developer</BlurIn>
        {/* <p className="hero_tag text-gray_gradient">
          Tech Enthusiast | Full Stack Developer
        </p> */}
      </div>

      {/* 3D Canvas Section */}
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Call to Action Buttons */}
      <div className="absolute bottom-16 sm:bottom-8 left-0 right-0 w-full z-10 c-space">
        <div className="flex justify-between items-center w-full flex-col sm:flex-row gap-5">
          {/* Left Button */}
          <a href="#about" className="w-fit">
            <Button
              name="Let's build something awesome"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96"
            />
          </a>

          {/* Right Download Resume Button */}
          <a
            href="/assets/Kumar_Gautam.pdf"
            download="Kumar_Gautam"
            ref={downloadButtonRef}
            className="relative w-fit"
          >
            <Button
              name="Download Resume"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96 pr-10"
            />
            <AiOutlineDownload
              className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 text-white text-xl"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
