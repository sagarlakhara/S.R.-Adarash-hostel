import { Utensils, Coffee, Sun, Moon } from "lucide-react";

interface MealItem {
  name: string;
}

interface DayMenu {
  day: string;
  breakfast: MealItem[];
  lunch: MealItem[];
  dinner: MealItem[];
}


const weeklyMenu: DayMenu[] = [
  {
    day: "Monday",
    breakfast: [{ name: "Poha" }, { name: "Tea/Coffee" }, { name: "Bread & Butter" }],
    lunch: [{ name: "Dal Fry" }, { name: "Chapati" }, { name: "Rice" }, { name: "Salad" }],
    dinner: [{ name: "Paneer Curry" }, { name: "Chapati" }, { name: "Rice" }, { name: "Sweet" }],
  },
  {
    day: "Tuesday",
    breakfast: [{ name: "Upma" }, { name: "Tea/Coffee" }, { name: "Banana" }],
    lunch: [{ name: "Rajma" }, { name: "Chapati" }, { name: "Rice" }, { name: "Pickle" }],
    dinner: [{ name: "Mixed Veg" }, { name: "Chapati" }, { name: "Pulao" }, { name: "Raita" }],
  },
  {
    day: "Wednesday",
    breakfast: [{ name: "Paratha" }, { name: "Curd" }, { name: "Tea/Coffee" }],
    lunch: [{ name: "Chole" }, { name: "Bhature" }, { name: "Rice" }, { name: "Onion" }],
    dinner: [{ name: "Dal Makhani" }, { name: "Chapati" }, { name: "Rice" }, { name: "Sweet" }],
  },
  {
    day: "Thursday",
    breakfast: [{ name: "Idli Sambar" }, { name: "Chutney" }, { name: "Tea/Coffee" }],
    lunch: [{ name: "Kadhi Pakora" }, { name: "Chapati" }, { name: "Rice" }, { name: "Salad" }],
    dinner: [{ name: "Aloo Gobi" }, { name: "Chapati" }, { name: "Rice" }, { name: "Papad" }],
  },
  {
    day: "Friday",
    breakfast: [{ name: "Sandwich" }, { name: "Juice" }, { name: "Tea/Coffee" }],
    lunch: [{ name: "Sambar Rice" }, { name: "Chapati" }, { name: "Curd" }, { name: "Pickle" }],
    dinner: [{ name: "Shahi Paneer" }, { name: "Chapati" }, { name: "Jeera Rice" }, { name: "Gulab Jamun" }],
  },
  {
    day: "Saturday",
    breakfast: [{ name: "Dosa" }, { name: "Chutney" }, { name: "Tea/Coffee" }],
    lunch: [{ name: "Aloo Paratha" }, { name: "Curd" }, { name: "Pickle" }, { name: "Salad" }],
    dinner: [{ name: "Malai Kofta" }, { name: "Chapati" }, { name: "Rice" }, { name: "Kheer" }],
  },
  {
    day: "Sunday",
    breakfast: [{ name: "Puri Bhaji" }, { name: "Halwa" }, { name: "Tea/Coffee" }],
    lunch: [{ name: "Biryani" }, { name: "Raita" }, { name: "Salad" }, { name: "Papad" }],
    dinner: [{ name: "Special Thali" }, { name: "Chapati" }, { name: "Rice" }, { name: "Ice Cream" }],
  },
];

const FoodMenuPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-accent to-accent/80">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-accent-foreground mb-4">
            Food Menu
          </h1>
          <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto">
            Nutritious and delicious meals prepared fresh every day
          </p>
        </div>
      </section>

      {/* Menu Info */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container-custom px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Breakfast</p>
                <p className="text-sm text-muted-foreground">7:30 AM - 9:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Sun className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">Lunch</p>
                <p className="text-sm text-muted-foreground">12:30 PM - 2:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Moon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Dinner</p>
                <p className="text-sm text-muted-foreground">7:30 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Menu */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Weekly Menu
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our menu is carefully planned to provide balanced nutrition
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary">
                  <th className="p-4 text-left text-primary-foreground font-semibold rounded-tl-lg">Day</th>
                  <th className="p-4 text-left text-primary-foreground font-semibold">
                    <div className="flex items-center gap-2">
                      <Coffee className="w-4 h-4" /> Breakfast
                    </div>
                  </th>
                  <th className="p-4 text-left text-primary-foreground font-semibold">
                    <div className="flex items-center gap-2">
                      <Sun className="w-4 h-4" /> Lunch
                    </div>
                  </th>
                  <th className="p-4 text-left text-primary-foreground font-semibold rounded-tr-lg">
                    <div className="flex items-center gap-2">
                      <Moon className="w-4 h-4" /> Dinner
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {weeklyMenu.map((day, index) => (
                  <tr
                    key={day.day}
                    className={`border-b border-border ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}
                  >
                    <td className="p-4 font-semibold text-primary">{day.day}</td>
                    <td className="p-4 text-muted-foreground">
                      {day.breakfast.map(item => item.name).join(", ")}
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {day.lunch.map(item => item.name).join(", ")}
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {day.dinner.map(item => item.name).join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {weeklyMenu.map((day) => (
              <div key={day.day} className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="bg-primary px-4 py-3">
                  <h3 className="font-semibold text-primary-foreground">{day.day}</h3>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Coffee className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">Breakfast</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      {day.breakfast.map(item => item.name).join(", ")}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Sun className="w-4 h-4 text-accent" />
                      <span className="font-medium text-foreground">Lunch</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      {day.lunch.map(item => item.name).join(", ")}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Moon className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">Dinner</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      {day.dinner.map(item => item.name).join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-xl bg-primary/5 border border-primary/20">
            <Utensils className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-display font-bold text-foreground mb-3">
              Quality & Hygiene First
            </h3>
            <p className="text-muted-foreground">
              All meals are prepared in our hygienic kitchen using fresh ingredients. 
              We follow strict food safety standards and cater to vegetarian dietary requirements. 
              Special meals can be arranged for festivals and celebrations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodMenuPage;
