const fs = require('fs');
let content = fs.readFileSync('src/pages/AdminDashboardPage.tsx', 'utf-8');

// 1. Admin Panel space
content = content.replace('Admin<span className="text-primary-500">Panel</span>', 'Admin <span className="text-primary-500">Panel</span>');

// 2. Remove Add Product from sidebar
// We look for the one with h-5 w-5
content = content.replace(/<button[^>]*?onClick=\{\(\) => setActiveTab\('add-product'\)\}[^>]*?>\s*<PackagePlus className="h-5 w-5" \/> Add Product\s*<\/button>/g, '');

// 3. Fix image URL
content = content.replace(
  '{p.image_url ? <img src={p.image_url} alt={p.title} className="h-full w-full object-cover" /> : null}',
  '{p.image_url ? <img src={p.image_url.startsWith("http") ? p.image_url : `http://localhost:5000${p.image_url}`} alt={p.title} className="h-full w-full object-cover" /> : null}'
);

fs.writeFileSync('src/pages/AdminDashboardPage.tsx', content);
console.log('Done');
