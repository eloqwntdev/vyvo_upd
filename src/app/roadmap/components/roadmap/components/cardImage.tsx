import React, {
  ReactNode,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";

interface CardsProps {
  children: JSX.Element;
  saw?: boolean;
}

const CardImage: React.FC<CardsProps> = ({ children, saw }) => {
  const [inView, SetInView] = useState(false);
  useEffect(() => {
    if (saw) {
      SetInView(saw);
    }
  }, [saw]);

  const id = children.props.id || "";
  const videoRef = useRef<HTMLVideoElement>(null);
  const lottieRef = useRef<any>(null);
  useEffect(() => {
    if (!inView) return;

    if (id === "video" && videoRef.current) {
      videoRef.current.play();
    }

    if (id === "lottie" && lottieRef.current) {
      lottieRef.current.play();
    }
  }, [inView]);
  console.log("children.props:", children.props);

  if (id === "video") {
    return (
      <video
        ref={videoRef}
        id="video"
        muted
        playsInline
        preload="metadata"
        className="z-10 w-full"
        key={"/roadmap-img/roadmap-cards/vyvo.webm"}
      >
        <source src={"/roadmap-img/roadmap-cards/vyvo.webm"} />
        Your browser does not support the video tag.
      </video>
    );
  }

  if (id === "lottie") {
    return React.cloneElement(children, {
      lottieRef,
      autoplay: false,
    });
  }

  if (id === "deviceCard") {
    return React.cloneElement(children, {
      saw: inView,
    });
  }

  return children;
};

export default CardImage;
