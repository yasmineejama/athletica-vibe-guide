import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient-primary">Athletica</h3>
            <p className="text-muted-foreground">
              Premium fitness gear and supplements for athletes who demand excellence.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/categories/gear" className="text-muted-foreground hover:text-primary transition-colors">Training Gear</Link></li>
              <li><Link to="/categories/apparel" className="text-muted-foreground hover:text-primary transition-colors">Athletic Apparel</Link></li>
              <li><Link to="/categories/supplements" className="text-muted-foreground hover:text-primary transition-colors">Supplements</Link></li>
              <li><Link to="/categories/equipment" className="text-muted-foreground hover:text-primary transition-colors">Equipment</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/support/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/support/shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping Info</Link></li>
              <li><Link to="/support/returns" className="text-muted-foreground hover:text-primary transition-colors">Returns</Link></li>
              <li><Link to="/support/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="space-y-4">
            <h4 className="font-semibold">Account</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">My Profile</Link></li>
              <li><Link to="/profile/orders" className="text-muted-foreground hover:text-primary transition-colors">Order History</Link></li>
              <li><Link to="/profile/wishlist" className="text-muted-foreground hover:text-primary transition-colors">Wishlist</Link></li>
              <li><Link to="/auth/login" className="text-muted-foreground hover:text-primary transition-colors">Sign In</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Athletica. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}