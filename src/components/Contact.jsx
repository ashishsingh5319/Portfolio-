import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Mail, Linkedin, Github, ExternalLink, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [errors, setErrors] = useState({})

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ashuu1179@gmail.com",
      href: "mailto:your.email@example.com"
    },
    // {
    //   icon: <Phone className="h-5 w-5" />,
    //   label: "Phone",
    //   value: "+1 (555) 123-4567",
    //   href: "tel:+15551234567"
    // },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "India",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: <ExternalLink className="h-6 w-6" />,
      label: "Portfolio",
      href: "#",
      color: "hover:text-purple-600"
    }
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For demonstration, we'll just log the form data
      console.log('Form submitted:', formData)
      
      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setSubmitStatus('success')
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about web development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-primary p-2 bg-primary/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-muted-foreground transition-colors duration-200 p-3 rounded-lg hover:bg-secondary ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-shadow duration-300 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`transition-colors focus:border-primary ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`transition-colors focus:border-primary ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`transition-colors focus:border-primary ${errors.subject ? 'border-red-500' : ''}`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className={`transition-colors focus:border-primary resize-none ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full gradient-bg hover:opacity-90 transition-opacity disabled:opacity-50" 
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
