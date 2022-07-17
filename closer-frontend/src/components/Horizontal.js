
import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal';
const Horizontal = () => {
    const child = { width: `30em`, height: `100%` };
    return (
        <div className="events-container">
            <HorizontalScroll>
                <div className='eventcard'>
                    <h1>Hello 1</h1>
                </div>
                <div style={child}>
                    <h1>Hello 2</h1>
                </div>

                <div style={child}>
                    <h1>Hello 3</h1>
                </div>
                <div style={child}>
                    <h1>Hello 3</h1>
                </div>
                <div style={child}>
                    <h1>Hello 3</h1>
                </div> <div style={child}>
                    <h1>Hello 3</h1>
                </div>
            </HorizontalScroll>
        </div>
    )

}

export default Horizontal