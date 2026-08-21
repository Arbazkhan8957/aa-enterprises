const fs = require('fs');

let content = fs.readFileSync('src/data.js', 'utf8');
const productsToUpdate = ['s-lc1d09', 's-lc1d18', 's-lc1d32', 's-lc1e-series', 's-push-button-stayput', 's-control-relay', 's-overload-relay', 's-solid-state-relay', 'jigo-cable-ties', 'jigo-lugs', 'jigo-cable-glands', 'jigo-push-connectors', 'jigo-tower-red', 'jigo-tower-green', 'sens-m18-pnp', 'enc-boc'];

productsToUpdate.forEach(id => {
  const regex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?image:\\s*')/images/[^']+\\.png(')`);
  content = content.replace(regex, `$1/images/temp_${id}.png$2`);
});

fs.writeFileSync('src/data.js', content);
console.log('Updated data.js with temp images');
