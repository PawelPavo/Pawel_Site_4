import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';


function About() {
    return (
        <PageStyle>
            <div className="container-fluid  bg-secondary about">
                <div className="row text-white p-3">
                    <Navigation />
                </div>
                <div className="display-1">About</div>
            </div>
        </PageStyle>
    );
}

const PageStyle = styled.div`
.about {
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    animation: blink 2s linear 1;
}
`

export default About;