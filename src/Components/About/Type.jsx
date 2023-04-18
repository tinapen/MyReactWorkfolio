import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "Aspiring Web Developer",
            "Coder",
            "Tech Enthusiast",
            "Dreamer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
};
