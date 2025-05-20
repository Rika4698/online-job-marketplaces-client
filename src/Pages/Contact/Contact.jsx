import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-gray-50 pt-1 pb-16 px-6 lg:px-9">
            <section className="max-w-5xl mx-auto mt-12">
        <h2 className=" font-bold mb-6 text-center text-4xl text-emerald-500">Contact Us</h2>
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
    );
};

export default Contact;