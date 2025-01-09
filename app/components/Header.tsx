'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { rootMargin: '-50% 0px -50% 0px' }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-6">
            {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                      href={item.href}
                      className={`hover:text-blue-400 transition-colors ${
                          activeSection === item.href.slice(1) ? 'active-nav-item' : ''
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
            ))}
          </ul>
        </nav>
      </header>
  )
}


