interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'StreetByte',
    description: `A mobile app that allows students on university campus towns to locate food trucks in real time `,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'MassProd',
    description: `A SaaS product for TV production companies to efficiently manage projects, organize tasks, and facilitate internal and external communication`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'MassProd',
    description: `A SaaS product for TV production companies to efficiently manage projects, organize tasks, and facilitate internal and external communication`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
]

export default projectsData
