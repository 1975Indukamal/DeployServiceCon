"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const HeroVideo = () => {
  const videoRef = useRef(null);
  const videor = useRef(null);
  const btnr = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isClick , setIsClick]=useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
      } else {
        setIsIntersecting(false);
      }
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef.current]);

  useEffect(() => {
    const video = videor.current;
    const button = btnr.current;

    if (isIntersecting && isClick ) {
      video.play();
      button.style.display = "none";
      setShowControls(true);
    } else {
      video.pause();
      button.style.display = "block";
      setShowControls(false);
    }
  }, [isIntersecting]);

  const handleButtonClick = () => {
    const video = videor.current;
    const button = btnr.current;
  setIsClick(true);
    if (video) {
      video.play();
      button.style.display = "none";
      setShowControls(true);
    }
  };

  const handleVideoEnded = () => {
    const video = videor.current;
    const button = btnr.current;

    if (video && button) {
      video.load();
      video.poster = '/assets/images/Video-thumbnail.webp';
      button.style.display = "block";
      setShowControls(false);
    }
  };

  return (
    <div className={`container    z-30 relative flex flex-col items-center lg:mb-[130px] mb-[60px] rounded-3xl`} ref={videoRef}>
      <div>
        <div className={`relative transition-all duration-500 bg-transparent rounded-3xl4`}>
          <video
          className='block max-w-full mx-auto max-h-screen rounded-3xl'
            ref={videor}
            src='/assets/video/videohom.mp4'
            poster='/assets/images/Video-thumbnail.webp'
            onEnded={handleVideoEnded}
            onPlay={() => setShowControls(true)}
            onPause={() => {
              const video = videor.current;
              const button = btnr.current;

              if (video && button) {
                video.pause();
                button.style.display = "block";
                setShowControls(false);
              }
            }}
            onTimeUpdate={() => {
              const video = videor.current;
              if (video.currentTime === video.duration) {
                handleVideoEnded();
                
              }
            }}
            onSeeking={() => {
              const video = videor.current;
              setIsClick(false);
              video.playbackRate = 1.0; 
            }}
            onSeeked={() => {
              const video = videor.current;
              if (video.paused) {
                video.play();
              }
            }}
            onContextMenu={(e) => e.preventDefault()} 
            controls={showControls}
          ></video>
        <button type='button' onClick={handleButtonClick} ref={btnr} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-none outline-none animate-example'>
        {!showControls &&  <Image width={128} height={128} src="/assets/images/work/videobtn.svg" alt="Play/Pause Button" className='lg:h-[128px] lg:w-[128px] h-[70px] w-[70px]' />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
