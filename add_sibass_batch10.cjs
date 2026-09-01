const fs = require('fs');
let data = fs.readFileSync('src/data.js', 'utf8');

let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "sibass-timer-ahc15a",
    name: "SIBASS Programmable Time Switch (AHC15A)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "AHC15A",
    description: "The SIBASS AHC15A is an advanced digital programmable time switch. Designed for DIN rail mounting, it offers precise weekly programming for automated control of lighting, heating, and industrial machinery, saving energy and improving operational efficiency.",
    image: "/images/sibass-timer-ahc15a.jpg",
    features: [
      "Programming: 24-hour / 7-day digital timer with LCD display",
      "Memory Backup: Built-in battery prevents data loss during power outages",
      "Installation: Standard 35mm DIN rail mount",
      "Control: Precise minute-by-minute automated switching"
    ],
    specs: [
      { name: "Model", value: "AHC15A" },
      { name: "Type", value: "Digital Time Switch" },
      { name: "Mount", value: "DIN Rail" }
    ],
    voltage: "220V AC",
    current: "16A Standard",
    mounting: "DIN Rail"
  },
  {
    id: "sibass-float-switch-open",
    name: "SIBASS Liquid Level Float Switch",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-Float",
    description: "The SIBASS Liquid Level Float Switch is an essential automation component for water pumps and tanks. This durable blue and yellow float regulates liquid levels automatically, preventing pump dry-running or tank overflow.",
    image: "/images/sibass-float-switch-open.jpg",
    features: [
      "Mechanism: Gravity-activated microswitch for reliable level detection",
      "Cable: Includes heavy-duty waterproof Neoprene cable",
      "Counterweight: Adjustable yellow counterweight for precise depth control",
      "Material: Non-toxic, corrosion-resistant polypropylene casing"
    ],
    specs: [
      { name: "Type", value: "Level Controller" },
      { name: "Color", value: "Blue/Yellow" },
      { name: "Application", value: "Water Tanks / Pumps" }
    ],
    voltage: "250V AC",
    current: "15A (8A Inductive)",
    mounting: "Suspended"
  },
  {
    id: "sibass-float-switch-packaged",
    name: "SIBASS Float Switch (Retail Packaging)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-Float-Pack",
    description: "A view of the SIBASS Float Switch secured in its factory-sealed protective plastic and retail box. Ensures the microswitch and heavy-duty cable arrive in pristine, factory-calibrated condition for immediate deployment in plumbing and industrial fluid systems.",
    image: "/images/sibass-float-switch-packaged.jpg",
    features: [
      "Packaging: Factory sealed to protect against transit moisture",
      "Components: Pre-wired and ready for direct pump integration",
      "Durability: Rated for up to 1 bar of water pressure",
      "Temperature: Operates safely in liquids up to 70°C"
    ],
    specs: [
      { name: "Format", value: "Retail Packaged" },
      { name: "Cable", value: "Submersible Rated" },
      { name: "Max Temp", value: "70°C" }
    ],
    voltage: "250V AC",
    current: "15A",
    mounting: "Suspended"
  },
  {
    id: "sibass-pendant-10way-se",
    name: "SIBASS Heavy Duty Pendant Station (10-Way SE Series)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE-10 Series",
    description: "The SIBASS SE-10 Series pendant provides extensive control over complex lifting machinery. It features 8 standard directional arrows, plus dedicated Green (Start) and Red (Stop) buttons, allowing for comprehensive multi-axis crane management.",
    image: "/images/sibass-pendant-10way-se.jpg",
    features: [
      "Configuration: 10 Buttons (8 Directional, Start, Stop)",
      "Safety: Integrated bottom suspension ring to prevent cable strain",
      "Housing: High-visibility yellow shock-proof casing",
      "Protection: Enclosed design blocks industrial dust and moisture"
    ],
    specs: [
      { name: "Model", value: "SE-10 Series" },
      { name: "Buttons", value: "10-Way" },
      { name: "Suspension", value: "Steel Ring" }
    ],
    voltage: "250V-500V AC",
    current: "Standard Load",
    mounting: "Handheld Wired"
  },
  {
    id: "sibass-pendant-10way-box",
    name: "SIBASS Pendant Station (10-Way Box View)",
    brand: "Sibass",
    category: "Sibass Electricals",
    model: "SE Series Packaging",
    description: "A full-length profile of the 10-way SIBASS SE series pendant station next to its official retail packaging. The box indicates the wide availability of this series, ranging from compact 2-way models up to massive 12-way control stations.",
    image: "/images/sibass-pendant-10way-box.jpg",
    features: [
      "Series Range: Available in configurations from 2 to 12 buttons",
      "Design: Elongated, ergonomic grip for prolonged operator use",
      "Strain Relief: Includes heavy-duty tapered rubber cable boot",
      "Switching: High-quality snap-action internal contacts"
    ],
    specs: [
      { name: "Format", value: "Retail Box Presentation" },
      { name: "Range", value: "2 to 12 Way" },
      { name: "Color", value: "Yellow" }
    ],
    voltage: "Universal",
    current: "Standard Load",
    mounting: "Handheld Wired"
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
console.log('Successfully added 5 new SIBASS items!');
