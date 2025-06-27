
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, FileText, Shield, Eye, HeartHandshake, ArrowRight, Zap, Clock, TrendingUp, Bot, Star, Award, Target } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Smart Vendor Onboarding",
      description: "Invite vendors through customized portals designed for your specific event requirements."
    },
    {
      icon: FileText,
      title: "Centralized Document Management",
      description: "Organize and access all vendor documentation in one secure, searchable location."
    },
    {
      icon: Bot,
      title: "AI-Powered Compliance",
      description: "Automated document verification and compliance tracking with intelligent notifications."
    },
    {
      icon: Shield,
      title: "Real-Time Risk Assessment",
      description: "Proactive monitoring and alerts for insurance renewals and compliance deadlines."
    },
    {
      icon: Eye,
      title: "Branded Event Portals",
      description: "Professional, customizable portals that reflect your brand and event identity."
    },
    {
      icon: Award,
      title: "Vendor Performance Insights",
      description: "Track vendor compliance history and performance metrics across all your events."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Accelerate Your Process",
      description: "Reduce vendor onboarding time by up to 80% with automated workflows and smart verification."
    },
    {
      icon: Target,
      title: "Eliminate Compliance Gaps",
      description: "Never miss critical insurance renewals or document expirations with proactive monitoring."
    },
    {
      icon: HeartHandshake,
      title: "Enhance Vendor Relations",
      description: "Provide vendors with a seamless, professional experience that strengthens partnerships."
    },
    {
      icon: TrendingUp,
      title: "Scale With Confidence",
      description: "Manage unlimited vendors across multiple events without increasing administrative overhead."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Event Director",
      company: "Metro Convention Center",
      quote: "EventCompli transformed how we handle vendor management. What used to take weeks now happens in days.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Operations Manager",
      company: "Premier Events Group",
      quote: "The automated compliance tracking alone has saved us countless hours and eliminated our compliance headaches.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header/Navigation */}
      <header className="bg-white/95 backdrop-blur-md border-b border-brand-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-playfair text-brand-gray-900">
                EventCompli
              </span>
            </div>
            <Button className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-medium px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Get Started Free
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-50 via-white to-brand-yellow-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-brand-yellow-100 text-brand-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                <span>AI-Powered Vendor Management</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-brand-gray-900 leading-tight mb-6">
                Vendor Management
                <span className="block text-brand-blue-500">Made Simple</span>
              </h1>
              <p className="text-xl text-brand-gray-600 mb-8 leading-relaxed font-inter">
                Streamline vendor onboarding, automate compliance tracking, and eliminate administrative headaches. 
                Get vendors approved faster with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white text-lg px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-lg border-2 border-brand-blue-500 text-brand-blue-600 hover:bg-brand-blue-50 font-medium transition-all duration-200">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-brand-gray-500">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-brand-blue-500" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-brand-blue-500" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-brand-blue-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <div className="bg-gradient-to-br from-brand-blue-100 to-brand-yellow-100 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brand-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-2 bg-brand-blue-50 px-3 py-1 rounded-full">
                      <Bot className="w-4 h-4 text-brand-blue-500" />
                      <span className="text-xs text-brand-blue-600 font-medium">AI Active</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-brand-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-brand-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-brand-blue-200 rounded-full">
                          <div className="h-2 bg-brand-blue-500 rounded-full w-3/4"></div>
                        </div>
                        <p className="text-xs text-brand-gray-500 mt-1">24 vendors approved</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-brand-yellow-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-brand-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-brand-yellow-200 rounded-full">
                          <div className="h-2 bg-brand-yellow-500 rounded-full w-5/6"></div>
                        </div>
                        <p className="text-xs text-brand-gray-500 mt-1">156 documents verified</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      <div className="h-12 bg-gradient-to-br from-brand-blue-50 to-brand-blue-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-brand-blue-500" />
                      </div>
                      <div className="h-12 bg-gradient-to-br from-brand-yellow-50 to-brand-yellow-100 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-brand-yellow-600" />
                      </div>
                      <div className="h-12 bg-gradient-to-br from-brand-gray-50 to-brand-gray-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-brand-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-brand-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto font-inter">
              Comprehensive vendor management tools designed to streamline your workflow and eliminate administrative burden.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-playfair text-brand-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-brand-gray-600 leading-relaxed font-inter">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-brand-gray-900 mb-4">
              Transform Your Vendor Management
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto font-inter">
              Join hundreds of event professionals who have revolutionized their vendor management process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-yellow-400 to-brand-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-playfair text-brand-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-brand-gray-600 leading-relaxed font-inter">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-brand-blue-50 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-yellow-400 text-brand-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-brand-gray-700 text-lg font-inter italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold font-playfair text-brand-gray-900">{testimonial.name}</p>
                    <p className="text-brand-gray-600 text-sm font-inter">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-white mb-4">
            Ready to Simplify Vendor Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed font-inter">
            Join the growing community of event professionals who trust EventCompli to streamline their vendor operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-blue-600 hover:bg-brand-gray-50 text-lg px-8 py-4 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" className="bg-brand-yellow-500 text-white hover:bg-brand-yellow-600 text-lg px-8 py-4 border-2 border-brand-yellow-500 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200">
              Schedule Demo
            </Button>
          </div>
          <p className="text-blue-200 text-sm mt-6 font-inter">
            No credit card required • 14-day free trial • Setup takes less than 5 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-playfair">EventCompli</span>
            </div>
            <p className="text-brand-gray-400 text-center md:text-right font-inter">
              © 2024 EventCompli. Simplifying vendor management for event professionals worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
