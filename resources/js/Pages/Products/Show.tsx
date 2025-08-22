// @ts-nocheck
import React from "react"

export default function Show({ prod }) {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-center py-6"
      role="main"
      aria-labelledby="page-title"
    >
        <div className="border-[#E6007E] border-2 max-w-2xl w-full bg-[#E6007E] flex flex-col items-center justify-center p-6 py-12 rounded-t-lg shadow-md">
            <h1 id="page-title" className="text-5xl text-white mt-4" style={{ fontFamily: 'fantasy' }}>
                <span className="text-6xl bg-white text-[#E6007E] pt-8 px-1 mr-1">P</span>roduct Details
            </h1>
        </div>

        <div className="h-[calc(100vh-235px)] border-lightgray border-1 max-w-2xl w-full color-[#111] flex flex-col items-center justify-center bg-white rounded-b-lg shadow-md">
            <div className="h-full w-full  flex-col items-center justify-center"> 
            <div className="w-full border-b-2 border-gray-200 pl-1 mb-4">
                <a href={route('products.index')} className="underline hover:no-underline focus:outline-none focus:ring-2"> &gt;go back</a>
            </div>

            <div className="bg-white rounded p-6 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4 text-[#E6007E] text-center">{prod.name}</h1>
                <img src={prod.thumbnail} alt={prod.name} className="mb-4 max-w-xs rounded mx-auto" />
                <div className="mb-4 text-gray-700 text-center">{prod.labels.join(", ")}</div>
            </div>
            </div>
        </div>
    </div>
  )
}
