import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottieAnimationProps<T extends object> {
  animationData: T;
}

function LottieAnimation<T extends object>({ animationData }: LottieAnimationProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: AnimationItem | undefined;

    if (containerRef.current) {
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => {
      anim?.destroy();
    };
  }, [animationData]);

  return <div ref={containerRef} />;
}

export default LottieAnimation;
