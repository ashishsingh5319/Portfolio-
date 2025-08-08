import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/ashishsingh5319",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/ashish-kumar-5160ab222/",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:ashuu1179@gmail.com",
      label: "Email"
    }
  ]

  return (
    <footer className="bg-card border-t border-border py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Frontend Developer passionate about creating beautiful, functional, and user-friendly web experiences.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 hover:bg-secondary rounded-lg"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              © {currentYear} Frontend Developer Portfolio. Made with 
              <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
              using React & Tailwind CSS
            </p>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

