import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata = {
  title: "CVS & Diabetes | Rheo Pharma",
  description: "Comprehensive Cardiovascular and Diabetes care solutions.",
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

export default function CVSDiabetesPage() {
  return (
    <ProductPageTemplate 
      title="CVS & Diabetes" 
      category="Pharma" 
      sidebarLinks={pharmaSidebarLinks}
      mainImage="/products/pharma/CVS-Diabetes.jpeg"
      bannerImage="/products/pharma/product-banner.jpeg"
    >


      <div className="space-y-6">
        <p>
          Cardiovascular diseases (CVDs) and Diabetes are among the leading causes of morbidity and mortality globally. At Rheo Pharma, we offer a comprehensive range of therapeutic solutions to manage these chronic conditions effectively.
        </p>
        
        <p>
          Cardiovascular & Diabetes care is managed till date through diabetic medications, diet control and increasing the physical activity. Our portfolio includes latest generation molecules and proven combinations to help patients achieve their health goals.
        </p>

        <h3 className="text-2xl font-bold text-[#121f45] mt-10 mb-6">Our Offering</h3>
        <ul className="checkmark-list">
          <li>Anti-diabetic medications including SGLT2 inhibitors and DPP4 inhibitors.</li>
          <li>Hypertension management with ARBs and CCBs.</li>
          <li>Lipid-lowering therapies (Statins and combinations).</li>
          <li>Anti-platelet agents for cardiac protection.</li>
          <li>Comprehensive management for metabolic syndrome.</li>
        </ul>

        <p className="mt-8">
          We are committed to providing affordable and high-quality medications that empower patients to take control of their heart health and blood sugar levels, leading to a more active and fulfilling life.
        </p>
      </div>
    </ProductPageTemplate>
  );
}
