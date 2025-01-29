import Image from 'next/image'

const projects = [
  {
    title: 'Valt Pay',
    description: 'The project at Valt focuses on providing a comprehensive payment solution designed to enhance the efficiency and security of financial transactions. This platform aims to streamline payment processes for businesses, ensuring that transactions are not only quick but also secure.',
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe']
  },
  {
    "title": "Valt Hardware Solutions",
    "description": "Valt offers a range of hardware products designed to enhance productivity and efficiency in various business environments. Their solutions include advanced devices that integrate seamlessly with existing systems, providing robust performance and reliability.",
    "image": "/placeholder.svg?height=200&width=300",
    "technologies": ["Node.js", "Cloud Connectivity", "Redis", "Socket.io", "Mongodb", "Otter"]
  },
  {
    "title": "Valt Kitchen Screen",
    "description": "The Valt Kitchen Screen is an innovative solution designed to streamline kitchen operations by providing real-time updates and easy access to order information. It enhances communication between the front of house and kitchen staff, ensuring that orders are processed efficiently and accurately.",
    "image": "/placeholder.svg?height=200&width=300",
    "technologies": ["Node.js", "Redis", "Socket.io", "mongodb"]
  },
  {
    "title": "Darun",
    "description": "Darun is a review reward system that allows users to provide reviews for any product and earn rewards in return. This platform enables businesses to promote their products effectively while encouraging customer engagement through incentivized feedback.",
    "image": "/placeholder.svg?height=200&width=300",
    "technologies": ["Node.js", "Cloud Connectivity", "Redis", "Socket.io", "MongoDB", "Otter"]
  }
  // Add more projects as needed
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
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
                {/*<div className="flex justify-between">*/}
                {/*  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>*/}
                {/*  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Live Demo</a>*/}
                {/*</div>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

