const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "stroke-crane-pendant-orange",
    name: "Stroke Crane Pendant Control (Wired)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "8-Button Pendant",
    description: "A heavy-duty wired pendant control station designed for overhead cranes and hoists. Features 8 highly responsive mechanical push buttons (including directional and start/stop controls) housed in an impact-resistant, high-visibility orange enclosure.",
    image: "/images/stroke-crane-pendant-orange.jpg",
    features: [
      "Buttons: 8 Push Buttons (North, South, East, West, Up, Down, Start, Stop)",
      "Enclosure: Impact and crush-resistant ABS plastic",
      "Protection: IP65 Dust and Water resistant",
      "Strain Relief: Heavy-duty cable gland for wire protection"
    ],
    specs: [
      { name: "Type", value: "Wired Pendant" },
      { name: "Buttons", value: "8-Way Control" },
      { name: "IP Rating", value: "IP65" }
    ],
    voltage: "Up to 500V AC",
    current: "5A Contacts",
    mounting: "Handheld"
  },
  {
    id: "enertech-crane-remote",
    name: "ENERTECH Wireless Crane Remote Control",
    brand: "Enertech",
    category: "Stroke Electricals",
    model: "Wireless 8-Button",
    description: "The ENERTECH Wireless Crane Remote provides safe, long-distance control for industrial hoists and overhead cranes. It features a robust blue housing, 8 directional/control buttons, a dedicated emergency stop, and a high-gain antenna for reliable signal transmission in noisy environments.",
    image: "/images/enertech-crane-remote.jpg",
    features: [
      "Connectivity: Reliable industrial RF wireless transmission",
      "Controls: 8 action buttons + E-Stop",
      "Range: Long-range operation for operator safety",
      "Enclosure: Ergonomic, shock-resistant blue polymer housing"
    ],
    specs: [
      { name: "Type", value: "Wireless Remote" },
      { name: "Buttons", value: "8 + E-Stop" },
      { name: "Brand", value: "Enertech" }
    ],
    voltage: "Battery Operated",
    current: "Low Power RF",
    mounting: "Handheld / Lanyard"
  },
  {
    id: "sibass-cable-reel-orange",
    name: "SIBASS SE-8130 Cable Reel (Orange)",
    brand: "Sibass",
    category: "Stroke Electricals",
    model: "SE-8130",
    description: "The SIBASS SE-8130 is a robust metal cable extension reel designed for demanding workshops. It features 4 universal sockets and a built-in Miniature Circuit Breaker (MCB) for overload and short-circuit protection.",
    image: "/images/sibass-cable-reel-orange.jpg",
    features: [
      "Sockets: 4 x Universal multi-pin sockets",
      "Safety: Integrated MCB protection switch",
      "Frame: Sturdy metal stand with winding handle",
      "Capacity: Designed for long heavy-duty cable extensions"
    ],
    specs: [
      { name: "Model", value: "SE-8130" },
      { name: "Sockets", value: "4 Universal" },
      { name: "Protection", value: "MCB Built-in" }
    ],
    voltage: "240V AC",
    current: "16A MAX",
    mounting: "Portable Reel"
  },
  {
    id: "stroke-cable-reel-red",
    name: "STROKE Heavy Duty Cable Reel (Red)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "Red 3-Socket",
    description: "A premium STROKE heavy-duty cable reel constructed with a strong steel stand. Zinc-plated for extra rust resistance, it features 3 sockets and complies with British Standards, ensuring safe and flexible cable management on site.",
    image: "/images/stroke-cable-reel-red.jpg",
    features: [
      "Construction: Sturdy red drum with zinc-plated steel stand",
      "Sockets: 3 x Output sockets",
      "Standards: Compliance with British Standards",
      "Design: Easy-to-wind handle for flexible cable"
    ],
    specs: [
      { name: "Type", value: "Extension Reel" },
      { name: "Sockets", value: "3 Sockets" },
      { name: "Brand", value: "Stroke" }
    ],
    voltage: "250V AC",
    current: "16 Amp",
    mounting: "Portable Reel"
  },
  {
    id: "stroke-cable-reel-black",
    name: "STROKE Heavy Duty Cable Reel (Black)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "Black 4-Socket",
    description: "This black variant of the STROKE heavy-duty cable reel offers 4 universal sockets and a central power indicator. Built with a rugged, high-capacity drum and a strong tubular frame, it is perfect for extensive portable power needs.",
    image: "/images/stroke-cable-reel-black.jpg",
    features: [
      "Sockets: 4 x Universal output sockets",
      "Indicator: Central neon power indicator light",
      "Frame: Heavy-duty tubular steel stand",
      "Capacity: High volume drum for long extension cables"
    ],
    specs: [
      { name: "Type", value: "Extension Reel" },
      { name: "Sockets", value: "4 Sockets" },
      { name: "Brand", value: "Stroke" }
    ],
    voltage: "250V AC",
    current: "16 Amp",
    mounting: "Portable Reel"
  },
  {
    id: "stroke-relay-sockets-retail",
    name: "Stroke Relay Socket Kit (PYF14A/PTF08A)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "Retail Pack",
    description: "The complete retail package of Stroke's industrial relay sockets. This kit showcases both the 14-pin (PYF14A) and 8-pin (PTF08A) DIN-rail mountable sockets, ideal for comprehensive automation panel builds.",
    image: "/images/stroke-relay-sockets.jpg",
    features: [
      "Packaging: Official STROKE retail box",
      "Variants Included: 8-Pin and 14-Pin configurations",
      "Mounting: 35mm DIN rail compatible",
      "Terminals: Secure screw clamps"
    ],
    specs: [
      { name: "Type", value: "Relay Base" },
      { name: "Pins", value: "8/14 Pin" },
      { name: "Format", value: "Retail Kit" }
    ],
    voltage: "250V AC",
    current: "10A",
    mounting: "DIN Rail"
  },
  {
    id: "stroke-fan-12038asl-retail",
    name: "Stroke 12038ASL AC Fan (Retail Box)",
    brand: "Stroke",
    category: "Stroke Electricals",
    model: "12038ASL Boxed",
    description: "The Stroke 12038ASL high-efficiency 220V AC cooling fan, presented in its official retail packaging. Trusted for 100% reliable service, it spins at 2200 RPM to deliver maximum airflow to your control cabinets.",
    image: "/images/stroke-fan-12038asl.jpg",
    features: [
      "Packaging: Authentic STROKE trusted service box",
      "Size: 120x120x38mm",
      "Speed: 2200 RPM",
      "Power: 25W efficient AC motor"
    ],
    specs: [
      { name: "Model", value: "12038ASL" },
      { name: "Power", value: "220V AC / 25W" },
      { name: "Format", value: "Retail Box" }
    ],
    voltage: "220V AC",
    current: "0.14A",
    mounting: "Panel/Chassis"
  }
];

newItems.forEach(nf => {
  if (!productsArray.find(p => p.id === nf.id)) {
    productsArray.push(nf);
  }
});

const newData = `export const products = ${JSON.stringify(productsArray, null, 2)};\n`;
data = data.replace(/export const products = \[\s*([\s\S]*?)\s*\];/, newData.trim());

fs.writeFileSync('src/data.js', data);
console.log('Successfully added 7 new items!');
