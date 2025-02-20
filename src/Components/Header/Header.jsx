import React, { useRef, useEffect } from "react"

import './Header.css'

function Header(props) {
    const resultRef = useRef()
    const expressionRef = useRef()

    useEffect(() => {
        resultRef.current.scrollIntoView()
    }, [props.history])


    useEffect(()=>{
        expressionRef.current.scrollLeft=expressionRef.current.scrollWidth
    },[props.expression])


    
    return (
        <div className="header">

            <div className="header_history custom-scroll">
                {props.history &&
                props.history?.map((item, index) => <p key={item + " " + Math.random() * 44}>{item}</p>)}
            </div>

            <br />
            <div ref={expressionRef} className="header_expression custom-scroll">
                <p>{props.expression}</p>
            </div>

            <p ref={resultRef} className="header_result">{props.result}</p>
        </div>
    )
}

export default Header