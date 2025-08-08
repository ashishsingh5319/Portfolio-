import { Button } from '@/components/ui/button.jsx'
import { Download, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              Hi, I'm <span className="gradient-text">Ashish a Frontend Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-delay-1">
              I build responsive websites that deliver value
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-2">
              Passionate about creating beautiful, functional, and user-friendly web experiences using modern technologies like React, JavaScript, and Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-3">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="px-8 py-3 text-lg gradient-bg hover:opacity-90 transition-opacity"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            {/* <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg border-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button> */}
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in-delay-3">
            <button 
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 animate-bounce"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

