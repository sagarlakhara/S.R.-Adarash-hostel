import { Shield, Wifi, Droplets, Zap, Sparkles, Target, Eye, CheckCircle } from "lucide-react";
import hostelHero from "@/assets/hostel-hero.jpg";

const facilities = [
  { icon: Wifi, title: "High-Speed WiFi", description: "24/7 internet connectivity for studies and entertainment" },
  { icon: Droplets, title: "RO Purified Water", description: "Clean drinking water available on all floors" },
  { icon: Shield, title: "24/7 Security", description: "CCTV surveillance and security guards round the clock" },
  { icon: Sparkles, title: "Daily Cleaning", description: "Housekeeping services for common areas daily" },
  { icon: Zap, title: "Power Backup", description: "Generator backup for uninterrupted power supply" },
  { icon: CheckCircle, title: "Laundry Service", description: "In-house laundry facilities available" },
];

const rules = [
  "Maintain silence during study hours (9 PM - 7 AM)",
  "Visitors allowed only in common areas during designated hours",
  "No smoking or alcohol consumption on premises",
  "Keep your room and common areas clean",
  "Report any maintenance issues promptly",
  "Respect fellow residents and staff",
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={hostelHero} alt="About S.R. Adarsh Hostel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative z-10 container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-background mb-4">
            About Us
          </h1>
          <p className="text-background/80 text-lg max-w-2xl mx-auto">
            Providing a home away from home for students since 2010
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Welcome to S.R. Adarsh Hostel
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Established in 2010, S.R. Adarsh Hostel has been a trusted name in student accommodation. 
              Located near major educational institutions, we provide a safe, comfortable, and nurturing 
              environment for students from all across the country.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our hostel is more than just a place to stay—it's a community where students thrive, 
              make lifelong friendships, and focus on their academic goals without worrying about 
              daily necessities.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most preferred student accommodation, known for providing a secure, 
                comfortable, and conducive environment that enables students to achieve their 
                academic and personal goals.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-accent/5 border border-accent/20">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide affordable, high-quality accommodation with excellent facilities, 
                nutritious food, and a supportive community that helps students focus on their 
                education and personal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Facilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a comfortable and productive stay
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-background border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hostel Rules */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Hostel Rules & Values
              </h2>
              <p className="text-muted-foreground">
                To ensure a peaceful environment for all residents
              </p>
            </div>
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-semibold text-primary">{index + 1}</span>
                  </div>
                  <p className="text-foreground pt-1">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
