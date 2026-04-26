import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata = {
  title: "CNS | Rheo Pharma",
  description: "Innovative solutions for Central Nervous System disorders.",
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

export default function CNSPage() {
  return (
    <ProductPageTemplate 
      title="CNS" 
      category="Pharma" 
      sidebarLinks={pharmaSidebarLinks}
      mainImage="/products/pharma/CNS.jpeg"
      bannerImage="/products/pharma/product-banner.jpeg"
    >
      <div className="space-y-6">
        <p>
          Central Nervous System (CNS) disorders present some of the most complex challenges in modern medicine. At Rheo Pharma, we take a 360º approach to diagnosing and treating CNS ailments, focusing on innovative therapeutic options that improve the quality of life for patients and their families.
        </p>
        
        <p>
          Our CNS portfolio covers a wide range of conditions, from mental health disorders like depression and anxiety to neurodegenerative diseases like Alzheimer's and Parkinson's. We are committed to advancing the science of brain health through continuous research and development.
        </p>

        <h3 className="text-2xl font-bold text-[#121f45] mt-10 mb-6">Therapeutic Coverage</h3>
        <ul className="checkmark-list">
          <li>Advanced treatments for Depression and Anxiety disorders.</li>
          <li>Innovative therapies for Epilepsy and Seizure management.</li>
          <li>Neuroprotective agents for neurodegenerative diseases.</li>
          <li>Effective solutions for Schizophrenia and other psychotic disorders.</li>
          <li>Management tools for Sleep disorders and cognitive health.</li>
        </ul>

        <p className="mt-8">
          We understand the profound impact that CNS disorders have on individuals and society. That's why we work tirelessly to ensure that patients have access to the best possible treatments, providing support and innovation at every step of their journey.
        </p>
      </div>
    </ProductPageTemplate>
  );
}
