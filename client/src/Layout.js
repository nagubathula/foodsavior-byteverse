import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Layout({ search, setSearch }) {
   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);
  const appStyle = {
    cursor: "none",
  };

  const circleCursorStyle = {
    cursor: "none",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "1px solid #fb7185",
    position: "fixed",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 9999,
    left: `${cursorPosition.x}px`,
    top: `${cursorPosition.y}px`,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
  };
  const innerDotStyle = {
    cursor: "none",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#fb7185",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <main style={appStyle}>
      <div style={circleCursorStyle}>
        <div style={innerDotStyle}></div>
      </div>
      <Header search={search} setSearch={setSearch} />
      <Outlet />
    </main>
  );
}