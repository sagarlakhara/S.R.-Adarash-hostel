import { Link } from "react-router-dom";
import { Shield, Utensils, Clock, IndianRupee, Wifi, Droplets, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hostelHero from "@/assets/hostel-hero.jpg";
import diningHall from "@/assets/dining-hall.jpg";
import commonArea from "@/assets/common-area.jpg";
import roomSingle from "@/assets/room-single.jpg";

const highlights = [
  { icon: Shield, title: "Safe Environment", description: "24/7 security with CCTV surveillance" },
  { icon: Utensils, title: "Hygienic Food", description: "Fresh, nutritious meals daily" },
  { icon: Clock, title: "24x7 Security", description: "Round-the-clock security guards" },
  { icon: IndianRupee, title: "Affordable Rent", description: "Budget-friendly accommodation" },
];

const galleryImages = [
  { src: roomSingle, alt: "Single Room" },
  { src: diningHall, alt: "Dining Hall" },
  { src: commonArea, alt: "Common Area" },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "B.Tech, 3rd Year",
    text: "Best hostel experience! The food is great and the environment is perfect for studies.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    course: "MBA, 1st Year",
    text: "I feel safe here. The staff is very helpful and the rooms are always clean.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    course: "B.Com, 2nd Year",
    text: "Affordable and comfortable. The WiFi is fast and facilities are top-notch.",
    rating: 5,
  },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hostelHero}
            alt="S.R. Adarsh Hostel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative z-10 container-custom section-padding text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0 space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium">
              Welcome to Your New Home
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-tight">
              S.R. Adarsh Hostel
            </h1>
            <p className="text-xl md:text-2xl text-background/80 font-light">
              Safe, Affordable & Comfortable Living
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link to="/rooms">
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  View Rooms
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need for a comfortable and productive stay
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-background border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Facilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at our well-maintained premises
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-background font-medium">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More About Us
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: Wifi, label: "Free WiFi" },
              { icon: Droplets, label: "RO Water" },
              { icon: Shield, label: "24/7 Security" },
              { icon: Utensils, label: "3 Meals/Day" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-3 text-primary-foreground">
                  <Icon className="w-6 h-6" />
                  <span className="font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from students who call S.R. Adarsh Hostel their home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Join Our Family?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Book your room today and experience the best student accommodation in the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rooms">
              <Button variant="gold" size="lg">
                Browse Rooms
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
