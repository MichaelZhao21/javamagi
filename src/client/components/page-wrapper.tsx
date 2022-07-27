import React from 'react';
import SideShapes from './side-shapes';

const PageWrapper = (props: React.AllHTMLAttributes<HTMLDivElement>) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100%' }}>
            <SideShapes left />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    width: '60%',
                    minHeight: '100%',
                    ...props.style
                }}
            >
                {props.children}
            </div>
            <SideShapes />
        </div>
    );
};

export default PageWrapper;
