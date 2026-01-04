import { useState } from "react";
import { Link } from "react-router-dom";
import { Wifi, AirVent, Bath, Tv, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import roomSingle from "@/assets/room-single.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomTriple from "@/assets/room-triple.jpg";

interface Room {
  id: number;
  type: string;
  image: string;
  price: number;
  capacity: number;
  available: boolean;
  facilities: string[];
  description: string;
}

const rooms: Room[] = [
  {
    id: 1,
    type: "Single Room",
    image: roomSingle,
    price: 8000,
    capacity: 1,
    available: true,
    facilities: ["Personal Study Desk", "Attached Bathroom", "WiFi", "Air Cooler", "Wardrobe"],
    description: "Private room perfect for focused study. Enjoy complete privacy with all essential amenities.",
  },
  {
    id: 2,
    type: "Double Sharing",
    image: roomDouble,
    price: 5500,
    capacity: 2,
    available: true,
    facilities: ["Study Desks", "Attached Bathroom", "WiFi", "Air Cooler", "Wardrobe"],
    description: "Comfortable sharing room with a friendly roommate. Ideal balance of privacy and affordability.",
  },
  {
    id: 3,
    type: "Triple Sharing",
    image: roomTriple,
    price: 4000,
    capacity: 3,
    available: false,
    facilities: ["Study Area", "Common Bathroom", "WiFi", "Ceiling Fan", "Wardrobe"],
    description: "Budget-friendly option for students. Make friends and share experiences.",
  },
];

const facilityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi className="w-4 h-4" />,
  "Air Cooler": <AirVent className="w-4 h-4" />,
  "Attached Bathroom": <Bath className="w-4 h-4" />,
  TV: <Tv className="w-4 h-4" />,
};

const RoomsPage = () => {
  const [filter, setFilter] = useState<"all" | "available">("all");

  const filteredRooms = filter === "available" 
    ? rooms.filter(room => room.available) 
    : rooms;

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Our Rooms
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Choose from our comfortable and well-equipped rooms
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-card border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container-custom px-4">
          <div className="flex items-center justify-center gap-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              size="sm"
            >
              All Rooms
            </Button>
            <Button
              variant={filter === "available" ? "default" : "outline"}
              onClick={() => setFilter("available")}
              size="sm"
            >
              Available Only
            </Button>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="group bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={room.available ? "default" : "secondary"}>
                      {room.available ? "Available" : "Fully Occupied"}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-lg font-semibold">
                    ₹{room.price.toLocaleString()}/month
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {room.type}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{room.capacity} person{room.capacity > 1 ? 's' : ''}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{room.description}</p>

                  {/* Facilities */}
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-medium text-foreground">Facilities:</p>
                    <div className="flex flex-wrap gap-2">
                      {room.facilities.map((facility, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs"
                        >
                          {facilityIcons[facility] || <CheckCircle className="w-3.5 h-3.5" />}
                          <span>{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link to="/contact">
                    <Button
                      variant={room.available ? "gold" : "outline"}
                      className="w-full"
                      disabled={!room.available}
                    >
                      {room.available ? "Enquire Now" : "Join Waitlist"}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredRooms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No rooms match your filter.</p>
              <Button variant="link" onClick={() => setFilter("all")}>
                View all rooms
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our team is happy to help you find the perfect room for your needs and budget.
          </p>
          <Link to="/contact">
            <Button variant="default" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;
