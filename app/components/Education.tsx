const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Example',
    year: '2015 - 2019'
  },
  {
    degree: 'AWS Certified Developer - Associate',
    institution: 'Amazon Web Services',
    year: '2021'
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.degree} className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-gray-400">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

