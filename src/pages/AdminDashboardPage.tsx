import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PackagePlus, ShoppingBag, LogOut, PackageSearch, Filter, Menu, X } from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'products' | 'add-product' | 'orders' | 'categories'>('products');
  
  // Auth Check
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login');
    } else {
      setIsAdminLoggedIn(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  // State
  const [products, setProducts] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '', fit: '', price: '', type: 'OEM', category: '', description: '', quantity: '', demo_video_url: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  // Fetch Data
  useEffect(() => {
    if (activeTab === 'products') fetchProducts();
    if (activeTab === 'orders') fetchOrders();
    if (activeTab === 'add-product' || activeTab === 'categories') fetchCategories();
  }, [activeTab]);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/categories', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch categories');
      }

      const categoriesList = data.categories || data;
      setCategories(categoriesList);
      if (categoriesList.length > 0 && !formData.category) {
        setFormData(prev => ({ ...prev, category: categoriesList[0].name }));
      }
    } catch (error) {
      console.error('Failed to fetch categories', error);
      localStorage.removeItem('adminToken');
      navigate('/admin-login');
    }
  };

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/products', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch products');
      }

      setProducts(data.products || data);
    } catch (error) {
      console.error('Failed to fetch products', error);
      localStorage.removeItem('adminToken');
      navigate('/admin-login');
    }
  };

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/orders', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch orders');
      }

      setOrders(data.orders || data);
    } catch (error) {
      console.error('Failed to fetch orders', error);
      localStorage.removeItem('adminToken');
      navigate('/admin-login');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Adding product...');
    try {
      const submitData = new FormData();
      submitData.append('title', formData.title);
      submitData.append('fit', formData.fit);
      submitData.append('price', String(formData.price));
      submitData.append('type', formData.type);
      submitData.append('category', formData.category);
      submitData.append('description', formData.description);
      if (formData.quantity) submitData.append('quantity', formData.quantity);
      if (formData.demo_video_url) submitData.append('demo_video_url', formData.demo_video_url);
      if (imageFile) {
        submitData.append('image', imageFile);
      }

      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: submitData
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || data.error || 'Failed to add product');
      setMessage(editingProductId ? '✅ Product updated successfully!' : '✅ Product added successfully!'); setEditingProductId(null);
      setFormData({ title: '', fit: '', price: '', type: 'OEM', category: 'Brakes', description: '', quantity: '', demo_video_url: '' });
      setImageFile(null);
      
      // Reset file input UI manually if needed, but since it remounts or we can just leave it for now
      setTimeout(() => {
        setMessage('');
        setActiveTab('products'); // Switch back to products list after adding
      }, 2000);
    } catch (err: any) {
      setMessage(`❌ Error: ${err.message}`);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      if (response.ok) {
        setProducts(products.filter(p => p._id !== id));
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product', error);
      alert('Error deleting product');
    }
  };

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    try {
      const response = await fetch('http://localhost:5000/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify({ name: newCategoryName.trim() })
      });
      if (response.ok) {
        const data = await response.json();
        const newCat = data.category || data;
        setCategories([...categories, newCat]);
        setNewCategoryName('');
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to add category. It might already exist.');
      }
    } catch (error) {
      console.error(error);
    }
  };


  const handleDeleteCategory = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;
    try {
      const response = await fetch(`http://localhost:5000/api/categories/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      if (response.ok) {
        setCategories(categories.filter(c => c._id !== id));
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to delete category');
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!isAdminLoggedIn) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans relative overflow-hidden">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`w-64 bg-white border-r border-gray-200 flex flex-col fixed md:relative z-30 h-full transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-black text-gray-900 tracking-tight">Admin <span className="text-primary-500">Panel</span></h2>
          <button className="md:hidden text-gray-500 hover:text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          
          <button 
            onClick={() => { setActiveTab('products'); setEditingProductId(null); setFormData({ title: '', fit: '', price: '', type: 'OEM', category: 'Brakes', description: '', quantity: '', demo_video_url: '' }); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'products' ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <PackageSearch className="h-5 w-5" /> All Products
          </button>
          
          <button 
            onClick={() => { setActiveTab('categories'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'categories' ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Filter className="h-5 w-5" /> Categories
          </button>
          <button 
            onClick={() => { setActiveTab('orders'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'orders' ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <ShoppingBag className="h-5 w-5" /> Orders
          </button>
        </nav>
        <div className="p-4 border-t border-gray-100 mt-auto">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg text-sm font-semibold transition-colors">
            <LogOut className="h-5 w-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto">
        <header className="bg-white border-b border-gray-200 py-4 px-4 sm:px-8 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 capitalize">
              {activeTab.replace('-', ' ')}
            </h1>
          </div>
          {activeTab === 'products' && (
            <button 
              onClick={() => setActiveTab('add-product')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm"
            >
              <PackagePlus className="h-4 w-4" /> <span className="hidden sm:inline">Add Product</span>
            </button>
          )}
        </header>

        <div className="p-8">
          {/* CATEGORIES TAB */}
          {activeTab === 'categories' && (
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Add New Category</h3>
                <form onSubmit={handleAddCategory} className="flex gap-4">
                  <input type="text" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} placeholder="e.g. Fluids & Chemicals" required className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
                  <button type="submit" className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">Add</button>
                </form>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <h3 className="font-semibold text-gray-900">Existing Categories</h3>
                </div>
                <ul className="divide-y divide-gray-100">
                  {categories.map(c => (
                    <li key={c._id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                      <span className="font-medium text-gray-900">{c.name}</span>
                      <button onClick={() => handleDeleteCategory(c._id)} className="text-red-500 hover:text-red-700 text-sm font-semibold">Delete</button>
                    </li>
                  ))}
                  {categories.length === 0 && <li className="p-4 text-center text-gray-500">No categories found.</li>}
                </ul>
              </div>
            </div>
          )}

          {/* ALL PRODUCTS TAB */}
          {activeTab === 'products' && (
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                <h3 className="font-semibold text-gray-900">Products list</h3>
                <span className="text-sm font-medium text-gray-500 bg-gray-200 px-3 py-1 rounded-full">{products.length} Items</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                      <th className="py-3 px-6 font-bold">Product</th>
                      <th className="py-3 px-6 font-bold">Category</th>
                      <th className="py-3 px-6 font-bold">Price</th>
                      <th className="py-3 px-6 font-bold">Type</th>
                      <th className="py-3 px-6 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {products.length === 0 ? (
                      <tr><td colSpan={5} className="py-8 text-center text-gray-500">No products found. Add some!</td></tr>
                    ) : (
                      products.map(p => (
                        <tr key={p._id} className="hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded bg-gray-100 flex-shrink-0 border border-gray-200 overflow-hidden">
                                {p.image_url ? <img src={p.image_url.startsWith("http") ? p.image_url : `http://localhost:5000${p.image_url}`} alt={p.title} className="h-full w-full object-cover" /> : null}
                              </div>
                              <span className="font-medium text-gray-900 text-sm">{p.title}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500">{p.category}</td>
                          <td className="py-4 px-6 text-sm text-gray-900 font-medium">₦{p.price.toLocaleString()}</td>
                          <td className="py-4 px-6">
                            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-green-50 text-green-700 border border-green-200">
                              {p.type || 'OEM'}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
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
                            <button 
                              onClick={() => handleDeleteProduct(p._id)}
                              className="text-red-500 hover:text-red-700 text-sm font-semibold transition-colors"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ADD PRODUCT TAB */}
          {activeTab === 'add-product' && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 sm:p-8 border border-gray-200 rounded-xl shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Product Title</label>
                      <input type="text" name="title" required value={formData.title} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" placeholder="e.g. Front Brake Pads" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Price (₦)</label>
                      <input type="number" name="price" required value={formData.price} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" placeholder="e.g. 15000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                      <select name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-white">
                        {categories.map(c => (
                          <option key={c._id} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Condition / Type</label>
                      <select name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-white">
                        <option value="OEM">OEM</option>
                        <option value="GENUINE">GENUINE</option>
                        <option value="AFTERMARKET">AFTERMARKET</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Fitment</label>
                    <input type="text" name="fit" required value={formData.fit} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" placeholder="e.g. Fits: Toyota Camry 2015 - 2020" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity (Optional)</label>
                      <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} min="1" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" placeholder="e.g. 10" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Demo Video URL (Optional)</label>
                      <input type="url" name="demo_video_url" value={formData.demo_video_url} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" placeholder="https://youtube.com/watch?v=..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Image</label>
                    <input type="file" name="image" accept="image/*" onChange={handleFileChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                    <textarea name="description" required rows={4} value={formData.description} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-none" placeholder="Detailed product description..."></textarea>
                  </div>
                  {message && <div className={`p-4 font-bold text-sm rounded-lg ${message.includes('Error') ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>{message}</div>}
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setActiveTab('products')} className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
                    <button type="submit" className="flex-1 bg-primary-500 text-white font-semibold py-3 rounded-lg hover:bg-primary-600 transition-colors">{editingProductId ? 'Update Product' : 'Save Product'}</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* ORDERS TAB */}
          {activeTab === 'orders' && (
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-semibold text-gray-900">Recent Orders</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-white">
                    <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date / Items</th>
                    <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orders.length === 0 ? (
                    <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-500">No orders found.</td></tr>
                  ) : (
                    orders.map(order => (
                      <tr key={order._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <p className="font-semibold text-gray-900 text-sm">{new Date(order.createdAt).toLocaleDateString()}</p>
                          <p className="text-gray-500 text-xs mt-1">{order.items?.length || 0} items</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-semibold text-gray-900 text-sm">{order.customerName}</p>
                          <p className="text-gray-500 text-xs mt-1">{order.phone}</p>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 text-sm">
                          ₦{(order.totalAmount || 0).toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-orange-50 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full border border-orange-200">
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
