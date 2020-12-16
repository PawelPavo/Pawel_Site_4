import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import GoogleFontLoader from 'react-google-font-loader';


function Projects() {
    return (
        <PageStyle>
            <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Raleway',
                            weights: [200, '400i',400],
                        },
                        {
                            font: 'Roboto',
                            weights: [100, '400i', 900],
                        },
                    ]}
                    subsets={['cyrillic-ext', 'greek']}
                />
            <div className="container-fluid  bg-secondary projects">
                <div className="row text-white p-3">
                    <Navigation />
                </div>
                <div className="display-1">Projects</div>
            </div>
        </PageStyle>
    );
}

const PageStyle = styled.div`
.projects {
    background: linear-gradient(to bottom left, blue, pink);
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    animation: blink 2s linear 1;
}
`

export default Projects;