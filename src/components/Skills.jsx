import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Code, Palette, Settings, Monitor } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "TypeScript", "Next.js"]
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Styling & Design",
      skills: ["Tailwind CSS", "Bootstrap",  "CSS Grid", "Flexbox", "Responsive Design", "Material-UI"]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Webpack", "Vite", "npm/yarn", "ESLint", "Prettier"]
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Additional Skills",
      skills: ["RESTful APIs", "GraphQL", "Testing (Jest)", "Figma", "Adobe XD", "Performance Optimization"]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="text-primary p-2 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-sm py-2 px-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill level indicators */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "React & JavaScript", level: 90 },
              { skill: "HTML & CSS", level: 95 },
              { skill: "Tailwind CSS", level: 85 },
              { skill: "TypeScript", level: 80 },
              { skill: "Next.js", level: 75 },
             
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="gradient-bg h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

