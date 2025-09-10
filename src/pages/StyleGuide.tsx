import { ColorPalette } from "@/components/ui/color-palette";
import { TypographyShowcase } from "@/components/ui/typography-showcase";
import { ButtonVariants } from "@/components/ui/button-variants";
import { IconShowcase } from "@/components/ui/icon-showcase";
import { CardShowcase } from "@/components/ui/card-showcase";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import athleticaHero from "@/assets/athletica-hero.jpg";

const StyleGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${athleticaHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70" />
        </div>
        <div className="relative container mx-auto px-6 py-24 text-center">
          <h1 className="text-hero text-white mb-6 animate-fade-in">
            Athletica
          </h1>
          <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Complete UI Style Guide for Modern Fitness Commerce
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A comprehensive design system featuring athletic-inspired colors, clean typography, 
            and responsive components built for peak performance across all devices.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 space-y-24">
        {/* Overview */}
        <section className="text-center">
          <h2 className="text-section-title mb-6">Design Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card-feature text-center">
              <div className="text-4xl mb-4">🏃‍♂️</div>
              <h3 className="text-feature mb-3 text-gradient-primary">Performance</h3>
              <p className="text-muted-foreground">
                Every element optimized for speed, clarity, and user engagement across all devices.
              </p>
            </div>
            <div className="card-feature text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-feature mb-3 text-gradient-athletic">Aesthetics</h3>
              <p className="text-muted-foreground">
                Bold gradients and clean typography create an inspiring, professional appearance.
              </p>
            </div>
            <div className="card-feature text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-feature mb-3 text-gradient-primary">Responsive</h3>
              <p className="text-muted-foreground">
                Consistent experience from mobile phones to desktop displays and everything between.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Color System */}
        <section id="colors">
          <h2 className="text-section-title mb-8 text-center">Color System</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our athletic-inspired palette combines energetic oranges with professional navy blues, 
            creating a brand that's both motivating and trustworthy.
          </p>
          <ColorPalette />
        </section>

        <Separator className="my-16" />

        {/* Typography */}
        <section id="typography">
          <h2 className="text-section-title mb-8 text-center">Typography</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Inter font family provides excellent readability and modern aesthetics, 
            with carefully crafted hierarchy for all content types.
          </p>
          <TypographyShowcase />
        </section>

        <Separator className="my-16" />

        {/* Buttons */}
        <section id="buttons">
          <h2 className="text-section-title mb-8 text-center">Button Components</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Athletic-inspired buttons with gradient effects, smooth animations, 
            and clear visual hierarchy for different action types.
          </p>
          <ButtonVariants />
        </section>

        <Separator className="my-16" />

        {/* Form Elements */}
        <section id="forms">
          <h2 className="text-section-title mb-8 text-center">Form Elements</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Clean, accessible form components with consistent styling and clear focus states.
          </p>
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="card-athletic p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Form Example</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="sales">Sales Question</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter" className="text-sm font-normal">
                    Subscribe to our newsletter for fitness tips and product updates
                  </Label>
                </div>
                
                <div className="pt-4">
                  <button className="btn-hero w-full">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Icons */}
        <section id="icons">
          <h2 className="text-section-title mb-8 text-center">Icon Library</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Curated selection of Lucide React icons optimized for fitness and e-commerce applications.
          </p>
          <IconShowcase />
        </section>

        <Separator className="my-16" />

        {/* Cards */}
        <section id="cards">
          <h2 className="text-section-title mb-8 text-center">Card Components</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Versatile card designs for content organization, product displays, and feature highlights.
          </p>
          <CardShowcase />
        </section>

        <Separator className="my-16" />

        {/* Badges & Status */}
        <section id="badges">
          <h2 className="text-section-title mb-8 text-center">Badges & Status Indicators</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge className="bg-success text-success-foreground">Success</Badge>
            <Badge className="bg-warning text-warning-foreground">Warning</Badge>
            <Badge className="bg-athletic-blue text-athletic-blue-foreground">Athletic</Badge>
          </div>
        </section>

        {/* Spacing & Layout */}
        <section id="spacing" className="text-center">
          <h2 className="text-section-title mb-8">Spacing & Layout</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Consistent spacing system based on 4px increments for predictable, harmonious layouts.
          </p>
          <div className="card-athletic p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-primary rounded"></div>
                <span className="text-sm">4px - Minimal spacing (gap-1, p-1)</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 bg-primary rounded"></div>
                <span className="text-sm">24px - Standard spacing (gap-6, p-6)</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded"></div>
                <span className="text-sm">48px - Large spacing (gap-12, p-12)</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded"></div>
                <span className="text-sm">64px - Section spacing (gap-16, p-16)</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gradient-primary mb-4">Athletica Design System</h3>
          <p className="text-lg opacity-90 mb-8">
            Built with React, TypeScript, Tailwind CSS, and shadcn/ui
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn-outline-primary">Documentation</button>
            <button className="btn-athletic">Get Started</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StyleGuide;