import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata = {
  title: "Oncology | Rheo Pharma",
  description: "Advanced Oncology and cancer care therapeutics.",
};

export default function OncologyPage() {
  return (
    <ProductPageTemplate title="Oncology">
      <p>
        The fight against cancer requires accessible and potent treatment options. Rheo Pharma is dedicated to providing high-quality oncology products, including critical chemotherapeutics and targeted therapies, to improve patient survival and quality of life.
      </p>
      <h3 className="text-xl font-bold text-[#1c2c52] mt-8 mb-4">Therapeutic Coverage</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Targeted monoclonal antibodies.</li>
        <li>Traditional chemotherapeutic agents.</li>
        <li>Supportive care medications for cancer patients.</li>
      </ul>
      <p className="mt-6">
        (Content to be expanded based on specific product lines...)
      </p>
    </ProductPageTemplate>
  );
}
