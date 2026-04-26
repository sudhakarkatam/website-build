import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata = {
  title: "Oncology | Rheo Pharma",
  description: "Advanced Oncology and cancer care therapeutics.",
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

export default function OncologyPage() {
  return (
    <ProductPageTemplate 
      title="Oncology" 
      category="Pharma" 
      sidebarLinks={pharmaSidebarLinks}
      mainImage="/products/pharma/oncology-1.jpeg"
      bannerImage="/products/pharma/product-banner.jpeg"
    >


      <div className="space-y-6">
        <p>
          The fight against cancer requires accessible and potent treatment options. Rheo Pharma is dedicated to providing high-quality oncology products, including critical chemotherapeutics and targeted therapies, to improve patient survival and quality of life.
        </p>
        
        <p>
          With great passion and commitment of addressing the fast-rising incidence rates of cancer, we at Rheo are relentlessly working to provide access to high-quality Oncology medicines across the globe. We have a robust portfolio of oncology products covering various types of cancers.
        </p>

        <h3 className="text-2xl font-bold text-[#121f45] mt-10 mb-6">Therapeutic Coverage</h3>
        <ul className="checkmark-list">
          <li>Targeted monoclonal antibodies for specific cancer types.</li>
          <li>Traditional chemotherapeutic agents for broad-spectrum care.</li>
          <li>Innovative biosimilars in the oncology space.</li>
          <li>Supportive care medications to manage side effects and improve quality of life.</li>
          <li>Advanced oral oncology medications for convenient therapy.</li>
        </ul>

        <p className="mt-8">
          Our oncology division works closely with healthcare professionals to ensure that our medications are available where they are needed most, providing hope and healing to patients undergoing cancer treatment.
        </p>
      </div>
    </ProductPageTemplate>
  );
}
