import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { User, Code, Coffee, Download } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: "Who I Am",
      description: "A passionate frontend developer with a keen eye for design and user experience"
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "What I Do",
      description: "I create responsive, modern web applications using the latest technologies"
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: "My Approach",
      description: "I believe in clean code, continuous learning, and delivering exceptional results"
    }
  ]

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="animate-slide-in-left">
              <div className="text-lg text-muted-foreground leading-relaxed mb-8">
                <p className="mb-6">
                  Hello! I'm a <strong>Frontend Developer</strong> with a passion for creating beautiful, functional, and user-friendly web experiences. I specialize in modern web technologies and have experience building responsive websites that deliver real value to users and businesses.
                </p>
                <p className="mb-6">
                  My journey in web development started with curiosity about how websites work, and it has evolved into a deep appreciation for the craft of building digital experiences. I enjoy the challenge of turning complex problems into simple, elegant solutions.
                </p>
                {/* <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </p> */}
              </div>
              
              {/* <Button className="gradient-bg hover:opacity-90 transition-opacity">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button> */}
            </div>

            {/* Right side - Highlights */}
            <div className="animate-slide-in-right">
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {highlight.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {highlight.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

