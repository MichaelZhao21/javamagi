import React, { useState } from 'react';
import PageWrapper from '../../components/page-wrapper';

const ProblemHome = () => {
    const [code, setCode] = useState('');

    // Submit a problem code
    const submit = () => {
        if (code.trim() === '') {
            alert('Your code is empty!');
            return;
        }

        // Page codes are 6 alphanumeric digits
        if (code.trim().length !== 6) {
            alert('Your code is the wrong length! (6 digits)');
        }
    };

    // Handle change to value
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCode(event.currentTarget.value);
    };

    return (
        <PageWrapper>
            <input placeholder="XXXXXX" value={code} onChange={handleChange} />
            <button onClick={submit}>Go to Problem</button>
        </PageWrapper>
    );
};

export default ProblemHome;
