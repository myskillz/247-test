import React from "react"

export default function Intro() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="max-w-2xl w-full bg-[#E6007E] flex flex-col items-center justify-center p-8">
        <img
          src="https://www.247blinds.co.uk/static/version1739434238/frontend/Iweb/247Blinds/en_GB/images/logo.svg"
          alt="247 Blinds Logo"
          className="w-48"
        />
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: "#E6007E" }}>
          Welcome to the Tech Test
        </h1>

        <p className="text-gray-700 mb-6">
          This exercise is designed to test both your <strong>backend</strong> and <strong>frontend</strong> skills.
          You'll be working in a L.I.T.T.R stack (Laravel + Inertia + Tailwind + TypeScript + React).
        </p>

        <div className="text-left text-gray-800 space-y-4">
          <div>
            <h2 className="font-semibold text-lg" style={{ color: "#E6007E" }}>
              1. Backend
            </h2>
            <p>
              We've provided you with a deliberately messy and inefficient{" "}
              <code className="bg-gray-100 px-1 rounded">ProductController</code>.
              Your job is to modernise it:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Refactor to follow Laravel best practices</li>
              <li>Eliminate performance issues</li>
              <li>Return clean, well-structured data for the frontend</li>
              <li>Fix the broken product page</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg" style={{ color: "#E6007E" }}>
              2. Frontend
            </h2>
            <p>
              The current React views intentionally fail{" "}
              <strong>WCAG 2.2 accessibility guidelines</strong>. Your task:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Refactor them into a fully accessible components</li>
              <li>Use semantic HTML, proper ARIA, and good contrast</li>
              <li>Keep the design clean and user-friendly</li>
              <li>Bonus points if you make it on-brand with 247blinds</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-gray-600 text-sm">
            Feel free to install any additional packages you need, and explain your reasoning as you go.
          </p>
        </div>
      </div>
    </div>
  )
}
