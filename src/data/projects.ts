export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  image?: string
  featured: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'personal-site',
    title: 'Personal Website',
    tagline: 'The site you\'re looking at right now',
    description:
      "A responsive personal website built with React, TypeScript, and Vite deployed to Github Pages. Features a sticky sidebar with info and navigation links, variable themes",
    tags: ['React', 'TypeScript', 'Vite', 'CSS', 'GitHub Pages'],
    github: 'https://github.com/benabryant/benabryant.github.io',
    demo: 'https://benabryant.com',
    image: '/projects/personal-site.png',
    featured: true,
  },
  {
    id: 'solar',
    title: 'Solar Panel Controller',
    tagline: 'Prototype for a solar panel controller',
    description:
      "A toy prototype for a solar panel controller built with an ESP32 microcontroller. A user can manually rotate it with a remote or trigger automatic rotation. It uses a light sensor to track the sun and a servo motor to adjust the panel's angle for optimal energy absorption.",
    tags: ['ESP32', 'C++', 'FreeRTOS', 'Arduino', 'IoT', 'I2C'],
    github: 'https://github.com/benabryant/DynamicSolar',
    /*TODO: demo: 'https://benabryant.com',*/
    image: '/projects/solar.png',
    featured: true,
  },
]
