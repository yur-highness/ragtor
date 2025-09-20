import { ChatInterface } from "@/components/ChatInterface";
import { Navigation } from "@/components/Navigation";
import { Users } from "lucide-react";

const MeetingProcessor = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ChatInterface
        title="Meeting Notes Processor"
        description="Transform meeting recordings, notes, and transcripts into structured summaries with clear action items and follow-up tasks."
        placeholder="Upload meeting notes, transcripts, or ask me to summarize key decisions and action items..."
        icon={<Users className="h-6 w-6 text-white" />}
      />
    </div>
  );
};

export default MeetingProcessor;