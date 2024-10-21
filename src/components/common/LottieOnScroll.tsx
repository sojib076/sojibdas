import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/Lottie/touchlight.json'; // Import your Lottie file

const LottieOnScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Explicitly typing the ref

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: animationData,
      });

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const maxFrames = 190
        ;
        const scrollFraction = scrollPosition / (document.body.scrollHeight - window.innerHeight-100);
        const frame = Math.min(maxFrames, Math.max(0, scrollFraction * maxFrames));
        anim.goToAndStop(frame, true);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        anim.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
        className='z-10 relative 
        lg:mt-20
        mt-10
        
        lg:h-[500px] 
       

        transform rotate-180
        '
    
    ></div>
  );
};

export default LottieOnScroll;
