import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Image as ImageIcon } from "lucide-react";

const AdminGallery = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display font-bold text-foreground">Gallery Management</h2>
        <p className="text-muted-foreground">Manage hostel images and gallery</p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-primary" />
            Gallery Images
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <ImageIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">
              Gallery management will be available when backend is connected.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              You'll be able to upload, organize, and manage hostel images.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminGallery;
