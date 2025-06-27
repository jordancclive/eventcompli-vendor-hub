
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, FileText, Shield, Eye, HeartHandshake, ArrowRight, Zap, Clock, TrendingUp, Bot } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Seamless Onboarding",
      description: "Invite and register vendors with a streamlined, intuitive process."
    },
    {
      icon: FileText,
      title: "Centralized Document Hub",
      description: "Securely manage and access all vendor documents in one organized place."
    },
    {
      icon: Bot,
      title: "CompliBot Automation",
      description: "Our AI-powered CompliBot ensures vendors meet requirements with automated checks and smart notifications."
    },
    {
      icon: Eye,
      title: "Customizable Portals",
      description: "Create branded portals tailored to each event for a professional touch."
    },
    {
      icon: TrendingUp,
      title: "CompliBot Real-time Tracking",
      description: "CompliBot monitors vendor progress and compliance with insightful dashboards and reports."
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Support + CompliBot",
      description: "Get assistance from our expert team and your friendly CompliBot companion whenever you need it."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Create Your Event",
      description: "Set up your event with customizable details and requirements."
    },
    {
      number: "2",
      title: "Invite Vendors",
      description: "Send the web link to vendors for your dedicated portal."
    },
    {
      number: "3",
      title: "Vendor Onboarding",
      description: "Vendors easily register and upload necessary documents."
    },
    {
      number: "4",
      title: "CompliBot Takes Over",
      description: "Our cute robot mascot CompliBot automatically checks compliance and sends smart notifications."
    },
    {
      number: "5",
      title: "Approve & Manage",
      description: "Review CompliBot's analysis, approve vendors, and manage their access effortlessly."
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Accelerate Onboarding",
      description: "Dramatically reduce the time spent on manual vendor onboarding processes."
    },
    {
      icon: Bot,
      title: "CompliBot AI Power",
      description: "Your friendly robot insurance compliance agent automates document checking and renewal requests, freeing up your time."
    },
    {
      icon: Shield,
      title: "Enhanced Compliance & Risk Reduction",
      description: "CompliBot proactively manages vendor compliance and minimizes potential liabilities with intelligent monitoring."
    },
    {
      icon: HeartHandshake,
      title: "Improve Vendor Relationships",
      description: "Provide a professional and efficient platform for your valued vendors, powered by CompliBot's friendly assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-blue-600">
                EventCompli
              </span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started Free
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-yellow-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-blue-100">
                  <Bot className="w-6 h-6 text-blue-600" />
                  <span className="text-blue-600 font-semibold">Powered by CompliBot AI</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Simplify Vendor Management,{" "}
                <span className="text-blue-600">
                  Amplify Your Event
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Meet CompliBot, your friendly AI insurance compliance agent! Our powerful, free platform helps organizers onboard, track, and ensure vendor documents and insurance are all set — effortlessly.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/api/placeholder/64/64" 
                    alt="CompliBot mascot - cute robot insurance compliance agent" 
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <p className="text-blue-800 font-medium">👋 Hi! I'm CompliBot, your cute robot compliance assistant!</p>
                    <p className="text-blue-600 text-sm">I'll handle all the boring compliance checks so you can focus on making amazing events!</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
                  Meet CompliBot
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-auto flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-blue-500" />
                      <span className="text-xs text-blue-500 font-medium">CompliBot Active</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-200 to-yellow-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="grid grid-cols-3 gap-2 mt-6">
                      <div className="h-8 bg-gradient-to-r from-blue-100 to-yellow-100 rounded flex items-center justify-center">
                        <Bot className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="h-8 bg-blue-100 rounded"></div>
                      <div className="h-8 bg-yellow-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Bot className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                CompliBot's Powerful Features
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to streamline vendor management with your friendly AI compliance assistant
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How CompliBot Simplifies Your Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined 5-step process with your AI compliance assistant
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    {step.number === "4" ? (
                      <Bot className="w-6 h-6 text-white" />
                    ) : (
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The CompliBot Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of having a cute robot insurance compliance agent on your team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex items-center justify-center mb-6">
            <Bot className="w-12 h-12 text-white mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Meet CompliBot?
            </h2>
          </div>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let your friendly AI compliance assistant handle the tedious work while you focus on creating amazing events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 font-semibold">
              Meet CompliBot Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" className="bg-yellow-500 text-white hover:bg-yellow-600 text-lg px-8 py-3 border-2 border-yellow-500">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">EventCompli</span>
              <div className="flex items-center space-x-2 ml-4">
                <Bot className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 text-sm">Powered by CompliBot</span>
              </div>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 EventCompli. Your friendly AI compliance assistant for events.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
