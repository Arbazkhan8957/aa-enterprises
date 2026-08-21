const fs = require('fs');

const dataPath = 'src/data.js';
let data = fs.readFileSync(dataPath, 'utf8');

const strokeBrand = `
  {
    name: "Stroke",
    logo: "STROKE",
  },
`;

const strokeCategory = `
  {
    name: "Stroke Products",
    image: "/images/stroke_cable_reel.jpg",
    description: "Stroke Heavy Duty Cable Reels, Cooling Fans, Push Buttons, and MC4 Connectors.",
  },
`;

const strokeProducts = `
  {
    id: "stroke_cable_reel_1",
    name: "Stroke Heavy Duty Cable Reel",
    brand: "Stroke",
    category: "Stroke Products",
    model: "Cable Reel Heavy Duty",
    description: "Rugged and durable Heavy Duty Cable Reel by Stroke. Ideal for industrial, commercial, and construction environments needing safe and long-range power distribution.",
    image: "/images/stroke_cable_reel.jpg",
    features: [
      "Sturdy Construction: Built to withstand tough industrial conditions.",
      "Multiple Sockets: Equipped with various plug points for multiple devices.",
      "Built-in Protection: Includes MCB/safety mechanisms.",
      "Ergonomic Handle: Easy winding and transport."
    ],
    specs: [
      { name: "Brand", value: "Stroke" },
      { name: "Type", value: "Heavy Duty Cable Reel" }
    ]
  },
  {
    id: "stroke_push_buttons_1",
    name: "Stroke Control Push Buttons (XB2 Series)",
    brand: "Stroke",
    category: "Stroke Products",
    model: "XB2-BC31",
    description: "Stroke industrial push buttons offering highly reliable manual control for automation panels, motor starters, and heavy machinery.",
    image: "/images/stroke_push_buttons.jpg",
    features: [
      "High Durability: Rated for millions of mechanical cycles.",
      "Clear Colors: Available in Red, Green, Yellow, Blue, Black, White.",
      "Easy Mounting: Standard 22mm panel cutout."
    ],
    specs: [
      { name: "Model", value: "XB2 Series" },
      { name: "Type", value: "Push Button" }
    ]
  },
  {
    id: "stroke_cooling_fan_1",
    name: "Stroke Cooling Fan 12038ASL",
    brand: "Stroke",
    category: "Stroke Products",
    model: "12038ASL",
    description: "High-performance Stroke Cooling Fan designed for continuous thermal management in electrical enclosures and control panels.",
    image: "/images/stroke_cooling_fan.jpg",
    features: [
      "Voltage: 220V AC",
      "Current: 0.14A",
      "Power: 25W",
      "Speed: 2200 RPM",
      "Quality Control Approved."
    ],
    specs: [
      { name: "Model", value: "12038ASL" },
      { name: "Voltage", value: "220V AC" }
    ]
  },
  {
    id: "stroke_mc4_connectors",
    name: "Stroke MC4 1000V Connectors",
    brand: "Stroke",
    category: "Stroke Products",
    model: "MC4 1000V",
    description: "Professional grade Stroke MC4 solar connectors designed for safe and weatherproof DC connections in solar PV arrays.",
    image: "/images/stroke_mc4.jpg",
    features: [
      "Voltage Rating: 1000V DC.",
      "Protection: IP67 Weatherproof.",
      "High Conductivity: Silver-plated copper terminals.",
      "UV Resistant housing for outdoor durability."
    ],
    specs: [
      { name: "Model", value: "MC4" },
      { name: "Voltage", value: "1000V" }
    ]
  },
  {
    id: "stroke_multi_plug",
    name: "Stroke Industrial IP67 Multi-Plug Splitter",
    brand: "Stroke",
    category: "Stroke Products",
    model: "16A-6h/220-250V",
    description: "Stroke heavy-duty multi-plug splitter with IP67 rating, offering secure and waterproof power distribution for demanding outdoor or wet environments.",
    image: "/images/stroke_multi_plug.jpg",
    features: [
      "Type: Weather Proof Plug",
      "Rating: 16A, 220-250V",
      "Protection: IP67 Waterproof & Dustproof",
      "Conformity: IEC309-2 Standard"
    ],
    specs: [
      { name: "Current", value: "16A" },
      { name: "IP Rating", value: "IP67" }
    ]
  },
`;

// Insert brand
data = data.replace('export const brands = [', 'export const brands = [' + strokeBrand);

// Insert category
data = data.replace('export const categories = [', 'export const categories = [' + strokeCategory);

// Insert products
data = data.replace('export const products = [', 'export const products = [' + strokeProducts);

fs.writeFileSync(dataPath, data);
console.log('Successfully updated data.js');
