import React from 'react';
import { Container } from 'react-bootstrap';
import { BsDownload } from "react-icons/bs";
import { Link } from 'react-router-dom';
import HomeButton from '../../components/HomeButton/HomeButton';
import IMAGE_01 from '../../images/poem_image.jpg'

function Poem() {
  return (
    <div
      style={{
        backgroundImage: `url(${IMAGE_01})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '100vw'
      }}
    >
      <Container
        style={{
          width: "365px",
          height: "700px",
          backgroundColor: "transparent",
          borderRadius: "10px",
          border: "2px solid white",
          boxShadow: "rgba(100, 100, 111, 0.2) 5px 10px 30px 10px",
          marginTop: "2rem",
          padding: "1rem 1.5rem"
        }}>
      </Container>
      <Link to='/' className='mt-4'>
        <HomeButton />
      </Link>
    </div>
  )
}

export default Poem