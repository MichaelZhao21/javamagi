import React from 'react';
import SideShapes from './side-shapes';

const PageWrapper = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100%' }}>
            <SideShapes />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    maxWidth: '60%',
                }}
            >
                {props.children}
            </div>
            <SideShapes />
        </div>
    );
};

export default PageWrapper;
