"use client"


import { useRouter } from "next/navigation"


export const useGoBack = () => {
    const router = useRouter();

    const goBack = () => {
        if (window.history.length > 1) { // Go Back previous Page 
            router.back();
        } else {
            router.push("/");            // Redirect to home Page 
        }
    }
    return goBack
}

