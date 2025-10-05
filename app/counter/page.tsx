'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col w-fit p-20 bg-green-300 rounded-xl">
        <p className="py-5 px-20 m-3 bg-amber-200 text-fuchsia-700 rounded-full">
          {count} likes
        </p>
        <button
          className="p-5 m-3 bg-blue-300 text-amber-600 rounded-full"
          onClick={() => setCount(count + 1)}
        >
          Increase me with 1
        </button>
        <button
          className="p-5 m-3 bg-pink-300 text-blue-700 rounded-full"
          onClick={() => setCount(count - 1)}
        >
          Decrease me with 1
        </button>
      </div>
    </div>
  )
}
