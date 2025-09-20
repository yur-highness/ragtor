import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileText, Upload } from "lucide-react";
import { Link } from "react-router-dom";

interface RagCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: "primary" | "secondary" | "accent";
  features: string[];
}

export const RagCard = ({ title, description, icon, path, color, features }: RagCardProps) => {
  const getColorClasses = () => {
    switch (color) {
      case "primary":
        return "from-primary/20 to-primary/5 border-primary/30";
      case "secondary":
        return "from-secondary/20 to-secondary/5 border-secondary/30";
      case "accent":
        return "from-accent/20 to-accent/5 border-accent/30";
      default:
        return "from-primary/20 to-primary/5 border-primary/30";
    }
  };

  return (
    <Card className={`rag-card group relative p-6 bg-gradient-to-br ${getColorClasses()}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${
          color === "primary" ? "from-primary to-primary-hover" :
          color === "secondary" ? "from-secondary to-secondary-hover" :
          "from-accent to-accent/80"
        }`}>
          {icon}
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>

      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

      <div className="space-y-2 mb-6 ">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm hover:bg-purple-300 hover:text-black">
            <div className={`w-1.5 h-1.5 rounded-full ${
              color === "primary" ? "bg-primary" :
              color === "secondary" ? "bg-secondary" :
              "bg-accent"
            }`} />
            <span className="text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button asChild className="flex-1 hover:bg-purple-300">
          <Link to={path}>
            <FileText className="w-4 h-4 mr-2" />
            Start Chat
          </Link>
        </Button>
        <Button variant="outline" size="sm">
          <Upload className="w-4 h-4" />
        </Button>
      </div>

      {/* Animated background effect */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${
        color === "primary" ? "from-primary/10" :
        color === "secondary" ? "from-secondary/10" :
        "from-accent/10"
      } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
    </Card>
  );
};