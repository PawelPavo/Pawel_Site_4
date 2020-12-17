import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import GoogleFontLoader from 'react-google-font-loader';
import ProjectCard from '../components/ProjectCard'
import { ProjectsArray } from '../utils/projects'


function Projects() {
    return (
        <PageStyle>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Raleway',
                        weights: [200, '400i', 400],
                    },
                    {
                        font: 'Roboto',
                        weights: [100, '400i', 900],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek']}
            />
            <div className="container-fluid projects">
                <div className="row text-white p-3">
                    <Navigation />
                </div>
                <div className="row mt-3 mx-5">
                    {ProjectsArray.map(project => (
                        <div key={project.name} className="col-md-4 center" >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </PageStyle>
    );
}

const PageStyle = styled.div`
.projects {
    /* height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative; */
    animation: blink 2s linear 1;
}

.center {
    padding: 0;
}

`

export default Projects;