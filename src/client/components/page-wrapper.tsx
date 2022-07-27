import React from 'react';
import SideShapes from './side-shapes';

interface PageWrapperProps extends React.AllHTMLAttributes<HTMLDivElement> {
    /** Content for the header, no header if null */
    header?: string;

    /** Previous page link, required if header is defined */
    prev?: string;
}

const PageWrapper = (props: PageWrapperProps) => {
    return (
        <React.Fragment>
            {props.header && (
                <div style={{ display: 'flex', height: '10%', alignItems: 'center' }}>
                    <a href={props.prev} style={{ margin: '0 2rem' }} className="icon-button">
                        <img src="/arrow.svg" width={30} height={30} />
                    </a>
                    <h1 style={{ fontSize: '3.5rem', margin: 0 }} className="title">
                        {props.header}
                    </h1>
                </div>
            )}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    minHeight: props.header ? '90%' : '100%',
                }}
            >
                <SideShapes left />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        width: '60%',
                        minHeight: '100%',
                        ...props.style,
                    }}
                >
                    {props.children}
                </div>
                <SideShapes />
            </div>
        </React.Fragment>
    );
};

export default PageWrapper;
