// Add this to your component or as a separate utility
const enhanceScrollBehavior = () => {
    // Detect scroll start and end for animation purposes
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      document.documentElement.classList.add('scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.documentElement.classList.remove('scrolling');
      }, 150);
    });
  
    // Improve the auto-scroll feature
    window.smoothScrollTo = (element, duration = 1000) => {
      const target = typeof element === 'string' ? 
        document.querySelector(element) : element;
      
      if (!target) return;
      
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;
      
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function - easeInOutCubic for smoother motion
        const ease = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        const easeProgress = ease(progress);
        
        window.scrollTo(0, startPosition + distance * easeProgress);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      
      requestAnimationFrame(animation);
    };
  };
  
  // Call this function in your useEffect
  export default enhanceScrollBehavior;