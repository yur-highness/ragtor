import { Button } from "@/components/ui/button";
import { Brain, Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border text-black-500 text-shadow-2xs hover:text-shadow-3xs  transition-shadow">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 hover:text-black ">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">RAG Assistants</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Automate your daily tasks with AI-powered document analysis and intelligent assistants.
            </p>
            <div className="flex gap-3 hover:text-black ">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:scale-110 transition-transform hover:text-white">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:scale-110 transition-transform hover:text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:scale-110 transition-transform hover:text-white">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:scale-110 transition-transform hover:text-white">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* AI Assistants */}
          <div className="space-y-4 hover:text-black ">
            <h3 className="text-lg font-semibold">AI Assistants</h3>
            <div className="space-y-2">
              <Link to="/rag/terms-summarizer" className="block text-muted-foreground hover:text-primary transition-colors hover:text-white hover:bg-purple-300">
                Terms Summarizer
              </Link>
              <Link to="/rag/business-analyzer" className="block text-muted-foreground hover:text-primary transition-colors hover:text-white hover:bg-purple-300">
                Business Analyzer
              </Link>
              <Link to="/rag/email-generator" className="block text-muted-foreground hover:text-primary transition-colors hover:text-white hover:bg-purple-300">
                Email Generator
              </Link>
              <Link to="/rag/meeting-processor" className="block text-muted-foreground hover:text-primary transition-colors hover:text-white hover:bg-purple-300">
                Meeting Processor
              </Link>
            </div>
          </div>

          {/* More Assistants */}
          <div className="space-y-4 hover:text-black ">
            <h3 className="text-lg font-semibold">More Tools</h3>
            <div className="space-y-2">
              <Link to="/rag/contract-reviewer" className="block text-muted-foreground hover:text-primary transition-colors hover:text-white hover:bg-purple-300">
                Contract Reviewer
              </Link>
              <Link to="/rag/research-summarizer" className="block text-muted-foreground hover:text-primary transition-colors hover:text-white hover:bg-purple-300">
                Research Summarizer
              </Link>
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors hover:text-white hover:bg-purple-300">
                Features
              </a>
              <a href="#cta" className="block text-muted-foreground hover:text-primary transition-colors hover:text-white hover:bg-purple-300">
                Get Started
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 hover:text-black ">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground  hover:text-white">
                Ready to transform your workflow with AI?
              </p>
              <Button asChild className="w-full hover:text-black hover:bg-white">
                <Link to="#cta">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 hover:text-black ">
          <p className="text-muted-foreground text-sm hover:text-white">
            ©TECHWIZARD. 2024 RagtOR AI-Assistants. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors  hover:text-purple-600">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors  hover:text-purple-600">
              Terms of Service
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className=" hover:scale-110 transition-transform hover:text-white"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};