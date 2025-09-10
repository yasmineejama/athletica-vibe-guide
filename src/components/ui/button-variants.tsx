import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ButtonVariantsProps {
  className?: string;
}

export function ButtonVariants({ className }: ButtonVariantsProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div>
        <h3 className="text-lg font-semibold mb-4">Primary Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button className="btn-hero">Hero CTA</Button>
          <Button>Default Primary</Button>
          <Button size="sm">Small Primary</Button>
          <Button size="lg">Large Primary</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Athletic Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button className="btn-athletic">Athletic Style</Button>
          <Button className="btn-outline-primary">Outline Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Utility Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  );
}