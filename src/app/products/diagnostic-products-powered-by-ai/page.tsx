import ProductPageTemplate from "@/components/ProductPageTemplate";

export const metadata = {
  title: "Diagnostic Products Powered by AI | Rheo Pharma",
  description: "Advanced AI-powered diagnostic solutions by Rheo Pharma.",
};

export default function DiagnosticProductsPage() {
  return (
    <ProductPageTemplate title="Diagnostic Products Powered by AI" category="Diagnostics">
      <p>
        Artificial Intelligence is revolutionizing the healthcare landscape. At Rheo Pharma, we leverage advanced AI algorithms to deliver cutting-edge diagnostic products that enhance accuracy, speed, and reliability.
      </p>
      <h3 className="text-xl font-bold text-[#1c2c52] mt-8 mb-4">Key Advantages</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Rapid turnaround times for complex diagnostic analysis.</li>
        <li>High-precision imaging and predictive modeling capabilities.</li>
        <li>Integration with clinical workflows to empower healthcare providers.</li>
      </ul>
      <p className="mt-6">
        (Content to be expanded based on specific product lines...)
      </p>
    </ProductPageTemplate>
  );
}
