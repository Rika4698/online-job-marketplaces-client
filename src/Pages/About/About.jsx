/* eslint-disable react/no-unescaped-entities */

import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <>
        <div className="bg-gray-50 py-16 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-sky-600 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to <span className="font-bold text-green-500">Work Wave</span>, the ultimate platform connecting skilled professionals with businesses. 
          Whether you're a freelancer seeking opportunities or a company in need of top-tier talent, we provide a seamless, secure, and efficient hiring experience.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Mission */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-sky-600 mb-3">Our Mission</h3>
          <p className="text-gray-600">
          We believe that finding the right job—or the right talent—shouldn't be a matter of luck. Our mission is to empower professionals and businesses to build successful futures through meaningful work relationships.
          </p>
        </div>

        {/* What We Offer */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-sky-600 mb-3">What We Offer</h3>
          <ul className="text-gray-600 space-y-2">
            <li>✅ Wide range of job categories</li>
            <li>✅ Secure and timely payments</li>
            <li>✅ Seamless communication & collaboration</li>
            <li>✅ Smart job matching technology</li>
          </ul>
        </div>
      </div>

      {/* Commitment to Security */}
      <section className="mt-12 mb-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Commitment to Security</h2>
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            Your security is our priority. We employ industry-leading encryption and data protection measures to ensure your information remains confidential.
          </p>
          <p className="text-gray-600">
            Our secure payment system processes millions in transactions monthly, protected by advanced fraud prevention technology.
          </p>
        </div>
      </section>

      {/* Contact Us - Fully Responsive */}
      <section className="max-w-5xl mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 xl:gap-8">
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md ">
            <Mail  className=" w-6 h-6    text-blue-500" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">workwave46@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
            <Phone className="w-6 h-6 text-blue-500" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">01791234674</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
            <MessageCircle className="w-6 h-6 text-blue-500" />
            <div>
              <p className="font-semibold">Live Chat</p>
              <p className="text-gray-600">Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-700">Join Us Today!</h3>
        <p className="text-gray-600 mt-2">
          Take your career or business to the next level with <span className="font-bold text-green-500">Work Wave</span>.
        </p>
        <Link to="/">
        <button className="mt-4 bg-sky-500 text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-sky-600 transition">
          Get Started
        </button></Link>
      </div>
    </div>

      


      </>
    );
};

export default About;