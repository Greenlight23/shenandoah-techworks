import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showService, setShowService] = useState(null);

  const services = {
    customPc: {
      title: 'Custom PC Builds',
      description:
        'I will build you a high-performance gaming or workstation PC tailored to your specific needs and budget. From component selection to full assembly and setup.',
      image: 'https://images.unsplash.com/photo-1492696041648-846821075622?auto=format&fit=crop&w=1920&q=80',
    },
    repairs: {
      title: 'Repairs',
      description:
        'Diagnose and fix hardware/software issues quickly and affordably. Broken screens, charging ports, motherboards, and more.',
      image: ' https://images.unsplash.com/photo-1581090763662-f88e0f371c0d?auto=format&fit=crop&w=1920&q=80',
    },
    upgrades: {
      title: 'Upgrades',
      description:
        'Upgrade your existing system for better performance and longevity. RAM, SSD, GPU, CPU, and power supply upgrades.',
      image: ' https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=format&fit=crop&w=1920&q=80',
    },
  };

  const navigateTo = (section) => {
    setActiveSection(section);
    setShowService(null);
    window.history.pushState(null, '', `#${section}`);
  };

  const handleShowService = (serviceKey) => {
    setShowService(serviceKey);
  };

  const handleBackToServices = () => {
    setShowService(null);
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') || 'home';
    setActiveSection(hash);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-2xl font-bold">ShenandoahTechWorks</h1>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-white rounded p-1"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              onClick={() => navigateTo('home')}
              className="hover:text-blue-200 transition-all duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => navigateTo('services')}
              className="hover:text-blue-200 transition-all duration-300 font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => navigateTo('about')}
              className="hover:text-blue-200 transition-all duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => navigateTo('contact')}
              className="hover:text-blue-200 transition-all duration-300 font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
        {/* Mobile Nav */}
        {showMobileMenu && (
          <div className="fixed inset-0 bg-blue-700 bg-opacity-95 z-40 flex flex-col justify-center items-center">
            <button
              onClick={() => setShowMobileMenu(false)}
              className="absolute top-4 right-4 focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex flex-col items-center space-y-8 text-2xl">
              <a href="#home" onClick={() => navigateTo('home')}>
                Home
              </a>
              <a href="#services" onClick={() => navigateTo('services')}>
                Services
              </a>
              <a href="#about" onClick={() => navigateTo('about')}>
                About
              </a>
              <a href="#contact" onClick={() => navigateTo('contact')}>
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section id="home" className="animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-blue-800 mb-6">Welcome to ShenandoahTechWorks</h2>
              <p className="text-lg text-gray-700 mb-10">
                Your one-stop shop for PC building, repairs, upgrades, and tech support.
                Serving the Shenandoah Valley with expert service and fast turnaround.
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                onClick={() => handleShowService('customPc')}
                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fadeIn"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 3H15M12 3V6M12 21V18M3 12H6M18 12H21M5.64 5.64L7.757 7.757M16.243 16.243L18.36 18.36M5.64 18.36L7.757 16.243M16.243 7.757L18.36 5.64"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Custom PC Builds</h3>
                  <p>High-performance gaming and workstation PCs built to your specs.</p>
                </div>
              </div>
              <div
                onClick={() => handleShowService('repairs')}
                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fadeIn delay-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.01 12C12.01 13.1046 11.1046 14.01 10.01 14.01C8.91544 14.01 8.01 13.1046 8.01 12.01C8.01 10.9154 8.91544 10.01 10.01 10.01C11.1046 10.01 12.01 10.9154 12.01 12.01Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.01 2V5M12.01 19V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12.01H5M19 12.01H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Repairs</h3>
                  <p>Diagnose and fix hardware/software issues quickly and affordably.</p>
                </div>
              </div>
              <div
                onClick={() => handleShowService('upgrades')}
                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fadeIn delay-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15L12 21M12 15L15 18M12 15L9 18M12 3V5M12 5V9M12 5L15 7M12 5L9 7M17.6569 17.6569L19 19M19 19L19.9999 21.9999M19 19L17.6569 20.3431M19 19L21 17M19 19L17 21M5.65685 5.65685L5 5M5 5L3 3M5 5L5.65685 3.65685M5 5L3 7M5 5L7 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Upgrades</h3>
                  <p>Upgrade your existing system for better performance and longevity.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        {activeSection === 'services' && (
          <section id="services" className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">What makes us different</p>
            </div>
            {/* Service Details */}
            {showService && (
              <div className="max-w-6xl mx-auto animate-slideIn">
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">{services[showService].title}</h3>
                    <p className="text-gray-700 mb-6">{services[showService].description}</p>
                    <button
                      onClick={handleBackToServices}
                      className="mt-4 self-start bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Back to Services
                    </button>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      className="w-full h-auto aspect-video object-cover rounded-lg"
                      src={services[showService].image}
                      alt="Service Image"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Service List */}
            {!showService && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  onClick={() => handleShowService('customPc')}
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fadeIn"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                      <svg
                        className="w-10 h-10 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 3H15M12 3V6M12 21V18M3 12H6M18 12H21M5.64 5.64L7.757 7.757M16.243 16.243L18.36 18.36M5.64 18.36L7.757 16.243M16.243 7.757L18.36 5.64"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Custom PC Builds</h3>
                    <p className="text-gray-600">
                      High-performance gaming and workstation PCs built to your specs.
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => handleShowService('repairs')}
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fadeIn delay-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                      <svg
                        className="w-10 h-10 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.01 12C12.01 13.1046 11.1046 14.01 10.01 14.01C8.91544 14.01 8.01 13.1046 8.01 12.01C8.01 10.9154 8.91544 10.01 10.01 10.01C11.1046 10.01 12.01 10.9154 12.01 12.01Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.01 2V5M12.01 19V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12.01H5M19 12.01H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Repairs</h3>
                    <p className="text-gray-600">
                      Diagnose and fix hardware/software issues quickly and affordably.
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => handleShowService('upgrades')}
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fadeIn delay-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                      <svg
                        className="w-10 h-10 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 15L12 21M12 15L15 18M12 15L9 18M12 3V5M12 5V9M12 5L15 7M12 5L9 7M17.6569 17.6569L19 19M19 19L19.9999 21.9999M19 19L17.6569 20.3431M19 19L21 17M19 19L17 21M5.65685 5.65685L5 5M5 5L3 3M5 5L5.65685 3.65685M5 5L3 7M5 5L7 3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Upgrades</h3>
                    <p className="text-gray-600">
                      Upgrade your existing system for better performance and longevity.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section id="about" className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">About Justin</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                My name is Justin, I'm 16 years old, and I love working with computers.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">My Story</h3>
                <p className="text-gray-700 mb-4">
                  Founded in 2025 by me at 16 years old, ShenandoahTechWorks was created to help others with computer building and repair services.
                </p>
                <p className="text-gray-700 mb-4">
                  I've always had a passion for technology and problem-solving. Whether you're a gamer, student, or professional, I can help with your tech needs.
                </p>
                <p className="text-gray-700">
                  My mission is to provide fast, reliable, and affordable tech services while continuing to learn and grow my skills.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 rounded-full p-3 mr-3">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Young & Passionate</h4>
                    <p className="text-sm text-gray-600">Dedicated to learning and growth</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 rounded-full p-3 mr-3">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Fast Turnaround</h4>
                    <p className="text-sm text-gray-600">Quick service, minimal downtime</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section id="contact" className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Justin</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have a question or need help with your computer? Just email or call me directly.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Email</h3>
                <a
                  href="mailto:shenandoahtechworks@gmail.com"
                  className="block w-full bg-blue-50 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-100 transition-all duration-300"
                >
                  shenandoahtechworks@gmail.com
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Phone</h3>
                <a
                  href="tel:+15406247823"
                  className="block w-full bg-blue-50 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-100 transition-all duration-300"
                >
                  (540) 624-7823
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
            <div className="flex items-center mb-4 md:mb-0">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="text-xl font-bold">ShenandoahTechWorks</h2>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-1">
                <a
                  href="mailto:shenandoahtechworks@gmail.com"
                  className="hover:text-blue-200 transition-all duration-300"
                >
                  shenandoahtechworks@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+15406247823" className="hover:text-blue-200 transition-all duration-300">
                  (540) 624-7823
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-6 pt-4 text-center text-sm text-blue-200">
            <p>&copy; 2025 ShenandoahTechWorks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;