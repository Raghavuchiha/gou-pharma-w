import { Link } from "react-router-dom";
import { Pill, Syringe, Droplets, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const productCategories = [
  {
    id: "bolus",
    icon: Pill,
    title: "Bolus & Tablets",
    description: "Convenient oral dosage forms for easy administration in livestock and companion animals.",
    products: [
      {
        name: "FOSKIL",
        description: "Broad spectrum deworming bolus for fluke and worm control. Effective against Fasciola and gastrointestinal nematodes.",
        composition: "Oxyclozanide 4000mg + Levamisole HCl 2000mg + Silymarin 300mg",
        dosage: "1 bolus per 400kg body weight",
        packSizes: "10x1x10 Bolus",
        animalType: "Cattle & Sheep",
        image: "foskil.jpeg"
      },
      {
        name: "GOU-PLUS",
        description: "Levooxacin & Ornidazole combination for infectious diarrhea caused by E. coli, Campylobacter, and Shigella bacteria.",
        composition: "Levooxacin 1500mcg + Ornidazole 1800mcg",
        dosage: "1-2 bolus twice daily for 3-5 days",
        packSizes: "10x1x4 Bolus",
        animalType: "Cattle, Buffalo, Sheep, Goat",
        image: "gouplus.jpeg"
      },
      {
        name: "GOUPAIN-XP™",
        description: "Triple action formula with anti-inflammatory, analgesic, and serratiopeptidase for pain, fever, and inflammation relief.",
        composition: "Tolfenamic Acid 500mg + Paracetamol 1500mg + Serratiopeptidase 75mg",
        dosage: "Large Animals: 2 boluses daily | Small Animals: 0.5-1 bolus daily for 3-5 days",
        packSizes: "10x1x4 Bolus",
        animalType: "Cattle, Buffalo, Sheep, Goat",
        image: "goupain.jpeg"
      },
      {
        name: "GOU-MILK POWER BOLUS",
        description: "Milk enhancer containing Vitamin A and H. Increases milk holding capacity and fat percentage.",
        composition: "Vitamin A + Vitamin H",
        dosage: "As directed by veterinarian",
        packSizes: "20x1 Bolus",
        animalType: "Dairy Cattle & Buffalo",
        image: "goumilk.jpeg"
      },
      {
        name: "Gou Flu",
        description: "Broad spectrum dewormer for treatment of Nematodiasis, Cestodiasis, and lice infestations. Pregnancy safe.",
        composition: "Enrofloxacin 2000 mg + Flunixin Meglumine 400 mg",
        dosage: "1.1 - 2.2 mg/kg Two times in a day for 3-4 days",
        packSizes: "10x1x1 Bolus",
        animalType: "Cattle, Buffalo, Sheep, Goat",
        image: "gouflu.jpeg"
      },
    ],
  },
  {
    id: "liver-tonics",
    icon: Droplets,
    title: "Liver Tonics & Liquid Supplements",
    description: "Hepatoprotective and nutritional formulations to support liver function and overall animal health.",
    products: [
      {
        name: "GOULIV-FORT Liver Tonic",
        description: "Comprehensive liver support with liver extract, yeast extract, vitamins, and minerals. Supports immunomodulation.",
        composition: "Liver Fraction 1.25gm + Liver Extract 125mg + Yeast Extract 40mg + Vitamin E 5mg + Vitamin B12 6.25mcg + Iron 80mg + other enzymes",
        dosage: "As per veterinary recommendation",
        packSizes: "500ml, 1L, 5L",
        animalType: "Cattle, Buffalo, Sheep, Goat",
        image: "gouliv-fort.jpeg"
      },
      {
        name: "GOU-H Gold Multivitamin Supplement",
        description: "Complete vitamin and mineral complex with B-vitamins, essential amino acids, and trace minerals for growth and productivity.",
        composition: "Methylcobalamin 1125mcg + B-Complex Vitamins + DL-Methionine 680mg + L-Lysine 770mg + Minerals",
        dosage: "As directed by veterinarian",
        packSizes: "1L, 5L",
        animalType: "All Livestock",
        image: "gouHgold.jpeg"
      },
    ],
  },
  {
    id: "injections",
    icon: Syringe,
    title: "Injectable Solutions",
    description: "Fast-acting parenteral formulations for critical care and therapeutic interventions.",
    products: [
      {
        name: "Gou-Flu Long Acting Enrooxacin 20% Injection",
        description: "Long-acting antibiotic for rapid treatment of severe bacterial infections. Single dose therapy.",
        composition: "Enrofloxacin 200mg/ml + Benzyl Alcohol 2% V/V",
        dosage: "5 mg/kg bw or 1ml per 20kg bw",
        packSizes: "100 ML",
        animalType: "Cattle, Buffalo, Sheep, Goat",
        indications: "Metritis, Mastitis, Lameness, G.I. Tract Infections, Respiratory Infections",
        image: "goufluinj.jpeg"
      },
      {
        name: "Goumec-XP Ivermectin 3.15% Injection",
        description: "Effective against major parasites - both endo and ectoparasites. Acts on GABA signals.",
        composition: "Ivermectin 3.15% IP",
        dosage: "Cattle/Sheep/Goat: 0.2mg/kg SC | Pigs: 0.3mg/kg SC",
        packSizes: "100 ML",
        animalType: "Cattle, Sheep, Goat, Pigs, Camels",
        indications: "Ticks, Lice, Mange Mites, G.I. Worms, Lung Worms, Cattle Grubs",
        image: "goumec.jpeg"
      },
      {
        name: "GOUPAIN-XP™ Injection",
        description: "Injectable combination for pain relief, fever, and inflammation. Treats respiratory infections, mastitis, and musculoskeletal disorders.",
        composition: "Tolfenamic 40mg + Paracetamol 150mg per ml",
        dosage: "Cattle: 20ml/400kg | Sheep/Goat: 1ml/20kg IM, repeat after 48hrs",
        packSizes: "100 ML",
        animalType: "Cattle, Buffalo, Sheep, Goat",
        indications: "Respiratory Infections, Mastitis, Musculoskeletal Disorders",
        image: "goupaininj.jpeg"
      },
      {
        name: "Growboost Vitamin Injection",
        description: "Triple-action vitamin support for nerve function, energy metabolism, and blood formation.",
        composition: "Thiamine HCl 50mg + Pyridoxine HCl 50mg + Cyanocobalamin 500mcg per ml",
        dosage: "Large Animal: 5-10ml | Sheep/Goat/Swine: 1-2ml | Dog/Cat: 0.5-2ml IM/IV",
        packSizes: "100 ML",
        animalType: "All Animals",
        indications: "Neuropathies, Anorexia, General Debility, Stress-related Deficiencies",
        image: "growboostinj.jpeg"
      },
    ],
  },
  {
    id: "supplements",
    icon: Leaf,
    title: "Vitamin & Mineral Supplements",
    description: "Comprehensive nutritional supplements for enhanced productivity and immunity.",
    products: [
      {
        name: "GOU Tissue Bolus",
        description: "Fast pain relief and infection control. Clinically proven for faster pain relief in 6 hours.",
        composition: "Enrooxacin 2000mg + Flunixin Meglumine 400mg",
        dosage: "1.1-2.2mg/kg twice daily for 3-4 days",
        packSizes: "10x1 Bolus",
        animalType: "Cattle, Buffalo, Sheep, Goat",
        indications: "Metritis, Mastitis, Lameness, G.I. & Respiratory Infections",
        image: "goutissue.jpeg"
      },
      {
        name: "Gou Milk Power Booster",
        description: "Premium milk enhancer for dairy animals. Increases milk quality and production capacity.",
        composition: "Vitamins A & H with milk-boosting nutrients",
        dosage: "As directed",
        packSizes: "20x1 Bolus",
        animalType: "Cattle, Buffalo",
        indications: "Milk Production Enhancement",
        image: "goumilkpower.jpeg"
      },
    ],
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-foreground mb-6">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="body-lg text-muted-foreground">
              A comprehensive range of veterinary medicines and feed supplements 
              formulated for livestock health, productivity, and welfare.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {productCategories.map((category, categoryIndex) => (
              <div 
                key={category.id}
                id={category.id}
                className="scroll-mt-24"
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <category.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="heading-md text-foreground mb-2">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product) => (
                    <div 
                      key={product.name}
                      className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-card transition-all duration-300 group flex flex-col"
                    >
                      {/* Product Image Placeholder */}
                      <div className="aspect-square bg-secondary/50 flex items-center justify-center overflow-hidden">
                        <img 
                          src={`/images/products/${product.image}`}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="text-center p-4 bg-secondary/50 w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                          <div>
                            <Pill className="h-12 w-12 text-muted-foreground/40 mx-auto mb-2" />
                            <span className="text-xs text-muted-foreground/60">
                              {product.name}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product Info */}
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {product.description}
                        </p>
                        
                        {/* Product Details */}
                        <div className="space-y-2 text-xs text-muted-foreground/80 border-t border-border pt-3 mt-auto">
                          {product.composition && (
                            <p><span className="font-semibold text-foreground">Composition:</span> {product.composition}</p>
                          )}
                          {product.dosage && (
                            <p><span className="font-semibold text-foreground">Dosage:</span> {product.dosage}</p>
                          )}
                          {product.animalType && (
                            <p><span className="font-semibold text-foreground">For:</span> {product.animalType}</p>
                          )}
                          {product.indications && (
                            <p><span className="font-semibold text-foreground">Indications:</span> {product.indications}</p>
                          )}
                          <p className="pt-2"><span className="font-semibold text-foreground">Pack:</span> {product.packSizes}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                {categoryIndex < productCategories.length - 1 && (
                  <div className="border-b border-border mt-16" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animal Types */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              Products for All Animal Types
            </h2>
            <p className="body-md text-muted-foreground max-w-xl mx-auto">
              Our veterinary solutions cater to a wide range of livestock and companion animals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: "🐄", name: "Cattle & Buffalo" },
              { emoji: "🐐", name: "Sheep & Goats" },
           
              { emoji: "🐕", name: "Dogs & Cats" },
            ].map((animal) => (
              <div 
                key={animal.name}
                className="bg-card p-6 rounded-xl text-center border border-border"
              >
                <span className="text-4xl mb-3 block">{animal.emoji}</span>
                <span className="font-medium text-foreground">{animal.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg mb-6">
              Need Product Information?
            </h2>
            <p className="body-lg opacity-90 mb-8">
              Contact our team for detailed product specifications, pricing, 
              and distribution inquiries.
            </p>
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;