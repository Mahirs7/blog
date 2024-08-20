'use client'
import React from 'react'
import Typed from 'typed.js'

const TypedBios = () => {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm a software engineer with a passion for building impactful products and solving problems.
        </li>
        <li>
          I'm a software engineer with a passion for building impactful products and solving problems.
        </li>
        {/* <li>
          I was born in the beautiful <b className="font-medium">Quang Ngai</b> city.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">C++</b>.
        </li>
        <li>I love web development.</li>
        <li>
          I'm focusing on building <b className="font-medium">Social Analytics Software</b>.
        </li>
        <li>
          I work mostly with <b className="font-medium">Javascript/Typescript</b> technologies.
        </li> */}
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios
