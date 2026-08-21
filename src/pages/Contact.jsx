import React from 'react';
export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-slate-600 mb-8">Reach out to our sales team for bulk inquiries, technical support, or partnership opportunities.</p>
          <div className="space-y-4 text-slate-700">
            <p><strong>Address:</strong> Lohar Chawl, Mumbai, Maharashtra</p>
            <p><strong>Phone:</strong> +91 9326183962 / +91 9819495892</p>
            <p><strong>Email:</strong> sales@aaenterprises.in</p>
          </div>
        </div>
        <div>
          <form className="space-y-4">
             <input type="text" placeholder="Your Name" className="w-full p-3 border border-slate-300 rounded" />
             <input type="email" placeholder="Your Email" className="w-full p-3 border border-slate-300 rounded" />
             <textarea placeholder="Message" rows="4" className="w-full p-3 border border-slate-300 rounded"></textarea>
             <button type="button" className="bg-blue-600 text-white font-bold py-3 px-6 rounded w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
