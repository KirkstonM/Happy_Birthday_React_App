import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import Buttons from '../../components/Buttons/Buttons';
import './home.css';
import Image1 from '../../images/birth.png';
import { Container } from 'react-bootstrap';
import useWindowSize from 'react-use/lib/useWindowSize'

function Home() {

  const [countDown, setCountDown] = useState(5);
  const [confettiFire, setConfettiFire] = useState(false);
  const { width, height } = useWindowSize()


  useEffect(() => {
    const storedConfettiFire = sessionStorage.getItem('confettiFire');

    if (storedConfettiFire === 'true') {
      setConfettiFire(true);
    } else {
      const timer = setInterval(() => {
        setCountDown((prev) => {
          const updatedCount = prev - 1;
          if (updatedCount === 0) {
            setConfettiFire(true);
            sessionStorage.setItem('confettiFire', 'true');
            clearInterval(timer);
          }
          return updatedCount;
        });
      }, 1000);
      // sessionStorage.removeItem('confettiFire')

      return () => {
        clearInterval(timer);
        // sessionStorage.removeItem('confettiFire');
      };
    }
  }, []);
  
  
  return (
    <div>
      <Container className='homepage-container'>
        {
          confettiFire
          ?
          <>
          <Confetti 
          width={500 || width}
          height={820 || height}
          />
          <div className='birthday-img'>
          <img src={Image1}
          className='img'
          />
          </div>
          <div className='button-container'>
          <Buttons />
        </div>
          </>
          : (
            <div className='countdown-container'>
              <h1>{countDown}</h1>
            </div>
          )
        }
       
      </Container>
    </div>
  )
}

export default Home
