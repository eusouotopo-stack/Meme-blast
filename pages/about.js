import AdBanner from "../src/components/AdBanner.js";
import CookieBanner from "../src/components/CookieBanner.js";

export default function About() {
  return (
    <div className="main-container py-12">
      <CookieBanner />

      <h1 className="text-3xl font-bold mb-6">About MemeBlast IA</h1>

      <p>
        Welcome to MemeBlast IA, the ultimate AI-powered meme generator designed
        to bring humor, creativity, and fun to people all around the world. Whether
        you are looking to create memes for social media, personal messages, or
        simply to entertain your friends, MemeBlast IA makes it incredibly easy
        to generate high-quality memes within seconds. Our platform leverages
        cutting-edge artificial intelligence technology to understand your input
        and generate relevant, humorous, and visually appealing memes automatically.
      </p>

      <p>
        At MemeBlast IA, we understand that humor is universal but also
        highly personal. That’s why we offer a wide variety of styles and meme
        templates, so you can tailor the output to suit your sense of humor.
        From classic memes to trending formats, our AI adapts dynamically to
        your prompts and preferences. We constantly update our template library
        to include the latest viral trends, ensuring your memes are fresh and
        shareable. 
      </p>

      <p>
        Our goal is not only to provide a meme generator but also to create a
        community around fun and creativity. MemeBlast IA encourages users
        to share their creations easily across social media platforms. With
        built-in sharing tools and direct download options, your memes can
        reach a global audience instantly. We believe humor connects people,
        and MemeBlast IA is designed to make it effortless for everyone to
        participate.
      </p>

      <p>
        We are committed to privacy and user safety. MemeBlast IA does not
        store personal data unnecessarily and ensures that all generated
        content is secure. Our AI is trained to avoid generating offensive
        content, and we continuously monitor and improve the system to
        maintain a safe, friendly, and inclusive environment for all users.
      </p>

      <p>
        By using MemeBlast IA, you are joining a platform that combines
        advanced technology with creativity and fun. Whether you are a casual
        user, a content creator, or just someone who loves memes, MemeBlast
        IA provides you with tools to express yourself in a unique and
        entertaining way. Thank you for choosing MemeBlast IA, where humor
        meets innovation.
      </p>

      <AdBanner className="mt-6" />
    </div>
  );
}
