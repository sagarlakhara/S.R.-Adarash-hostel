import { useState } from "react";
import { Plus, Pencil, Trash2, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Room {
  id: number;
  type: string;
  price: number;
  capacity: number;
  available: boolean;
}

const initialRooms: Room[] = [
  { id: 1, type: "Single Room - A1", price: 8000, capacity: 1, available: true },
  { id: 2, type: "Single Room - A2", price: 8000, capacity: 1, available: true },
  { id: 3, type: "Double Sharing - B1", price: 5500, capacity: 2, available: true },
  { id: 4, type: "Double Sharing - B2", price: 5500, capacity: 2, available: false },
  { id: 5, type: "Triple Sharing - C1", price: 4000, capacity: 3, available: false },
  { id: 6, type: "Triple Sharing - C2", price: 4000, capacity: 3, available: true },
];

const AdminRooms = () => {
  const { toast } = useToast();
  const [rooms, setRooms] = useState<Room[]>(initialRooms);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  const [formData, setFormData] = useState({ type: "", price: "", capacity: "" });

  const handleSave = () => {
    if (!formData.type || !formData.price || !formData.capacity) {
      toast({ title: "Error", description: "Please fill all fields", variant: "destructive" });
      return;
    }

    if (editingRoom) {
      setRooms(rooms.map(r => 
        r.id === editingRoom.id 
          ? { ...r, type: formData.type, price: Number(formData.price), capacity: Number(formData.capacity) }
          : r
      ));
      toast({ title: "Room Updated", description: "Room details have been updated." });
    } else {
      const newRoom: Room = {
        id: Date.now(),
        type: formData.type,
        price: Number(formData.price),
        capacity: Number(formData.capacity),
        available: true,
      };
      setRooms([...rooms, newRoom]);
      toast({ title: "Room Added", description: "New room has been added." });
    }

    setFormData({ type: "", price: "", capacity: "" });
    setEditingRoom(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (room: Room) => {
    setEditingRoom(room);
    setFormData({ type: room.type, price: room.price.toString(), capacity: room.capacity.toString() });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setRooms(rooms.filter(r => r.id !== id));
    toast({ title: "Room Deleted", description: "Room has been removed." });
  };

  const toggleAvailability = (id: number) => {
    setRooms(rooms.map(r => r.id === id ? { ...r, available: !r.available } : r));
    toast({ title: "Status Updated", description: "Room availability has been updated." });
  };

  const openNewRoomDialog = () => {
    setEditingRoom(null);
    setFormData({ type: "", price: "", capacity: "" });
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground">Room Management</h2>
          <p className="text-muted-foreground">Add, edit, and manage hostel rooms</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNewRoomDialog}>
              <Plus className="w-4 h-4 mr-2" /> Add Room
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingRoom ? "Edit Room" : "Add New Room"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <label className="text-sm font-medium text-foreground">Room Name/Type</label>
                <Input
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                  placeholder="e.g., Single Room - A1"
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Price (₹/month)</label>
                <Input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  placeholder="e.g., 8000"
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Capacity</label>
                <Input
                  type="number"
                  value={formData.capacity}
                  onChange={(e) => setFormData(prev => ({ ...prev, capacity: e.target.value }))}
                  placeholder="e.g., 1"
                  className="mt-1"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button onClick={handleSave} className="flex-1">
                  {editingRoom ? "Update Room" : "Add Room"}
                </Button>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {rooms.map((room) => (
          <Card key={room.id} className="border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{room.capacity}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{room.type}</p>
                    <p className="text-sm text-muted-foreground">₹{room.price.toLocaleString()}/month</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant={room.available ? "default" : "secondary"}
                    className="cursor-pointer"
                    onClick={() => toggleAvailability(room.id)}
                  >
                    {room.available ? (
                      <><Check className="w-3 h-3 mr-1" /> Available</>
                    ) : (
                      <><X className="w-3 h-3 mr-1" /> Occupied</>
                    )}
                  </Badge>
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(room)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(room.id)}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminRooms;
