import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  itemCount: number;
}

export const CategoryCard = ({ icon: Icon, title, description, itemCount }: CategoryCardProps) => {
  return (
    <Card className="group bg-surface-dark border-border hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(195_100%_50%/0.1)] cursor-pointer">
      <CardContent className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-surface-darker rounded-lg flex items-center justify-center group-hover:bg-neon-blue/10 transition-colors">
          <Icon className="w-8 h-8 text-neon-blue" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-neon-blue transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          {description}
        </p>
        <div className="text-xs text-neon-blue font-medium">
          {itemCount} produk tersedia
        </div>
      </CardContent>
    </Card>
  );
};