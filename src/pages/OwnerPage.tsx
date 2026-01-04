import { Link } from "react-router-dom";
import { Phone, Mail, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import ownerImage from "@/assets/owner.jpg";

const OwnerPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Meet Our Owner
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            The vision and dedication behind S.R. Adarsh Hostel
          </p>
        </div>
      </section>

      {/* Owner Profile */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
              {/* Owner Photo */}
              <div className="space-y-6">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-card-hover">
                  <img
                    src="./rakeshji.jpeg"
                    alt="Mr. Suresh Reddy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Mr. Rakesh Choudhary
                  </h2>
                  <p className="text-accent font-medium">Founder & Managing Director</p>
                </div>
                <div className="space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-foreground">+91 8107456200</span>
                  </a>
                  <a
                    href="mailto:sagarlakhar718@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-foreground">sagarlakhar718@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Owner Bio */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">About</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Mr. Rakesh choudhary, founded S.R. Adarsh Hostel 
                      in 2024 with a simple yet powerful vision: to provide students with a safe, 
                      affordable, and nurturing home away from home.
                    </p>
                    <p>
                      With over 2 years of experience in student accommodation, Mr. Choudhary has 
                      personally overseen the development of the hostel, ensuring that every 
                      student receives the care and facilities they need to succeed in their 
                      academic journey.
                    </p>
                    <p>
                      His hands-on approach and genuine concern for student welfare have made 
                      S.R. Adarsh Hostel one of the most trusted names in student accommodation 
                      in the region.
                    </p>
                  </div>
                </div>

                {/* Message from Owner */}
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">
                    Message to Students
                  </h3>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "Dear Students, I understand that leaving home to pursue education can be 
                    challenging. At S.R. Adarsh Hostel, we strive to create an environment where 
                    you feel safe, comfortable, and focused on your studies. Our team is 
                    committed to your well-being, and we treat every student as part of our 
                    extended family. I personally ensure that the highest standards of hygiene, 
                    security, and comfort are maintained. Your success is our success, and we 
                    are here to support you every step of the way."
                  </blockquote>
                  <p className="mt-4 text-foreground font-semibold">
                    — Mr. Rakesh Choudhary
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link to="/contact">
                    <Button variant="gold" size="lg">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OwnerPage;
