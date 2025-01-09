import Link from 'next/link'

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Probal Datta Turza</h1>
        <p className="text-xl md:text-2xl mb-8">A backend developer with 4 years of experience</p>
        <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors">
          Get in touch
        </Link>
      </div>
    </section>
  )
}

