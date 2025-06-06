"use client"

import Link from "next/link"
import { useGoBack } from "@/hooks/useGoBack"

const PageNotFound = () => {
  const goback = useGoBack();
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-lg font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page not found</h1>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button onClick={goback} className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</button>
          <Link href="/" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </div>
    </main>
  )
}

export default PageNotFound