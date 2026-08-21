const fs = require('fs');

const filePath = 'src/data.js';

try {
  let content = fs.readFileSync(filePath, 'utf-8');

  const headerSplit = content.split('export const products = [');
  if (headerSplit.length < 2) {
    console.error("Could not find products array!");
    process.exit(1);
  }

  const header = headerSplit[0] + 'export const products = [\n';
  const productsChunk = headerSplit[1];

  const productBlocks = productsChunk.split('  {\n    id: "');
  const newBlocks = [productBlocks[0]];

  for (let i = 1; i < productBlocks.length; i++) {
    let fullBlock = '  {\n    id: "' + productBlocks[i];

    const catMatch = fullBlock.match(/category:\s*"([^"]+)"/);
    const category = catMatch ? catMatch[1] : "";

    const nameMatch = fullBlock.match(/name:\s*"([^"]+)"/);
    const name = nameMatch ? nameMatch[1] : "Component";

    const modelMatch = fullBlock.match(/model:\s*"([^"]+)"/);
    const model = modelMatch ? modelMatch[1] : "Model";

    const brandMatch = fullBlock.match(/brand:\s*"([^"]+)"/);
    const brand = brandMatch ? brandMatch[1] : "";

    let desc = "";

    if (brand === "Schneider Electric" || brand === "Schneider") {
      if (category.includes("Contactor")) {
        desc = `The ${name} (Model: ${model}) is a premium Schneider Electric TeSys industrial AC contactor designed for robust motor control, HVAC systems, and high-load switching applications. Engineered for maximum mechanical and electrical durability, this authentic Schneider component ensures safe and reliable circuit orchestration in automated assembly lines and gigafactories. It features easy DIN-rail mounting, superior arc suppression, and globally certified safety compliance.`;
      } else if (category.includes("Relay")) {
        desc = `The ${name} (Model: ${model}) is an advanced Schneider Electric TeSys thermal overload relay designed for precision motor protection and automated safety interlocks. It delivers highly accurate phase-loss sensitivity and thermal tracking, ensuring critical machinery remains protected from voltage irregularities and overheating. Seamlessly compatible with Schneider contactors, it provides the ultimate layer of defense for your electrical control panels.`;
      } else if (category.includes("LADN")) {
        desc = `The ${name} (Model: ${model}) is a premium Schneider Electric TeSys auxiliary contact block designed to seamlessly expand the signaling and control capabilities of your existing Schneider contactors. Built with uncompromising authentic Schneider quality, it features high-reliability mechanical linkages and instantly snaps onto the front or side of your contactors for maximum flexibility in complex PLC logic and relay orchestration.`;
      } else if (category.includes("Push Button")) {
        desc = `The ${name} (Model: ${model}) is a rugged Schneider Electric Harmony series industrial push button built for harsh environments. Featuring premium tactile feedback and exceptional mechanical life, this authentic Schneider component guarantees precise human-machine interfacing (HMI) for massive industrial control panels and heavy machinery. It is designed for standard 22mm panel cutouts and offers industry-leading ingress protection.`;
      } else {
        desc = `The ${name} (Model: ${model}) is an authentic Schneider Electric industrial component engineered for ultimate reliability and safety. Manufactured to meet the rigorous demands of modern automated factories and power distribution networks.`;
      }
    } else {
      if (category.includes("Cooling Fan")) {
        desc = `The ${name} (Model: ${model}) is a premium industrial-grade cooling fan engineered specifically for heavy-duty thermal management in electrical control panels, server cabinets, and automated machinery. Manufactured with a rugged frame and a highly optimized aerodynamic impeller, it guarantees maximum CFM airflow while maintaining low acoustic noise levels. The advanced motor design utilizes high-precision bearings to ensure a continuous 24/7 operational lifespan even in harsh, high-temperature factory environments.`;
      } else if (category.includes("Contactor")) {
        desc = `The ${name} (Model: ${model}) is a heavy-duty industrial AC contactor designed for robust motor control, HVAC systems, and high-load switching applications. Engineered for maximum mechanical and electrical durability, it ensures safe and reliable circuit orchestration in automated assembly lines and gigafactories.`;
      } else if (category.includes("Relay")) {
        desc = `The ${name} (Model: ${model}) is an advanced overload relay designed for precision motor protection and automated safety interlocks. It delivers highly accurate phase-loss sensitivity and thermal tracking, ensuring critical machinery remains protected from voltage irregularities and overheating.`;
      } else if (category.includes("Push Button") || category.includes("Switch")) {
        desc = `The ${name} (Model: ${model}) is a rugged industrial-grade control component built for harsh environments. Featuring premium tactile feedback and exceptional mechanical life, it guarantees precise human-machine interfacing (HMI) for massive industrial control panels and heavy machinery.`;
      } else if (category.includes("Indicator")) {
        desc = `The ${name} (Model: ${model}) is a high-visibility industrial LED indicator designed for clear, immediate visual status feedback in complex control panels. Engineered with ultra-bright, long-lasting LED technology, it ensures maximum safety and operational awareness on the factory floor.`;
      } else if (category.includes("Sensor")) {
        desc = `The ${name} (Model: ${model}) is a high-precision proximity sensor designed for flawless object detection in automated robotics and conveyor systems. Built to withstand extreme industrial wear and tear, it provides split-second sensing accuracy required for complex PLC logic.`;
      } else if (category.includes("Auxillary") || category.includes("Accessories")) {
        desc = `The ${name} (Model: ${model}) is a premium industrial accessory designed to seamlessly integrate with and expand the capabilities of your existing electrical control infrastructure. Built with uncompromising quality for maximum reliability and safety.`;
      } else {
        desc = `The ${name} (Model: ${model}) is a premium industrial electrical component manufactured for maximum durability and precision. Engineered to meet the rigorous demands of modern automated factories and power distribution networks.`;
      }
    }

    let newFullBlock = fullBlock.replace(/description:\s*"[^"]+",/, `description:\n      "${desc}",`);
    
    // Fallback if the first regex didn't match perfectly
    if (newFullBlock === fullBlock) {
      newFullBlock = fullBlock.replace(/description:[\s\S]*?",/, `description:\n      "${desc}",`);
    }

    newBlocks.push(newFullBlock);
  }

  const finalContent = header + newBlocks.join('');

  fs.writeFileSync(filePath, finalContent, 'utf-8');
  console.log("Descriptions generated and updated in src/data.js successfully!");

} catch (err) {
  console.error("Error updating file:", err);
}
