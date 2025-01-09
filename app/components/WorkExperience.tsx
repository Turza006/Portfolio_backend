const experiences = [
  {
    title: 'Senior Backend Developer',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2021 - Present',
    responsibilities: [
      'Lead a team of 5 developers in designing and implementing scalable backend solutions',
      'Optimized database queries resulting in a 40% improvement in API response times',
      'Implemented CI/CD pipelines using GitHub Actions and AWS CodePipeline'
    ]
  },
  {
    title: 'Backend Developer',
    company: 'Innovative Startups Ltd.',
    period: 'Jun 2019 - Dec 2020',
    responsibilities: [
      'Developed RESTful APIs using Node.js and Express for a social media platform',
      'Implemented real-time features using Socket.io for a chat application',
      'Collaborated with frontend developers to integrate APIs and improve user experience'
    ]
  }
]

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
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

