import { useState } from 'react'
import './App.css'

function App() {

  return (
  <>
  <div className="bg-red-500 p-4 text-white">Tailwind Test</div>

    <button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button>
  </>
  )
}

export default App
