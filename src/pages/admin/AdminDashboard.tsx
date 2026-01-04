import { BedDouble, Users, UtensilsCrossed, MessageSquare, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { label: "Total Rooms", value: "24", icon: BedDouble, change: "+2 this month", color: "bg-primary" },
  { label: "Occupied Rooms", value: "18", icon: Users, change: "75% occupancy", color: "bg-accent" },
  { label: "Total Students", value: "42", icon: Users, change: "+5 this month", color: "bg-green-500" },
  { label: "Menu Items", value: "28", icon: UtensilsCrossed, change: "Weekly updated", color: "bg-orange-500" },
];

const recentMessages = [
  { name: "Rahul Kumar", message: "Interested in double sharing room", time: "2 hours ago" },
  { name: "Priya Sharma", message: "When is the next room available?", time: "5 hours ago" },
  { name: "Amit Patel", message: "Need information about food menu", time: "1 day ago" },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full p-4 rounded-lg bg-primary/5 border border-primary/20 text-left hover:bg-primary/10 transition-colors">
              <p className="font-medium text-foreground">Add New Room</p>
              <p className="text-sm text-muted-foreground">Create a new room listing</p>
            </button>
            <button className="w-full p-4 rounded-lg bg-accent/5 border border-accent/20 text-left hover:bg-accent/10 transition-colors">
              <p className="font-medium text-foreground">Update Food Menu</p>
              <p className="text-sm text-muted-foreground">Modify weekly food schedule</p>
            </button>
            <button className="w-full p-4 rounded-lg bg-green-500/5 border border-green-500/20 text-left hover:bg-green-500/10 transition-colors">
              <p className="font-medium text-foreground">View All Messages</p>
              <p className="text-sm text-muted-foreground">Check contact form submissions</p>
            </button>
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Recent Messages
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMessages.map((msg, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-medium">{msg.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground">{msg.name}</p>
                  <p className="text-sm text-muted-foreground truncate">{msg.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{msg.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Occupancy Overview */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Room Occupancy Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-sm text-muted-foreground">Single Rooms</p>
              <p className="text-2xl font-bold text-green-600">6/8</p>
              <p className="text-xs text-muted-foreground">2 available</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-sm text-muted-foreground">Double Sharing</p>
              <p className="text-2xl font-bold text-accent">8/10</p>
              <p className="text-xs text-muted-foreground">2 available</p>
            </div>
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <p className="text-sm text-muted-foreground">Triple Sharing</p>
              <p className="text-2xl font-bold text-destructive">6/6</p>
              <p className="text-xs text-muted-foreground">Fully occupied</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
