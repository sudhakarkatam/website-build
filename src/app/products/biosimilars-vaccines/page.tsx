import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata = {
  title: "Biosimilars & Vaccines | Rheo Pharma",
  description: "Affordable and accessible biosimilars and vaccines.",
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

export default function BiosimilarsPage() {
  return (
    <ProductPageTemplate 
      title="Biosimilars & Vaccines" 
      category="Pharma" 
      sidebarLinks={pharmaSidebarLinks}
      mainImage="/products/pharma/biosimilar.jpeg"
      bannerImage="/products/pharma/product-banner.jpeg"
    >
      <div className="space-y-6">
        <p>
          Biologics have transformed modern medicine, but accessibility remains a challenge due to high costs and complex manufacturing processes. Rheo Pharma is dedicated to bridging this gap by providing high-quality biosimilars and life-saving vaccines.
        </p>
        
        <p>
          Our biosimilars are clinically equivalent to reference biologic drugs, offering the same safety and efficacy at a more affordable price point. We are also committed to preventative healthcare through a robust portfolio of vaccines addressing infectious diseases.
        </p>

        <h3 className="text-2xl font-bold text-[#121f45] mt-10 mb-6">Our Focus Areas</h3>
        <ul className="checkmark-list">
          <li>Immunology and rheumatology biosimilars for chronic inflammatory diseases.</li>
          <li>Oncology support biosimilars to improve access to cancer care.</li>
          <li>Innovative vaccine candidates for emerging infectious diseases.</li>
          <li>Preventative vaccines for child and adult immunization programs.</li>
          <li>Biological therapies for rare and orphan diseases.</li>
        </ul>

        <p className="mt-8">
          By leveraging state-of-the-art biotechnology and stringent quality control, we ensure that our biological products meet the highest global standards, providing hope and healing to patients worldwide.
        </p>
      </div>
    </ProductPageTemplate>
  );
}
