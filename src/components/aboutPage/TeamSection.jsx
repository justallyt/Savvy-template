import React from 'react'
import { getTeamMembers } from '../../data/team'
import TeamMember from '../TeamMember'

const TeamSection = () => {
  const members = getTeamMembers()
  return (
    <div className='team-wrapper'>
             <div className="inner-row">
                     <div className="team-wrapper-content">
                           <div className="section-intro">
                                    <div className="left-side" data-aos="fade-right">
                                             <div className="intro-hover">
                                                    <h2>Our Team</h2>
                                             </div>
                                             <h1>Meet the Expert Team</h1>
                                    </div>
                                    <div className="right-side" data-aos="fade-left">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut id eu elit augue felis. Penatibus in erat sed id massa, feugiat. Quam null</p>
                                            <div className="btns">
                                                    <a href="s">View more</a>
                                            </div>
                                    </div>
                           </div>

                           <div className="experts-row">
                                 { members.slice(0, 3).map((member, index) => (
                                         <TeamMember data={member} key={index} />
                                 ))}
                                     
                           </div>
                     </div>
             </div>
    </div>
  )
}

export default TeamSection