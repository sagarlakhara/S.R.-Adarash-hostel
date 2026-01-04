import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const AdminAbout = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display font-bold text-foreground">About Content Management</h2>
        <p className="text-muted-foreground">Edit about page content and information</p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Page Content
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">
              Content management will be available when backend is connected.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              You'll be able to edit about page text, vision, mission, and facilities.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAbout;
