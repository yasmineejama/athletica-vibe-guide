import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { Star, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardShowcaseProps {
  className?: string;
}

export function CardShowcase({ className }: CardShowcaseProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div>
        <h3 className="text-xl font-bold mb-6">Standard Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-athletic">
            <CardHeader>
              <CardTitle>Basic Card</CardTitle>
              <CardDescription>
                A simple card with standard styling and hover effects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Perfect for displaying basic information and content in an organized way.
              </p>
            </CardContent>
          </Card>

          <Card className="card-feature">
            <CardHeader>
              <CardTitle className="text-gradient-primary">Feature Card</CardTitle>
              <CardDescription>
                Enhanced card with gradient background and special styling.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ideal for highlighting important features or premium content.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Premium Card
              </CardTitle>
              <CardDescription>
                Special card with branded styling and icon integration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Perfect for premium features and special offers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6">Product Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-athletic overflow-hidden">
            <div className="aspect-square bg-gradient-primary p-8 flex items-center justify-center">
              <div className="text-6xl text-white/80">👟</div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Athletic Sneakers</CardTitle>
                  <CardDescription>Premium running shoes</CardDescription>
                </div>
                <Badge variant="secondary">New</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(124 reviews)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">$129.99</span>
                <span className="text-sm line-through text-muted-foreground">$159.99</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full btn-athletic">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-athletic overflow-hidden">
            <div className="aspect-square bg-gradient-athletic p-8 flex items-center justify-center">
              <div className="text-6xl text-white/80">🏋️</div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Adjustable Dumbbells</CardTitle>
                  <CardDescription>Professional weight set</CardDescription>
                </div>
                <Badge className="bg-success text-success-foreground">Sale</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <Star className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground ml-2">(89 reviews)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">$299.99</span>
                <span className="text-sm line-through text-muted-foreground">$399.99</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full btn-outline-primary">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-feature overflow-hidden">
            <div className="aspect-square bg-gradient-hero p-8 flex items-center justify-center">
              <div className="text-6xl text-white/80">⌚</div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg text-gradient-primary">Fitness Tracker Pro</CardTitle>
                  <CardDescription>Advanced health monitoring</CardDescription>
                </div>
                <Badge className="bg-warning text-warning-foreground">Featured</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(256 reviews)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">$249.99</span>
                <span className="text-sm line-through text-muted-foreground">$299.99</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full btn-hero">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}