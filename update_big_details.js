import fs from 'fs';
import { brands, categories, products } from './src/data.js';

function generateBigFeatures(p) {
  let f = [];
  
  if (p.category === 'Schneider LC1E Contactors') {
    f = [
      `Series: Schneider EasyPact TVS (Essential motor control).`,
      `Model: ${p.model} - High-value AC contactor optimized for standard industrial applications.`,
      `Coil Voltages Available: 24V, 48V, 110V, 220V, 380V, 415V, and 440V AC options.`,
      `Operational Current (AC-3): ${p.current} continuous rating for driving motors and inductive loads.`,
      `Pole Configuration: ${p.poles} with ${p.mainContact} ensuring robust power distribution.`,
      `Auxiliary Contacts: Built-in ${p.auxiliary} for direct integration with control signaling logic.`,
      `Insulation Voltage (Ui): Rated up to 690V, providing excellent electrical safety margins.`,
      `Mounting & Installation: ${p.mounting} compatible for fast integration into automation panels.`,
      `Mechanical Durability: Tested for millions of operating cycles under standard load conditions.`,
      `Certifications: Conforms strictly to IEC 60947-4-1 and major global electrical standards.`
    ];
  } else if (p.category === 'Schneider LC1D Contactors') {
    f = [
      `Series: Schneider TeSys D / TeSys Deca (Premium motor control).`,
      `Model: ${p.model} - Industry-leading AC contactor for demanding and rigorous applications.`,
      `Coil Voltages Available: 24V, 48V, 110V, 220V, 380V, 415V, and 440V (AC and DC options available).`,
      `Current Capacity (AC-3/AC-4): ${p.current} rating for heavy-duty starting and plugging/inching operations.`,
      `Power Poles: ${p.poles} (${p.mainContact}) featuring EverLink® power connections for creep-free tight wiring (on larger models).`,
      `Integrated Auxiliaries: Comes standard with ${p.auxiliary} (1 NO + 1 NC) highly reliable bifurcated contacts.`,
      `Safety Features: IP2X finger-safe terminals and high short-circuit fault level resistance.`,
      `Mounting: ${p.mounting} or direct screw mounting, offering extreme stability in vibrating environments.`,
      `Environmental Tolerance: Operates reliably in extreme temperatures with advanced flame-retardant plastics.`,
      `Global Compliance: UL, CSA, CCC, EAC, and marine certified for worldwide deployment.`
    ];
  } else if (p.category === 'Schneider LRE Overload Relays') {
    f = [
      `Series: Schneider EasyPact TVS LRE (Thermal Overload Protection).`,
      `Model: ${p.model} - Reliable bimetallic thermal overload relay for AC motors.`,
      `Current Setting Range: Fully adjustable thermal setting for ${p.current} motor protection.`,
      `Tripping Class: Class 10A tripping characteristic ensuring rapid response to phase loss and overloads.`,
      `Compatibility: Designed for seamless direct mounting beneath Schneider LC1E series contactors.`,
      `Reset Mechanism: Selectable Manual and Automatic reset modes for flexible operational recovery.`,
      `Signaling: Integrated Trip indicator and test function for immediate fault visibility and maintenance.`,
      `Auxiliary Contacts: Includes independent 1 NO + 1 NC contacts for fault signaling and contactor coil trip.`,
      `Temperature Compensation: Ambient temperature compensated for accurate tripping regardless of panel heat.`,
      `Safety & Standards: IEC 60947-4-1 compliant, providing essential and cost-effective motor protection.`
    ];
  } else if (p.category === 'Schneider LRD Overload Relays') {
    f = [
      `Series: Schneider TeSys Deca LRD (Premium Thermal Overload Protection).`,
      `Model: ${p.model} - Advanced bi-metal thermal overload relay offering superior motor safeguards.`,
      `Protection Range: Precision adjustable dial for ${p.current} operational current tuning.`,
      `Tripping Class: Class 10A standard (with options up to Class 20) for optimal phase imbalance detection.`,
      `Integration: Mounts flawlessly via direct terminal links to Schneider TeSys D (LC1D) contactors.`,
      `Control Modes: Features Blue (Reset), Red (Stop/Test) buttons with clear mechanical trip flag indicator.`,
      `Wiring Technology: Equipped with EverLink® terminals (on larger sizes) ensuring permanent cable pressure.`,
      `Signaling: 1 NO + 1 NC isolated auxiliary contacts for advanced control system integration (PLC fault reporting).`,
      `Environmental Resilience: High immunity to micro-interruptions and extreme ambient temperatures.`,
      `Certifications: Globally recognized safety standards including ATEX compliance for specific models.`
    ];
  } else if (p.category === 'Schneider Control Relays (LADN)') {
    f = [
      `Series: Schneider TeSys LADN (Auxiliary Contact Blocks).`,
      `Model: ${p.model} - Instantaneous auxiliary contact block for contactor capability expansion.`,
      `Contact Configuration: Delivers exactly ${p.mainContact} or ${p.auxiliary} instantaneous contacts.`,
      `Mounting: Front-mounted snap-on design for tool-less and rapid installation on LC1D contactors.`,
      `Operational Voltage: Rated for switching control circuits across 24V, 110V, 220V, and up to 690V.`,
      `Reliability: Mechanically linked contacts (mirror contacts) ensuring fail-safe logic circuit operation.`,
      `Minimum Switching Capacity: Extremely reliable contact fidelity even at 17V / 5mA for PLC inputs.`,
      `Durability: Rated for up to 30 million mechanical operating cycles, matching the host contactor.`,
      `Compact Design: Adds minimal depth to the contactor assembly, preserving panel space.`,
      `Eco-Friendly: RoHS compliant and manufactured adhering to Schneider's Green Premium standards.`
    ];
  } else if (p.category === 'Schneider Harmony Push Buttons') {
    f = [
      `Series: Schneider Harmony XB4 / XB5 (Control and Signaling Units).`,
      `Model: ${p.model} - Heavy-duty 22mm pilot device for intuitive human-machine interface.`,
      `Actuator Type: Specifically designed as a robust ${p.name.includes('Mushroom') ? 'Emergency Stop / Mushroom Head' : 'Flush/Extended Push Button'}.`,
      `Mounting size: Standard ${p.mounting} cutout for universal control panel compatibility.`,
      `Contact Blocks: Pre-assembled with high-reliability ${p.auxiliary} slow-break contacts.`,
      `Ingress Protection: IP66, IP67, and IP69K rated for complete protection against high-pressure washdowns.`,
      `Vibration Resistance: Shake-proof terminal screws ensuring secure connections in heavy machinery.`,
      `Modular Architecture: Easy substitution of colored caps, contact blocks, and light modules.`,
      `Mechanical Life: Engineered for up to 10,000,000 actuations without structural failure.`,
      `Global Compliance: Meets EN/IEC 60947-5-1, UL 508, and CSA C22.2 No 14 strict safety directives.`
    ];
  } else if (p.category === 'Sibass AC Contactors') {
    f = [
      `Series: Sibass Electric SE1D (Industrial Motor Control).`,
      `Model: ${p.model} - High-efficiency AC contactor offering excellent cost-to-performance ratio.`,
      `Coil Voltages Available: 24V, 48V, 110V, 220V, 380V, 415V, and 440V AC options.`,
      `Load Capacity (AC-3): ${p.current} continuous operation rating for switching industrial loads.`,
      `Main Power Poles: ${p.poles} configuration (${p.mainContact}) utilizing high-conductivity silver alloy contacts.`,
      `Auxiliary Circuitry: Integrated ${p.auxiliary} contacts for standard automation control loops.`,
      `Arc Extinguishing: Advanced internal arc chute design significantly reduces contact wear and tear.`,
      `Installation: ${p.mounting} standard design allows for quick snap-on panel integration.`,
      `Application: Specifically tuned for ${p.application}, pumps, fans, and resistive heating.`,
      `Durability: Robust thermoset plastic housing resists cracking and high panel temperatures.`
    ];
  } else if (p.category === 'Sibass LED Indicators' && p.model.startsWith('LED')) {
    const colorMatch = p.name.match(/(Red|Green|Yellow|Blue|White)/i);
    const color = colorMatch ? colorMatch[1] : 'Status';
    f = [
      `Series: Sibass Industrial Panel Indicators.`,
      `Model: ${p.model} - Super-bright LED pilot light for immediate visual status confirmation.`,
      `Operating Voltage: Wide-range ${p.voltage} acceptance for both AC and DC control circuits.`,
      `Illumination Output: Intense ${color} LED chip providing exceptional visibility from long distances.`,
      `Mounting Hole Diameter: ${p.mounting} standard cutout size.`,
      `Energy Efficiency: Ultra-low power consumption (typically <20mA) reducing panel thermal output.`,
      `Lifespan: Rated for over 30,000 continuous hours of operation without dimming.`,
      `Environmental Protection: IP65 rated front face, sealing the panel against dust and liquid ingress.`,
      `Wiring: High-torque screw terminals ensuring secure, vibration-proof electrical connections.`,
      `Application: Essential for ${p.application} (e.g., Power On, Fault, Running status).`
    ];
  } else if (p.category === 'Sibass LED Indicators' && p.model.startsWith('BUZ')) {
    f = [
      `Series: Sibass Industrial Audible Alarms.`,
      `Model: ${p.model} - Electronic panel buzzer for critical fault and warning alerts.`,
      `Sound Output: High-decibel continuous piercing tone cuts through loud factory ambient noise.`,
      `Operating Voltage: ${p.voltage} compatible with standard automation power supplies.`,
      `Mounting Hole Diameter: ${p.mounting} standard cutout size.`,
      `Current Draw: Highly efficient piezoelectric acoustic element requiring minimal mA.`,
      `Durability: Solid-state construction with no moving parts ensures a virtually unlimited lifespan.`,
      `Environmental Protection: Enclosed front grille protects acoustic element from dust and debris.`,
      `Installation: Simple secure locking nut mechanism for fast panel-door mounting.`,
      `Application: Crucial for ${p.application}, safety warnings, and machine error states.`
    ];
  } else if (p.category === 'Sibass LED Indicators' && p.model.startsWith('V-IND')) {
    const colorMatch = p.name.match(/(Red|Green|Yellow|Blue|White)/i);
    const color = colorMatch ? colorMatch[1] : 'Digital';
    f = [
      `Series: Sibass Digital Panel Meters (Voltmeter).`,
      `Model: ${p.model} - Compact digital voltage indicator replacing bulky analog meters.`,
      `Measurement Range: Accurately reads ${p.voltage} in real-time.`,
      `Display Type: High-contrast ${color} 3-digit LED segment display for crystal-clear readability.`,
      `Mounting Hole Diameter: ${p.mounting} standard push-button cutout size.`,
      `Accuracy: ±1% precision internal sampling for reliable circuit voltage monitoring.`,
      `Form Factor: Ultra-compact cylindrical body saves immense space behind the panel door.`,
      `Application: Ideal for ${p.application}, incoming mains monitoring, and phase status.`,
      `Durability: Shock-resistant housing withstands vibrations from heavy machinery.`,
      `Wiring: Direct two-wire connection (L and N) allows for instantaneous operational setup.`
    ];
  } else if (p.category === 'Sibass LED Indicators' && p.model.startsWith('VA-IND')) {
    const colorMatch = p.name.match(/(Red|Green|Yellow|Blue|White)/i);
    const color = colorMatch ? colorMatch[1] : 'Digital';
    f = [
      `Series: Sibass Dual Digital Panel Meters (Volt + Amp).`,
      `Model: ${p.model} - Revolutionary 2-in-1 digital meter for simultaneous power monitoring.`,
      `Voltage Measurement: ${p.voltage} real-time accurate digital tracking.`,
      `Current Measurement: ${p.current} tracking via the highly accurate included Current Transformer (CT).`,
      `Display Type: Stacked dual ${color} LED segments allowing instant visualization of both V and A.`,
      `Mounting Hole Diameter: Fits into a standard ${p.mounting} cutout, saving immense panel space.`,
      `Isolation: The CT ensures complete galvanic isolation between the measured load and the meter circuit.`,
      `Application: Ultimate solution for ${p.application}, motor load tracking, and generator panels.`,
      `Installation: Simply pass the load wire through the CT ring and connect power to the meter terminals.`,
      `Efficiency: Replaces two traditional square analog meters, reducing panel cutting time and wiring complexity.`
    ];
  } else if (p.category === 'Jigo Wiring Accessories') {
    f = [
      `Series: Jigo Professional Electrical Accessories.`,
      `Model: ${p.model} - Engineered for extremely secure and reliable wire termination/management.`,
      `Rating: Suitable for ${p.voltage} / ${p.current} depending on cable application.`,
      `Material Composition: Manufactured from high-purity electrolytic copper, nylon, or industrial polymers.`,
      `Conductivity: Optimized surface area ensures ultra-low contact resistance and prevents overheating.`,
      `Mechanical Strength: High tensile strength resists pull-out forces and mechanical vibrations.`,
      `Environmental Resistance: Treated to resist corrosion, oxidation, and chemical degradation.`,
      `Application: Essential for ${p.application}, control panels, and heavy power distribution.`,
      `Installation: ${p.mounting} compatible for fast, standardized crimping or routing.`,
      `Compliance: Conforms to CE, RoHS, and international wiring regulation standards.`
    ];
  } else if (p.category === 'Jigo Tower Lights') {
    f = [
      `Series: Jigo Industrial Warning Tower Lights (Andon Lights).`,
      `Model: ${p.model} - High-visibility multi-stage visual signaling system.`,
      `Operating Voltage: ${p.voltage} compatible with standard PLC outputs.`,
      `Illumination Technology: Ultra-bright LED modules providing distinct 360° visual indication.`,
      `Mounting Type: ${p.mounting} for secure attachment to machine roofs or control desks.`,
      `Application: Crucial for ${p.application}, CNC machines, and assembly line status broadcasting.`,
      `Modularity: Stackable design allows customization of color sequences (Red/Yellow/Green/etc.).`,
      `Durability: High-impact polycarbonate prismatic lenses resist shattering and yellowing over time.`,
      `Environmental Sealing: IP54/IP65 ratings ensuring internal circuits are protected from factory dust.`,
      `Acoustic Option: Integrated high-decibel buzzer (on specific models) for dual-threat visual/audio warning.`
    ];
  } else if (p.category === 'Omron Limit Switches' || p.category === 'Jigo Limit Switches') {
    f = [
      `Series: ${p.brand} Heavy-Duty Industrial Limit Switch.`,
      `Model: ${p.model} - Precision electromechanical sensor for object detection and stroke limits.`,
      `Actuator Style: High-fidelity mechanical actuator (Roller, Plunger, or Lever) for repeatable precision.`,
      `Electrical Rating: Designed for switching up to ${p.voltage} in heavy-duty control circuits.`,
      `Contact Configuration: Snap-action ${p.auxiliary} contacts guaranteeing rapid electrical transition.`,
      `Housing Material: Rugged die-cast zinc or thermoplastic body capable of withstanding physical impacts.`,
      `Ingress Protection: Exceptional IP67 sealing completely blocks oil coolants, water, and fine dust.`,
      `Application: Vital for ${p.application}, conveyor routing, crane limits, and CNC zero-returns.`,
      `Operational Lifespan: Engineered for 10+ million mechanical operations minimizing replacement frequency.`,
      `Wiring: Spacious internal terminal block with standardized conduit entries for rapid wiring.`
    ];
  } else if (p.category === 'Resonance Cooling Fans') {
    f = [
      `Series: Resonance AC Axial Cooling Fans.`,
      `Model: ${p.model} - High-efficiency thermal management solution for electrical enclosures.`,
      `Operating Voltage: ${p.voltage} directly driven off mains power without external drivers.`,
      `Mounting Dimensions: Standard ${p.mounting} square frame for seamless drop-in panel installation.`,
      `Motor Technology: Shaded-pole or capacitor-run motor engineered for continuous 24/7 operation.`,
      `Bearing Type: Precision dual ball bearings providing significantly longer life than sleeve bearings.`,
      `Aerodynamics: Optimized impeller blade curvature maximizes CFM airflow while minimizing turbulent noise.`,
      `Structural Integrity: Heavy-duty die-cast aluminum frame offers superior rigidity and vibration dampening.`,
      `Protection: Impedance or thermal protection prevents coil burnout during unexpected rotor lock conditions.`,
      `Application: Specifically required for ${p.application}, VFD cooling, and high-density relay panels.`
    ];
  } else {
    f = [
      `Premium industrial-grade electrical component manufactured by ${p.brand}.`,
      `Model Number: ${p.model || 'Standard Version'} ensuring precise specification matching.`,
      `Voltage Compatibility: Rated for ${p.voltage || 'Standard'}, covering broad industrial requirements.`,
      `Current Rating: Engineered to safely handle ${p.current || 'Standard'} continuous loads.`,
      `Mounting Profile: Designed for ${p.mounting || 'Standard'} for rapid mechanical integration.`,
      `Application Suitability: Perfectly designed for ${p.application || 'industrial use'}.`,
      `Material Construction: Built utilizing flame-retardant plastics and high-purity conductive metals.`,
      `Thermal Performance: Excellent heat dissipation characteristics preventing thermal degradation.`,
      `Compact Architecture: Space-saving footprint optimizes layout density within electrical cabinets.`,
      `Safety Certifications: Tested and certified to meet rigorous global electrical safety standards.`
    ];
  }
  
  return f;
}

const newProducts = [];
for (const p of products) {
  const modified = { ...p };
  // Overwrite existing features with the BIG detailed ones
  modified.features = generateBigFeatures(p);
  newProducts.push(modified);
}

const output = `export const brands = ${JSON.stringify(brands, null, 2)};\n\nexport const categories = ${JSON.stringify(categories, null, 2)};\n\nexport const products = ${JSON.stringify(newProducts, null, 2)};\n`;

fs.writeFileSync('./src/data.js', output, 'utf-8');
console.log('Successfully applied BIG DETAILED features to all products in data.js');
