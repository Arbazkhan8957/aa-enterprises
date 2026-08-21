import React from 'react';
export default function Quote() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Request a Bulk Quote</h1>
        <p className="text-slate-600 mb-8">Need components in large quantities? Fill out the form below and we'll get back to you with our best B2B pricing.</p>
        <form className="space-y-4">
             <input type="text" placeholder="Company Name" className="w-full p-3 border border-slate-300 rounded" />
             <input type="text" placeholder="Contact Person" className="w-full p-3 border border-slate-300 rounded" />
             <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-slate-300 rounded" />
             <textarea placeholder="List required parts and quantities..." rows="6" className="w-full p-3 border border-slate-300 rounded"></textarea>
             <button type="button" className="bg-orange-500 text-white font-bold py-3 px-6 rounded w-full">Submit Request</button>
        </form>
      </div>
    </div>
  );
}
