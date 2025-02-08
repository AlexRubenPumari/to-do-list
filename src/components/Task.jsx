import { useState } from "react"

export default function Task({ children }) {
  const [isMarked, setIsMarked] = useState(false)
  return (
    <div 
      className={`task ${isMarked ? 'marked' : ''}`}
      onDoubleClick={() => setIsMarked(!isMarked)}
    >
      {children}
    </div>
  )
}
