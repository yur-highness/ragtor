import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send, Upload, File, X } from "lucide-react";
import { toast } from "sonner";



interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

interface ChatInterfaceProps {
  title: string;
  description: string;
  placeholder: string;
  icon: React.ReactNode;
}

export const ChatInterface = ({ title, description, placeholder, icon }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  

  const handleSendMessage = async () => {
    if (!input.trim() && uploadedFiles.length === 0) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I've analyzed your request regarding "${input}". Based on the context and any uploaded files, here's my comprehensive response with actionable insights and recommendations.`,
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
    toast(`Files uploaded: ${files.length} file(s) added for analysis`);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-gradient-primary">
            {icon}
          </div>
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>

      {/* Chat Container */}
      <Card className="chat-container mb-6">
        {/* Messages */}
        <div className="min-h-[400px] max-h-[500px] overflow-y-auto mb-6 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                Start a conversation or upload documents to analyze
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="outline"  className="hover:bg-purple-300" onClick={() => document.getElementById("file-upload")?.click()}>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Files
                </Button>
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-xl ${
                    message.role === "user"
                      ? "bg-gradient-primary text-white"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="leading-relaxed">{message.content}</p>
                  <div className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted p-4 rounded-xl animate-glow-pulse">
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
                  <span>Analyzing...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <div className="mb-4 p-4 bg-muted/50 rounded-lg">
            <div className="text-sm font-medium mb-2">Uploaded Files:</div>
            <div className="flex flex-wrap gap-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center gap-2 bg-background px-3 py-1 rounded-full">
                  <File className="w-3 h-3" />
                  <span className="text-xs">{file.name}</span>
                  <button onClick={() => removeFile(index)} className="text-muted-foreground hover:text-foreground">
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="flex gap-3">
          <input
            id="file-upload"
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.txt"
            className="hidden"
            onChange={handleFileUpload}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            <Upload className="w-4 h-4" />
          </Button>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="flex-1"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button onClick={handleSendMessage} disabled={isLoading}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};