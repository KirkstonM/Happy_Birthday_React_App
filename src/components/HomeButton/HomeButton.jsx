import React from 'react';
import { IoHomeOutline } from "react-icons/io5";

function HomeButton() {
  return (
    <div
    style={{
        display : "inline-block",
        width: "60px",
        height : "60px",
        padding: "10px 10px",
        outline: "none",
        color: "white",
        background: "#111",
        cursor: "pointer",
        position: "relative",
        zIndex: "99",
        borderRadius: "10px",
        textDecoration: "none",
        textAlign: "center",
        borderRadius: "10rem",
        textDecoration: "none"
    }}>
              <style>
        {`
          ::before {
            content: "";
            width: 65px;
            height: 60px;
            border-radius: 10rem;
            background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
            position: absolute;
            z-index: -1;
            top: -0.7px;
            left: -0.8px;
            animation: spin 2.5s linear infinite;
          }

          @keyframes spin {
            0% {
              --rotate: 0deg;
            }
          
            100% {
              --rotate: 360deg;
            }
          }
        `}
      </style>
        <IoHomeOutline style={{ fontSize:'2.1rem'}}/>
      </div>
  )
}

export default HomeButton