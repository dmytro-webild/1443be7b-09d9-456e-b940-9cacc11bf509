"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { ArrowRight } from "lucide-react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Story", id: "story" },
        { name: "Menu", id: "menu" },
        { name: "Reviews", id: "reviews" },
        { name: "Visit", id: "contact" },
      ]}
      brandName="Savarino's Market"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars"}}
      title="Authentic Italian • Homemade Daily"
      description="A true hidden gem tucked in the heart of Columbia — serving handcrafted Italian food, fresh-baked pastries, and imported goods that taste like the old country."
      buttons={[
        {
          text: "Explore Menu",          href: "#menu"},
        {
          text: "Order Now",          href: "tel:555-555-5555"},
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/close-up-photo-set-donuts-sprinkled-with-powdered-sugar-black-long-plate-with-raspberry-bilberry-mint_613910-6423.jpg", imageAlt: "Fresh baked cannoli" },
        { imageSrc: "http://img.b2bpic.net/free-photo/human-hand-preparing-fresh-spaghetti-pasta-with-powder-flour-kitchen-counter_23-2148076123.jpg", imageAlt: "Handmade rigatoni" },
        { imageSrc: "http://img.b2bpic.net/free-photo/set-bakery-pastries-wooden-table_123827-31229.jpg", imageAlt: "Fresh Italian pastries" },
        { imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-supermarket-grocery-store-background_640221-331.jpg", imageAlt: "Italian market interior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/three-various-baguette-sandwiches-with-mixed-foods-stone-table_114579-2860.jpg", imageAlt: "Italian sandwich" },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="story" data-section="story">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Where Every Bite Feels Like Family"
      description={[
        "Savarino's Market is Columbia's best-kept secret — a neighborhood Italian market beloved by locals for its warm hospitality, incredible food, and prices that make you feel right at home.",        "From handmade pasta dishes with pink sauce to cannoli, tiramisu, and fresh eclairs baked in-house, everything at Savarino's is crafted with care and sold for very good prices.",        "Stop in. You'll become a regular."]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Imported", name: "Aged Pecorino Romano", price: "$12.99", rating: 5, reviewCount: "48", imageSrc: "http://img.b2bpic.net/free-photo/piece-natural-cheeses-cheese-board-with-tasty-ingredient-wooden-desk_23-2148101643.jpg" },
        { id: "p2", brand: "Imported", name: "San Marzano Tomatoes", price: "$5.49", rating: 5, reviewCount: "120", imageSrc: "http://img.b2bpic.net/free-photo/colorful-shiny-fresh-vegetables-tomatoes-with-canning-hommemade-handmade-tomato-juice-shelf-supermarket-grocery-store_627829-8310.jpg" },
        { id: "p3", brand: "Imported", name: "Authentic Italian Olive Oil", price: "$18.99", rating: 5, reviewCount: "85", imageSrc: "http://img.b2bpic.net/free-photo/glass-bottle-with-olive-oil-gray-background_93675-135434.jpg" },
      ]}
      title="Authentic Italian Goods"
      description="Handpicked imported delights and fresh pantry staples."
    />
  </div>

  <div id="menu" data-section="menu">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { title: "Pasta & Hot Dishes", description: "Made to order—rigatoni, penne, and meatballs.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-pasta-soup-from-spiral-italian-pasta-with-greens-dark-rustic-desk-dinner-dish-italian-pasta-soup-sauce_140725-110061.jpg", buttonIcon: ArrowRight },
        { title: "Bakery", description: "Fresh eclairs and daily baked goods.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-chocolate-eclairs-rectangle-plate-chopping-board-dark-wooden-table-with-free-space_140725-90861.jpg", buttonIcon: ArrowRight },
        { title: "Sandwiches & Deli", description: "Classic Italian cold cuts and spreads.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-sandwiches-assortment_23-2148617361.jpg", buttonIcon: ArrowRight },
        { title: "Desserts", description: "Cannoli, Tiramisu, and Biscotti.", imageSrc: "http://img.b2bpic.net/free-photo/tart-with-profiteroles-top-with-whipped-cream_114579-85604.jpg", buttonIcon: ArrowRight },
      ]}
      title="Fresh, Homemade & Irresistible"
      description="Everything is made with love — from hot pasta dishes ready for pickup to Italian pastries that will ruin you for anything else."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Ed F.", role: "Local", company: "Customer", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cheerful-girl-cozy-sweater-happily-showing-ok-gesture-winking-camera-blue-background_574295-2499.jpg" },
        { id: "t2", name: "Duncan E.", role: "Local", company: "Customer", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg" },
        { id: "t3", name: "Sarah H.", role: "Local", company: "Customer", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2579.jpg" },
      ]}
      kpiItems={[
        { value: "4.8", label: "Google Rating" },
        { value: "112", label: "Reviews" },
        { value: "100%", label: "Love" },
      ]}
      title="Columbia's Hidden Gem"
      description="Don't just take our word for it."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        { id: "f1", title: "Do you take phone orders?", content: "Yes! Call ahead and we'll have your order hot and ready." },
        { id: "f2", title: "Are your pastries fresh?", content: "Absolutely, everything is baked fresh in-house every single day." },
        { id: "f3", title: "Where are you located?", content: "We are located right in the heart of Columbia, Tennessee." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-blur-coffee-shop_1203-8296.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Everything you need to know about Savarino's."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Visit Us"
      title="Ready for Something Delicious?"
      description="Call ahead and your order will be hot, fresh, and waiting when you arrive."
      buttons={[
        { text: "Call to Order", href: "tel:555-555-5555" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Story", href: "#story" }, { label: "Menu", href: "#menu" }, { label: "Reviews", href: "#reviews" }, { label: "Visit Us", href: "#contact" }] },
        { items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] },
      ]}
      logoText="Savarino's Market"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
