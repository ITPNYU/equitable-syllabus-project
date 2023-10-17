import React from "react"
import TeamCard from "./TeamCard"

import BlairAvatar from "../../images/team/blair-avatar.png"
import ChaskiAvatar from "../../images/team/chaski-avatar.png"
import DivyaAvatar from "../../images/team/divya-avatar.png"
import JennaAvatar from "../../images/team/jenna-avatar.png"
import KayleyAvatar from "../../images/team/kayley-avatar.png"
import SophiaAvatar from "../../images/team/sophia-avatar.png"
import BiancaAvatar from "../../images/team/bianca-avatar.png"

import Blair from "../../images/team/blair.png"
import Chaski from "../../images/team/chaski.png"
import Divya from "../../images/team/divya.png"
import Jenna from "../../images/team/jenna.png"
import Kayley from "../../images/team/kayley.png"
import Sophia from "../../images/team/sophia.png"
import Bianca from "../../images/team/bianca.png"

function Team() {
  return (
    <div className="section--top team">
      <div className="section section--center section--subtitle section--team">
        <h1 className="section__heading section__heading-subtitle">Equitable Syllabus Project Team</h1>
        <p className="body-large">The Equitable Syllabus Project team strives to help faculty re-engage their course material with an equitable lens.</p>
        <div className="team__avatar-wrapper">
          <img className="team__avatar" src={BlairAvatar} alt="Blair Simmons" />
          <img className="team__avatar" src={SophiaAvatar} alt="Sophia Edwards" />
          <img className="team__avatar" src={KayleyAvatar} alt="Kayley Chery" />
          <img className="team__avatar" src={JennaAvatar} alt="Jenna Han" />
          <img className="team__avatar" src={BiancaAvatar} alt="Bianca Gan" />
        </div>
      </div>
      <div className="section">
        <h2 className="section__title text-center">Current Members</h2>
        <div className="team__card-wrapper">
          <TeamCard image = {Blair} name = "Blair Simmons" role = "Project Manager" email = "blair.simmons@nyu.edu"/>
          <TeamCard image = {Jenna} name = "Jenna Han" role = "UI/UX Designer & Front-End Developer" email = "jennahan@nyu.edu"/>
          <TeamCard image = {Kayley} name = "Kayley Chery" role = "Research Specialist" email = "kac7748@nyu.edu "/>
          <TeamCard image = {Sophia} name = "Sophia Edwards" role = "Student Lead" email = "sge7432@nyu.edu"/>
          <TeamCard image = {Bianca} name = "Bianca Gan" role = "Researcher" email = "bag5392@nyu.edu"/>
        </div>
      </div>
      <div className="section">
        <h2 className="section__title text-center">Alumni</h2>
        <div className="team__avatar-wrapper">
          <img className="team__avatar" src={ChaskiAvatar} alt="Chaski No" />
          <img className="team__avatar" src={DivyaAvatar} alt="Divya Mehra" />
        </div>
        <div className="team__card-wrapper">
          <TeamCard image = {Chaski} name = "Chaski No" role = "Technical Project Manager" email = "chaski@nyu.edu"/>
          <TeamCard image = {Divya} name = "Divya Mehra" role = "Researcher" email = "dm4924@nyu.edu"/>
          <TeamCard name = "Rashida Kamal" role = "Technical Project Manager" />
          <TeamCard name = "Spencer Ratanavanh" role = "Researcher" />
          <TeamCard name = "Polina Kolesnikova" role = "Researcher" />
        </div>
      </div>
    </div>
  )
}

export default Team
