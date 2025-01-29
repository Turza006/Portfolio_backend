import { IconType } from 'react-icons';
import { FaNodeJs, FaAws, FaPython, FaDocker, FaLinux, FaGithub, FaReact, FaVuejs, FaAngular, FaBootstrap, FaHtml5, FaCss3, FaStripe, FaGitAlt, FaDigitalOcean, FaJava, FaJs, FaNpm } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNestjs, SiTypescript, SiJavascript, SiGraphql, SiDjango, SiFlutter, SiGooglecloud, SiPostgresql, SiTensorflow, SiKeras, SiScikitlearn, SiPytorch, SiPandas, SiNumpy, SiRedis, SiFirebase, SiSocketdotio, SiNginx, SiJson, SiPrometheus, SiGrafana, SiDart, SiJest, SiMocha, SiChai, SiSupabase } from 'react-icons/si';
import { DiScala, DiRuby, DiPhp } from 'react-icons/di';

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const skillCategories: { [key: string]: Skill[] } = {
  "Languages": [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Dart', icon: SiDart, color: '#0175C2' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Scala', icon: DiScala, color: '#DC322F' },
    { name: 'Ruby', icon: DiRuby, color: '#CC342D' },
    { name: 'PHP', icon: DiPhp, color: '#777BB4' },
  ],
  "Frameworks": [
    { name: 'Node.js', icon: FaNodeJs, color: '#8C8D8F' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'Flutter', icon: SiFlutter, color: '#0288D1' },
    { name: 'NestJS', icon: SiNestjs, color: '#E04820' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Vue', icon: FaVuejs, color: '#41B883' },
    { name: 'Angular', icon: FaAngular, color: '#DD0031' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
  ],
  "Cloud": [
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
    { name: 'DigitalOcean', icon: FaDigitalOcean, color: '#008080' },
  ],
  "Databases": [
    { name: 'MongoDB', icon: SiMongodb, color: '#27AE60' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Redis', icon: SiRedis, color: '#DC322F' },
  ],
  "Machine Learning": [
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    { name: 'Keras', icon: SiKeras, color: '#D00000' },
    { name: 'scikit-learn', icon: SiScikitlearn, color: '#1C871C' },
    { name: 'PyTorch', icon: SiPytorch, color: '#EA4335' },
    { name: 'Pandas', icon: SiPandas, color: '#150458' },
    { name: 'NumPy', icon: SiNumpy, color: '#150458' },
  ],
  "Frontend": [
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3, color: '#2965F1' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#563D7C' },
  ],
  "Testing": [
    { name: 'Jest', icon: SiJest, color: '#C21313' },
    { name: 'Supertest', icon: SiJest, color: '#C21313' },
    { name: 'Mocha', icon: SiMocha, color: '#4CAF50' },
    { name: 'Chai', icon: SiChai, color: '#4CAF50' },
  ],
  "DevOps & Tools": [
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'GitHub', icon: FaGithub, color: '#24292E' },
    { name: 'Linux', icon: FaLinux, color: '#764BA2' },
    { name: 'Nginx', icon: SiNginx, color: '#007bff' },
    { name: 'Prometheus', icon: SiPrometheus, color: '#41B883' },
    { name: 'Grafana', icon: SiGrafana, color: '#22863A' },
    { name: 'npm', icon: FaNpm, color: '#CB3837' },
  ],
  "Others": [
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'Stripe', icon: FaStripe, color: '#008CFF' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Socket.IO', icon: SiSocketdotio, color: '#000000' },
    { name: 'JSON', icon: SiJson, color: '#292E34' },
    { name: 'REST API', icon: SiJson, color: '#292E34' },
    { name: 'Supabase', icon: SiSupabase, color: '#3EC1D5' },
  ],
};

export default function Skills() {
  return (
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
          {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center bg-gray-700 rounded-lg p-4 transition-all duration-300 hover:bg-gray-600">
                        <skill.icon className="text-4xl mb-2" style={{ color: skill.color }} />
                        <span className="text-sm text-center text-gray-300">{skill.name}</span>
                      </div>
                  ))}
                </div>
              </div>
          ))}
        </div>
      </section>
  )
}

