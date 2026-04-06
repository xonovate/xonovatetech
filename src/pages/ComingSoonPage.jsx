import Logo from "../assets/logo.png";

function ComingSoonPage() {
  return (
    <>
      {/* Page Metadata */}
      <title>Xonovate Technologies - We build and run your systems.</title>
      <meta
        name="description"
        content="Xonovate Technologies builds, deploys, and supports custom software systems for businesses. We help organizations run efficiently with reliable technology solutions."
      />
      <meta name="robots" content="index, follow" />
      {/* Open Graph */}
      <meta property="og:title" content="Xonovate Technologies Ltd" />
      <meta
        property="og:description"
        content="We build and run software systems for modern organizations."
      />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-16 md:px-6 py-24 md:py-6">
        {/* Logo */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
          <img
            src={Logo}
            alt="Xonovate Technologies Logo"
            className="w-16 h-16"
          />
        </div>

        {/* Headline */}
        <div className="text-center max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight capitalize bg-linear-to-r from-[#5C77DC] to-[#20C8EE] bg-clip-text text-transparent">
            We build and run your systems.
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-600 mb-6">
            Xonovate Technologies designs, builds, deploys, and supports
            software systems that help businesses operate efficiently and scale
            with confidence.
          </p>

          {/* Status Message */}
          <p className="text-sm text-gray-500">
            Our full website is currently being prepared.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-10 text-center space-y-2">
          <p className="text-sm text-gray-500">Get in touch</p>

          <p className="text-base text-gray-800 font-medium">
            info@xonovatetech.com
          </p>

          <p className="text-base text-gray-800 font-medium">
            +233 59 635 2360
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Xonovate Technologies
        </div>
      </div>
    </>
  );
}

export default ComingSoonPage;
