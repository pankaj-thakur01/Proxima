
const Footer = () => {
  return (
      <footer className="bg-[#1f3b82] text-white px-30  pt-16 pb-6 lg:px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-10">

          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Proxima Digital Agency</h2>

            <p className="text-gray-200 text-sm mb-6 leading-relaxed">Contact us for expert support, smart digital solutions, fast response, reliable service, and dedicated assistance for your business growth.
            </p>

            <div className="flex gap-3">
              <div className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                f
              </div>
              <div className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                ig
              </div>
              <div className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                in
              </div>
              <div className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                wa
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Company Profile</li>
              <li className="cursor-pointer">Case Studies</li>
              <li className="cursor-pointer">Blogs</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">Sitemap</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Useful Links</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Career Page</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>E-Books</li>
              <li>Google Algorithm Updates</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>SEO Services</li>
              <li>PPC Ads</li>
              <li>Social Media</li>
              <li>Creative Services</li>
              <li>Content Writing</li>
              <li>Website Designing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Connect With Us</h3>
            <ul className="space-y-3 w-full text-gray-200 text-sm leading-relaxed">
              <li>📞 +91 9266474032</li>
              <li><span>✉️ info@elysiandigitalservices.com</span></li>
              <li>
                📍 DLF 40, Kirti Nagar Industrial Area, Moti Nagar,
                New Delhi, India - 110015
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-400 mt-12 pt-5 text-center text-sm text-gray-200">
          Copyright © 2026 Elysian Digital Services. All rights reserved.
        </div>

      </footer>  )
}

export default Footer