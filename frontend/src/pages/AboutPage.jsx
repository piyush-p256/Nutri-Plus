import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Target, Users, Sparkles } from 'lucide-react';

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 mb-12 fade-in">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <Heart className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif gradient-text">
              About Nutri Plus
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A dynamic and passionate platform dedicated to transforming the way people approach food and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 fade-in stagger-2">
            {/* Introduction */}
            <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Nutri Plus is a dynamic and passionate platform dedicated to transforming the way people approach food and wellness. Founded with a mission to inspire healthier lifestyles, Nutri Plus specializes in delivering practical, delicious, and nutritious recipes that are easy to incorporate into everyday life. By combining creativity, knowledge, and a love for wholesome food, Nutri Plus aims to make healthy eating both enjoyable and sustainable for everyone.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Nutri Plus, the focus goes beyond simply sharing recipes, it's about creating a lifestyle that nurtures the body, mind, and soul. Every post is crafted to empower readers with knowledge about nutrition, guide them through mindful eating habits, and make cooking a fun and rewarding experience. From breakfast ideas and hearty lunches to guilt-free desserts and wellness tips, Nutri Plus ensures that healthy eating never feels boring or restrictive.
                </p>
              </div>
            </Card>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow border-0">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-serif mb-3 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  Inspiring healthier lifestyles through practical, delicious, and nutritious recipes.
                </p>
              </Card>

              <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow border-0">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Sparkles className="h-7 w-7 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-serif mb-3 text-foreground">Our Approach</h3>
                <p className="text-muted-foreground">
                  Combining creativity and knowledge to make healthy eating enjoyable and sustainable.
                </p>
              </Card>

              <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow border-0">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-serif mb-3 text-foreground">Our Community</h3>
                <p className="text-muted-foreground">
                  Building a supportive space for everyone seeking healthy living without compromise.
                </p>
              </Card>
            </div>

            {/* Detailed Content */}
            <Card className="p-8 shadow-lg border-0">
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The team behind Nutri Plus is dedicated to understanding the diverse needs of its audience, offering content that balances flavor, simplicity, and nutritional value. Each recipe is thoughtfully designed, highlighting fresh ingredients, seasonal produce, and creative twists that elevate everyday meals. Beyond recipes, Nutri Plus shares tips on meal planning, ingredient swaps, and holistic wellness practices, helping readers build a more conscious, balanced lifestyle.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With a commitment to inspiration, education, and accessibility, Nutri Plus is more than a food blog, it's a community for anyone seeking to embrace healthy living without compromising on taste or enjoyment. Every visit is an invitation to explore new flavors, make mindful choices, and celebrate the joy of food in a way that nourishes both body and mind.
                </p>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="p-8 text-center shadow-lg border-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
              <h2 className="text-3xl font-bold font-serif mb-4 gradient-text">
                Join Our Journey
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Whether you're looking for nutritious recipes, wellness tips, or simply inspiration to live healthier, Nutri Plus is here to guide you every step of the way.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Practical Recipes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Wellness Tips</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Mindful Living</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
