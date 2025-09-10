import { 
  Activity, 
  Dumbbell, 
  Heart, 
  Target, 
  Trophy, 
  Zap,
  ShoppingCart,
  User,
  Settings,
  Search,
  Star,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  Download
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IconShowcaseProps {
  className?: string;
}

export function IconShowcase({ className }: IconShowcaseProps) {
  const iconCategories = [
    {
      category: "Fitness & Sports",
      icons: [
        { Icon: Activity, name: "Activity" },
        { Icon: Dumbbell, name: "Dumbbell" },
        { Icon: Heart, name: "Heart" },
        { Icon: Target, name: "Target" },
        { Icon: Trophy, name: "Trophy" },
        { Icon: Zap, name: "Zap" },
      ]
    },
    {
      category: "Interface",
      icons: [
        { Icon: ShoppingCart, name: "ShoppingCart" },
        { Icon: User, name: "User" },
        { Icon: Settings, name: "Settings" },
        { Icon: Search, name: "Search" },
        { Icon: Star, name: "Star" },
        { Icon: ChevronRight, name: "ChevronRight" },
      ]
    },
    {
      category: "Media Controls",
      icons: [
        { Icon: Play, name: "Play" },
        { Icon: Pause, name: "Pause" },
        { Icon: Volume2, name: "Volume2" },
        { Icon: Download, name: "Download" },
      ]
    }
  ];

  return (
    <div className={cn("space-y-8", className)}>
      {iconCategories.map((category) => (
        <div key={category.category}>
          <h3 className="text-xl font-bold mb-6">{category.category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {category.icons.map(({ Icon, name }) => (
              <div key={name} className="card-athletic p-4 text-center">
                <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">{name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div>
        <h3 className="text-xl font-bold mb-6">Icon Sizes</h3>
        <div className="flex items-center gap-6 p-6 card-athletic">
          <div className="text-center">
            <Activity className="h-4 w-4 mx-auto mb-2 text-primary" />
            <p className="text-xs">Small (16px)</p>
          </div>
          <div className="text-center">
            <Activity className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="text-xs">Default (24px)</p>
          </div>
          <div className="text-center">
            <Activity className="h-8 w-8 mx-auto mb-2 text-primary" />
            <p className="text-xs">Large (32px)</p>
          </div>
          <div className="text-center">
            <Activity className="h-12 w-12 mx-auto mb-2 text-primary" />
            <p className="text-xs">XL (48px)</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6">Icon Colors</h3>
        <div className="flex items-center gap-6 p-6 card-athletic">
          <div className="text-center">
            <Activity className="h-8 w-8 mx-auto mb-2 text-primary" />
            <p className="text-xs">Primary</p>
          </div>
          <div className="text-center">
            <Activity className="h-8 w-8 mx-auto mb-2 text-athletic-blue" />
            <p className="text-xs">Athletic Blue</p>
          </div>
          <div className="text-center">
            <Activity className="h-8 w-8 mx-auto mb-2 text-success" />
            <p className="text-xs">Success</p>
          </div>
          <div className="text-center">
            <Activity className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-xs">Muted</p>
          </div>
        </div>
      </div>
    </div>
  );
}