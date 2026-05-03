import React from 'react'

const PpcPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Pay Per Click (PPC) Advertising Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Get instant traffic, quality leads, and maximum ROI with our expert PPC campaigns.
        </p>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">What is PPC?</h2>
        <p className="text-lg leading-7 mb-6">
          Pay Per Click (PPC) is a digital advertising model where you pay only when someone clicks on your ad. It is one of the fastest ways to drive targeted traffic to your website and generate leads instantly.
        </p>

        <p className="text-lg leading-7">
          Unlike SEO, which takes time, PPC delivers immediate results. With the right strategy, you can appear at the top of search results and attract customers who are ready to buy.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            "Google Ads",
            "Search Ads",
            "Display Ads",
            "Remarketing",
            "YouTube Ads",
            "Conversion Tracking"
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p>
                We create and manage high-performing {item.toLowerCase()} campaigns to maximize your ROI and generate quality leads.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* LONG CONTENT */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-8">

          <h2 className="text-3xl font-bold">Complete PPC Guide</h2>

          <p>
            PPC advertising is one of the most powerful digital marketing strategies for businesses that want instant visibility. It allows you to reach your target audience at the right time when they are searching for your products or services.
          </p>

          <p>
            A successful PPC campaign starts with keyword research. Choosing the right keywords ensures that your ads appear for relevant searches, increasing the chances of conversions.
          </p>

          <p>
            Ad copy plays a crucial role in PPC success. A compelling headline and description can significantly improve click-through rates and attract more users.
          </p>

          <p>
            Landing page optimization is equally important. A well-designed landing page ensures that visitors take action, whether it is filling a form or making a purchase.
          </p>

          <p>
            Bid management helps control your budget and maximize returns. By adjusting bids based on performance, you can ensure efficient spending.
          </p>

          <p>
            Conversion tracking allows you to measure the success of your campaigns and make data-driven decisions.
          </p>

          <p>
            Remarketing helps you re-engage users who have previously visited your website. This increases conversion rates and improves ROI.
          </p>

          <p>
            PPC campaigns require continuous monitoring and optimization. Regular analysis helps identify what works and what needs improvement.
          </p>

          <p>
            Our PPC experts use advanced strategies and tools to create high-performing campaigns that deliver measurable results.
          </p>

          <p>
            Whether you are a small business or a large enterprise, PPC can help you achieve your marketing goals quickly and effectively.
          </p>

        </div>
      </section>

      {/* EXTRA CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-6 text-lg leading-8">
        <h2 className="text-3xl font-bold">Why Choose PPC?</h2>

        <p>
          PPC delivers instant results compared to SEO which takes time. It is perfect for businesses that need quick leads and sales.
        </p>

        <p>
          It allows precise targeting based on location, demographics, and user behavior.
        </p>

        <p>
          It provides full control over budget and spending.
        </p>

        <p>
          It offers measurable results with detailed analytics.
        </p>

        <p>
          It increases brand visibility and awareness.
        </p>

        <p>
          It supports remarketing strategies to improve conversions.
        </p>

        <p>
          It works well alongside SEO for a complete digital marketing strategy.
        </p>

      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-indigo-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Start Your PPC Campaign Today
        </h2>
        <button className="bg-red-500 px-6 py-3 rounded-full text-lg hover:bg-red-600 transition">
          Launch Campaign
        </button>
      </section>

    </div>
  )
}

export default PpcPage