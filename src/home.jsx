import React, { useState } from 'react';
import { Link } from 'react-router-dom';



  
// Header Component
const Header = () => (
  
  <header id="home" className="bg-gray-100 py-10">
    <nav className="flex justify-between items-center px-10">
      <div className="nav-left flex items-center">
        <img src="/logo.jpg" alt="startup Logo" className="logo " />
       </div>
      <ul className="nav-links flex space-x-6">
        <li><a href="#home" className="text-blue-600 hover:underline">Home</a></li>
        <li><a href="#services" className="text-blue-600 hover:underline">Services</a></li>
        <li><a href="#benefits" className="text-blue-600 hover:underline">Benefits</a></li>
        <li><a href="#contact" className="text-blue-600 hover:underline">Contact</a></li>
      </ul>
    </nav>
    <div className="text text-center mt-10">
      <h1 className="text-4xl font-bold">Empowering Startup Growth</h1>
      <p className="mt-4 text-lg">
        Providing flexible office spaces, expert mentorship, and business resources to <br /> accelerate your success.
      </p>
      <Link to="/form" >
              <button id='apply'>Apply Now</button>
      </Link>
     </div>
  </header>
);

// Services Component
const Services = () => (
  <section id="services" className="py-16 bg-white">
    <h2 className="text-3xl font-bold text-center mb-10">Services We Offer</h2>
    <section id="card" className="flex justify-center gap-8 flex-wrap">
      {[
        {
          img: '/co working space.webp',
          title: 'Co-working Spaces 🏢',
          description: 'Work in a modern, collaborative office with flexible workstations. Enjoy a creative environment designed for productivity and networking.',
        },
        {
          img: '/mentorship.webp',
          title: 'Mentorship & Networking 🤝',
          description: 'Connect with industry experts and gain valuable business insights. Build strong professional relationships to accelerate your startup growth.',
          delay: 200,
        },
        {
          img: '/workshop.webp',
          title: 'Workshops & Training 🎓',
          description: 'Learn from expert-led sessions on business growth and marketing. Develop new skills and strategies to scale your startup successfully.',
          delay: 400,
        },
      ].map((service, index) => (
        <div
          key={index}
          className="servicescard w-80 bg-gray-50 shadow-lg rounded-lg overflow-hidden"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay={service.delay || 0}
        >
          <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
          <div className="cards__content p-4">
            <p className="cards__title text-xl font-semibold">{service.title}</p>
            <p className="cards__description mt-2 text-gray-600">{service.description}</p>
          </div>
        </div>
      ))}
    </section>
  </section>
);

// Benefits Component
const Benefits = () => {
  const benefits = [
    {
      img: '/gym.webp',
      title: 'Gym facility',
      description: 'Stay fit and energized with a well-equipped gym. Balance work and wellness effortlessly.',
      position: 1,
    },
    {
      img: '/swimming pool.webp',
      title: 'Swimming pool',
      description: 'Refresh and de-stress in a serene poolside setting. The ideal place for corporate relaxation.',
      position: 2,
    },
    {
      img: '/Flexible rental agreements.webp',
      title: 'Flexible rental agreements',
      description: 'Hassle-free rental agreements tailored for professionals. Enjoy convenience and flexibility in your leasing terms.',
      position: 3,
    },
    {
      img: '/games zone.webp',
      title: 'Games zone',
      description: 'Unwind with exciting board games, foosball, and video games. A perfect spot to relax and recharge.',
      position: 4,
    },
    {
      img: '/legal documents.webp',
      title: 'Access to resources',
      description: 'Get expert legal advice, funding support, and industry insights. Empower your business with essential resources.',
      position: 5,
    },
    {
      img: '/office space.webp',
      title: 'Collaborative environment',
      description: 'Work alongside innovative minds in a modern, dynamic office. Foster creativity and teamwork in an inspiring space.',
      position: 6,
    },
  ];

  const sliderImages = [
    '/swimming pool.webp',
    '/space.jpeg',
    '/school.jpeg',
    '/building.jpeg',
    '/playing.jpeg',
    '/club.jpeg',
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Benefits We provide</h2>
      <div className="slider px-10">
        <div className="list flex flex-wrap gap-6 justify-center">
          {benefits.map((benefit) => (
            <div key={benefit.position} className="item" style={{ '--position': benefit.position }}>
              <div className="card bg-white shadow-lg rounded-lg overflow-hidden w-80">
                <img src={benefit.img} alt={benefit.title} className="w-full h-48 object-cover" />
                <div className="content p-4">
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sliders mt-10 px-10">
        <div className="lists flex flex-wrap gap-4 justify-center">
          {sliderImages.map((img, index) => (
            <div key={index} className="items" style={{ '--position': index + 1 }}>
              <div className="card2 bg-white shadow-md rounded-lg overflow-hidden w-40">
                <img src={img} alt={`Slide ${index + 1}`} className="w-full h-32 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Please enter your name.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email.';
    if (!formData.subject) newErrors.subject = 'Subject cannot be empty.';
    if (!formData.message) newErrors.message = 'Message cannot be empty.';
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setResponse('Your message has been sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setResponse(''), 3000);
  };

  return (
    <div id="contact" className="container py-16 px-10 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <div className="max-w-lg mx-auto">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="YourName"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-3 mb-2 border rounded"
          required
        />
        {errors.name && <p className="error text-red-500 text-sm">{errors.name}</p>}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="YourEmail"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 mb-2 border rounded"
          required
        />
        {errors.email && <p className="error text-red-500 text-sm">{errors.email}</p>}
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full p-3 mb-2 border rounded"
          required
        />
        {errors.subject && <p className="error text-red-500 text-sm">{errors.subject}</p>}
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full p-3 mb-2 border rounded"
          required
        />
        {errors.message && <p className="error text-red-500 text-sm">{errors.message}</p>}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
        {response && <p className="response-message text-green-500 mt-4 text-center">{response}</p>}
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => (
  <footer className="footer bg-gray-800 text-white text-center py-6">
    <p>© 2025 STARTUP | All Rights Reserved.</p>
  </footer>
);

// Main Home Component
const Home = () => {
  return (
    <div className="min-h-screen" id='HOME'>
      <Header />
      <Services />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;