import { Linkedin, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://linkedin.com/in/probaldattaturza" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/probaldattaturza" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://twitter.com/probaldattaturza" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Twitter size={24} />
            </a>
          </div>
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Probal Datta Turza. All rights reserved.
          </p>
        </div>
      </footer>
  )
}
