import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

function Pointer() {
  const [isHovered, setIsHovered] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    if (isHovered) {
      const pointSize = document.querySelector(".pointer").offsetWidth / 2;
      setPointerPosition({
        top: e.pageY - pointSize,
        left: e.pageX - pointSize,
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <div
        id="wrap"
        style={{
          overflow: "hidden",
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {isHovered && (
          <div
            className="pointer"
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "1000px",
              background: "var(--white, #FFF)",
              transition: ".5s ease-out",
              top: pointerPosition.top + "px",
              left: pointerPosition.left + "px",
              boxShadow: "20px10px3px-3px#00f",
              filter: "blur(20px)",
            }}
          />
        )}
      </div>
    </>
  );
}

export default Pointer;
