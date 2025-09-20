import { Dashboard } from "@/components/Dashboard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        <div className="container mx-auto px-6 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI-Powered RagtOR
              </span>
              <br />
              <span className="text-foreground">Assistants</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
              Automate your daily tasks with specialized AI agents that understand your documents,
              analyze complex information, and provide actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button asChild  size="lg" className="text-lg px-8 py-6">
                <Link to="#dashboard">
                  Get Started
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 hover:bg-purple-300">
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our RagtOR Assistants?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with cutting-edge AI technology to handle your most complex document analysis tasks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="p-4 rounded-full bg-gradient-to-br from-accent to-accent/80 w-16 h-16 mx-auto mb-6 flex items-center justify-center hover:bg-purple-300">
                <Brain className="h-8 w-8 text-white " />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced AI Analysis</h3>
              <p className="text-muted-foreground">
                Powered by state-of-the-art language models that understand context and nuance
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="p-4 rounded-full bg-gradient-to-br from-accent to-accent/80 w-16 h-16 mx-auto mb-6 flex items-center justify-center hover:bg-purple-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Get instant analysis and summaries of complex documents in seconds
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="p-4 rounded-full bg-gradient-to-br from-accent to-accent/80 w-16 h-16 mx-auto mb-6 flex items-center justify-center hover:bg-purple-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your documents are processed securely with enterprise-grade privacy protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20">
        <Dashboard />
      </section>

       {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;