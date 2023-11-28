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
          padding: "1rem 1.5rem",
          overflow: "scroll",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          }
        }}>

        <h6
          style={{
            lineHeight: '2rem',
            fontWeight: 'bold',
            fontStyle: "italic",
            color : "white"
          }}
        >
          You have become my closest friend.
          <br></br>
          It's been just about a year,
          <br></br>
          And you're the one I turn to
          <br></br>
          When I'm down and need an ear.
          <br></br>
          <br></br>


          In the realm of secrets, we found our own,
          <br></br>
          A place where we could call our home.
          <br></br>
          With every word, a joyous tone,
          <br></br>
          Talking to you, never felt alone.
          <br></br>
          <br></br>


          The way you smile,
          <br></br>
          it brings my heart warmth
          <br></br>
          You have always been there for me
          <br></br>
          As I have been for you.
          <br></br>
          <br></br>


          You've become so important in my life.
          <br></br>
          Things would be different without you.
          <br></br>
          The days where you are away
          <br></br>
          always makes me feel blue
          <br></br>
          <br></br>


          A wish for the day, your touch so near,
          <br></br>
          Come, my love, let's banish any fear.
          <br></br>
          Take my hand, let whispered words appear,
          <br></br>
          We'll dance beneath stars, our love sincere.
          <br></br>
          <br></br>


          I thank you for all the times we've shared.
          <br></br>
          It has been the best year ever.
          <br></br>
          Even when we go our separate ways,
          <br></br>
          The bond we share, I will never sever.

        </h6>
      </Container>
      <Link to='/' className='mt-4'>
        <HomeButton />
      </Link>
    </div>
  )
}

export default Poem