import SectionHeader from "../../components/common/SectionHeader"; // Using the reusable header we made

const ParticipationInquiryPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#030F1F] text-white px-8 py-16 md:px-24">
      {/* Page Header */}
      <div className="mb-20">
        <SectionHeader
          prefix="Become Part of the"
          highlight="Decent Den Story"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* Left Column: Form */}
        <section className="bg-[#04040E] border border-blue-900/30 rounded-[20px] p-8 md:p-10 shadow-card-glow">
          <h2 className="font-irish text-3xl mb-8">Partnership Inquiry</h2>
          <hr className="border-white/10 mb-8" />

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="font-inika text-sm">Your Name *</label>
              <input
                type="text"
                placeholder="Write Your Name"
                className="w-full bg-[#050B18] border border-blue-900/50 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="font-inika text-sm">Brand / Company *</label>
              <input
                type="text"
                placeholder="Write Your Brand / Company Name"
                className="w-full bg-[#050B18] border border-blue-900/50 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="font-inika text-sm">Email Address *</label>
              <input
                type="email"
                placeholder="Write Your Email Address"
                className="w-full bg-[#050B18] border border-blue-900/50 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="font-inika text-sm">
                Sponsorship Interest *
              </label>
              <select className="w-full bg-[#050B18] border border-blue-900/50 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-400 appearance-none transition-colors">
                <option>Select Sponsorship Interest</option>
                <option>Brand Integration</option>
                <option>Content Distribution</option>
              </select>
            </div>

            <button className="w-full bg-white text-black font-irish text-xl py-3 rounded-lg mt-4 hover:bg-gray-200 transition-all">
              Submit
            </button>
          </form>
        </section>

        {/* Right Column: Info Cards */}
        <div className="flex flex-col gap-12 justify-center">
          {/* Direct Contact Card */}
          <section>
            <h3 className="font-irish text-2xl mb-4">Direct Contact</h3>
            <p className="font-inika text-gray-400 text-sm mb-6 leading-relaxed">
              Prefer to reach out directly? Our partnership team is ready to
              discuss custom opportunities tailored to your brand.
            </p>
            <div className="bg-[#050B18] border border-blue-900/30 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-400">✉ Email us:-</span>
                <a
                  href="mailto:invest@decentden.com"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  invest@decentden.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400">📞 Call us:-</span>
                <span className="text-white">+91-1234567891</span>
              </div>
            </div>
          </section>

          {/* Why Partner Card */}
          <section className="bg-[#050B18] border border-blue-900/30 rounded-xl p-8">
            <h3 className="font-irish text-2xl mb-6">Why Partner With Us?</h3>
            <ul className="space-y-3 font-inika text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1.5">•</span>
                Authentic Web3 audience engagement
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1.5">•</span>
                Multi-platform content distribution
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1.5">•</span>
                Custom brand integration opportunities
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1.5">•</span>
                Measurable ROI and analytics
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1.5">•</span>
                Season-long brand exposure
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ParticipationInquiryPage;
