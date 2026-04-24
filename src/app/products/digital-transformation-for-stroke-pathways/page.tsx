import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata = {
  title: "Digital Transformation for Stroke Pathways | Rheo Pharma",
  description: "Innovative digital solutions for stroke pathways.",
};

export default function DigitalTransformationPage() {
  return (
    <ProductPageTemplate title="Digital Transformation for Stroke Pathways">
      <p>
        Stroke management requires critical timing and seamless coordination. Our digital transformation platforms are designed to optimize stroke pathways, ensuring rapid response times and integrated care from diagnosis to rehabilitation.
      </p>
      <h3 className="text-xl font-bold text-[#1c2c52] mt-8 mb-4">Platform Features</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Real-time tracking of patient metrics.</li>
        <li>Automated alert systems for care teams.</li>
        <li>Data-driven insights to improve clinical outcomes.</li>
      </ul>
      <p className="mt-6">
        (Content to be expanded based on specific product lines...)
      </p>
    </ProductPageTemplate>
  );
}
