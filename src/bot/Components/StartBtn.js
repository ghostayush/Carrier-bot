import React from 'react'

export default function StartBtn(props) {

    const SecondAction = () => {
        props.actions.initialAction();
    }

    return (
        <div>
            <button className='start' onClick={() => SecondAction()}>Let's Get Started</button>
        </div >
    )
}
