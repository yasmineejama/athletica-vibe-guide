import { cn } from "@/lib/utils";

interface TypographyShowcaseProps {
  className?: string;
}

export function TypographyShowcase({ className }: TypographyShowcaseProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div>
        <h3 className="text-xl font-bold mb-6">Display Typography</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Hero Title (.text-hero)</p>
            <h1 className="text-hero">Transform Your Fitness</h1>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-2">Section Title (.text-section-title)</p>
            <h2 className="text-section-title">Elevate Your Performance</h2>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-2">Feature Title (.text-feature)</p>
            <h3 className="text-feature">Premium Athletic Gear</h3>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6">Text Styles</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Large Text</p>
            <p className="text-lg">Perfect for introductions and important content that needs emphasis.</p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-1">Body Text</p>
            <p className="text-base">Standard body text for paragraphs, descriptions, and general content throughout the application.</p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-1">Small Text</p>
            <p className="text-sm">Captions, metadata, and supplementary information that supports the main content.</p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-1">Extra Small Text</p>
            <p className="text-xs">Fine print, legal text, and minimal supporting details.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6">Gradient Text Effects</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Primary Gradient (.text-gradient-primary)</p>
            <h2 className="text-4xl font-bold text-gradient-primary">Athletic Excellence</h2>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-2">Athletic Gradient (.text-gradient-athletic)</p>
            <h2 className="text-4xl font-bold text-gradient-athletic">Peak Performance</h2>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6">Font Weights</h3>
        <div className="space-y-2">
          <p className="font-light">Light (300) - Elegant and modern</p>
          <p className="font-normal">Regular (400) - Standard body text</p>
          <p className="font-medium">Medium (500) - Subtle emphasis</p>
          <p className="font-semibold">Semibold (600) - Strong emphasis</p>
          <p className="font-bold">Bold (700) - Headings and important text</p>
          <p className="font-extrabold">Extra Bold (800) - Maximum impact</p>
        </div>
      </div>
    </div>
  );
}