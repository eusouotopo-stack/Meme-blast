import AdBanner from "../src/components/AdBanner.js";
import CookieBanner from "../src/components/CookieBanner.js";

export default function Contact() {
  return (
    <div className="main-container py-12">
      <CookieBanner />

      <h1 className="text-3xl font-bold mb-6">Contact Us - MemeBlast IA</h1>

      <p>
        Thank you for visiting MemeBlast IA! We value every user and aim to
        provide the best experience possible while generating AI-powered memes.
        If you have any questions, suggestions, or feedback, please do not
        hesitate to reach out to us. Our team is committed to responding promptly
        and helping you make the most of your meme creation experience.
      </p>

      <p>
        For inquiries related to technical issues, website functionality, or
        AI meme generation, please provide a detailed description of the problem
        so we can assist you efficiently. Whether you encounter errors, have
        questions about how to use specific features, or want guidance on
        generating memes, our support team is here to help.
      </p>

      <p>
        If you are a content creator or social media manager, and you would
        like to suggest new features, templates, or improvements, we welcome
        your ideas. MemeBlast IA is built to be a platform that evolves with
        the needs of its users, and your input plays a key role in shaping
        the future of our service.
      </p>

      <p>
        For business inquiries, partnership opportunities, or advertising
        collaborations, please contact us at the email below. We are open
        to collaborations that align with our mission of providing a fun,
        safe, and creative platform for meme lovers around the world.
      </p>

      <p>
        <strong>Email for contact:</strong>{" "}
        <a href="mailto:vofs.auto@gmail.com" className="underline text-blue-600">
          vofs.auto@gmail.com
        </a>
      </p>

      <p>
        Your privacy and data security are important to us. Any information
        you share through contact will be handled with confidentiality and
        will not be shared with third parties unnecessarily. We aim to ensure
        that our communication is secure and trustworthy.
      </p>

      <p>
        MemeBlast IA encourages users to provide constructive feedback. Whether
        it is about improving the AI meme generation, adding new templates,
        or enhancing the overall user experience, we value your input. Your
        feedback contributes to a better, more enjoyable platform for everyone.
      </p>

      <p>
        We also provide guidance on common questions. For example, if you are
        unsure how to download or share a meme, or if you want tips on creating
        viral content, feel free to reach out. Our team may provide instructions,
        resources, or tips to help you achieve the best results.
      </p>

      <p>
        By contacting us, you are helping to build a global meme community.
        Your suggestions may inspire new features or improvements, and you
        become part of the ongoing development of MemeBlast IA. We are grateful
        for every contribution from our users.
      </p>

      <p>
        Thank you for choosing MemeBlast IA. We look forward to hearing from you
        and continuing to provide a platform where creativity, humor, and fun
        come together. Reach out anytime at{" "}
        <a href="mailto:vofs.auto@gmail.com" className="underline text-blue-600">
          vofs.auto@gmail.com
        </a>{" "}
        and join our growing community of meme enthusiasts worldwide.
      </p>

      <AdBanner className="mt-6" />
    </div>
  );
    }
