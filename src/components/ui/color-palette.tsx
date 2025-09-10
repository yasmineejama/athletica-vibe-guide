import { cn } from "@/lib/utils";

interface ColorSwatchProps {
  name: string;
  cssVar: string;
  description?: string;
}

function ColorSwatch({ name, cssVar, description }: ColorSwatchProps) {
  return (
    <div className="flex items-center gap-4 p-4 card-athletic">
      <div 
        className="w-16 h-16 rounded-xl shadow-md border border-border flex-shrink-0"
        style={{ backgroundColor: `hsl(var(--${cssVar}))` }}
      />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-muted-foreground">--{cssVar}</p>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}

interface ColorPaletteProps {
  className?: string;
}

export function ColorPalette({ className }: ColorPaletteProps) {
  const colors = [
    {
      category: "Brand Colors",
      swatches: [
        { name: "Primary Orange", cssVar: "primary", description: "Main brand color for CTAs and highlights" },
        { name: "Primary Glow", cssVar: "primary-glow", description: "Lighter variant for gradients and hover states" },
        { name: "Secondary Navy", cssVar: "secondary", description: "Professional contrast color" },
        { name: "Athletic Blue", cssVar: "athletic-blue", description: "Energetic accent for sports elements" },
      ]
    },
    {
      category: "Semantic Colors",
      swatches: [
        { name: "Success", cssVar: "success", description: "Confirmations and positive actions" },
        { name: "Warning", cssVar: "warning", description: "Alerts and important notices" },
        { name: "Destructive", cssVar: "destructive", description: "Errors and dangerous actions" },
        { name: "Muted", cssVar: "muted", description: "Subtle backgrounds and disabled states" },
      ]
    },
    {
      category: "Interface Colors",
      swatches: [
        { name: "Background", cssVar: "background", description: "Main page background" },
        { name: "Foreground", cssVar: "foreground", description: "Primary text color" },
        { name: "Card", cssVar: "card", description: "Card and panel backgrounds" },
        { name: "Border", cssVar: "border", description: "Dividers and input borders" },
      ]
    }
  ];

  return (
    <div className={cn("space-y-8", className)}>
      {colors.map((category) => (
        <div key={category.category}>
          <h3 className="text-xl font-bold mb-6">{category.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.swatches.map((swatch) => (
              <ColorSwatch key={swatch.cssVar} {...swatch} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}