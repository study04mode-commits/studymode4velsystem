import { Link } from "react-router-dom";

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-sm">
        <div className="flex w-full px-4 py-3 sm:px-6 sm:py-4 items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="../logo.png"
              alt="ExpenseTrace Logo"
              className="h-7 sm:h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Sign In */}
          <Link
            to="/log-in-or-create-account"
            className="px-3 py-1.5 sm:px-5 sm:py-2 border border-gray-300 rounded-full text-sm sm:text-base font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-10 sm:py-20 lg:py-28 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-snug">
              Terms & Conditions
            </h1>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-90">
              Please read these terms carefully before using ExpenseTrace.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-5 text-gray-700 space-y-10">
            {[
              {
                title: "1. Acceptance of Terms",
                text: "By accessing or using ExpenseTrace, you agree to comply with these Terms & Conditions. If you do not agree, please do not use our services.",
              },
              {
                title: "2. Use of Services",
                text: "ExpenseTrace provides tools to track income, expenses, and budgets. You agree to use the platform for lawful purposes and not misuse or disrupt the service in any way.",
              },
              {
                title: "3. User Responsibilities",
                text: "You are responsible for maintaining the confidentiality of your account and ensuring the accuracy of the information you provide within ExpenseTrace.",
              },
              {
                title: "4. Intellectual Property",
                text: "All content, trademarks, and intellectual property on ExpenseTrace belong to us or our licensors. You may not copy, distribute, or exploit them without permission.",
              },
              {
                title: "5. Limitation of Liability",
                text: 'ExpenseTrace is provided on an "as-is" basis. We are not liable for any losses or damages resulting from the use of our platform.',
              },
              {
                title: "6. Changes to Terms",
                text: "We may update these Terms & Conditions from time to time. The latest version will always be available on this page with a revised effective date.",
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-3">
                  {section.title}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed sm:leading-loose">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-24 lg:py-32 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center">
          <div className="max-w-2xl mx-auto px-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
              Need Assistance?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 leading-relaxed opacity-90">
              If you have questions about these Terms & Conditions, feel free to
              reach out to our support team.
            </p>
            <Link
              to="/about"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-5 py-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
          <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} ExpenseTrace. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}