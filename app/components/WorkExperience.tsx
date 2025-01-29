const experiences = [
  {
    title: 'Backend Developer',
    company: 'valt',
    period: 'Jan 2021 - Present',
    responsibilities: [
      'Collaborated with a team of 60 members, including 10 backend developers, to develop and manage multiple APIs and complex data handling processes',
      'Integrated various third-party APIs to enhance product functionality and user experience',
      'Contributed to the development of a successful product by ensuring seamless collaboration across all team members'
    ]
  },
  {
    title: 'Junior Backend Developer',
    company: 'Console.it',
    period: 'Jun 2019 - Dec 2020',
    responsibilities: [
      'Managed small to medium client-based projects utilizing Python or JavaScript for backend development with MongoDB',
      'Designed and implemented RESTful APIs to ensure efficient data communication between client and server',
      'Collaborated with cross-functional teams to deliver high-quality solutions that meet client requirements'
    ]
  }
]

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <p className="text-gray-300 mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

