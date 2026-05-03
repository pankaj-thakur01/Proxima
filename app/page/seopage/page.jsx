import React from 'react'


const SeoPage = () => {
  return (
  <div className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-blue-900 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Professional SEO Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Boost your rankings, drive organic traffic, and grow your business with our result-driven SEO strategies.
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">What is SEO?</h2>
        <p className="text-lg leading-7 mb-6">
          Search Engine Optimization (SEO) is the process of improving your website visibility on search engines like Google. 
          With the right SEO strategy, your business can attract high-quality traffic, generate leads, and increase revenue.
        </p>

        <p className="text-lg leading-7">
          Our SEO services focus on both technical optimization and content strategy to ensure long-term success.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            "On-Page SEO",
            "Technical SEO",
            "Keyword Research",
            "Link Building",
            "Content Optimization",
            "Local SEO"
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p>
                We provide expert {item.toLowerCase()} services to improve your rankings and visibility.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>

        <ul className="space-y-4 text-lg">
          <li>✔ Proven SEO strategies</li>
          <li>✔ 100% White-hat techniques</li>
          <li>✔ Monthly reporting</li>
          <li>✔ ROI focused campaigns</li>
        </ul>
      </section>

      {/* LONG CONTENT SECTION */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-8">

          <h2 className="text-3xl font-bold">Complete SEO Guide</h2>

          <p>
            SEO is not just about ranking higher on Google; it’s about understanding user intent, creating valuable content, 
            and optimizing your website for both users and search engines.
          </p>

          <p>
            A successful SEO campaign includes keyword research, competitor analysis, content creation, technical optimization, 
            and link building. Each of these elements plays a critical role in improving your website’s performance.
          </p>

          <p>
            Our team ensures your website is optimized for speed, mobile usability, and search engine crawling. 
            We use advanced tools to track performance and continuously improve your rankings.
          </p>

          <p>
            With our SEO services, you can expect consistent growth, increased traffic, and higher conversion rates.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-indigo-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>
        <button className="bg-red-500 px-6 py-3 rounded-full text-lg hover:bg-red-600 transition">
          Get Started
        </button>
      </section>

    </div>  )
}

export default SeoPage