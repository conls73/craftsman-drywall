const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  {
    path: 'src/pages/services/remodeling.astro',
    replacements: [
      { from: 'in Washington', to: 'across Washington' },
      { from: 'serve Washington and the surrounding areas.', to: 'serve across Washington.' }
    ]
  },
  {
    path: 'src/pages/services/painting.astro',
    replacements: [
      { from: 'in Washington', to: 'across Washington' },
      { from: 'serve all of Washington.', to: 'serve across Washington.' }
    ]
  },
  {
    path: 'src/pages/services/index.astro',
    replacements: [
      { from: 'in Washington and the surrounding areas.', to: 'across Washington.' }
    ]
  },
  {
    path: 'src/pages/services/drywall-installation.astro',
    replacements: [
      { from: 'in Washington.', to: 'across Washington.' },
      { from: 'serve all of Washington.', to: 'serve across Washington.' }
    ]
  },
  {
    path: 'src/pages/gallery.astro',
    replacements: [
      { from: 'in Washington.', to: 'across Washington.' },
      { from: 'across Washington and surrounding communities.', to: 'across Washington.' }
    ]
  },
  {
    path: 'src/layouts/BaseLayout.astro',
    replacements: [
      { from: 'serving Washington and surrounding areas.', to: 'serving across Washington.' },
      { from: 'serving Washington with', to: 'serving across Washington with' }
    ]
  },
  {
    path: 'src/components/Footer.astro',
    replacements: [
      { from: 'in Washington with', to: 'across Washington with' }
    ]
  }
];

filesToUpdate.forEach(file => {
  const fullPath = path.join(__dirname, '..', file.path);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf8');
  
  file.replacements.forEach(r => {
    // global replace for exactly the "from" string
    content = content.split(r.from).join(r.to);
  });
  
  fs.writeFileSync(fullPath, content);
  console.log(`Updated ${file.path}`);
});
