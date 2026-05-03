import React from 'react'

const SocialMediaPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Social Media Marketing Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Grow your brand, engage your audience, and generate leads with powerful social media strategies.
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">What is Social Media Marketing?</h2>
        <p className="text-lg leading-7 mb-6">
          Social Media Marketing (SMM) is the process of promoting your business through platforms like Instagram, Facebook, and LinkedIn. It helps you connect with your audience, build brand awareness, and drive sales.
        </p>

        <p className="text-lg leading-7">
          With the right strategy, social media can become one of the most powerful tools for business growth and customer engagement.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            "Instagram Marketing",
            "Facebook Ads",
            "Content Creation",
            "Social Media Management",
            "Influencer Marketing",
            "Brand Strategy"
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p>
                We provide expert {item.toLowerCase()} services to grow your audience and increase engagement.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* LONG CONTENT */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-8">

          <h2 className="text-3xl font-bold">Complete Social Media Strategy</h2>

          <p>
            Social media has become an essential part of digital marketing. Businesses that actively engage with their audience on social platforms build stronger relationships and brand loyalty.
          </p>

          <p>
            A successful social media strategy starts with understanding your audience. Knowing their interests, behavior, and preferences helps create content that resonates with them.
          </p>

          <p>
            Content creation is at the core of social media success. High-quality posts, videos, and graphics attract attention and encourage engagement.
          </p>

          <p>
            Consistency is key. Posting regularly helps maintain visibility and keeps your audience engaged.
          </p>

          <p>
            Social media ads help reach a larger audience quickly. Platforms like Facebook and Instagram offer powerful targeting options.
          </p>

          <p>
            Engagement is important for building relationships. Responding to comments and messages increases trust and loyalty.
          </p>

          <p>
            Analytics and insights help measure performance. Tracking metrics like engagement rate and reach helps improve strategy.
          </p>

          <p>
            Influencer marketing can boost brand visibility by leveraging trusted personalities in your niche.
          </p>

          <p>
            Social media also supports brand storytelling. Sharing your journey and values helps connect emotionally with your audience.
          </p>

          <p>
            Our social media marketing services focus on creating impactful campaigns that deliver real results.
          </p>

        </div>
      </section>

      {/* EXTRA CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-6 text-lg leading-8">
        <h2 className="text-3xl font-bold">Why Social Media is Important?</h2>

        <p>
          Social media increases brand awareness and visibility.
        </p>

        <p>
          It helps build trust and relationships with customers.
        </p>

        <p>
          It drives traffic to your website.
        </p>

        <p>
          It supports other marketing strategies like SEO and PPC.
        </p>

        <p>
          It provides valuable insights into customer behavior.
        </p>

        <p>
          It allows direct communication with your audience.
        </p>

        <p>
          It boosts conversions and sales.
        </p>

      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-purple-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Grow Your Social Presence Today
        </h2>
        <button className="bg-red-500 px-6 py-3 rounded-full text-lg hover:bg-red-600 transition">
          Get Started
        </button>
      </section>

    </div>
  )
}

export default SocialMediaPage
