import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import GoogleFontLoader from 'react-google-font-loader';
import Right from '../components/Right';
import { FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom'



function About() {
    return (
        <PageStyle>
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
            <div className="container-fluid about">
                <div className="row text-white p-3">
                    <Navigation />
                </div>
                <div className="container">
                    <div className="row mt-5 justify-content-center ">
                        <div className="col-md-6">
                            <img style={{ width: "500px", height: "auto" }} className="image" src="https://news-api.s3.us-east-2.amazonaws.com/me_website.jpg" alt="Pawel_Jaskolski_image" />
                        </div>
                        <div className="col-md-6 mt-5" style={{ cursor: "default" }}>
                            <div className="hello-text">
                                I'm Pawel, a full-stack web developer working as a <span>"Coder-For-Hire"</span>  in sunny Fort Lauderdale, Florida.
                            </div>
                            <div className="about-text mt-3">
                                <div>
                                    I am an avid problem solver. I believe this quality is what makes me an excellent web developer.
                                </div>
                                <div className="mt-3">
                                    I am a hardworking individual who brings passion and insight into everything I do.
                                </div>
                                <div className="mt-3">
                                    In my free time, I enjoy researching and investing in the stock market, while maybe sipping on a Jai Alai (my favorite beer). I also enjoy going out to different restaurants trying to find the best fried calamari with my favorite human!
                                </div>
                                <div className="mt-3">
                                    For a full scoop of my work experience please check out
                                    <a href="https://news-api.s3.us-east-2.amazonaws.com/Pawel+SoftDev+Resume+August+20+AWS.pdf"
                                        rel="noreferrer" target="_blank" className="icon text-orange"> my resume <FaFilePdf /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center py-5">
                        <div className="col-auto">
                            <div className="border text-white">
                                <Right />
                            </div>
                        </div>
                    </div>
                    <Link className="" to={process.env.PUBLIC_URL + '/npm'}>NPM's</Link>
                </div>
            </div>
        </PageStyle>
    );
}

const PageStyle = styled.div`
.about {
    background: #19272f;
    background-attachment:fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: blink 2s linear 1;
    height: 100vh;
}

img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 25px;
    transition: all .6s ease;
    -webkit-transition: all .6s ease;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}
img:hover {
    -webkit-filter: grayscale(0); /* Safari 6.0 - 9.0 */
    filter: grayscale(0);
}

.hello-text {
    color: white;
    font-family: 'Raleway';
    font-size: 30px;
    font-weight: bold;
}

.hello-text>span {
    color: #E36C4E;
}

.about-text {
    color: white;
    font-family: 'Raleway';
}

.icon {
    font-weight: bold;
    text-decoration: none;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

`

export default About;