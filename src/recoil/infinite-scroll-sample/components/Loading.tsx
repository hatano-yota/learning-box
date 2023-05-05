import { usePaging } from "@/recoil/infinite-scroll-sample/dataflow/pokemonList";
import { useEffect, useRef } from "react";

/**
 * Loading component.
 * Triggers an incremental loading when intersects with viewport.
 */

const Loading = () => {
  const observedRef = useRef<HTMLParagraphElement | null>(null);
  const { loadNextPage } = usePaging();

  // TODO: 実装についての理解
  useEffect(() => {
    if (observedRef.current === null) {
      return undefined;
    }
    let lastTriggerTime = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (lastTriggerTime + 1000 <= Date.now()) {
              lastTriggerTime = Date.now();
              loadNextPage();
            }
          }
        }
      },
      {
        rootMargin: "0px 0px 100px 0px",
      },
    );
    observer.observe(observedRef.current);
    return () => {
      observer.disconnect();
    };
  }, [loadNextPage]);

  return <p ref={observedRef}>Loading...</p>;
};

export default Loading;
