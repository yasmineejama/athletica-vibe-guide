import { useParams } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Star, Filter, Search } from "lucide-react";

// Mock product data
const products = {
  gear: [
    { id: 1, name: "Pro Training Gloves", price: 29.99, rating: 4.8, brand: "Athletica Pro" },
    { id: 2, name: "Resistance Bands Set", price: 24.99, rating: 4.6, brand: "FlexForce" },
    { id: 3, name: "Yoga Mat Premium", price: 49.99, rating: 4.9, brand: "ZenFit" },
    { id: 4, name: "Foam Roller", price: 34.99, rating: 4.7, brand: "RecoveryMax" },
  ],
  apparel: [
    { id: 5, name: "Athletic Performance Tee", price: 39.99, rating: 4.9, brand: "Athletica" },
    { id: 6, name: "Compression Leggings", price: 59.99, rating: 4.8, brand: "FlexWear" },
    { id: 7, name: "Training Shorts", price: 34.99, rating: 4.7, brand: "ProFit" },
    { id: 8, name: "Sports Bra", price: 44.99, rating: 4.8, brand: "SupportMax" },
  ],
  supplements: [
    { id: 9, name: "Whey Protein Isolate", price: 59.99, rating: 4.7, brand: "NutriPro" },
    { id: 10, name: "Pre-Workout Formula", price: 39.99, rating: 4.8, brand: "EnergyBoost" },
    { id: 11, name: "Creatine Monohydrate", price: 24.99, rating: 4.9, brand: "PurePower" },
    { id: 12, name: "BCAA Complex", price: 34.99, rating: 4.6, brand: "AminoMax" },
  ],
  equipment: [
    { id: 13, name: "Adjustable Dumbbells", price: 299.99, rating: 4.9, brand: "PowerFlex" },
    { id: 14, name: "Pull-up Bar", price: 89.99, rating: 4.7, brand: "StrongGrip" },
    { id: 15, name: "Kettlebell Set", price: 149.99, rating: 4.8, brand: "IronCore" },
    { id: 16, name: "Resistance Machine", price: 799.99, rating: 4.6, brand: "HomeFit" },
  ],
};

const categoryInfo = {
  gear: { title: "Training Gear", description: "Professional equipment for serious athletes" },
  apparel: { title: "Athletic Apparel", description: "Performance wear that moves with you" },
  supplements: { title: "Supplements", description: "Science-backed nutrition for peak performance" },
  equipment: { title: "Equipment", description: "Heavy-duty gear for home and gym" },
};

export default function CategoryPage() {
  const { category = "gear" } = useParams();
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");

  const categoryData = categoryInfo[category as keyof typeof categoryInfo] || categoryInfo.gear;
  const categoryProducts = products[category as keyof typeof products] || products.gear;

  const filteredProducts = categoryProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    product.price >= priceRange[0] &&
    product.price <= priceRange[1]
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-section-title mb-2">{categoryData.title}</h1>
          <p className="text-lg text-muted-foreground">{categoryData.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      placeholder="Search products..." 
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Price Range</label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    min={0}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Sort */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <span className="text-muted-foreground">
                Showing {filteredProducts.length} products
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover-scale cursor-pointer">
                  <div className="aspect-square bg-muted rounded-t-lg"></div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{product.brand}</Badge>
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
          </div>
        </div>
      </div>
    </div>
  );
}