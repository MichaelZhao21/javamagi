import React, { useEffect, useRef, useState } from 'react';

interface SideShapesProps {
    /** Left side */
    left?: boolean;

    /** Style the div */
    style?: object;
}

const SHAPE_LIST = ['circle', 'square', 'triangle'];

/**
 * Creates random shapes on the side of the screen
 */
const SideShapes = (props: SideShapesProps) => {
    const divRef = useRef(null);
    const [shapes, setShapes] = useState([]);

    useEffect(() => {
        console.log(divRef.current)
        const shapeList = [];
        for (let i = 0; i < 8; i++) {
            shapeList.push(
                <img
                    src={`/shapes/${SHAPE_LIST[Math.floor(Math.random() * 3)]}.svg`}
                    width={60}
                    height={60}
                    style={{
                        position: 'absolute',
                        top: `${Math.round(Math.random() * 10) + 12 * i}%`,
                        left: `calc(${Math.round(Math.random() * 100)}% - ${props.left ? 60 : 0}px`,
                        transform: `rotate(${Math.round(Math.random() * 360)}deg)`
                    }}
                />
            );
        }
        setShapes(shapeList);
    }, []);

    return (
        <div
            ref={divRef}
            style={{
                width: '20%',
                flexBasis: '20%',
                flexGrow: 1,
                position: 'relative',
                overflow: 'hidden',
                ...props.style,
            }}
        >
            {shapes}
        </div>
    );
};

export default SideShapes;
