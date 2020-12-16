import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';


function Contact() {
    return (
        <PageStyle>
            <div className="container-fluid  bg-secondary contact">
                <div className="row text-white p-3">
                    <Navigation />
                </div>
                <div className="display-1">Contact</div>
            </div>
        </PageStyle>
    );
}

const PageStyle = styled.div`
.contact {
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    animation: blink 2s linear 1;
}
`

export default Contact;