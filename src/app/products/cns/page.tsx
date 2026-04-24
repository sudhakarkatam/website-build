import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata = {
  title: "CNS | Rheo Pharma",
  description: "Central Nervous System therapies and treatments.",
};

export default function CnsPage() {
  return (
    <ProductPageTemplate title="CNS (Central Nervous System)">
      <p>
        Neurological disorders demand precise and effective therapeutic interventions. Rheo Pharma's Central Nervous System (CNS) portfolio offers high-quality solutions for treating a variety of neurological and psychiatric conditions.
      </p>
      <h3 className="text-xl font-bold text-[#1c2c52] mt-8 mb-4">Therapeutic Coverage</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Anti-epileptics and anticonvulsants.</li>
        <li>Antidepressants and mood stabilizers.</li>
        <li>Treatments for neurodegenerative diseases.</li>
      </ul>
      <p className="mt-6">
        (Content to be expanded based on specific product lines...)
      </p>
    </ProductPageTemplate>
  );
}
