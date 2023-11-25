import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IMAGE_02 from '../../images/story_image.jpg';
import HomeButton from '../../components/HomeButton/HomeButton';

function Story() {


  return (
    <div
      style={{
        backgroundImage: `url(${IMAGE_02})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
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
        }}
      >
        <div
          style={{
            color: "white",
            padding: "2rem 0.2rem",
            lineHeight: '1.6rem',
            fontWeight: 500
          }}>
          <h3 className='mb-4'>SO WHERE SHOULD I START...</h3>
          <p>
            Okay first of all throw up some nice music while you read this, i tried to get some music playing but i failed 	&#129394;. So, lets go back to the day where it all started, yes that day when you right swiped on me and thus marked the start to one amazing friendship, oh yeah also you swiped first not me, i know i know i'm hot, calm down &#128514;. So lets talk about you, finally you turned 18! <span style={{ fontWeight:"bolder"}}>HAPPY BIRTHDAY!!! &#127881;</span>, go all out today and eat till that tummy is full to the brim and also try not to blackout. Mariyam, i didnt imagine nor did i beleive that one year down the line that you would be such an important person in my life, comming from the lowest depths of depression to laughing our asses out talking about farts and shit, it all happened with you, to this day im happy cause i know i met the most amazing person i couldve met at the right time.
            <br></br>
            <br></br>
            Well i guess that's it, have a good one......okay im kidding, calm down &#128514;
            Lets remember the times we shared together, lets start with you being obsessed with my picture(smiling one), God you were such a simp from day one but eh i lowkey enjoyed the attention.
            Started with texts, texts turned to snaps, snaps changed to calls, it was a journey, and between those individual events, al ot happened. The days when we played COD mobile, even though you always camped and i had to carry the entire team alone, i really really enjoyed those times cause i got to play with you and we were at each other's throats just throwing insults at each other and it was wild. The times you were struggling to understand what a comment in programming is &#128514; and also crying saying math is hard, to the days where we fought and made up and alot of other things *winks*. To the days we watched movies together, to the days we sang songs together, to the days we stayed up all night, to the days you annoyed me so much, we were making memories without knowing it.
            <br></br>
            <br></br>
            <h5 className='mb-4'>  Now boo-boo lets talk about the things i love about you. </h5>
            <ul sty>
              <li> Your smile that you try to hide, I remember that first pic i saw of you smiling, that was hella cute!!!</li>
              <li> Your eyes, yeah those sleepy eyes got so much love behind them </li>
              <li> Your annoying mouth, even tho you go on talking for ages, the moment you stop i feel like the world has gone silent</li>
              <li> Your love for me (we all know that)</li>
              <li> Not sure if i should put it in here, but them tiddies, Youzah! Goddamn</li>
              <li> And them thighs, yes, we still have that sandwich agreement</li>
            </ul>

            <h5 className='mb-4'>   Now to the things that you love </h5>
            <ul>
              <li>Me</li>
              <li> Me again</li>
              <li> Hi!, its me again</li>
              <li> The color black followed by red</li>
              <li> Arab food and also other food, oh who are we kidding, you eating everything</li>
              <li> Cats </li>
              <li> Wattpad</li>
              <li> Saudi Arabia</li>
              <li> Shopping</li>
              <li> Annoying me</li>
              <li> Making goofy ass videos</li>
              <li> Singing </li>
              <li> Trying to convert me into Islam</li>
              and the list goes on....
            </ul>
            <br></br>
            I want today to be very special, you're an amazing person and if all the things that happened, led to us meeting i wouldnt change a single thing. I hope in the years to come, this app will still be here to celebrate and remember our friendship and the memories we made together. I love you so much my little angel &#128149; and i hope and pray that you stay happy and get the best in what this world and life has to offer you, so once again <span style={{fontWeight: "bolder"}}>HAPPY BIRTHDAY!!!</span>.

            Oh and also about the poem you kept on reminding me to write on a daily basis and i told you to be patient, well its time you got your poem ( if you have not read it yet first) and also there are some lovely pictures of you in the Gallery. ENJOY!.
          </p>
        </div>

      </Container>
      <Link to='/' className='mt-4'>
        <HomeButton />
      </Link>
    </div>
  )
}

export default Story;