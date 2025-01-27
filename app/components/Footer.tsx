import { Linkedin, Github, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.linkedin.com/in/probal-datta-turza/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Turza006" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://www.facebook.com/probal.datta.turzas/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Facebook size={24} />
            </a>
          </div>
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Probal Datta Turza. All rights reserved.
          </p>
        </div>
      </footer>
  )
}
