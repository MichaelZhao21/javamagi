import React, { useEffect, useRef, useState } from 'react';

/**
 * Creates random shapes on the side of the screen
 */
const SideShapes = ({ style }: { style?: object }) => {
    const divRef = useRef(null);
    const [shapes, setShapes] = useState([]);

    useEffect(() => {
        // TODO: Create the shapes instead of just a lighter side
        const mainDiv: HTMLDivElement = divRef.current;
    }, []);

    return (
        <div
            ref={divRef}
            style={{
                width: '20%',
                flexBasis: '20%',
                flexGrow: 1,
                ...style,
            }}
        >
            {shapes}
        </div>
    );
};

export default SideShapes;
