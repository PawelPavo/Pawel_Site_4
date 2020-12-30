import React from 'react'
import styled from 'styled-components';
import GoogleFontLoader from 'react-google-font-loader';
import { IconContext } from "react-icons"
import { FiEye, FiGithub, FiCamera } from "react-icons/fi"
import { FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiBootstrap, SiTypescript, SiReact, SiMysql, SiCsswizardry, SiHtml5, SiWix } from "react-icons/si"



function ProjectCard({ project }) {

    const [show, setShow] = React.useState(false)
    const handleClick = () => {
        setShow(!show)
    }

    return (
        <ProjectLayout>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Raleway',
                        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
                    },
                    {
                        font: 'Roboto',
                        weights: [100, '400i', 900],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek']}
            />

            <div className="custom-card border-custom-light">
                <div className="name py-2 text-center" style={{ cursor: "default" }}>
                    {project.name}
                </div>
                <div className="row justify-content-center" style={{ cursor: "pointer" }}>
                    <h5 className="my-auto top-icon">
                        <a href={project.git} rel="noreferrer" target="_blank" className="text-orange my-auto"><FiGithub /></a>
                    </h5>
                    <div className="my-auto mx-3 show-text-box">
                        <div onClick={handleClick} className="text-orange show-text my-3 px-2">{show ? 'Show Project' : 'Show Tech Used'}</div>
                    </div>
                    <h5 className="my-auto top-icon">
                        <a href={project.images[0].source} rel="noreferrer" target="_blank" className="text-orange my-auto"><FiCamera /></a>
                    </h5>
                </div>
                {show ?
                    <IconContext.Provider value={{ style: { fontSize: '30px', opacity: "0.75" } }}>
                        <div className="text-center mt-5">
                            {project.id === 1 ?
                                <div className="fade_effect">
                                    <span style={{ color: '#cdb22f' }}><SiJavascript /></span>
                                    <span className="mx-5" style={{ color: '#df4919' }}><SiHtml5 /></span>
                                    <span style={{ color: '#f7c526' }}><SiWix /></span>
                                </div> : ''}
                            {project.id === 2 ?
                                <div className="fade_effect">
                                    <span style={{ color: '#57d3f5' }}><SiReact /></span>
                                    <span className="mx-5" style={{ color: '#563493' }}><SiBootstrap /></span>
                                    <span style={{ color: '#cdb22f' }}><SiJavascript /></span>
                                </div> : ''}
                            {project.id === 3 ?
                                <div className="fade_effect">
                                    <span style={{ color: '#563493' }}><SiBootstrap /></span>
                                    <span className="mx-5" style={{ color: '#7cc909' }}><FaNodeJs /></span>
                                    <span style={{ color: '#57d3f5' }}><SiReact /></span>
                                </div> : ''}
                            {project.id === 4 ?
                                <div className="fade_effect">
                                    <span style={{ color: '#7cc909' }}><FaNodeJs /></span>
                                    <span className="mx-5" style={{ color: '#007acc' }}><SiTypescript /></span>
                                    <span style={{ color: '#016db3' }}><SiCsswizardry /></span>
                                </div> : ''}
                            {project.id === 5 ?
                                <div className="fade_effect">
                                    <span style={{ color: '#03648a' }}><SiMysql /></span>
                                    <span className="mx-5" style={{ color: '#007acc' }}><SiTypescript /></span>
                                    <span style={{ color: '#7cc909' }}><FaNodeJs /></span>
                                </div> : ''}
                            {project.id === 6 ?
                                <div className="fade_effect">
                                    <span style={{ color: '#57d3f5' }}><SiReact /></span>
                                    <span className="mx-5" style={{ color: '#cdb22f' }}><SiJavascript /></span>
                                    <span style={{ color: '#563493' }}><SiBootstrap /></span>
                                </div> : ''}
                            {project.id === 7 ?
                                <div className="fade_effect">
                                    <span style={{ color: '#cdb22f' }}><SiJavascript /></span>
                                    <span className="mx-5" style={{ color: '#57d3f5' }}><SiReact /></span>
                                    <span style={{ color: '#007acc' }}><SiTypescript /></span>
                                </div> : ''}
                            {project.id === 8 ?
                                <div className="fade_effect">
                                    <span style={{ color: '#03648a' }}><SiMysql /></span>
                                    <span className="mx-5" style={{ color: '#7cc909' }}><FaNodeJs /></span>
                                    <span style={{ color: '#cdb22f' }}><SiJavascript /></span>
                                </div> : ''}
                            {project.id === 9 ?
                                <div className="fade_effect">
                                    <span style={{ color: '#563493' }}><SiBootstrap /></span>
                                    <span className="mx-5" style={{ color: '#016db3' }}><SiCsswizardry /></span>
                                    <span style={{ color: '#57d3f5' }}><SiReact /></span>
                                </div> : ''}
                        </div>
                    </IconContext.Provider>
                    : <div className="description p-2 fade_effect" style={{ cursor: "default" }}> {project.description} </div>}
                <a
                    target="_blank" href={project.url} rel="noreferrer"
                    className="text-center px-4 py-2 bg- icon" style={{textDecoration: "none"}}>
                    <IconContext.Provider value={{ style: { fontSize: '25px', opacity: "1" } }}>
                        <small className="text-custom-primary">Open</small>
                    </IconContext.Provider>
                </a>
            </div>
        </ProjectLayout >
    )
}

const ProjectLayout = styled.div`
.custom-card {
    transition: all .6s ease;
    -webkit-transition: all .6s ease;
    background: #19272f;
    height: 22rem;
    margin:10px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    position:relative;
    background: linear-gradient(45deg, #17232a, #1b2a32);
    box-shadow:  9px -9px 18px #0e161a, -9px 9px 18px #243844;
}
.custom-card:hover {
    transform: translate(0, -7.5px);
    background: #1c2e38;
    transition: all .6s ease;
    -webkit-transition: all .6s ease;
    .description {
        color: white;
    }
}

.name {
    font-family: 'Raleway';
    font-size: 1.4rem;
    color: white;
    font-weight: 600;
}

.description{
    font-family: 'Raleway';
    color: #aaa8a8;
}
.show-text-box {
    border-left: 1px solid white;
    border-right: 1px solid white;

}
.show-text {
    transition: all .6s ease;
    -webkit-transition: all .6s ease;
    /* border-left: 1px solid white;
    border-right: 1px solid white; */
    font-family: 'Raleway';
}

.show-text:hover {
    transform: scale(1.1)
}

.icon {
    transition: all .6s ease;
    -webkit-transition: all .6s ease;
    position: absolute; 
    bottom: 0;
    right: 0;
    border-bottom-right-radius: 24px;
    border-top-left-radius: 24px;
    box-shadow:  9px 9px 18px #0e161a, -9px -9px 18px #243844;
    background: #aaa8a8;
}

.icon:hover {
    background-color: white;
}
.top-icon {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.top-icon:hover {
    -webkit-transform: scale(1.4);
    -moz-transform: scale(1.4);
    -o-transform: scale(1.4);
    transform: scale(1.4);
}

.fade_effect {
    animation: blink 1s linear 1;
    
}

@keyframes blink{
0%{opacity: 0.1;}
50%{opacity: 0.5;}
100%{opacity: 1}
}

`

export default ProjectCard;