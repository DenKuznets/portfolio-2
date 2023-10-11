import React, { FC } from 'react'
import {projects} from '../../utils/projects'
import Link from 'next/link';

export interface SectionProps{
    id:number,
}

const Section: FC<SectionProps> = ({id}) => {
  const text = projects.find(proj=>proj.id===id)
  return text ? (
      <div className="container">
          <h3 className="font-bold leading-normal mb-4">{text.name}</h3>
          <ul className="flex flex-wrap gap-3 items-center mb-4">
              {text.tech.map((obj) => (
                  <li
                      className="whitespace-nowrap px-4 py-2 border-dotted rounded-md border-black border"
                      key={obj}
                  >
                      {obj}
                  </li>
              ))}
          </ul>
          <Link href={text.github}>Github</Link>
          |
          <Link href={text.demo}>Demo</Link>
      </div>
  ) : (
      <div>project not found</div>
  );
}

export default Section