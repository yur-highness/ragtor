import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-gradient-primary group-hover:scale-105 transition-transform">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">RAG Assistants</span>
          </Link>
          
          <Button asChild variant="ghost" size="sm" className="hover:bg-purple-300 hover:text-black">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};