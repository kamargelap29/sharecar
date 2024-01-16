import * as React from "react";
import useIntersectionObserver from "~/hooks/use-intersection";
import WelcomeHome from "./welcome-home";

const LOCAL_STORAGE_KEY = "share-car";
const canUseDOM = typeof window !== "undefined";
const getLocalStorage = (key: string) => canUseDOM && localStorage.getItem(key);
const setLocalStorage = (key: string, value: string) =>
  canUseDOM && localStorage.setItem(key, value);

export function HomepagePopup() {
  const existingStorage = getLocalStorage(LOCAL_STORAGE_KEY);
  const [isTriggered, setIsTriggered] = React.useState<boolean>(false);
  const [isHaveStorage, setIsHaveStorage] = React.useState<boolean>(
    Boolean(existingStorage && existingStorage === "1"),
  );
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const setCloseStateToStorage = () => {
    setLocalStorage(LOCAL_STORAGE_KEY, "1");
    setIsHaveStorage(true);
  };

  const handleToogle = () => {
    setIsOpen(!isOpen);
    setCloseStateToStorage();
  };

  React.useEffect(() => {
    // Only open the dialog when intersecting
    if (isVisible && !isTriggered && !isHaveStorage) {
      setIsOpen(true);
      setIsTriggered(true);
    }
  }, [isVisible, isTriggered, isHaveStorage]);
  return (
    <div id="welcome-message-trigger" ref={ref}>
      <WelcomeHome
        description={`https://maimedia.sgp1.cdn.digitaloceanspaces.com/sharecar/promo-slider/PROMO%20326%20x%20500%20%28BALI%29.jpg`}
        // onCtaClick={handleClickShare}
        isOpen={isOpen}
        onToggle={handleToogle}
      />
    </div>
  );
}
// export default HomepagePopup;
