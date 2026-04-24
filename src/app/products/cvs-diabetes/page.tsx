import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata = {
  title: "CVS-Diabetes | Rheo Pharma",
  description: "Cardiovascular and Diabetes therapeutic solutions.",
};

export default function CvsDiabetesPage() {
  return (
    <ProductPageTemplate title="CVS-Diabetes">
      <p>
        Cardiovascular diseases and Diabetes are among the leading health challenges globally. Rheo Pharma provides a comprehensive portfolio of targeted therapies designed to manage blood sugar levels and maintain cardiovascular health.
      </p>
      <h3 className="text-xl font-bold text-[#1c2c52] mt-8 mb-4">Therapeutic Coverage</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Advanced oral hypoglycemic agents.</li>
        <li>Antihypertensive and lipid-lowering drugs.</li>
        <li>Innovative combination therapies for patient compliance.</li>
      </ul>
      <p className="mt-6">
        (Content to be expanded based on specific product lines...)
      </p>
    </ProductPageTemplate>
  );
}
