import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata = {
  title: "Nutraceuticals & Supplements | Rheo Pharma",
  description: "High-quality nutraceuticals and supplements.",
};

export default function NutraceuticalsPage() {
  return (
    <ProductPageTemplate title="Nutraceuticals & Supplements">
      <p>
        Prevention is just as important as treatment. Our line of nutraceuticals and dietary supplements is formulated with scientifically backed ingredients to support overall health, wellness, and immune function.
      </p>
      <h3 className="text-xl font-bold text-[#1c2c52] mt-8 mb-4">Our Focus Areas</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Immune system support and enhancement.</li>
        <li>Cognitive health and anti-aging compounds.</li>
        <li>Essential vitamins and trace minerals.</li>
      </ul>
      <p className="mt-6">
        (Content to be expanded based on specific product lines...)
      </p>
    </ProductPageTemplate>
  );
}
