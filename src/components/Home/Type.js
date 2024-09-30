import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Data Scientist",
          "ML Engineer",
          "Software Developer",
          "Prompt Engineer",
          "Freelancer",
          "Graphics Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
