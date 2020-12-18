import React from 'react';
import styled from 'styled-components';
import GoogleFontLoader from 'react-google-font-loader';
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'
import { IconContext } from "react-icons"
import { FiSend } from 'react-icons/fi';


function Home() {
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
            <div className="container-fluid  home">
                <div className="row text-white pl-3 pt-2">
                    <Navigation />
                </div>
                <div className="justify-content-center content-box">
                    <div className="row justify-content-center">
                        <div className="col-auto text-white name-box text-center">
                            <div>Hello, I am <span className="name">Pawel Jaskolski</span>
                                <div className="">I'm a full-stack web developer.</div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto my-auto">
                            <Link to={process.env.PUBLIC_URL + '/projects'} className="">
                                <button type="button" className="border btn btn-md-lg btn-outline-orange rounded-pill px-5 py-3 blurrybtn">View My Work </button>
                            </Link>
                        </div>
                        <div className="col-auto my-auto">
                            <IconContext.Provider value={{ style: { fontSize: '15px', opacity: "1" } }}>
                                <Link to={process.env.PUBLIC_URL + '/contact'} className="">
                                    <button type="button" className="border btn btn-md-lg btn-outline-orange rounded-pill px-5 py-3 blurrybtn">Contact Me <FiSend /> </button>
                                </Link>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </PageStyle >
    );
}

const PageStyle = styled.div`
.home {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1578532009320-10258506d6c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80");
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    animation: blink 2s linear 1;
    
}

.content-box {
    overflow: hidden;
    margin-top : 50%;
}

.name-box {
    color: white;
    font-family: 'Raleway';
    font-weight: 100;
    font-size: 4vw;
}

.name{
    color: #E36C4E;
    font-weight: 400;
    letter-spacing: 2px;
}

.blurry {
	backdrop-filter: blur(10px);
}

.blurrybtn {
    color: white;
    transition: 0.3s;
	background-color: rgba(227, 108, 78, .25);
    backdrop-filter: blur(0);
    letter-spacing: 2px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 15%;
}

.blurrybtn:hover {
	box-shadow: rgba(0, 0, 0, .9);	
	background-color: rgba(255, 255, 255, .8);
    backdrop-filter: blur(0);
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
    color: black;
    transform: translate(0, -5px);
}

@keyframes blink{
0%{opacity: 0.1;}
50%{opacity: 0.5;}
100%{opacity: 1}
}

@media screen and (orientation: landscape) {
    .content-box {
        margin-top:10%;      
    }
}

@media screen and (orientation: portrait) { 
    .name-box {
        font-size: 3vh;
    }
    .blurrybtn {
        font-size: 3vh;
    }
}

`

export default Home;