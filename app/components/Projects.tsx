import Image from 'next/image'

const projects = [
  {
    title: 'E-commerce API',
    description: 'Developed a scalable RESTful API for an e-commerce platform using Node.js, Express, and MongoDB.',
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/username/e-commerce-api',
    demo: 'https://api.example.com'
  },
  {
    title: 'Task Management System',
    description: 'Built a task management system with real-time updates using Nest.js, TypeScript, and Socket.io.',
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['Nest.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com/username/task-management',
    demo: 'https://tasks.example.com'
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <Image src={project.image} alt={project.title} width={300} height={200} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-600 text-sm rounded-full px-3 py-1">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

