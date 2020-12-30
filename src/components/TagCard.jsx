import React from 'react'
import styled from 'styled-components';
import { FcCancel, FcPlus} from 'react-icons/fc'



function TagCard({ npm }) {
    const [show, setShow] = React.useState(false)

    const clickShow = () => {
        setShow(!show)
    }

    return (
        <TagStyle>
            <div onClick={clickShow} style={{cursor: "pointer"}} className={`row justify-content-between border border-secondary px-3 py-1 m-2 ${show ? 'selected-tag bg-custom-light border-custom-light' : 'tag'}`}>
                <small>
                    {npm}
                </small>
                <div>
                    {show ? <FcCancel/> : <FcPlus />}
                </div>
            </div>
        </TagStyle>
    )
}

const TagStyle = styled.div`
.tag{
    background-color: #2B2B2B;
    color: orange;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}
.tag:hover {
    background-color: #797575;
    color: white;
}

`

export default TagCard;