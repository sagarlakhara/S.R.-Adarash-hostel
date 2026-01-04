import { useState } from "react";
import { Plus, Pencil, Trash2, Coffee, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MenuItem {
  id: number;
  day: string;
  meal: "breakfast" | "lunch" | "dinner";
  items: string;
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const initialMenu: MenuItem[] = [
  { id: 1, day: "Monday", meal: "breakfast", items: "Poha, Tea/Coffee, Bread & Butter" },
  { id: 2, day: "Monday", meal: "lunch", items: "Dal Fry, Chapati, Rice, Salad" },
  { id: 3, day: "Monday", meal: "dinner", items: "Paneer Curry, Chapati, Rice, Sweet" },
  { id: 4, day: "Tuesday", meal: "breakfast", items: "Upma, Tea/Coffee, Banana" },
  { id: 5, day: "Tuesday", meal: "lunch", items: "Rajma, Chapati, Rice, Pickle" },
  { id: 6, day: "Tuesday", meal: "dinner", items: "Mixed Veg, Chapati, Pulao, Raita" },
];

const AdminFoodMenu = () => {
  const { toast } = useToast();
  const [menu, setMenu] = useState<MenuItem[]>(initialMenu);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [formData, setFormData] = useState({ day: "", meal: "", items: "" });
  const [selectedDay, setSelectedDay] = useState("Monday");

  const mealIcon = {
    breakfast: Coffee,
    lunch: Sun,
    dinner: Moon,
  };

  const handleSave = () => {
    if (!formData.day || !formData.meal || !formData.items) {
      toast({ title: "Error", description: "Please fill all fields", variant: "destructive" });
      return;
    }

    if (editingItem) {
      setMenu(menu.map(m => 
        m.id === editingItem.id 
          ? { ...m, day: formData.day, meal: formData.meal as MenuItem["meal"], items: formData.items }
          : m
      ));
      toast({ title: "Menu Updated", description: "Menu item has been updated." });
    } else {
      const newItem: MenuItem = {
        id: Date.now(),
        day: formData.day,
        meal: formData.meal as MenuItem["meal"],
        items: formData.items,
      };
      setMenu([...menu, newItem]);
      toast({ title: "Menu Added", description: "New menu item has been added." });
    }

    setFormData({ day: "", meal: "", items: "" });
    setEditingItem(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({ day: item.day, meal: item.meal, items: item.items });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setMenu(menu.filter(m => m.id !== id));
    toast({ title: "Menu Deleted", description: "Menu item has been removed." });
  };

  const openNewDialog = () => {
    setEditingItem(null);
    setFormData({ day: selectedDay, meal: "", items: "" });
    setIsDialogOpen(true);
  };

  const getDayMenu = (day: string) => menu.filter(m => m.day === day);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground">Food Menu Management</h2>
          <p className="text-muted-foreground">Manage daily breakfast, lunch, and dinner menus</p>
        </div>
        <Button onClick={openNewDialog}>
          <Plus className="w-4 h-4 mr-2" /> Add Menu Item
        </Button>
      </div>

      <Tabs value={selectedDay} onValueChange={setSelectedDay}>
        <TabsList className="grid grid-cols-7 w-full">
          {days.map(day => (
            <TabsTrigger key={day} value={day} className="text-xs sm:text-sm">
              {day.slice(0, 3)}
            </TabsTrigger>
          ))}
        </TabsList>

        {days.map(day => (
          <TabsContent key={day} value={day} className="space-y-4 mt-6">
            {["breakfast", "lunch", "dinner"].map(meal => {
              const Icon = mealIcon[meal as keyof typeof mealIcon];
              const mealItem = getDayMenu(day).find(m => m.meal === meal);

              return (
                <Card key={meal} className="border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg capitalize">
                      <Icon className="w-5 h-5 text-primary" />
                      {meal}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {mealItem ? (
                      <div className="flex items-center justify-between">
                        <p className="text-muted-foreground">{mealItem.items}</p>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" onClick={() => handleEdit(mealItem)}>
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(mealItem.id)}>
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-muted-foreground text-sm mb-2">No menu set for {meal}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setFormData({ day, meal, items: "" });
                            setIsDialogOpen(true);
                          }}
                        >
                          <Plus className="w-4 h-4 mr-1" /> Add {meal}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingItem ? "Edit Menu Item" : "Add Menu Item"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium text-foreground">Day</label>
              <Select value={formData.day} onValueChange={(v) => setFormData(prev => ({ ...prev, day: v }))}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select day" />
                </SelectTrigger>
                <SelectContent>
                  {days.map(day => (
                    <SelectItem key={day} value={day}>{day}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Meal</label>
              <Select value={formData.meal} onValueChange={(v) => setFormData(prev => ({ ...prev, meal: v }))}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select meal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="breakfast">Breakfast</SelectItem>
                  <SelectItem value="lunch">Lunch</SelectItem>
                  <SelectItem value="dinner">Dinner</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Menu Items</label>
              <Input
                value={formData.items}
                onChange={(e) => setFormData(prev => ({ ...prev, items: e.target.value }))}
                placeholder="e.g., Poha, Tea, Bread & Butter"
                className="mt-1"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button onClick={handleSave} className="flex-1">
                {editingItem ? "Update" : "Add"}
              </Button>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminFoodMenu;
