import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata = {
  title: "Biosimilars & Vaccines | Rheo Pharma",
  description: "Affordable and accessible biosimilars and vaccines.",
};

export default function BiosimilarsPage() {
  return (
    <ProductPageTemplate title="Biosimilars & Vaccines">
      <p>
        Biologics have transformed modern medicine, but accessibility remains a challenge. Rheo Pharma's biosimilars and vaccines aim to bridge this gap, offering highly similar, clinically equivalent, and more affordable alternatives to reference biologic drugs.
      </p>
      <h3 className="text-xl font-bold text-[#1c2c52] mt-8 mb-4">Therapeutic Coverage</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Immunology and rheumatology biosimilars.</li>
        <li>Oncology support biosimilars.</li>
        <li>Preventative vaccines for global health.</li>
      </ul>
      <p className="mt-6">
        (Content to be expanded based on specific product lines...)
      </p>
    </ProductPageTemplate>
  );
}
