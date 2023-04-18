import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "IT Student",
            "Aspiring Web Developer",
            "Coder",
            "Tech Enthusiast",
            "Graduating",
            "Dreamer"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
