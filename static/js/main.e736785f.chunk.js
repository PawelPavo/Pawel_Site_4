(this["webpackJsonpsite-4"]=this["webpackJsonpsite-4"]||[]).push([[0],{36:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var s=t(1),a=t(2),i=t.n(a),o=t(26),c=t.n(o),r=(t(36),t(12)),l=t(4),d=t(20),b=t(6),h=t(7);function j(){var e=Object(b.a)(["\n.loader,\n.loader:before,\n.loader:after {\n  background: #19272f;\n  -webkit-animation: load1 1s infinite ease-in-out;\n  animation: load1 1s infinite ease-in-out;\n  width: 1em;\n  height: 4em;\n}\n.loader {\n  color: #19272f;\n  text-indent: -9999em;\n  margin: 88px auto;\n  position: relative;\n  font-size: 11px;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loader:before,\n.loader:after {\n  position: absolute;\n  top: 0;\n  content: '';\n}\n.loader:before {\n  left: -1.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loader:after {\n  left: 1.5em;\n}\n@-webkit-keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em;\n  }\n}\n@keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em;\n  }\n}\n\n"]);return j=function(){return e},e}var p=h.a.div(j()),x=function(e){return Object(s.jsx)(p,{children:Object(s.jsx)("div",{className:"loader",children:"Loading..."})})};var m=function(e){var n=a.useState(!0),t=Object(d.a)(n,2),i=t[0],o=t[1];return a.useEffect((function(){var e=setTimeout((function(){return o(!1)}),3e3);return function(){clearTimeout(e)}}),[]),i?Object(s.jsx)("div",{className:"min-vh-100 d-flex justify-content-center align-items-center bg-orange",children:i&&Object(s.jsx)(x,{})}):i?void 0:Object(s.jsx)(l.a,{exact:e.exact,path:e.path,children:e.children})},u=t(10),f=t.n(u),g=t(19);function w(){var e=Object(b.a)(['\n.overlay {\n  height: 0%;\n  width: 100%;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0, 0.9);\n  overflow-x: hidden;\n  transition: 0.5s;\n}\n\n.overlay-content {\n  position: relative;\n  top: 25%;\n  width: 100%;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.overlay a {\n  text-decoration: none;\n  font-size: 36px;\n  color: white;\n  display: block;\n  transition: 0.3s;\n}\n\n.overlay .closebtn {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 30px;\n  transition: all .4s ease;\n    -webkit-transition: all .4s ease;\n}\n\n.closebtn:hover {\n    opacity: 0.60;\n}\n\n.openbtn {\n    opacity: 1;\n    transition: all .4s ease;\n    -webkit-transition: all .4s ease;\n}\n\n.openbtn:hover {\n    opacity: 0.0.8;\n    color: #E36C4E;\n}\n\n@media screen and (max-height: 450px) {\n  .overlay a {font-size: 20px}\n  .overlay .closebtn {\n  font-size: 40px;\n  top: 15px;\n  right: 35px;\n  }\n}\n\n.menu-underline.left {\n    position: relative !important;\n}\n\n.menu-underline.left:before {\n  content: "";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0px;\n  background-color: #E36C4E;\n  visibility: hidden;\n  transition: all 0.5s ease-in-out;\n  color: #E36C4E;\n}\n\n.menu-underline.left:hover:before {\n    visibility: visible;\n    width: 100%;\n    color: #E36C4E;\n}\n\n.fade_effect{\n    animation: slideInLeft 4s forwards;\n}\n\n@keyframes slideInLeft{\n    0% { \n        transform: translateX(-200px);  \n    } \n    25% {\n        transform: translateX(0); \n    }\n    50% {\n        transform: translateX(0);\n    }\n    100% { \n        -webkit-transform: translateX(0); \n    } \n}\n\n']);return w=function(){return e},e}function O(){document.getElementById("myNav").style.height="100%"}function y(){document.getElementById("myNav").style.height="0%"}var v=h.a.div(w()),k=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(v,{children:[Object(s.jsx)(f.a,{fonts:[{font:"Ubuntu",weights:[400,"400i"]}],subsets:["cyrillic-ext","greek"]}),Object(s.jsx)("div",{id:"navBar",children:Object(s.jsxs)("div",{className:"openbtn fade_effect",style:{fontSize:"30px",cursor:"pointer"},onClick:O,children:[Object(s.jsx)(g.b,{})," open"]})}),Object(s.jsxs)("div",{id:"myNav",className:"overlay",children:[Object(s.jsxs)("div",{className:"closebtn text-white",onClick:y,style:{cursor:"pointer"},children:[Object(s.jsx)(g.a,{})," close"]}),Object(s.jsxs)("div",{className:"overlay-content",style:{fontFamily:"Ubuntu"},children:[Object(s.jsx)(r.c,{onClick:y,className:"left nav-link nav-text mx-5 text-light menu-underline",to:"/Pawel_Site_4/",children:"Home"}),Object(s.jsx)(r.c,{onClick:y,className:"left nav-link nav-text mx-5 text-light menu-underline",to:"/Pawel_Site_4/projects",children:"Projects"}),Object(s.jsx)(r.c,{onClick:y,className:"left nav-link nav-text mx-5 text-light menu-underline",to:"/Pawel_Site_4/about",children:"About Me"}),Object(s.jsx)(r.c,{onClick:y,className:"left nav-link nav-text mx-5 text-light menu-underline",to:"/Pawel_Site_4/contact",children:"Contact"})]})]})]})})},N=t(0),S=t(14);function z(){var e=Object(b.a)(["\n.home {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(\"https://images.unsplash.com/photo-1578532009320-10258506d6c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80\");\n    height: 100vh;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    animation: blink 2s linear 1;\n    \n}\n\n.content-box {\n    overflow: hidden;\n    margin-top : 50%;\n}\n\n.name-box {\n    color: white;\n    font-family: 'Raleway';\n    font-weight: 100;\n    font-size: 4vw;\n    -webkit-user-select: none;  \n  -moz-user-select: none;    \n  -ms-user-select: none;      \n  user-select: none;\n}\n\n.name{\n    color: #E36C4E;\n    font-weight: 400;\n    letter-spacing: 2px;\n}\n\n.blurry {\n\tbackdrop-filter: blur(10px);\n}\n\n.blurrybtn {\n    color: white;\n    transition: 0.3s;\n\tbackground-color: rgba(227, 108, 78, .25);\n    backdrop-filter: blur(0);\n    letter-spacing: 2px;\n    font-size: 14px;\n    font-weight: bold;\n    text-transform: uppercase;\n    margin-top: 15%;\n}\n\n.blurrybtn:hover {\n\tbox-shadow: rgba(0, 0, 0, .9);\t\n\tbackground-color: rgba(255, 255, 255, .8);\n    backdrop-filter: blur(0);\n    transition: all .4s ease;\n    -webkit-transition: all .4s ease;\n    color: black;\n    transform: translate(0, -5px);\n}\n\n@keyframes blink{\n0%{opacity: 0.1;}\n50%{opacity: 0.5;}\n100%{opacity: 1}\n}\n\n@media screen and (orientation: landscape) {\n    .content-box {\n        margin-top:10%;      \n    }\n}\n\n@media (max-width: 576px) { \n    .name-box {\n        font-size: 6vw;\n    }   \n}\n\n"]);return z=function(){return e},e}var P=h.a.div(z()),C=function(){return Object(s.jsxs)(P,{children:[Object(s.jsx)(f.a,{fonts:[{font:"Raleway",weights:[200,"400i",400]},{font:"Roboto",weights:[100,"400i",900]}],subsets:["cyrillic-ext","greek"]}),Object(s.jsxs)("div",{className:"container-fluid  home",children:[Object(s.jsx)("div",{className:"row text-white pl-3 pt-2",children:Object(s.jsx)(k,{})}),Object(s.jsxs)("div",{className:"justify-content-center content-box",children:[Object(s.jsx)("div",{className:"row justify-content-center",children:Object(s.jsx)("div",{className:"col-auto text-white name-box text-center",children:Object(s.jsxs)("div",{children:["Hello, I am ",Object(s.jsx)("span",{className:"name",children:"Pawel Jaskolski"}),Object(s.jsx)("div",{className:"",children:"I'm a full-stack web developer."})]})})}),Object(s.jsxs)("div",{className:"row justify-content-center",children:[Object(s.jsx)("div",{className:"col-auto my-auto",children:Object(s.jsx)(r.b,{to:"/Pawel_Site_4/projects",className:"",children:Object(s.jsx)("button",{type:"button",className:"border btn btn-md-lg btn-outline-orange rounded-pill px-5 py-3 blurrybtn",children:"View My Work "})})}),Object(s.jsx)("div",{className:"col-auto my-auto",children:Object(s.jsx)(N.b.Provider,{value:{style:{fontSize:"15px",opacity:"1"}},children:Object(s.jsx)(r.b,{to:"/Pawel_Site_4/contact",className:"",children:Object(s.jsxs)("button",{type:"button",className:"border btn btn-md-lg btn-outline-orange rounded-pill px-5 py-3 blurrybtn",children:["Contact Me ",Object(s.jsx)(S.e,{})," "]})})})})]})]})]})]})},E=t(13),_=t(3);function I(){var e=Object(b.a)(["\n.custom-card {\n    transition: all .6s ease;\n    -webkit-transition: all .6s ease;\n    background: #19272f;\n    height: 22rem;\n    margin:10px;\n    border-top-left-radius: 25px;\n    border-bottom-right-radius: 25px;\n    position:relative;\n    background: linear-gradient(45deg, #17232a, #1b2a32);\n    box-shadow:  9px -9px 18px #0e161a, -9px 9px 18px #243844;\n}\n.custom-card:hover {\n    transform: translate(0, -7.5px);\n    background: #1c2e38;\n    transition: all .6s ease;\n    -webkit-transition: all .6s ease;\n    .description {\n        color: white;\n    }\n}\n\n.name {\n    font-family: 'Raleway';\n    font-size: 1.4rem;\n    color: white;\n    font-weight: 600;\n}\n\n.description{\n    font-family: 'Raleway';\n    color: #aaa8a8;\n}\n\n.show-text {\n    transition: all .6s ease;\n    -webkit-transition: all .6s ease;\n    border-left: 1px solid white;\n    border-right: 1px solid white;\n    font-family: 'Raleway';\n    \n}\n\n.show-text:hover {\n    transform: scale(1.1)\n}\n\n.icon {\n    transition: all .6s ease;\n    -webkit-transition: all .6s ease;\n    position: absolute; \n    bottom: 0;\n    right: 0;\n    border-bottom-right-radius: 24px;\n    border-top-left-radius: 24px;\n    box-shadow:  9px 9px 18px #0e161a, -9px -9px 18px #243844;\n    background: #aaa8a8;\n}\n\n.icon:hover {\n    background-color: white;\n}\n\n.fade_effect {\n    animation: blink 1s linear 1;\n}\n\n@keyframes blink{\n0%{opacity: 0.1;}\n50%{opacity: 0.5;}\n100%{opacity: 1}\n}\n\n"]);return I=function(){return e},e}var M=h.a.div(I()),T=function(e){var n=e.project,t=i.a.useState(!1),a=Object(d.a)(t,2),o=a[0],c=a[1];return Object(s.jsxs)(M,{children:[Object(s.jsx)(f.a,{fonts:[{font:"Raleway",weights:[100,200,300,400,500,600,700,800,900]},{font:"Roboto",weights:[100,"400i",900]}],subsets:["cyrillic-ext","greek"]}),Object(s.jsxs)("div",{className:"custom-card border-custom-light",children:[Object(s.jsx)("div",{className:"name py-2 text-center",children:n.name}),Object(s.jsx)("div",{className:"row justify-content-center ",children:Object(s.jsx)("div",{onClick:function(){c(!o)},className:"text-orange show-text px-3 my-3",children:o?"Show Project":"Show Tech Used"})}),o?Object(s.jsx)(N.b.Provider,{value:{style:{fontSize:"30px",opacity:"0.75"}},children:Object(s.jsxs)("div",{className:"text-center mt-5 ",children:[1===n.id?Object(s.jsxs)("div",{className:"fade_effect",children:[Object(s.jsx)("span",{style:{color:"#cdb22f"},children:Object(s.jsx)(_.e,{})}),Object(s.jsx)("span",{className:"mx-5",style:{color:"#df4919"},children:Object(s.jsx)(_.d,{})}),Object(s.jsx)("span",{style:{color:"#f7c526"},children:Object(s.jsx)(_.j,{})})]}):"",2===n.id?Object(s.jsxs)("div",{className:"fade_effect",children:[Object(s.jsx)("span",{style:{color:"#57d3f5"},children:Object(s.jsx)(_.g,{})}),Object(s.jsx)("span",{className:"mx-5",style:{color:"#563493"},children:Object(s.jsx)(_.a,{})}),Object(s.jsx)("span",{style:{color:"#cdb22f"},children:Object(s.jsx)(_.e,{})})]}):"",3===n.id?Object(s.jsxs)("div",{className:"fade_effect",children:[Object(s.jsx)("span",{style:{color:"#563493"},children:Object(s.jsx)(_.a,{})}),Object(s.jsx)("span",{className:"mx-5",style:{color:"#7cc909"},children:Object(s.jsx)(E.b,{})}),Object(s.jsx)("span",{style:{color:"#57d3f5"},children:Object(s.jsx)(_.g,{})})]}):"",4===n.id?Object(s.jsxs)("div",{className:"fade_effect",children:[Object(s.jsx)("span",{style:{color:"#7cc909"},children:Object(s.jsx)(E.b,{})}),Object(s.jsx)("span",{className:"mx-5",style:{color:"#007acc"},children:Object(s.jsx)(_.i,{})}),Object(s.jsx)("span",{style:{color:"#016db3"},children:Object(s.jsx)(_.b,{})})]}):"",5===n.id?Object(s.jsxs)("div",{className:"fade_effect",children:[Object(s.jsx)("span",{style:{color:"#03648a"},children:Object(s.jsx)(_.f,{})}),Object(s.jsx)("span",{className:"mx-5",style:{color:"#007acc"},children:Object(s.jsx)(_.i,{})}),Object(s.jsx)("span",{style:{color:"#7cc909"},children:Object(s.jsx)(E.b,{})})]}):"",6===n.id?Object(s.jsxs)("div",{className:"fade_effect",children:[Object(s.jsx)("span",{style:{color:"#57d3f5"},children:Object(s.jsx)(_.g,{})}),Object(s.jsx)("span",{className:"mx-5",style:{color:"#cdb22f"},children:Object(s.jsx)(_.e,{})}),Object(s.jsx)("span",{style:{color:"#563493"},children:Object(s.jsx)(_.a,{})})]}):"",7===n.id?Object(s.jsxs)("div",{className:"fade_effect",children:[Object(s.jsx)("span",{style:{color:"#cdb22f"},children:Object(s.jsx)(_.e,{})}),Object(s.jsx)("span",{className:"mx-5",style:{color:"#57d3f5"},children:Object(s.jsx)(_.g,{})}),Object(s.jsx)("span",{style:{color:"#007acc"},children:Object(s.jsx)(_.i,{})})]}):"",8===n.id?Object(s.jsxs)("div",{className:"fade_effect",children:[Object(s.jsx)("span",{style:{color:"#03648a"},children:Object(s.jsx)(_.f,{})}),Object(s.jsx)("span",{className:"mx-5",style:{color:"#7cc909"},children:Object(s.jsx)(E.b,{})}),Object(s.jsx)("span",{style:{color:"#cdb22f"},children:Object(s.jsx)(_.e,{})})]}):"",9===n.id?Object(s.jsxs)("div",{className:"fade_effect",children:[Object(s.jsx)("span",{style:{color:"#563493"},children:Object(s.jsx)(_.a,{})}),Object(s.jsx)("span",{className:"mx-5",style:{color:"#016db3"},children:Object(s.jsx)(_.b,{})}),Object(s.jsx)("span",{style:{color:"#57d3f5"},children:Object(s.jsx)(_.g,{})})]}):""]})}):Object(s.jsxs)("div",{className:"description p-2 fade_effect",children:[" ",n.description," "]}),Object(s.jsx)("a",{target:"_blank",href:n.url,rel:"noreferrer",className:"text-center px-4 py-2 bg- icon",children:Object(s.jsx)(N.b.Provider,{value:{style:{fontSize:"20px",opacity:"1"}},children:Object(s.jsx)("small",{className:"text-orange",children:Object(s.jsx)(S.a,{})})})})]})]})},R=[{id:1,name:"XoloBooks",description:"A bookstore build with wix and custom JavaScript which includes full checkout, book inventory, as well as search bar. This project is build with customers directions and content. It is deployed with Wix.",url:"https://www.xolobooks.com/",git:"https://github.com/PawelPavo",images:[{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}]},{id:2,name:"Wilton Drain Pro",description:"This site is made with Create React App with TypeScript. It uses a combination of Bootstrap and Styled-Components. It does not have a backend because it is deployed with github pages with multi-route solution.",url:"https://pawelpavo.github.io/WiltonDrainPro/#/WiltonDrainPro/",git:"https://github.com/PawelPavo/WiltonDrainPro",images:[{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"},{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}]},{id:3,name:"The Pathfinder",description:"This is a game made with Luke Przekwas using ReacJS with Bootstrap and Styled-Components. It is a fully functional game deployed with github pages.",url:"https://przekwas.github.io/help-pathfinder-pawel/",git:"https://github.com/PawelPavo/ThePathfinder",images:[{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"},{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}]},{id:4,name:"Stripe Payment",description:"This part of the website is built with Stripe payment processing platform. It is connected to the server through NodeJS with Express. Frontend is build with custom CSS and Bootstrap.",url:"https://mighty-fortress-59305.herokuapp.com/donate",git:"https://github.com/PawelPavo/searchBar/blob/master/src/client/pages/Donate.tsx",images:[{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"},{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}]},{id:5,name:"Who Gives A Sock",description:"This site is made for a NYC charity organization. It is build with ReactJS along with Bootstrap. Backend is powered by NodeJS with Express with SQL database. Deployed with Heroku.",url:"https://nameless-wildwood-77028.herokuapp.com/",git:"https://github.com/PawelPavo/WhoGivesASock",images:[{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"},{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}]},{id:6,name:"Splash Page Mock",description:"This site is made with ReactJS, TypeScript without any routes. It is styled with Bootstrap, custom CSS and Styled-Components. It is made with anchor tag navigation. The site uses Heroku for deploynment.",url:"https://secret-ravine-28184.herokuapp.com/",git:"https://github.com/PawelPavo/my-site-2",images:[{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"},{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}]},{id:7,name:"Single Scroll Mock",description:"This site is made with ReactJS, TypeScript without any routes. It is styled with Bootstrap, custom CSS and Styled-Components. It is made with anchor tag navigation. The site uses Heroku for deploynment.",url:"https://floating-retreat-73992.herokuapp.com/",git:"https://github.com/PawelPavo/Portfolio-Infinite-Scroll",images:[{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"},{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}]},{id:8,name:"Light/Dark Theme",description:"This site is made with ReactJS, TypeScript with CRUD routes hooked to MySQL. It is styled with Bootstrap, custom CSS along with light and dark theme toggle.",url:"https://damp-headland-11870.herokuapp.com/",git:"https://github.com/PawelPavo/resume_site",images:[{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"},{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}]},{id:9,name:"Light/Dark Theme 2",description:"This site is made with Create React App using Bootstrap and custom CSS. It is a 2nd version of light and dark theme.",url:"https://pawelpavo.github.io/my-website2/#/my-website2/about",git:"https://github.com/PawelPavo/my-website2",images:[{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"},{source:"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}]}];function B(){var e=Object(b.a)(["\n.projects {\n    /* height: 100vh;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative; */\n    animation: blink 2s linear 1;\n}\n\n.center {\n    padding: 0;\n}\n\n"]);return B=function(){return e},e}var D=h.a.div(B()),J=function(){return Object(s.jsxs)(D,{children:[Object(s.jsx)(f.a,{fonts:[{font:"Raleway",weights:[200,"400i",400]},{font:"Roboto",weights:[100,"400i",900]}],subsets:["cyrillic-ext","greek"]}),Object(s.jsxs)("div",{className:"container-fluid projects",children:[Object(s.jsx)("div",{className:"row text-white p-3",children:Object(s.jsx)(k,{})}),Object(s.jsx)("div",{className:"row mt-3 md-mx-auto",children:R.map((function(e){return Object(s.jsx)("div",{className:"col-md-4 center",children:Object(s.jsx)(T,{project:e})},e.name)}))})]})]})},L=t(30);function A(){var e=Object(b.a)(["\n.contact {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\"https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80\");\n    height: 100vh;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    animation: blink 2s linear 1;\n}\n\n.content-box {\n    overflow: hidden;\n    margin-top : 30%;\n}\n\n.text {\n    color: white;\n    font-size: 4.5vw;\n    font-family: 'Raleway';\n    filter: drop-shadow(0.15rem 0.15rem 0.1rem rgba(248, 247, 247, 0.5));\n\n}\n\n.par-text {\n    text-shadow: 1px 1px 4px  #E36C4E;\n}\n\n.par-text>span {\n    font-weight: bold;\n}\n\n.icon {\n    font-size: 3vw;\n    transition: all .4s ease;\n    -webkit-transition: all .4s ease;\n}\n\n@media (max-width: 576px) { \n    .text {\n        font-size: 6vw;\n    }  \n    .icon {\n        font-size: 7vw;\n    } \n}\n\n\n@media screen and (orientation: landscape) {\n    .content-box {\n        margin-top:5%;      \n    }\n}\n\n"]);return A=function(){return e},e}var H=h.a.div(A()),F=function(){return Object(s.jsxs)(H,{children:[Object(s.jsx)(f.a,{fonts:[{font:"Raleway",weights:[100,200,300,400,500,600,700,800,900]},{font:"Roboto",weights:[100,"400i",900]}],subsets:["cyrillic-ext","greek"]}),Object(s.jsxs)("div",{className:"container-fluid  bg-secondary contact",children:[Object(s.jsx)("div",{className:"row text-white p-3",children:Object(s.jsx)(k,{})}),Object(s.jsxs)("div",{className:"container content-box",children:[Object(s.jsxs)("div",{className:"col- text",children:[Object(s.jsx)("div",{children:"OK, LET\u2019S CREATE"}),Object(s.jsx)("div",{children:"SOMETHING GREAT"})]}),Object(s.jsxs)("h5",{className:"text-white pt-3 font-weight-lighter par-text",children:["If you like my work and have a project in mind, just send me a direct message @ ",Object(s.jsx)("span",{children:"pjpavo@gmail.com"})," or contact me on social media listed below."]}),Object(s.jsx)("div",{className:"row mt-3",children:Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("a",{href:"https://www.linkedin.com/in/pawel-jaskolski-995323b3/",rel:"noreferrer",target:"_blank",className:"icon text-orange",children:Object(s.jsx)(L.a,{})}),Object(s.jsx)("a",{href:"https://www.instagram.com/pifpavchio/",rel:"noreferrer",target:"_blank",className:"text-orange icon mx-5",children:Object(s.jsx)(S.c,{})}),Object(s.jsx)("a",{href:"https://github.com/PawelPavo",rel:"noreferrer",target:"_blank",className:"icon text-orange",children:Object(s.jsx)(S.b,{})}),Object(s.jsx)("a",{href:"mailto:pjpavo@gmail.com?subject=I found your website and now...",rel:"noreferrer",target:"_blank",className:"icon text-orange mx-5",children:Object(s.jsx)(S.d,{})})]})})]})]})]})};var W=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{id:"codeBar",className:"d-flex flex-wrap",children:Object(s.jsxs)(N.b.Provider,{value:{style:{fontSize:"1.5rem",margin:"0.7rem"}},children:[Object(s.jsx)("span",{id:"javascript",className:"icon",style:{color:"#cdb22f"},children:Object(s.jsx)(_.e,{})}),Object(s.jsx)("span",{id:"react",className:"icon",style:{color:"#57d3f5"},children:Object(s.jsx)(_.g,{})}),Object(s.jsx)("span",{id:"typescript",className:"icon",style:{color:"#007acc"},children:Object(s.jsx)(_.i,{})}),Object(s.jsx)("span",{id:"nodejs",className:"icon",style:{color:"#7cc909"},children:Object(s.jsx)(E.b,{})}),Object(s.jsx)("span",{id:"github",className:"icon ",style:{color:"#404040"},children:Object(s.jsx)(_.c,{})}),Object(s.jsx)("span",{id:"bootstrap",className:"icon",style:{color:"#563493"},children:Object(s.jsx)(_.a,{})}),Object(s.jsx)("span",{id:"wix",className:"icon",style:{color:"#f7c526"},children:Object(s.jsx)(_.j,{})}),Object(s.jsx)("span",{id:"mysql",className:"icon",style:{color:"#03648a"},children:Object(s.jsx)(_.f,{})}),Object(s.jsx)("span",{id:"tailwind",className:"icon",style:{color:"#42a3ad"},children:Object(s.jsx)(_.h,{})}),Object(s.jsx)("span",{id:"css",className:"icon",style:{color:"#016db3"},children:Object(s.jsx)(_.b,{})}),Object(s.jsx)("span",{id:"html",className:"icon",style:{color:"#df4919"},children:Object(s.jsx)(_.d,{})})]})})})};function G(){var e=Object(b.a)(["\n.overlay {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  background-color: rgb(25,39,47);\n  background-color: rgba(25,39,47, 0.97);\n  overflow-x: hidden;\n  transition: 0.5s;\n}\n\n.overlay-content-Right {\n  position: relative;\n  top: 10%;\n  margin-top: 30px;\n  letter-spacing: 2px;\n  font-size: 17px;\n  border-bottom: solid 1px;\n}\n\n.overlay .closebtn {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 30px;\n  transition: all .4s ease;\n    -webkit-transition: all .4s ease;\n}\n\n.closebtn:hover {\n    opacity: 0.60;\n}\n//LIGHT Buttom\n.openbtn-light {\n    border-radius: 80px;\n    background: linear-gradient(145deg, #fdffff, #d4d7dc);\n    box-shadow:  22px 22px 46px #636466, -22px -22px 46px #ffffff;\n    transition: all .4s ease;\n    -webkit-transition: all .4s ease;\n}\n\n.openbtn-light:hover {\n    transform: scale(0.96);\n    background: linear-gradient(145deg, #fdffff, #d4d7dc);\n    box-shadow:  22px 22px 16px #636466, -22px -22px 16px #ffffff;\n}\n\n//DARK button\n.openbtn-dark {\n    border-radius: 80px;\n    background: linear-gradient(145deg, #50687a, #445767);\n    box-shadow:  18px 18px 70px #202930, -18px -18px 70px #7799b4;\n    transition: all .4s ease;\n    -webkit-transition: all .4s ease;\n}\n\n.openbtn-dark:hover {\n    transform: scale(0.96);\n    background: linear-gradient(145deg, #50687a, #445767);\n    box-shadow:  22px 22px 16px #202930, -22px -22px 46px #7799b4;\n}\n\n.chevron {\n    filter: drop-shadow(0.10rem 0.10rem 0.1rem rgba(0, 0, 0, 0.5));\n    transition: all .4s ease;\n    -webkit-transition: all .4s ease;\n    height: auto;\n    width: 100px;\n}\n\n.my-btn:hover {\n    .chevron{\n        transform: rotate(90deg)\n    }\n}\n\n@media screen and (max-height: 450px) {\n  .overlay a {font-size: 20px}\n  .overlay .closebtn {\n  font-size: 40px;\n  top: 15px;\n  right: 35px;\n  }\n}\n\n"]);return G=function(){return e},e}function X(){document.getElementById("right").style.width="100%"}function q(){document.getElementById("right").style.width="0%"}var U=h.a.div(G()),Q=function(e){return e.checked,Object(s.jsxs)(U,{children:[Object(s.jsxs)("div",{onClick:X,className:"row text-orange px-5 py-3 my-btn",children:[Object(s.jsx)("h3",{className:"col-auto my-auto font-weight-lighter",children:"My Stack"}),Object(s.jsx)("div",{onClick:X,className:"col-auto chevron",children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M5 14.5l7-7 7 7"})})})]}),Object(s.jsxs)("div",{id:"right",className:"overlay",children:[Object(s.jsxs)("div",{className:"closebtn text-white",onClick:q,children:[Object(s.jsx)(g.a,{})," close"]}),Object(s.jsxs)("div",{className:"text-orange m-5",style:{fontFamily:"Raleway"},children:[Object(s.jsx)("div",{className:"row pt-5",children:Object(s.jsx)(W,{})}),Object(s.jsx)("p",{children:"Tech I am currently using includes:"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"JavaScript"}),Object(s.jsx)("li",{children:"TypeScript"}),Object(s.jsx)("li",{children:"React"}),Object(s.jsx)("li",{children:"NodeJS"}),Object(s.jsx)("li",{children:"Express"}),Object(s.jsx)("li",{children:"MySQL"}),Object(s.jsx)("li",{children:"Bootstrap"}),Object(s.jsx)("li",{children:"TailwindCSS"}),Object(s.jsx)("li",{children:"HTML/CSS/SASS"})]}),Object(s.jsx)("p",{children:"Tech I am interested in learning:"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Go"}),Object(s.jsx)("li",{children:"Python"}),Object(s.jsx)("li",{children:"JS Testing frameworks such as Mocha / Jest"}),Object(s.jsx)("li",{children:"Node with Chai "}),Object(s.jsx)("li",{children:"React utility Enzyme"})]})]})]})]})};function V(){var e=Object(b.a)(["\n.about {\n    background: #19272f;\n    background-attachment:fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    animation: blink 2s linear 1;\n    height: 100vh;\n}\n\nimg {\n    transform: rotate(-90deg);\n    max-width: 100%;\n    max-height: 100%;\n    border-radius: 25px;\n    transition: all .4s ease;\n    -webkit-transition: all .4s ease;\n    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */\n    filter: grayscale(100%);\n}\n\n.hello-text {\n    color: white;\n    font-family: 'Raleway';\n    font-size: 30px;\n    font-weight: bold;\n}\n\n.hello-text>span {\n    color: #E36C4E;\n}\n\n.about-text {\n    color: white;\n    font-family: 'Raleway';\n}\n\n.icon {\n    font-weight: bold;\n    text-decoration: none;\n    transition: all .4s ease;\n    -webkit-transition: all .4s ease;\n}\n\n"]);return V=function(){return e},e}var Y=h.a.div(V()),Z=function(){return Object(s.jsxs)(Y,{children:[Object(s.jsx)(f.a,{fonts:[{font:"Raleway",weights:[100,200,300,400,500,600,700,800,900]},{font:"Roboto",weights:[100,"400i",900]}],subsets:["cyrillic-ext","greek"]}),Object(s.jsxs)("div",{className:"container-fluid about",children:[Object(s.jsx)("div",{className:"row text-white p-3",children:Object(s.jsx)(k,{})}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row mt-5 justify-content-center ",children:[Object(s.jsx)("div",{className:"col-md-6",children:Object(s.jsx)("img",{className:"image",src:"https://news-api.s3.us-east-2.amazonaws.com/profile.jpg",alt:"Pawel_Jaskolski_image"})}),Object(s.jsxs)("div",{className:"col-md-6 mt-5",style:{cursor:"default"},children:[Object(s.jsxs)("div",{className:"hello-text",children:["I'm Pawel, a full-stack web developer working as a ",Object(s.jsx)("span",{children:'"Coder-For-Hire"'}),"  in sunny Fort Lauderdale, Florida."]}),Object(s.jsxs)("div",{className:"about-text mt-3",children:[Object(s.jsx)("div",{children:"I am an avid problem solver. I believe this quality is what makes me an excellent web developer."}),Object(s.jsx)("div",{className:"mt-3",children:"I am a hardworking individual who brings passion and insight into everything I do."}),Object(s.jsx)("div",{className:"mt-3",children:"In my free time, I enjoy researching and investing in the stock market, while maybe sipping on a Jai Alai (my favorite beer). I also enjoy going out to different restaurants trying to find the best fried calamari with my favorite human!"}),Object(s.jsxs)("div",{className:"mt-3",children:["For a full scoop of my work experience please check out",Object(s.jsxs)("a",{href:"https://news-api.s3.us-east-2.amazonaws.com/Pawel+SoftDev+Resume+August+20+AWS.pdf",rel:"noreferrer",target:"_blank",className:"icon text-orange",children:[" my resume ",Object(s.jsx)(E.a,{})]})]})]})]})]}),Object(s.jsx)("div",{className:"row justify-content-center py-5",children:Object(s.jsx)("div",{className:"col-auto text-white",children:Object(s.jsx)("div",{type:"button",className:"border text-white",children:Object(s.jsx)(Q,{})})})})]})]})]})};var K=["background: linear-gradient(#E36C4E, #19272f)","border: 1px solid #E36C4E","color: white","padding: 1px 5px","display: block","line-height: 40px","text-align: center","font-weight: bold","font-size: large"].join(";");console.log("%cI am looking to get hired...if you like what you see, we should talk",K),console.log("%cpjpavo@gmail.com",K);var $=function(){return Object(s.jsx)(r.a,{children:Object(s.jsxs)(l.c,{children:[Object(s.jsx)(m,{exact:!0,path:"/Pawel_Site_4/",children:Object(s.jsx)(C,{})}),Object(s.jsx)(m,{exact:!0,path:"/Pawel_Site_4/projects",children:Object(s.jsx)(J,{})}),Object(s.jsx)(m,{exact:!0,path:"/Pawel_Site_4/contact",children:Object(s.jsx)(F,{})}),Object(s.jsx)(m,{exact:!0,path:"/Pawel_Site_4/about",children:Object(s.jsx)(Z,{})})]})})},ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,s=n.getFID,a=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),s(e),a(e),i(e),o(e)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)($,{})}),document.getElementById("root")),ee()}},[[43,1,2]]]);
//# sourceMappingURL=main.e736785f.chunk.js.map