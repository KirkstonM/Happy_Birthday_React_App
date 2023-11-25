import React from 'react';
import { images } from '../../images/images';
import { Gallery } from "react-grid-gallery";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeButton from '../../components/HomeButton/HomeButton';

function PhotoGallery() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Container style={{
        width: "370px",
        height: "700px",
        backgroundColor: "transparent",
        borderRadius: "10px",
        border: "2px solid white",
        boxShadow: "rgba(100, 100, 111, 0.2) 5px 10px 30px 10px",
        overflow: "scroll",
        scrollbarWidth: "none",
        marginTop: "2rem",
      }}>
        <Gallery images={images} />
      </Container>

      <Link to='/' className='mt-4'>
        <HomeButton />
      </Link>
    </div>
  )
}

export default PhotoGallery