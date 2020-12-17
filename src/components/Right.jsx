import React from 'react'
import styled from 'styled-components';
import CodeBar from '../components/CodeBar';
import { CgClose } from "react-icons/cg"



function openNav() {
    document.getElementById("right").style.width = "100%";
}
function closeNav() {
    document.getElementById("right").style.width = "0%";
}

function Right({ checked }) {

    return (
        <RightStyles>
            <div onClick={openNav} className="row text-orange px-5 py-3 my-btn">
                <h3 className="col-auto my-auto font-weight-lighter">My Stack</h3>
                <div onClick={openNav} className="col-auto chevron">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 14.5l7-7 7 7" />
                    </svg>
                </div>
            </div>
            <div id="right" className="overlay">
                <div className="closebtn text-white" onClick={closeNav}><CgClose /> close</div>
                <div className="text-orange m-5" style={{ fontFamily: "Raleway" }}>
                    <div className="row pt-5">
                        <CodeBar />
                    </div>
                    <p>Tech I am currently using includes:</p>
                    <ul>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>Bootstrap</li>
                        <li>TailwindCSS</li>
                        <li>HTML/CSS/SASS</li>
                    </ul>
                    <p>Tech I am interested in learning:</p>
                    <ul>
                        <li>Go</li>
                        <li>Python</li>
                        <li>JS Testing frameworks such as Mocha / Jest</li>
                        <li>Node with Chai </li>
                        <li>React utility Enzyme</li>
                    </ul>
                </div>
            </div>
        </RightStyles>
    )

}

const RightStyles = styled.div`
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: rgb(25,39,47);
  background-color: rgba(25,39,47, 0.97);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content-Right {
  position: relative;
  top: 10%;
  margin-top: 30px;
  letter-spacing: 2px;
  font-size: 17px;
  border-bottom: solid 1px;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 30px;
  transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.closebtn:hover {
    opacity: 0.60;
}
//LIGHT Buttom
.openbtn-light {
    border-radius: 80px;
    background: linear-gradient(145deg, #fdffff, #d4d7dc);
    box-shadow:  22px 22px 46px #636466, -22px -22px 46px #ffffff;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.openbtn-light:hover {
    transform: scale(0.96);
    background: linear-gradient(145deg, #fdffff, #d4d7dc);
    box-shadow:  22px 22px 16px #636466, -22px -22px 16px #ffffff;
}

//DARK button
.openbtn-dark {
    border-radius: 80px;
    background: linear-gradient(145deg, #50687a, #445767);
    box-shadow:  18px 18px 70px #202930, -18px -18px 70px #7799b4;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.openbtn-dark:hover {
    transform: scale(0.96);
    background: linear-gradient(145deg, #50687a, #445767);
    box-shadow:  22px 22px 16px #202930, -22px -22px 46px #7799b4;
}

.chevron {
    filter: drop-shadow(0.10rem 0.10rem 0.1rem rgba(0, 0, 0, 0.5));
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
    height: auto;
    width: 100px;
}

.my-btn:hover {
    .chevron{
        transform: rotate(90deg)
    }
}

@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 35px;
  }
}

`

export default Right;