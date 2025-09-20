import { ChatInterface } from "@/components/ChatInterface";
import { Navigation } from "@/components/Navigation";
import { Shield } from "lucide-react";

const ContractReviewer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ChatInterface
        title="Contract Review Assistant"
        description="Get comprehensive contract reviews with risk analysis, clause-by-clause breakdown, and recommended modifications to protect your interests."
        placeholder="Upload contracts for review or ask about specific clauses, risks, and terms..."
        icon={<Shield className="h-6 w-6 text-white" />}
      />
    </div>
  );
};

export default ContractReviewer;