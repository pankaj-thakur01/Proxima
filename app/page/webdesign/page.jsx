import React from 'react'

const WebsiteDesignPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Website Design & Development Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Modern, responsive, and high-converting websites designed to grow your business.
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">What is Website Design?</h2>
        <p className="text-lg leading-7 mb-6">
          Website design is the process of creating visually appealing and user-friendly websites that represent your brand online. A well-designed website helps attract visitors, build trust, and convert them into customers.
        </p>

        <p className="text-lg leading-7">
          It includes layout design, UI/UX, responsiveness, performance optimization, and development. A strong website is the foundation of your online presence.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            "Business Website",
            "E-commerce Website",
            "Landing Page Design",
            "UI/UX Design",
            "Website Redesign",
            "Responsive Design"
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p>
                We build high-quality {item.toLowerCase()} that are fast, secure, and optimized for conversions.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* LONG CONTENT */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-8">

          <h2 className="text-3xl font-bold">Complete Website Strategy</h2>

          <p>
            A website is the digital face of your business. It is often the first impression customers have of your brand, so it must be professional and engaging.
          </p>

          <p>
            UI/UX design ensures that your website is easy to navigate and visually appealing. A smooth user experience increases engagement and reduces bounce rates.
          </p>

          <p>
            Responsive design is essential in today’s mobile-first world. Your website must work perfectly on all devices including smartphones and tablets.
          </p>

          <p>
            Speed optimization is crucial. A slow website can lead to lost visitors and lower search rankings.
          </p>

          <p>
            SEO-friendly structure helps your website rank better on search engines. Clean code and proper optimization improve visibility.
          </p>

          <p>
            Conversion-focused design ensures that visitors take action, whether it’s filling a form, making a purchase, or contacting your business.
          </p>

          <p>
            Security is also important. A secure website builds trust and protects user data.
          </p>

          <p>
            Our team creates websites that combine design, performance, and strategy to deliver real business results.
          </p>

          <p>
            Whether you need a simple business website or a complex e-commerce platform, we provide complete solutions tailored to your needs.
          </p>

          <p>
            With our expertise, your website will not only look great but also perform exceptionally well.
          </p>

        </div>
      </section>

      {/* EXTRA CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-6 text-lg leading-8">
        <h2 className="text-3xl font-bold">Why a Good Website Matters?</h2>

        <p>It creates a strong first impression.</p>
        <p>It builds trust and credibility.</p>
        <p>It improves user experience.</p>
        <p>It supports SEO and marketing strategies.</p>
        <p>It increases conversions and sales.</p>
        <p>It strengthens your online presence.</p>
        <p>It helps your business grow digitally.</p>

      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-cyan-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Build Your Website Today
        </h2>
        <button className="bg-black px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition">
          Get Started
        </button>
      </section>

    </div>
  )
}

export default WebsiteDesignPage
