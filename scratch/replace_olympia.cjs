const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  {
    path: 'src/pages/services/remodeling.astro',
    replacements: [
      { from: 'Olympia, WA', to: 'Washington' },
      { from: 'Olympia, WA.', to: 'Washington.' }
    ]
  },
  {
    path: 'src/pages/services/painting.astro',
    replacements: [
      { from: 'Olympia, WA', to: 'Washington' }
    ]
  },
  {
    path: 'src/pages/services/index.astro',
    replacements: [
      { from: 'Olympia, WA', to: 'Washington' },
      { from: 'in Olympia and the surrounding areas', to: 'in Washington and the surrounding areas' }
    ]
  },
  {
    path: 'src/pages/services/drywall-repair.astro',
    replacements: [
      { from: 'Olympia, WA', to: 'Washington' }
    ]
  },
  {
    path: 'src/pages/services/drywall-installation.astro',
    replacements: [
      { from: 'Olympia, WA', to: 'Washington' },
      { from: 'in Olympia and the surrounding area', to: 'in Washington and the surrounding area' }
    ]
  },
  {
    path: 'src/pages/index.astro',
    replacements: [
      { from: 'Olympia, WA |', to: 'Washington |' },
      { from: 'in Olympia, Lacey, Tumwater', to: 'in Washington, Lacey, Tumwater' },
      { from: '5.0 · Olympia, WA', to: '5.0 · Washington' }
    ]
  },
  {
    path: 'src/pages/gallery.astro',
    replacements: [
      { from: 'Olympia, WA', to: 'Washington' },
      { from: 'across Olympia and surrounding communities', to: 'across Washington and surrounding communities' }
    ]
  },
  {
    path: 'src/pages/contact.astro',
    replacements: [
      { from: 'Serving Olympia, WA', to: 'Serving Washington' },
      { from: "value: 'Olympia, WA'", to: "value: 'Washington'" },
      { from: '123 Main St, Olympia, WA', to: '123 Main St, Washington' }
    ]
  },
  {
    path: 'src/layouts/BaseLayout.astro',
    replacements: [
      { from: 'serving Olympia, WA', to: 'serving Washington' },
      { from: '"addressLocality": "Olympia"', to: '"addressLocality": "Washington"' },
      { from: 'in Olympia, WA |', to: 'in Washington |' }
    ]
  },
  {
    path: 'src/components/EstimateModal.astro',
    replacements: [
      { from: '123 Main St, Olympia, WA', to: '123 Main St, Washington' }
    ]
  }
];

filesToUpdate.forEach(file => {
  const fullPath = path.join(__dirname, '..', file.path);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  file.replacements.forEach(r => {
    // global replace for exactly the "from" string
    content = content.split(r.from).join(r.to);
  });
  
  fs.writeFileSync(fullPath, content);
  console.log(`Updated ${file.path}`);
});
