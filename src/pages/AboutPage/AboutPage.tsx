import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Corner from "../../components/Corner/Corner";
import H2 from "../../components/H2";
import P from "../../components/P";
import { isMobile } from "../../helpers/functions";
import { StyledAboutPage } from "./AboutPage.css";

const boxVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <StyledAboutPage id="about">
      <H2>About</H2>
      <AnimationWrapper>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </P>
      </AnimationWrapper>
    </StyledAboutPage>
  );
};

export default AboutPage;
