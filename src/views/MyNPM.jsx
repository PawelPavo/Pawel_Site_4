import React from 'react'
import Navigation from '../components/Navigation';
import TagCard from '../components/TagCard';
import styled from 'styled-components';
import { Npms } from '../utils/npms'

function MyNPM() {
    const [buttonText, setButtonText] = React.useState('Copy')
    const [tagArray] = React.useState(["npm i"])
    const [isTS, setTS] = React.useState(true);
    const [isJS, setJS] = React.useState(true);
    const [isDisabled, setDisabled] = React.useState(true)

    const setTypescript = () => {
        setTS(true)
        setJS(false)
        setDisabled(false)
    }

    const setJavascript = () => {
        setTS(false)
        setJS(true)
        setDisabled(false)
    }

    const addText = (event) => {
        var NPMtag = event.target || event.srcElement;
        var found = tagArray.indexOf(NPMtag.textContent);
        if (found !== -1) {
            tagArray.splice(found, 1);
            found = tagArray.indexOf(NPMtag.textContent);
        } else {
            tagArray.push(NPMtag.textContent)
        }
        if (isTS) {
            let tsPackage = '@types/' + NPMtag.textContent
            if (NPMtag.textContent.includes('@types/')) { // If you select an @types/* package while in TS mode,
                tsPackage = tsPackage.replaceAll('@types/', '') // change tsPackage to represent the regular JS module
            }

            let tsFound = tagArray.indexOf(tsPackage);
            if (tsFound !== -1) {
                tagArray.splice(tsFound, 1);
                tsFound = tagArray.indexOf(tsPackage);
            } else {
                tagArray.push(tsPackage)
            }
        }
        var textArea = document.getElementById("floatingTextarea2");
        textArea.value = tagArray.join(" ")

    }

    const onSubmit = () => {
        let textarea = document.getElementById("floatingTextarea2");
        textarea.select();
        document.execCommand("copy");
        setButtonText('Copied!')
        setTimeout(function () {
            setButtonText('Copy Again!')

        }, 3000);
    }

    const onRest = () => {
        window.location.reload();
    }

    return (
        <TagStyle>
            <div className="container-fluid about">
                <div className="row text-white p-3">
                    <Navigation />
                </div>
                <div className="container"></div>
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h1 className="text-light">NPM's</h1>
                    </div>
                    <div className="col-md-12 text-center">
                        <h6 className="text-light" >Please select project packages you would like to install and click the copy button</h6>
                    </div>
                    <div className="row justify-content-center my-3">
                        <button className={`${!isJS ? 'btn-custom-light btn-lg mx-5 disabledbutton' : 'btn-custom-light btn-lg mx-5 '}`} onClick={setJavascript}>Javascript</button>
                        <button className={`${!isTS ? 'btn-custom-light btn-lg mx-5 disabledbutton' : 'btn-custom-light btn-lg mx-5 '}`} onClick={setTypescript}>Typescript</button>
                    </div>
                </div>
                <div id="tags" className={`${isDisabled ? 'row mt-3 justify-content-center disabledbutton' : 'row mt-3 justify-content-center'}`}>
                    {Npms.map(npm => (
                        <div key={npm} className="col-lg-3 text-center" onClick={addText}>
                            <TagCard key={npm} npm={npm} />
                        </div>
                    ))}
                </div>
                <div className="row justify-content-center my-3">
                <button className="btn-warning btn-lg mx-5 px-5" id="copyButton" onClick={onRest}> Rest All</button>
                    <button className="btn-success btn-lg mx-5 px-5" id="copyButton" onClick={onSubmit}> {buttonText}</button>
                </div>
                <div className="form-floating mb-5">
                    <textarea defaultValue="npm i" className="form-control" id="floatingTextarea2" style={{ height: "100px" }}>
                    </textarea>
                </div>
            </div>
        </TagStyle>
    )
}

const TagStyle = styled.div`

.disabledbutton {
    pointer-events: none;
    opacity: 0.4;
}

`

export default MyNPM;