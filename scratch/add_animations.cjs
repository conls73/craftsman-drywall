const fs = require('fs');
const path = require('path');

const files = [
  'drywall-installation.astro',
  'drywall-repair.astro',
  'painting.astro',
  'exterior-painting.astro',
  'remodeling.astro'
];

for (const file of files) {
  const filePath = path.join(__dirname, '..', 'src', 'pages', 'services', file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add reveal to header
  content = content.replace(
    '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">',
    '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center reveal">'
  );

  // 2. Add reveal to main column
  content = content.replace(
    '<div class="lg:col-span-2 space-y-8">',
    '<div class="lg:col-span-2 space-y-8 reveal reveal-delay-1">'
  );

  // 3. Add reveal to sidebar
  content = content.replace(
    '<div class="space-y-5">',
    '<div class="space-y-5 reveal reveal-delay-2">'
  );

  // 4. Update map to have index
  content = content.replace(
    /\]\.map\(item => \(/g,
    '].map((item, index) => ('
  );

  // 5. Update service cards inside the map
  content = content.replace(
    /<div class="bg-gray-50 rounded-xl p-6 border border-gray-100 flex gap-4">/g,
    '<div class={`bg-gray-50 rounded-xl p-6 border border-gray-100 flex gap-4 service-card reveal ${index > 0 ? "reveal-delay-" + ((index % 3) + 1) : ""}`}>'
  );

  // 6. Update CTA buttons in sidebar
  content = content.replace(
    /class="block bg-blue-brand hover:bg-blue-dark text-white font-bold text-center py-3 px-5 rounded-xl transition-colors"/g,
    'class="cta-button block bg-blue-brand hover:bg-blue-dark text-white font-bold text-center py-3 px-5 rounded-xl"'
  );
  content = content.replace(
    /class="block mt-3 border border-white\/20 text-white text-center py-3 px-5 rounded-xl text-sm hover:bg-white\/10 transition-colors"/g,
    'class="cta-button block mt-3 border border-white/20 text-white text-center py-3 px-5 rounded-xl text-sm hover:bg-white/10"'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
