import React from 'react'
import skills from '../components/Data/skills.json'

function Skills() {
  return (
    <>
      <div className="container skills col-sm-6 col-md-4 col-lg-3" id="skills">
        <h1>SKILLS</h1>
        <div className="items">
        {skills.map((data)=>(
          <>
              <div className="item" key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                {/* <img src={`/assets/${data.imageSrc}`} alt="" /> */}
                <img src={data.imageSrc} alt="" />
                <h3>{data.title}</h3>
              </div>
          </>
        ))}
        </div>
      </div>
    </>
  )
}

export default Skills