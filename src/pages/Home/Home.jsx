import React from "react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeCard from "./HomeCard"

import DownIcon from "../../icons/down.svg"
import EquityIcon from "../../icons/equity.svg"
import InclusivityIcon from "../../icons/inclusivity.svg"
import EmpowermentIcon from "../../icons/empowerment.svg"
import GrowthIcon from "../../icons/growth.svg"
import QuotePink from "../../icons/quotePink.svg"
import QuoteYellow from "../../icons/quoteYellow.svg"
import SparkleLarge from "../../icons/sparkle-large.svg"
import SparkleSmall from "../../icons/sparkle-small.svg"

import HeroDatabaseImg from "../../images/home/hero-database.png"
import HeroFilterImg from "../../images/home/hero-filter.png"
import HeroRSImg from "../../images/home/hero-research-service.png"
import HeroSGImg from "../../images/home/hero-syllabus-guide.png"
import SGImg from "../../images/home/syllabus-guide.png"
import DBImg from "../../images/home/database.png"
import RSImg from "../../images/home/research-service.png"
import SWImg from "../../images/home/syllabus-workshop.png"

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <>
    <div className="section section--top section--hero">
      <div className="hero">
        <div className="hero__chip">
          <p className="body-default">
            <span className="hero__dot"></span>Built for ITP/IMA professors
          </p>
        </div>
        <h1 className="hero__heading">Making Education More Inclusive</h1>
        <p className="hero__subtitle subtitle">Free tools and frameworks to help you create an equity-aligned syllabus</p>
        <div className="hero__bttn-wrapper">
          <button onClick={() => navigate("/syllabus-guide")} className="bttn--primary bttn--primary--hero">Syllabus Guide</button>
          <button onClick={() => navigate("/research-database")}className="bttn--secondary bttn--secondary--hero">Research Database</button>
        </div>
        <div className="hero__handwritten-wrapper">
          <p className="hero__handwritten">Research Service</p>
          <p className="hero__handwritten">Syllabus Guide</p>
          <p className="hero__handwritten">Research Database</p>
        </div>
      </div>
      <div className="hero__img-wrapper">
        <img className="hero__img" src={HeroRSImg} alt="research service" />
        <img className="hero__img" src={HeroSGImg} alt="syllabus guide" />
        <img className="hero__img" src={HeroDatabaseImg} alt="research database feed" />
        <img className="hero__img" src={HeroFilterImg} alt="research database filter" />
        <img className="hero__img" src={SparkleLarge} alt="large sparkle" />
        <img className="hero__img" src={SparkleSmall} alt="small sparkle" />
        <img className="hero__img" src={SparkleSmall} alt="small sparkle" />
      </div>
    <div className="learn-more">
      <img src={DownIcon} alt="" />
      <p id="see-more">Learn More</p>
    </div>
    </div>
    <div className="section">
      <h2 className="section__heading section__heading-subtitle">A Syllabus is Much More Than A Contract Between Students and Teachers</h2>
      <p className="subtitle">An effective syllabus can foster...</p>
      <div className="home__card-wrapper">   
        <HomeCard icon={EquityIcon} heading="Equity" text="Level the playing field for student success"/>
        <HomeCard icon={InclusivityIcon} heading="Inclusivity" text="Create an inclusive learning environment"/>
        <HomeCard icon={EmpowermentIcon} heading="Empowerment" text="Empower students’ learning experience"/>
        <HomeCard icon={GrowthIcon} heading="Growth" text="Help students and faculty learn and grow together"/>
      </div>
    </div>
    <div className="section">
      <h2 className="section__heading">Syllabus Resources</h2>
      <div className="section__content">
        <div className="section__img-wrapper section__img-wrapper-sg">
          <img className="section__img section__img-sg" src={SGImg} alt="syllabus guide" />
        </div>
        <div className="section__text">
          <h3 className="section__title">Syllabus Guide</h3>
          <p className="body-large">A template and reference to help you develop your course syllabus. The syllabus guide fosters critical pedagogy by identifying structural and rhetorical shortcomings in the syllabus.</p>
          <button onClick={() => navigate("/syllabus-guide")} className="bttn--primary">View Syllabus Guide</button>
        </div>
      </div>
      <div className="section__content">
        <div className="section__text">
          <h3 className="section__title">Research Database</h3>
          <p className="body-large">Our database of equity-centered resources helps you incorporate diverse voices into your syllabus. We compiled resources from Black, Brown, and Indigenous people, as well as other historically underrepresented groups.</p>
          <button onClick={() => navigate("/research-database")} className="bttn--primary">View Research Database</button>
        </div>
        <div className="section__img-wrapper section__img-wrapper-db">
          <img className="section__img section__img-db" src={DBImg} alt="database" />
        </div>
      </div>
    </div>
    <div className="section">
      <h2 className="section__heading">Syllabus Improvement Services</h2>
      <div className="section__content">
        <div className="section__img-wrapper section__img-wrapper-rs">
          <img className="section__img" src={RSImg} alt="research service" />
        </div>
        <div className="section__text">
          <h3 className="section__title">Research Assistance Service</h3>
          <p className="body-large">Get help creating your syllabus. The Equitable Syllabus Team will recommend resources and identify ways to bridge equity gaps in the course material.</p>
          <button onClick={() => navigate("/research-service")} className="bttn--primary">Get Research Service</button>
        </div>
      </div>
      <div className="section__content">
        <div className="section__text">
          <h3 className="section__title">Syllabus Review Workshop</h3>
          <p className="body-large">Join our collaborative workshop sessions and rework your syllabus to promote equity-aligned practice and curriculum.</p>
          <button onClick={() => navigate("/syllabus-workshop")} className="bttn--primary">Learn About Our Workshop</button>
        </div>
        <div className="section__img-wrapper">
          <img className="section__img" src={SWImg} alt="syllabus workshop" />
        </div>
      </div>
    </div>
    <div className="section section--testimonial">
      <h2 className="section__heading section__heading-left testimonial__heading">What ITP/IMA Professors Say</h2>
      <div className="testimonial-wrapper">
        <div className="testimonial">
          <img className="testimonial__img" src={QuotePink} alt="quote" />
          <p className="body-large">“Working with Divya was a great experience - the syllabus for the class was one which had undergone many iterations over the years, with several faculty adding to it, so it was nice to have the opportunity to review it with fresh eyes, and especially through the lens of equity and inclusion. I came away with a few new references to add to the course materials, and overall appreciated talking through the underlying assumptions of the course.”</p>
          <div className="testimonial__client-wrapper">
            <p className="body-large semibold testimonial__client">Sarah Rothberg</p>
            <p className="body-default testimonial__position">Assistant Arts Professor</p>
          </div>
        </div>
        <div className="testimonial">
          <img className="testimonial__img" src={QuoteYellow} alt="quote" />
          <p className="body-large">“Designing a syllabus can be a lonely process. However, it can be different with ESP! I worked with a student researcher to find more example projects and readings by underrepresented groups to include in my syllabus. On top of practical help from the student researcher, it was a good opportunity for me to be more intentional and conscious about including diverse voices and role models in my course. More than others, I felt supported throughout the process!”</p>
          <div className="testimonial__client-wrapper">
            <p className="body-large semibold">Yeseul Song</p>
            <p className="body-default">Assistant Arts Professor</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home         