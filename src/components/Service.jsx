import { useState } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const services = [
        {
            id: 1,
            title: 'Personal Styling',
            description: 'One-on-one fashion consultation with expert stylists',
            icon: '👔'
        },
        {
            id: 2,
            title: 'Premium Alterations',
            description: 'Expert tailoring for perfect fit',
            icon: '✂️'
        },
        {
            id: 3,
            title: 'Express Delivery',
            description: 'Same-day and scheduled delivery',
            icon: '🚚'
        },
        {
            id: 4,
            title: 'VIP Support',
            description: '24/7 dedicated customer service',
            icon: '🛡️'
        }
    ];

    const contactInfo = [
        { type: 'Customer Support', email: 'support@khmerstyle.com', hours: '24/7' },
        { type: 'Styling Bookings', email: 'bookings@khmerstyle.com', hours: 'Mon-Fri, 9AM-6PM' },
        { type: 'Business Inquiries', email: 'partners@khmerstyle.com', hours: 'Mon-Fri, 9AM-5PM' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-gray-50 to-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Premium Services
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Experience luxury service with our dedicated team of fashion experts
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Select a service to get started with our premium offerings
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {services.map((service) => (
                        <div 
                            key={service.id}
                            onClick={() => setSelectedService(service.id)}
                            className={`bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                                selectedService === service.id 
                                    ? 'border-gray-900 shadow-lg' 
                                    : 'border-gray-100 hover:border-gray-300'
                            }`}
                        >
                            <div className="text-3xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl border border-gray-200 p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Service</h3>
                        
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Service Type</label>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900">
                                    <option value="">Select a service</option>
                                    {services.map(service => (
                                        <option key={service.id} value={service.id}>{service.title}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea 
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                                    placeholder="Tell us about your request..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Information</h2>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 text-center">
                                    <h4 className="font-bold text-gray-900 mb-2">{info.type}</h4>
                                    <p className="text-gray-700 mb-1">{info.email}</p>
                                    <p className="text-gray-500 text-sm">{info.hours}</p>
                                </div>
                            ))}
                        </div>

                        {/* Support Hours */}
                        <div className="mt-12 bg-white rounded-xl p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Support Hours</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between border-b pb-3">
                                    <span className="text-gray-700">Monday - Friday</span>
                                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between border-b pb-3">
                                    <span className="text-gray-700">Saturday</span>
                                    <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Sunday</span>
                                    <span className="font-medium text-gray-900">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;