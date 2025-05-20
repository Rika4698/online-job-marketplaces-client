/* eslint-disable react/no-unescaped-entities */


const About = () => {
  return (
    <>
      <div className="bg-gray-50 py-12 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className=" font-bold text-4xl text-emerald-500 mb-4">About Us</h2>
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


      </div>




    </>
  );
};

export default About;