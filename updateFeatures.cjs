const fs = require('fs');
let content = fs.readFileSync('src/pages/AdminDashboardPage.tsx', 'utf-8');

// 1. Add states
const stateInjection = `  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [editCategoryName, setEditCategoryName] = useState('');
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
`;
content = content.replace('  // Form State', stateInjection + '\n  // Form State');

// 2. Add handleUpdateCategory function
const handleUpdateCategoryFunc = `
  const handleUpdateCategory = async (e: React.FormEvent, id: string) => {
    e.preventDefault();
    if (!editCategoryName.trim()) return;
    try {
      const response = await fetch(\`http://localhost:5000/api/categories/\${id}\`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${localStorage.getItem('adminToken')}\`
        },
        body: JSON.stringify({ name: editCategoryName.trim() })
      });
      if (response.ok) {
        const data = await response.json();
        const updatedCat = data.category || data;
        setCategories(categories.map(c => c._id === id ? updatedCat : c));
        setEditingCategoryId(null);
      } else {
        alert('Failed to update category.');
      }
    } catch (error) {
      console.error(error);
    }
  };
`;
content = content.replace('  const handleDeleteCategory = ', handleUpdateCategoryFunc + '\n  const handleDeleteCategory = ');

// 3. Update Categories UI
const categoriesUI = `                  {categories.map(c => (
                    <li key={c._id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                      {editingCategoryId === c._id ? (
                        <form onSubmit={(e) => handleUpdateCategory(e, c._id)} className="flex-1 flex gap-2 mr-4">
                          <input type="text" value={editCategoryName} onChange={(e) => setEditCategoryName(e.target.value)} className="flex-1 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-primary-500" autoFocus />
                          <button type="submit" className="text-green-600 hover:text-green-700 text-sm font-semibold">Save</button>
                          <button type="button" onClick={() => setEditingCategoryId(null)} className="text-gray-500 hover:text-gray-700 text-sm font-semibold">Cancel</button>
                        </form>
                      ) : (
                        <span className="font-medium text-gray-900">{c.name}</span>
                      )}
                      
                      {editingCategoryId !== c._id && (
                        <div className="flex gap-4">
                          <button onClick={() => { setEditingCategoryId(c._id); setEditCategoryName(c.name); }} className="text-blue-500 hover:text-blue-700 text-sm font-semibold">Edit</button>
                          <button onClick={() => handleDeleteCategory(c._id)} className="text-red-500 hover:text-red-700 text-sm font-semibold">Delete</button>
                        </div>
                      )}
                    </li>
                  ))}`;
content = content.replace(/\{categories\.map\(c => \([\s\S]*?<\/li>\n\s*\)\)\}/, categoriesUI);

// 4. Update Product Action buttons to include Edit
const editProductButton = `
                            <button 
                              onClick={() => {
                                setEditingProductId(p._id);
                                setFormData({
                                  title: p.title, fit: p.fit || '', price: p.price, type: p.type || 'OEM', category: p.category, description: p.description, quantity: p.quantity || '', demo_video_url: p.demo_video_url || ''
                                });
                                setImageFile(null);
                                setActiveTab('add-product');
                              }}
                              className="text-blue-500 hover:text-blue-700 text-sm font-semibold transition-colors mr-4"
                            >
                              Edit
                            </button>
`;
content = content.replace(/(<button[\s\S]*?onClick=\{\(\) => handleDeleteProduct\(p\._id\)\}[\s\S]*?className="text-red-500[^>]*>[\s\S]*?Delete[\s\S]*?<\/button>)/, editProductButton + '$1');

// 5. Update Product handleSubmit
const productSubmitReplaceOld = `const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',`;
const productSubmitReplaceNew = `const url = editingProductId ? \`http://localhost:5000/api/products/\${editingProductId}\` : 'http://localhost:5000/api/products';
      const method = editingProductId ? 'PUT' : 'POST';
      const response = await fetch(url, {
        method: method,`;
content = content.replace(productSubmitReplaceOld, productSubmitReplaceNew);

content = content.replace(`setMessage('✅ Product added successfully!');`, `setMessage(editingProductId ? '✅ Product updated successfully!' : '✅ Product added successfully!'); setEditingProductId(null);`);

// 6. Fix "Cancel" in add product tab to reset editingProductId
content = content.replace(`onClick={() => setActiveTab('products')}`, `onClick={() => { setActiveTab('products'); setEditingProductId(null); setFormData({ title: '', fit: '', price: '', type: 'OEM', category: 'Brakes', description: '', quantity: '', demo_video_url: '' }); }}`);

fs.writeFileSync('src/pages/AdminDashboardPage.tsx', content);
console.log('Done Features');
