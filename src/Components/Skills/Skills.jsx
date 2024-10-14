import React from 'react'
import './Skills.css'
import { FaSquareJs, FaHtml5, FaVuejs, FaReact, FaNode, FaCss3Alt, FaAws } from "react-icons/fa6";
import { BiLogoSpringBoot, BiLogoTypescript } from "react-icons/bi";
import { SiRedux, SiExpress, SiJasmine, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
    return (
        <div className='skills-container' id='skills'>
            
            <div className="skills">
            <div className="skills-title">
                <h1>Skills</h1>
            </div>
            <div  className='skills-grid'>
                <div className="skill"><p>HTML5 <FaHtml5 color='orange' size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "95%" }} /></div> */}
                <div className="skill"><p>CSS3 <FaCss3Alt color='blue' size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "95%" }} /></div> */}
                <div className="skill"><p>Javascript <FaSquareJs color='yellow' style={{background:'black'}} size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "95%" }} /></div> */}
                <div className="skill"><p>TypeScript <BiLogoTypescript color='blue' size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "90%" }} /></div> */}
                <div className="skill"><p>React <FaReact color='#87CEEB' size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "98%" }} /></div> */}
                <div className="skill"><p>Redux <SiRedux color='purple' size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "95%" }} /></div> */}
                <div className="skill"><p>Vue <FaVuejs color='green' size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "95%" }} /></div> */}
                <div className="skill"><p>Vuex <FaVuejs color='green' style={{background:'black'}} size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "95%" }} /></div> */}
                <div className="skill"><p>Node <FaNode color='rgb(65 126 56)' size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "90%" }} /></div> */}
                <div className="skill"><p>Express <SiExpress size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "90%" }} /></div> */}
                <div className="skill"><p>Spring boot <BiLogoSpringBoot color='green' size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "60%" }} /></div> */}
                <div className="skill"><p>SQL <GrMysql color='skyblue' size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "80%" }} /></div> */}
                <div className="skill"><p>AWS <FaAws color='orange' size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "60%" }} /></div> */}
                <div className="skill"><p>Jasmine <SiJasmine color='purple' size='2rem'/></p></div>
                {/* <div className="skill"><hr style={{ width: "90%" }} /></div> */}
                <div className="skill"><p>Mongodb <SiMongodb color='green' style={{background:'black', borderRadius:'20px'}} size='2rem'/></p></div>
                <div className="skill"><p>Git <FaGitAlt color='orange' size='2rem'/></p></div>
                
                </div>
            </div>
        </div>
    )
}

export default Skills