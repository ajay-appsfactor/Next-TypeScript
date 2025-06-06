'use client';

import { useEffect } from 'react';
import { AiOutlineWarning } from 'react-icons/ai';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-800 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center border border-red-200">
                <div className="flex justify-center mb-4">
                    <AiOutlineWarning size={48} className="text-red-500" />
                </div>
                <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
                <p className="text-sm text-gray-700 mb-4">{error.message}</p>
                <button
                    onClick={() => reset()}
                    className="cursor-pointer bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition "
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
