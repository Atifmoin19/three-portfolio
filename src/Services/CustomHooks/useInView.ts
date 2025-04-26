import { useEffect, useState } from "react";

const useInView = (props: any) => {
  const { targetRef, offset } = props;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update isInView state when target element enters or leaves the viewport
        setIsInView(entry.isIntersecting);
      },
      {
        // Optional options: root, rootMargin, threshold
        root: null, // viewport
        rootMargin: offset ? offset : "50px",
        threshold: 0.5, // 0.5 means 50% of the element must be visible
      }
    );

    if (targetRef && targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer
    return () => {
      if (targetRef && targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []); // Empty array means this effect runs only once on mount
  return isInView;
};

export default useInView;
