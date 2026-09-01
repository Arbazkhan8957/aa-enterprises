const fs = require('fs');

let data = fs.readFileSync('src/data.js', 'utf8');
let productsArrayStr = data.match(/export const products = \[\s*([\s\S]*?)\s*\];/)[1];
let productsArray = eval('[' + productsArrayStr + ']');

const newItems = [
  {
    id: "heavy-duty-connector-base-grey",
    name: "Heavy Duty Connector Base (Panel Mount)",
    brand: "Generic",
    category: "Connectors",
    model: "Panel Mount Base (Grey)",
    description: "A robust grey die-cast aluminum base designed for panel mounting heavy duty multipole connectors. It features four pre-drilled mounting holes and a sturdy single-lever locking mechanism to secure the mating hood against vibration.",
    image: "/images/heavy-duty-connector-base-grey.jpg",
    features: [
      "Material: Heavy-duty metal housing with grey powder coat",
      "Locking: Reliable single-lever cam lock",
      "Mounting: Standard 4-hole flange design",
      "Format: Bottom view detailing insert cavity"
    ],
    specs: [
      { name: "Type", value: "Connector Base" },
      { name: "Mounting", value: "Panel / Surface" },
      { name: "Locking", value: "Single Lever" }
    ],
    voltage: "Depends on Insert",
    current: "Depends on Insert",
    mounting: "Panel Mount"
  },
  {
    id: "jigo-industrial-plug-jg523",
    name: "JIGO Industrial Plug (JG-523)",
    brand: "Jigo",
    category: "Industrial Plugs & Sockets",
    model: "JG-523",
    description: "The JIGO JG-523 is a highly durable 32A industrial plug. Conforming to IEC 60309-2 standards, this 3-pin (2P+E) plug provides IP44 protection, making it ideal for robust power connections in factories and construction sites.",
    image: "/images/jigo-industrial-plug-jg523.jpg",
    features: [
      "Configuration: 2P+E (3 Pin / Round Pins)",
      "Protection: IP44 Splash-proof",
      "Standard: Conforms to IEC 60309-2",
      "Design: Sturdy blue polymer housing"
    ],
    specs: [
      { name: "Model", value: "JG-523" },
      { name: "Rating", value: "32A-6h / 220-250V~" },
      { name: "Frequency", value: "50-60Hz" }
    ],
    voltage: "220-250V AC",
    current: "32A",
    mounting: "Cable Mount (Plug)"
  },
  {
    id: "reco-led-indicators-ad22",
    name: "R-ECO LED Indicators (AD22-22DS)",
    brand: "R-ECO",
    category: "Control Stations",
    model: "AD22-22DS",
    description: "Premium R-ECO AD22-22DS LED panel indicator lights. Engineered for 22mm cutouts, these high-brightness, energy-efficient indicators are available in Yellow, Green, and Red to clearly display machine and circuit status.",
    image: "/images/reco-led-indicators-ad22.jpg",
    features: [
      "Illumination: Long-life, high-brightness LED",
      "Compliance: Meets IEC 60947-5-1 standards",
      "Efficiency: Ultra-low power consumption (<20mA)",
      "Packaging: Available in 10-piece boxes"
    ],
    specs: [
      { name: "Model", value: "AD22-22DS" },
      { name: "Colors", value: "Yellow, Green, Red" },
      { name: "Size", value: "22mm Cutout" }
    ],
    voltage: "AC 220V",
    current: "< 20mA",
    mounting: "22mm Panel Mount"
  },
  {
    id: "led-indicators-ad16-6colors",
    name: "AD16-22DS LED Indicators (6 Colors)",
    brand: "Generic",
    category: "Control Stations",
    model: "AD16-22DS",
    description: "A versatile range of AD16-22DS LED indicator lights suitable for all standard 22mm panel cutouts. This set showcases the vibrant color availability: Green, White, Orange, Blue, Yellow, and Red, providing visual coding for any control panel.",
    image: "/images/led-indicators-ad16-6colors.jpg",
    features: [
      "Illumination: High visibility LED technology",
      "Colors: 6 distinct colors for complex panel coding",
      "Lens: Concentric circle ribbed lens for maximum light dispersion",
      "Standard: Universal 22mm threaded body"
    ],
    specs: [
      { name: "Model", value: "AD16-22DS" },
      { name: "Size", value: "22mm Cutout" },
      { name: "Type", value: "Pilot Light" }
    ],
    voltage: "AC 220V",
    current: "< 20mA",
    mounting: "22mm Panel Mount"
  },
  {
    id: "led-digital-voltmeter-ad22",
    name: "AD22 LED Digital Panel Voltmeters",
    brand: "Generic",
    category: "Test & Measurement",
    model: "AD22-22V",
    description: "Compact AD22 series digital panel voltmeters designed to fit standard 22mm push-button cutouts. These mini meters feature a bright, easy-to-read 3-digit LED display and are available in Blue, Yellow, Red, and Green housings.",
    image: "/images/led-digital-voltmeter-ad22.jpg",
    features: [
      "Display: 3-digit bright LED voltage readout",
      "Format: Fits standard 22mm control panel holes",
      "Colors: Available in Blue, Yellow, Red, Green for phase coding",
      "Application: Direct voltage monitoring on distribution boards"
    ],
    specs: [
      { name: "Type", value: "Digital Voltmeter" },
      { name: "Size", value: "22mm Cutout" },
      { name: "Display", value: "LED Digital" }
    ],
    voltage: "Measurement Range Varies",
    current: "Low Draw",
    mounting: "22mm Panel Mount"
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
console.log('Successfully added the 5 new items!');
