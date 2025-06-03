import { Link } from "react-router-dom";

const Terms = () => (
  <div className="max-w-2xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-6 text-fuchsia-700">Terms of Service</h1>
    <p className="mb-4">
      Welcome to SMMPanelScript.org! By using our free SMM panel script and platform, you agree to the following simple terms:
    </p>
    <ul className="list-disc pl-6 mb-4 space-y-2">
      <li>
        <span className="font-semibold">Service:</span> We provide a free SMM panel script and hosting to help you launch your own SMM panel. You are responsible for how you use the platform and for complying with all applicable laws.
      </li>
      <li>
        <span className="font-semibold">Revenue:</span> The service is free up to $5,000 in revenue. After that, a small percentage fee applies as described on our pricing page.
      </li>
      <li>
        <span className="font-semibold">Content:</span> You must not use our service for illegal, fraudulent, or abusive activities. We reserve the right to suspend or terminate accounts that violate these rules.
      </li>
      <li>
        <span className="font-semibold">Data:</span> We respect your privacy and do not sell your data. See our privacy policy for details.
      </li>
      <li>
        <span className="font-semibold">No Guarantees:</span> While we strive for uptime and reliability, we do not guarantee uninterrupted service. Use at your own risk.
      </li>
      <li>
        <span className="font-semibold">Support:</span> We offer support via our contact form, but response times may vary.
      </li>
      <li>
        <span className="font-semibold">Changes:</span> We may update these terms from time to time. Continued use means you accept the latest version.
      </li>
    </ul>
    <p className="mb-4">
      By using SMMPanelScript.org, you agree to these terms. If you have questions, please <a href="mailto:contact@smmpanelscript.org" className="text-fuchsia-600 underline">contact us</a>.
    </p>
    <p className="text-xs text-gray-500">Last updated: July 2024</p>
  </div>
);

export default Terms;