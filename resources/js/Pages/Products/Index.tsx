// @ts-nocheck
import React from "react"

export default function Index({ prods }) { //console.log("products", prods);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-6"
      role="main"
      aria-labelledby="page-title"
    >
      <div className="border-[#E6007E] border-2 max-w-2xl w-full bg-[#E6007E] flex flex-col items-center justify-center p-6 py-12 rounded-t-lg shadow-md">
        <h1 id="page-title" className="text-5xl text-white mt-4" style={{ fontFamily: 'fantasy' }}>
          <span className="text-6xl bg-white text-[#E6007E] pt-8 px-1 mr-1">P</span>roduct List
        </h1>
      </div>
      <div className="border-lightgray border-1 max-w-2xl w-full color-[#111] flex flex-col items-center justify-center bg-white py-6 rounded-b-lg shadow-md">

        <table className="w-full border-collapse table-auto">
           <thead className="text-[#E6007E]">
              <tr>
                <th scope="col" className="pl-3 pr-2 py-2 text-left">
                  Image
                </th>
                <th scope="col" className="pr-2 py-2 text-left">
                  Name
                </th>
                <th scope="col" className="pr-2 py-2 text-left">
                  Labels
                </th>
                <th scope="col" className="pr-2 py-2 text-left">
                  Counter
                </th>
              </tr>
            </thead>
            <tbody>
              {prods.map((product, index) => (
                <tr key={index} className="border-b border-gray-200 even:bg-gray-50 hover:bg-gray-100 focus-within:bg-gray-200">
                  <td className="pl-2 pr-4 py-2">
                    <img src={product.thumbnail} alt={product.name} className="w-16 h-16 object-cover object-cover transform transition-transform duration-300 hover:scale-[2.5]" />
                  </td>
                  <td className="pr-4 py-2"><a href={product.url} className="underline hover:no-underline focus:outline-none focus:ring-2">{product.name}</a></td>
                  <td className="px-4 py-2">
                    <ul>
                      {product.labels.map((label, i) => (
                        <li key={i} className="inline-block mr-2 mb-2">
                          <span className="px-2 py-1 bg-gray-100 border-2 text-sm rounded">
                            {label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="pr-4 py-2">{product.count}</td>
                </tr>
              ))}
            </tbody>
        </table>

        {/* pagination example
        <a href="#"></a>

        <button></button>

        <div onClick={() => alert("you are trapped")}>press me</div>
        */}
      </div>

    </div>
  )
}
