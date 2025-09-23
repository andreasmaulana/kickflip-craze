import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { 
  Search, 
  Star, 
  Truck, 
  Shield, 
  Award,
  Zap,
  Settings,
  Disc,
  Circle
} from "lucide-react";
import heroImage from "@/assets/hero-skateboard.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface-dark/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-neon-blue" />
            <span className="text-xl font-bold text-foreground">SkateZone</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-neon-blue transition-colors">Beranda</a>
            <a href="#" className="text-foreground hover:text-neon-blue transition-colors">Produk</a>
            <a href="#" className="text-foreground hover:text-neon-blue transition-colors">Kategori</a>
            <a href="#" className="text-foreground hover:text-neon-blue transition-colors">Tentang</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background">
              <Search className="w-4 h-4 mr-2" />
              Cari
            </Button>
            <Button size="sm" className="bg-neon-blue hover:bg-neon-cyan text-background">
              Masuk
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Hero Skateboard" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Skateboard
            <span className="text-neon-blue block">Terbaik</span>
            di Indonesia
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Temukan koleksi skateboard premium dengan kualitas terbaik. 
            Dari deck professional hingga aksesori lengkap untuk semua level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-neon-blue hover:bg-neon-cyan text-background font-semibold px-8">
              Jelajahi Produk
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-surface-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-neon-blue/10 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-neon-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Gratis Ongkir</h3>
              <p className="text-muted-foreground">Pengiriman gratis untuk pembelian di atas Rp 500.000</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-neon-blue/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-neon-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Garansi Kualitas</h3>
              <p className="text-muted-foreground">Jaminan kualitas produk dan garansi resmi</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-neon-blue/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-neon-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Brand Terpercaya</h3>
              <p className="text-muted-foreground">Produk dari brand skateboard terkenal dunia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Kategori Produk</h2>
            <p className="text-muted-foreground">Temukan semua kebutuhan skateboard Anda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard 
              icon={Circle}
              title="Deck"
              description="Papan skateboard berkualitas tinggi"
              itemCount={45}
            />
            <CategoryCard 
              icon={Disc}
              title="Wheels"
              description="Roda skateboard untuk berbagai terrain"
              itemCount={32}
            />
            <CategoryCard 
              icon={Settings}
              title="Trucks"
              description="Truck skateboard profesional"
              itemCount={28}
            />
            <CategoryCard 
              icon={Zap}
              title="Aksesori"
              description="Perlengkapan dan aksesori lengkap"
              itemCount={67}
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-surface-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Produk Unggulan</h2>
            <p className="text-muted-foreground">Koleksi skateboard terpopuler dan terbaru</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              image="https://images.unsplash.com/photo-1565878877939-b11d7eed1e52?w=400"
              title="Complete Skateboard Pro"
              price="Rp 850.000"
              originalPrice="Rp 1.200.000"
              category="Complete"
              isNew={true}
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1564982180933-3e38c5e6b33f?w=400"
              title="Street Deck 8.0"
              price="Rp 650.000"
              category="Deck"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=400"
              title="Premium Wheels Set"
              price="Rp 320.000"
              category="Wheels"
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400"
              title="Professional Trucks"
              price="Rp 480.000"
              category="Trucks"
              isNew={true}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-darker py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-neon-blue" />
                <span className="text-lg font-bold text-foreground">SkateZone</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Toko skateboard terpercaya di Indonesia dengan koleksi lengkap dan berkualitas tinggi.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Produk</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-neon-blue transition-colors">Complete Skateboard</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Deck</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Wheels</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Trucks</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Bantuan</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-neon-blue transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Panduan Belanja</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Kebijakan Return</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Ikuti Kami</h4>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-background">
                  IG
                </Button>
                <Button size="sm" variant="outline" className="border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-background">
                  FB
                </Button>
                <Button size="sm" variant="outline" className="border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-background">
                  TW
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 SkateZone. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;