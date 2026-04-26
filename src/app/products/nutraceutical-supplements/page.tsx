import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata = {
  title: "Nutraceutical & Supplements | Rheo Pharma",
  description: "Enhancing wellness with science-backed supplements.",
};

const pharmaSidebarLinks = [
  { name: "CVS & Diabetes", href: "/products/cvs-diabetes" },
  { name: "Oncology", href: "/products/oncology" },
  { name: "Biosimilars & Vaccines", href: "/products/biosimilars-vaccines" },
  { name: "CNS", href: "/products/cns" },
  { name: "Dermatology", href: "/products/dermatology" },
  { name: "Respiratory", href: "/products/respiratory" },
  { name: "Nutraceutical & Supplements", href: "/products/nutraceutical-supplements" },
  { name: "APIs", href: "/products/api" },
];

export default function NutraceuticalsPage() {
  return (
    <ProductPageTemplate 
      title="Nutraceutical & Supplements" 
      category="Pharma" 
      sidebarLinks={pharmaSidebarLinks}
      mainImage="/products/pharma/Nutraceuticals.jpeg"
      bannerImage="/products/pharma/product-banner.jpeg"
    >
      <div className="space-y-6">
        <p>
          Preventative healthcare and wellness are fundamental to a long and healthy life. Rheo Pharma's Nutraceutical & Supplements division offers a wide spectrum of holistic nutritional support designed to complement modern lifestyles and address specific health needs.
        </p>
        
        <p>
          Our products are formulated based on rigorous scientific research and manufactured to the same high standards as our pharmaceutical medications. We focus on bioavailability and purity to ensure that our supplements deliver maximum benefit to the consumer.
        </p>

        <h3 className="text-2xl font-bold text-[#121f45] mt-10 mb-6">Our Wellness Portfolio</h3>
        <ul className="checkmark-list">
          <li>Multivitamins and minerals for overall health maintenance.</li>
          <li>Specialized supplements for heart, bone, and joint health.</li>
          <li>Probiotics and digestive health solutions.</li>
          <li>Immune system boosters and antioxidant formulations.</li>
          <li>Condition-specific nutraceuticals for lifestyle-related issues.</li>
        </ul>

        <p className="mt-8">
          We believe that optimal health starts with a balanced foundation. Our nutraceutical offerings empower individuals to take a proactive approach to their well-being, providing the essential nutrients needed for a healthier and more active life.
        </p>
      </div>
    </ProductPageTemplate>
  );
}
