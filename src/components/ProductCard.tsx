import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  category: string;
  isNew?: boolean;
}

export const ProductCard = ({ 
  image, 
  title, 
  price, 
  originalPrice, 
  category, 
  isNew = false 
}: ProductCardProps) => {
  return (
    <Card className="group bg-card border-border hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(195_100%_50%/0.2)] overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isNew && (
          <Badge className="absolute top-2 left-2 bg-neon-blue text-background">
            BARU
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">
          {category}
        </div>
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-neon-blue transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-neon-blue">
              {price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <Button 
            size="sm" 
            className="bg-neon-blue hover:bg-neon-cyan text-background font-medium"
          >
            Beli
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};