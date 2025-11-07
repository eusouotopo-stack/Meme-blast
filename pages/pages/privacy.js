import AdBanner from "../src/components/AdBanner.js";
import CookieBanner from "../src/components/CookieBanner.js";

export default function Privacy() {
  return (
    <div className="main-container py-12">
      <CookieBanner />

      <h1 className="text-3xl font-bold mb-6">Privacy Policy - MemeBlast IA</h1>

      <p>
        At MemeBlast IA, we take your privacy seriously. This Privacy Policy
        explains how we collect, use, and protect information when you use
        our AI-powered meme generator. Our goal is to ensure that your
        experience is not only fun and creative but also safe and secure.
      </p>

      <p>
        <strong>Information Collection:</strong> When you interact with
        MemeBlast IA, we may collect certain information such as your input
        prompts, device type, and IP address. This information is used solely
        to provide a better user experience, improve the AI models, and
        maintain the platform’s functionality.
      </p>

      <p>
        <strong>Use of Data:</strong> The data collected is never sold to
        third parties. We use your data to enhance the AI meme generation
        process, ensure smooth operation of the website, and monitor for
        abusive behavior. Your input prompts are processed to generate memes
        and may be stored temporarily for performance and quality purposes,
        but personal identifiers are not linked.
      </p>

      <p>
        <strong>Cookies:</strong> MemeBlast IA uses cookies to improve
        user experience. Cookies allow the site to remember your preferences
        and provide a seamless experience. You can manage or disable cookies
        in your browser settings, but this may affect certain features of
        the platform. For more information, see our Cookie Banner.
      </p>

      <p>
        <strong>Third-Party Services:</strong> We may use third-party
        services for analytics and advertisements, such as Google AdSense.
        These services may collect information to provide better-targeted
        ads. We do not have control over their data collection practices,
        but we ensure compliance with privacy laws.
      </p>

      <p>
        <strong>Security:</strong> We implement appropriate technical and
        organizational measures to protect your data against unauthorized
        access, alteration, disclosure, or destruction. However, no method
        of transmission over the Internet is 100% secure.
      </p>

      <p>
        <strong>Children's Privacy:</strong> MemeBlast IA is not intended
        for children under 13. We do not knowingly collect personal
        information from children. If you believe a child has provided
        personal data, please contact us immediately.
      </p>

      <p>
        <strong>Your Rights:</strong> You have the right to request access
        to, correction, or deletion of any personal information we may
        hold. You can contact us at <a href="mailto:vofs.auto@gmail.com">vofs.auto@gmail.com</a>
        for any privacy-related requests.
      </p>

      <p>
        By using MemeBlast IA, you agree to the terms outlined in this
        Privacy Policy. We may update this policy periodically, and
        continued use of the platform constitutes acceptance of any
        changes. Our commitment is to maintain transparency and ensure
        that your privacy is respected at all times.
      </p>

      <AdBanner className="mt-6" />
    </div>
  );
    }
