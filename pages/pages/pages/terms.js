import AdBanner from "../src/components/AdBanner.js";
import CookieBanner from "../src/components/CookieBanner.js";

export default function Terms() {
  return (
    <div className="main-container py-12">
      <CookieBanner />

      <h1 className="text-3xl font-bold mb-6">Terms of Service - MemeBlast IA</h1>

      <p>
        Welcome to MemeBlast IA! By accessing or using our platform, you agree
        to comply with and be bound by the following Terms of Service. These
        terms govern your use of the website, AI-powered meme generator,
        and related services provided by MemeBlast IA. If you do not agree
        with any part of these terms, please refrain from using our platform.
      </p>

      <p>
        <strong>Use of Service:</strong> MemeBlast IA allows users to generate
        memes using AI technology. You are responsible for the content you
        create using our service. You agree not to use the platform for any
        unlawful, harmful, or offensive purposes. The generated content must
        not violate any copyright, trademark, or intellectual property laws.
      </p>

      <p>
        <strong>Account and Access:</strong> MemeBlast IA does not require
        user accounts for basic functionality. If an account system is
        implemented in the future, you are responsible for maintaining the
        confidentiality of your login credentials and for all activity under
        your account.
      </p>

      <p>
        <strong>Content Responsibility:</strong> While MemeBlast IA uses
        AI to generate memes, we do not guarantee that the generated content
        will always be accurate, appropriate, or free from errors. You
        acknowledge that any content you generate is your responsibility
        and that MemeBlast IA is not liable for any consequences arising
        from its use.
      </p>

      <p>
        <strong>Prohibited Uses:</strong> You agree not to use MemeBlast IA
        to generate content that is illegal, offensive, discriminatory,
        threatening, or harmful in any way. Any misuse may result in
        restrictions or permanent bans from using the platform.
      </p>

      <p>
        <strong>Intellectual Property:</strong> MemeBlast IA retains all
        rights, titles, and interests in the platform, software, designs,
        and AI models. Users retain ownership of their generated memes,
        provided they comply with these Terms of Service and do not infringe
        on third-party rights.
      </p>

      <p>
        <strong>Third-Party Services:</strong> MemeBlast IA may integrate
        third-party services, including advertising platforms like Google
        AdSense. By using our platform, you agree to the terms and policies
        of these third-party services. We do not assume responsibility
        for the practices of external providers.
      </p>

      <p>
        <strong>Limitation of Liability:</strong> MemeBlast IA is provided
        "as is" without warranties of any kind. We are not liable for any
        direct, indirect, incidental, or consequential damages arising from
        the use or inability to use the platform. You agree to use MemeBlast
        IA at your own risk.
      </p>

      <p>
        <strong>Changes to Terms:</strong> We may update these Terms of Service
        periodically. Continued use of MemeBlast IA constitutes acceptance of
        the updated terms. We encourage users to review this page regularly
        to stay informed about any changes.
      </p>

      <p>
        By using MemeBlast IA, you confirm that you have read, understood,
        and agreed to these Terms of Service. Our mission is to provide
        a fun, creative, and safe platform for generating memes globally.
      </p>

      <AdBanner className="mt-6" />
    </div>
  );
    }
