import React from 'react';
export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">About AA Enterprises</h1>
        <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
          <p>Established in 1998 in Mumbai, AA Enterprises is a leading authorized distributor of industrial electrical components.</p>
          <p>We provide 100% genuine products from globally recognized brands like Schneider Electric, Omron, Sibass, and Jigo.</p>
          <p>With thousands of products in stock, we cater to manufacturing, automation, and construction industries across India, ensuring rapid delivery and maximum operational uptime.</p>
        </div>
      </div>
    </div>
  );
}
