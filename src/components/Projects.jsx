import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ExternalLink, Github, Eye } from 'lucide-react'
import bookImage from '../assets/Screenshot 2025-08-06 123102.png';

const Projects = () => {
  const projects = [
    {
      title: "Book Management System",
      description: "Developed a fully functional book management web app using ReactJS for item tracking and management. Features include search, pagination, form validation, and CRUD operations with a responsive UI.",
      technologies: ["ReactJS", "JavaScript", "CSS3", "Local Storage", "Responsive Design"],
      category: "Web Application",
      featured: true,
      image: bookImage,
      codeUrl: "https://github.com/ashishsingh5319/CodeAlpha_task3", // Replace with actual URL
      demoUrl: "https://code-alpha-task3-tau.vercel.app/" // Replace with actual URL
    }
    // {
    //   title: "E-Commerce Landing Page",
    //   description: "A modern, responsive landing page for an e-commerce platform built with React and Tailwind CSS. Features smooth animations, product showcase, and mobile-first design approach.",
    //   technologies: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    //   category: "Landing Page",
    //   featured: false,
    //   image: "/api/placeholder/400/250",
    //   codeUrl: "https://github.com/yourusername/project-repo", // Replace with actual URL
    //   demoUrl: "https://your-project-demo.netlify.app" // Replace with actual URL
    // },
    // {
    //   title: "Task Management Dashboard",
    //   description: "Interactive dashboard for task management with drag-and-drop functionality, real-time updates, and data visualization charts built using React and modern UI libraries.",
    //   technologies: ["React", "TypeScript", "Chart.js", "Drag & Drop API"],
    //   category: "Dashboard",
    //   featured: true,
    //   image: "/api/placeholder/400/250",
    //   codeUrl: "https://github.com/yourusername/project-repo", // Replace with actual URL
    //   demoUrl: "https://your-project-demo.netlify.app" // Replace with actual URL
    // },
    // {
    //   title: "Weather App",
    //   description: "A clean and intuitive weather application that provides current weather conditions and forecasts. Built with React and integrated with weather APIs for real-time data.",
    //   technologies: ["React", "Weather API", "CSS3", "Geolocation API"],
    //   category: "Web Application",
    //   featured: false,
    //   image: "/api/placeholder/400/250",
    //   codeUrl: "https://github.com/yourusername/project-repo", // Replace with actual URL
    //   demoUrl: "https://your-project-demo.netlify.app" // Replace with actual URL
    // }
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case "Web Application":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Landing Page":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Dashboard":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
              {project.featured && (
                <div className="absolute -top-3 left-6 z-10">
                  <Badge className="gradient-bg text-white">Featured</Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                {/* Project Image Placeholder */}
                {/* <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                  <Eye className="h-12 w-12 text-muted-foreground" />
                </div> */}
 

                
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-foreground">
                    {project.title}
                  </CardTitle>
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                               <img 
  src={project.image} 
  alt={project.title} 
  className="w-full h-48 object-cover rounded-lg mb-4"
/>
              </CardHeader>
              
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.codeUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => window.open(project.codeUrl, 
'_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button 
                      size="sm" 
                      className="flex-1 gradient-bg hover:opacity-90 transition-opacity"
                      onClick={() => window.open(project.demoUrl, 
'_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button variant="outline" size="lg" className="border-2 hover:bg-primary hover:text-primary-foreground transition-colors">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects