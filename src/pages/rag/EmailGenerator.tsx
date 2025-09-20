import { ChatInterface } from "@/components/ChatInterface";
import { Navigation } from "@/components/Navigation";
import { Mail } from "lucide-react";

const EmailGenerator = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ChatInterface
        title="Email Template Generator"
        description="Create professional emails for any situation - from business proposals to customer support responses, tailored to your specific context."
        placeholder="Help me write a professional email for follow-up, proposal, complaint response..."
        icon={<Mail className="h-6 w-6 text-white" />}
      />
    </div>
  );
};

export default EmailGenerator;