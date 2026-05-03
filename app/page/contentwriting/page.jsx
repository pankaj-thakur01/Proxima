import React from 'react'

const ContentWritingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Content Writing Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          High-quality, SEO-friendly content that drives traffic, engages users, and converts visitors into customers.
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">What is Content Writing?</h2>
        <p className="text-lg leading-7 mb-6">
          Content writing is the process of creating valuable, relevant, and engaging content for websites, blogs, and digital platforms. It plays a crucial role in attracting and retaining your target audience.
        </p>

        <p className="text-lg leading-7">
          Good content not only informs but also persuades users to take action. Whether it's a blog, landing page, or product description, quality content can significantly impact your business growth.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            "SEO Content",
            "Blog Writing",
            "Website Content",
            "Copywriting",
            "Product Descriptions",
            "Technical Writing"
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p>
                We deliver professional {item.toLowerCase()} that is engaging, keyword-optimized, and designed to convert.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* LONG CONTENT */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-8">

          <h2 className="text-3xl font-bold">Complete Content Strategy</h2>

          <p>
            Content is the foundation of digital marketing. Without quality content, it is difficult to rank on search engines or engage users effectively.
          </p>

          <p>
            SEO content writing focuses on using the right keywords naturally while maintaining readability and value. This helps improve rankings and attract organic traffic.
          </p>

          <p>
            Blog writing helps establish authority in your niche. Regular blogs keep your website updated and provide value to your audience.
          </p>

          <p>
            Website content defines your brand voice and communicates your services clearly. Well-structured content improves user experience and conversions.
          </p>

          <p>
            Copywriting is focused on persuasion. It is used in ads, landing pages, and sales pages to encourage users to take action.
          </p>

          <p>
            Product descriptions are important for e-commerce businesses. Clear and compelling descriptions help increase sales.
          </p>

          <p>
            Technical writing simplifies complex information into easy-to-understand content.
          </p>

          <p>
            Our content writing services ensure originality, clarity, and effectiveness. We create content that aligns with your business goals.
          </p>

          <p>
            Consistency is key in content marketing. Regular updates and fresh content help maintain rankings and engagement.
          </p>

          <p>
            With our expertise, your content will not only rank but also convert visitors into customers.
          </p>

        </div>
      </section>

      {/* EXTRA CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-6 text-lg leading-8">
        <h2 className="text-3xl font-bold">Why Content Writing Matters?</h2>

        <p>Content drives organic traffic through SEO.</p>
        <p>It builds trust and credibility.</p>
        <p>It improves user engagement.</p>
        <p>It supports marketing campaigns.</p>
        <p>It increases conversions and sales.</p>
        <p>It strengthens your brand voice.</p>
        <p>It helps communicate your message effectively.</p>

      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-teal-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Get High-Quality Content Today
        </h2>
        <button className="bg-black px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition">
          Start Writing
        </button>
      </section>

    </div>
  )
}

export default ContentWritingPage
