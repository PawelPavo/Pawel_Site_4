import React from 'react'
import Navigation from '../components/Navigation';
import { Npms } from '../utils/npms'
import TagCard from '../components/TagCard';

function MyNPM() {
    const [buttonText, setButtonText] = React.useState('Copy')
    const [tagArray] = React.useState(["npm i"])

    const addText = (event) => {
        var NPMtag = event.target || event.srcElement;
        var found = tagArray.indexOf(NPMtag.textContent);
        if (found !== -1) {
            tagArray.splice(found, 1);
            found = tagArray.indexOf(NPMtag.textContent);
        } else {
            tagArray.push(NPMtag.textContent)
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

    return (
        <>
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
                        <h6 className="text-light" >Please select NPM's you would like to install and click the copy button</h6>
                    </div>
                </div>
                <div className="row mt-3 justify-content-center">
                    {Npms.map(npm => (
                        <div key={npm} className="col-md-4 text-center" onClick={addText}>
                            <TagCard key={npm} npm={npm} />
                        </div>
                    ))}
                </div>
                <div className="row justify-content-center my-3">
                    <button className="btn-orange btn-lg" id="copyButton" onClick={onSubmit}> {buttonText}</button>
                </div>
                <div className="form-floating mb-5">
                    <textarea defaultValue="npm i" className="form-control" id="floatingTextarea2" style={{ height: "100px" }}>
                    </textarea>
                </div>
            </div>
        </>
    )
}

export default MyNPM;