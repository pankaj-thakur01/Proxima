import React from 'react'

const CreativeServicesPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Creative Design Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Stunning visuals, powerful branding, and creative designs that make your business stand out.
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">What are Creative Services?</h2>
        <p className="text-lg leading-7 mb-6">
          Creative services include graphic design, branding, UI/UX design, and content visuals that help businesses communicate effectively with their audience. Good design is not just about looks — it's about delivering the right message.
        </p>

        <p className="text-lg leading-7">
          From logos to social media creatives, our designs are focused on engagement, clarity, and conversions.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            "Logo Design",
            "Social Media Creatives",
            "UI/UX Design",
            "Brand Identity",
            "Banner Design",
            "Ad Creatives"
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p>
                We create high-quality {item.toLowerCase()} that captures attention and strengthens your brand identity.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* LONG CONTENT */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-8">

          <h2 className="text-3xl font-bold">Complete Creative Strategy</h2>

          <p>
            Creative design plays a critical role in digital marketing. It is the first thing users notice when they interact with your brand. A strong visual identity can leave a lasting impression and build trust instantly.
          </p>

          <p>
            Branding is more than just a logo. It includes colors, typography, tone, and overall visual consistency. A well-defined brand identity helps your business stand out in a crowded market.
          </p>

          <p>
            UI/UX design ensures that your website or app is easy to use and visually appealing. A good user experience increases engagement and improves conversion rates.
          </p>

          <p>
            Social media creatives are essential for engagement. Eye-catching posts, reels, and banners help increase reach and interaction.
          </p>

          <p>
            Ad creatives play a huge role in paid campaigns. A compelling design can significantly improve click-through rates and conversions.
          </p>

          <p>
            Consistency in design builds brand recognition. When users see similar styles across platforms, they remember your brand more easily.
          </p>

          <p>
            Our creative team focuses on both aesthetics and performance. We design visuals that not only look good but also drive results.
          </p>

          <p>
            We follow modern design trends and tools to deliver high-quality outputs. From minimalistic designs to bold creatives, we adapt to your brand style.
          </p>

          <p>
            Every design we create is tailored to your target audience. This ensures better engagement and stronger brand connection.
          </p>

          <p>
            With our creative services, you can elevate your brand and create a powerful visual presence.
          </p>

        </div>
      </section>

      {/* EXTRA CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-6 text-lg leading-8">
        <h2 className="text-3xl font-bold">Why Creative Design Matters?</h2>

        <p>Good design creates a strong first impression.</p>
        <p>It builds trust and professionalism.</p>
        <p>It improves user engagement and retention.</p>
        <p>It supports marketing and advertising campaigns.</p>
        <p>It helps communicate your brand message clearly.</p>
        <p>It increases conversion rates.</p>
        <p>It makes your brand memorable.</p>

      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-pink-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Your Brand Identity
        </h2>
        <button className="bg-black px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition">
          Start Designing
        </button>
      </section>

    </div>
  )
}

export default CreativeServicesPage
