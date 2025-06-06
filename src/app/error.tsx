
'use client';

import { useEffect } from 'react';

interface ErrorProps {
    error: Error & { digest?:string};
    reset: () => void;
}


export default function GlobalError({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Something went wrong!</h1>
            <p>{error.message}</p>
            <button
                onClick={() => reset()}
                style={{
                    padding: '0.5rem 1rem',
                    marginTop: '1rem',
                    cursor: 'pointer',
                }}
            >
                Try again
            </button>
        </div>
    );
}
