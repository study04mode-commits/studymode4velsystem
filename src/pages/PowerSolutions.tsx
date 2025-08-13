import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';

const PowerSolutions = React.memo(() => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const loanTypes = useMemo(() => [
    { type: 'Residential Solar Loan', rate: '6.50% onwards' },
    { type: 'Commercial / Industrial Solar Loan', rate: '7.99% onwards' },
    { type: 'Housing Society Solar Loan', rate: '8.99% onwards' }
  ], []);

  const faqData = useMemo(() => [
    {
      question: 'What are the benefits of installing solar panels at home?',
      answer: 'Installing residential solar panels helps you reduce electricity bills, increase property value, and lower your carbon footprint. You can also take advantage of government subsidies and enjoy long-term energy savings.'
    },
    {
      question: 'How do solar panels work?',
      answer: 'Solar panels convert sunlight into electricity using photovoltaic (PV) cells. This electricity powers your home or industrial equipment, and any excess can be stored or fed back into the grid, depending on your system.'
    },
    {
      question: 'How long do solar panels last?',
      answer: 'Most solar panels last 25 to 30 years with minimal maintenance. VEL SYSTEMS provides high-quality panels with warranties and expert support to ensure long-term performance.'
    },
    {
      question: 'Is solar energy suitable for industrial use?',
      answer: 'Absolutely! We offer industrial solar panel solutions that help reduce operational costs and provide a reliable power supply for factories, warehouses, and plants.'
    },
    {
      question: 'Can I get a subsidy or financial support for solar installation?',
      answer: 'Yes, residential customers in India are eligible for government subsidies on solar panel systems. VEL SYSTEMS assists you in availing these benefits and provides complete guidance on the paperwork.'
    },
    {
      question: 'How much roof space is needed for a solar installation?',
      answer: 'On average, a 1 kW solar system requires about 100 square feet of shadow-free rooftop area. We\'ll conduct a site assessment to determine the best setup for your space and needs.'
    },
    {
      question: 'How long does the installation take?',
      answer: 'Installation usually takes 2 to 5 days for homes and up to a few weeks for larger industrial projects, depending on the complexity. Our team ensures a smooth and timely process.'
    },
    {
      question: 'Will solar panels work during cloudy days or at night?',
      answer: 'Solar panels generate less power on cloudy days and none at night. However, with battery storage or a grid-tied system, your power supply remains uninterrupted.'
    },
    {
      question: 'Does VEL SYSTEMS provide maintenance and after-sales support?',
      answer: 'Yes! We offer ongoing maintenance, performance checks, and customer support to keep your system running at its best.'
    }
  ], []);

  return (
    <div className="py-5">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Power Your Future with Smart Solar Solutions
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            VEL Systems - Your trusted partner in sustainable energy
          </p>
        </div>
      </section>

      {/* Solar Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/powerSolutions/vel-systems-solar-F-2-scaled.jpg" 
                alt="VEL Systems Solar Installation"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/powerSolutions/vels-1-scaled.jpg" 
                alt="Solar Panel Installation"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/powerSolutions/vels-Copy-scaled.jpg" 
                alt="Solar Energy Solutions"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At VEL Systems, we bring you efficient, affordable, and eco-friendly solar energy solutions tailored for both homes and businesses. Whether you're looking to reduce electricity bills, become energy independent, or contribute to a greener planet — we've got you covered.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Our Services Include:</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>✅ Residential & Commercial Solar Panel Installation</li>
                  <li>✅ On-Grid, Off-Grid & Hybrid Systems</li>
                  <li>✅ High-Quality Solar Inverters & Batteries</li>
                  <li>✅ Expert Guidance, Hassle-Free Setup, and AMC Support</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Why Choose Us:</h3>
                <p className="text-gray-700 text-left">
                  We use trusted brands and latest technology to ensure maximum output and long-term reliability. From planning to installation and after-sales service — we provide end-to-end solar solutions.
                </p>
                <p className="text-blue-600 font-semibold mt-4">
                  🌞 Invest in solar once — save for decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subsidy + EMI = Hassle-Free Solar for All
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Finance Details */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Finance Options</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium text-gray-700">Interest Rate:</span>
                  <span className="text-blue-600 font-semibold">6.5% onwards</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium text-gray-700">Loan Tenure:</span>
                  <span className="text-blue-600 font-semibold">1 to 10 Years</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium text-gray-700">Loan Amount:</span>
                  <span className="text-blue-600 font-semibold">₹1 Lakh to ₹10 Crores</span>
                </div>
                <div className="pt-2">
                  <span className="font-medium text-gray-700">Finance By:</span>
                  <p className="text-gray-600 mt-1">All Nationalised Banks, Private Banks, NBFC</p>
                </div>
              </div>
            </div>

            {/* Loan Types */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Loan Types & Interest Rates</h3>
              <div className="space-y-4">
                {loanTypes.map((loan, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">{loan.type}</h4>
                    <p className="text-blue-600 font-medium">Interest Rate of {loan.rate}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Government Subsidies Available
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Residential Subsidy */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Subsidy for Residential Households</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-lg font-semibold text-blue-600">₹30,000 per kW</p>
                  <p className="text-gray-600">(up to 2 kW)</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-lg font-semibold text-blue-600">₹18,000 per kW</p>
                  <p className="text-gray-600">(for additional capacity up to 3 kW)</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-lg font-semibold text-blue-600">₹78,000 total subsidy</p>
                  <p className="text-gray-600">(capped for systems larger than 3 kW)</p>
                </div>
              </div>
            </div>

            {/* GHS/RWA Subsidy */}
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Subsidy for GHS / RWA Households</h3>
              <p className="text-sm text-gray-600 mb-4">(Group Housing Society / Resident Welfare Association)</p>
              <div className="bg-white rounded-lg p-6">
                <p className="text-2xl font-semibold text-green-600 mb-2">₹18,000 per kW</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  (for common facilities including EV charging up to 500 kW capacity at 3 kW per house)
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  (Upper limit excludes individual rooftop plants installed by residents in the GHS / RWA)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Testimonial</h3>
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "I've known VEL Systems for the past 25 years and have purchased four laptops, batteries, and CCTV systems from them. I've always been satisfied with their service. Recently, they recommended solar to help reduce my electricity bills. Once approvals were granted, they took full responsibility for the solar installation—including arranging a loan through Canara Bank and securing the government subsidy. I didn't have to worry about anything; they handled all the paperwork efficiently. Their end-to-end service and after-sales support are commendable. I'm completely happy and have already referred them to my friends. VEL Systems is a trusted one-stop solution for all tech and energy needs."
              </blockquote>
              <div className="text-right">
                <p className="font-semibold text-gray-900">- Umesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let the Sun Pay Your Bills
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Cut down electricity expenses with our end-to-end solar installation services backed by 25+ years of trust and 20,000+ happy clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+916572263827" 
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              <Phone size={20} className="mr-2" />
              Talk to Our Solar Experts Today!
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left bg-gray-50 hover:bg-gray-100 p-6 rounded-lg transition-colors duration-300 flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openAccordion === index ? (
                    <ChevronUp className="text-blue-600 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-blue-600 flex-shrink-0" size={20} />
                  )}
                </button>
                {openAccordion === index && (
                  <div className="bg-white p-6 border-l-4 border-blue-500">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

PowerSolutions.displayName = 'PowerSolutions';

export default PowerSolutions;