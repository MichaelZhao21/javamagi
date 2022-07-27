import { useRouter } from 'next/router';
import React, { useState } from 'react';
import PageWrapper from '../../components/page-wrapper';

const ProblemHome = () => {
    const [code, setCode] = useState('');
    const router = useRouter();

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

        // If code is correct, take user to code page
        router.push(`/problem/${code.trim()}`);
    };

    // Handle change to value
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCode(event.currentTarget.value);
    };

    return (
        <PageWrapper style={{ justifyContent: 'center' }}>
            <input
                type="text"
                placeholder="XXXXXX"
                maxLength={6}
                value={code}
                onChange={handleChange}
                style={{
                    textAlign: 'center',
                    fontSize: '10rem',
                    width: '30rem',
                    margin: '0 auto',
                }}
            />
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
                Enter your 6-digit problem code above
            </p>
            <button
                onClick={submit}
                style={{ width: '30rem', marginLeft: 'auto', marginRight: 'auto' }}
            >
                Go to Problem
            </button>
        </PageWrapper>
    );
};

export default ProblemHome;
