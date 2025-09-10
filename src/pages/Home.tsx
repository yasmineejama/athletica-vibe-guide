import { HeroSection } from "@/components/sections/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Truck, Shield, Headphones } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Pro Training Gloves",
    price: 29.99,
    image: "/placeholder.svg",
    rating: 4.8,
    category: "gear"
  },
  {
    id: 2,
    name: "Athletic Performance Tee",
    price: 39.99,
    image: "/placeholder.svg", 
    rating: 4.9,
    category: "apparel"
  },
  {
    id: 3,
    name: "Whey Protein Isolate",
    price: 59.99,
    image: "/placeholder.svg",
    rating: 4.7,
    category: "supplements"
  },
  {
    id: 4,
    name: "Adjustable Dumbbells",
    price: 299.99,
    image: "/placeholder.svg",
    rating: 4.9,
    category: "equipment"
  }
];

const categories = [
  { name: "Training Gear", slug: "gear", description: "Professional equipment for serious athletes" },
  { name: "Athletic Apparel", slug: "apparel", description: "Performance wear that moves with you" },
  { name: "Supplements", slug: "supplements", description: "Science-backed nutrition for peak performance" },
  { name: "Equipment", slug: "equipment", description: "Heavy-duty gear for home and gym" }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Featured Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Shop by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of premium athletic products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.slug} to={`/categories/${category.slug}`}>
                <Card className="hover-scale cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="text-feature">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section-title mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked favorites from our premium collection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover-scale cursor-pointer">
                <div className="aspect-square bg-muted rounded-t-lg"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{product.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="btn-athletic">
              <Link to="/categories">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <Truck className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $75</p>
            </div>
            <div className="text-center space-y-3">
              <Shield className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">100% protected checkout</p>
            </div>
            <div className="text-center space-y-3">
              <Headphones className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold">Expert Support</h3>
              <p className="text-sm text-muted-foreground">24/7 customer service</p>
            </div>
            <div className="text-center space-y-3">
              <Star className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground">Premium products only</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}