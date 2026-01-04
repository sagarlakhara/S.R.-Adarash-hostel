import { useState } from "react";
import { MessageSquare, Phone, Mail, Calendar, Trash2, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Message {
  id: number;
  name: string;
  phone: string;
  email?: string;
  message: string;
  date: string;
  read: boolean;
}

const initialMessages: Message[] = [
  {
    id: 1,
    name: "Rahul Kumar",
    phone: "+91 98765 43210",
    email: "rahul@email.com",
    message: "I am interested in a double sharing room. Please let me know the availability and admission process.",
    date: "2024-01-15 10:30 AM",
    read: false,
  },
  {
    id: 2,
    name: "Priya Sharma",
    phone: "+91 98765 43211",
    message: "When is the next room available? I need accommodation from February.",
    date: "2024-01-14 3:45 PM",
    read: false,
  },
  {
    id: 3,
    name: "Amit Patel",
    phone: "+91 98765 43212",
    email: "amit.p@email.com",
    message: "I have some dietary restrictions. Can you accommodate vegetarian Jain food?",
    date: "2024-01-13 11:20 AM",
    read: true,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    phone: "+91 98765 43213",
    message: "Looking for a single room near the university. What are your rates?",
    date: "2024-01-12 9:00 AM",
    read: true,
  },
];

const AdminMessages = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const handleView = (message: Message) => {
    setSelectedMessage(message);
    if (!message.read) {
      setMessages(messages.map(m => m.id === message.id ? { ...m, read: true } : m));
    }
  };

  const handleDelete = (id: number) => {
    setMessages(messages.filter(m => m.id !== id));
    setSelectedMessage(null);
    toast({ title: "Message Deleted", description: "Message has been removed." });
  };

  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground">Contact Messages</h2>
          <p className="text-muted-foreground">View and manage contact form submissions</p>
        </div>
        {unreadCount > 0 && (
          <Badge variant="default">{unreadCount} unread</Badge>
        )}
      </div>

      <div className="grid gap-4">
        {messages.length === 0 ? (
          <Card className="border-border">
            <CardContent className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No messages yet</p>
            </CardContent>
          </Card>
        ) : (
          messages.map((message) => (
            <Card
              key={message.id}
              className={`border-border cursor-pointer transition-colors hover:bg-muted/50 ${!message.read ? 'border-l-4 border-l-primary' : ''}`}
              onClick={() => handleView(message)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-medium">{message.name[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-foreground">{message.name}</p>
                        {!message.read && (
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{message.message}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" /> {message.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {message.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); handleView(message); }}>
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); handleDelete(message.id); }}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message Details</DialogTitle>
          </DialogHeader>
          {selectedMessage && (
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{selectedMessage.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{selectedMessage.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedMessage.date}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href={`tel:${selectedMessage.phone}`} className="text-foreground hover:underline">
                    {selectedMessage.phone}
                  </a>
                </div>
                {selectedMessage.email && (
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href={`mailto:${selectedMessage.email}`} className="text-foreground hover:underline">
                      {selectedMessage.email}
                    </a>
                  </div>
                )}
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <p className="text-foreground">{selectedMessage.message}</p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="default"
                  className="flex-1"
                  onClick={() => window.open(`https://wa.me/${selectedMessage.phone.replace(/\D/g, '')}`, '_blank')}
                >
                  Reply on WhatsApp
                </Button>
                <Button variant="outline" onClick={() => setSelectedMessage(null)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminMessages;
