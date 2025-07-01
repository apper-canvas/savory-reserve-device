import React, { useEffect, useState } from "react";
import ApperIcon from "@/components/ApperIcon";
import MenuCategory from "@/components/organisms/MenuCategory";
import PhotoLightbox from "@/components/molecules/PhotoLightbox";
import Error from "@/components/ui/Error";
import Loading from "@/components/ui/Loading";
import menuService from "@/services/menuService";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await menuService.getAllCategories();
      setCategories(data);
    } catch (err) {
      setError('Failed to load menu categories. Please try again.');
      console.error('Error loading categories:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDishImageClick = (clickedDish) => {
    // Find the category containing this dish
    const category = categories.find(cat => 
      cat.dishes.some(dish => dish.Id === clickedDish.Id)
    );
    
    if (category) {
      // Create lightbox images from all dishes in the category
      const images = category.dishes.map(dish => ({
        image: dish.image,
        largeImage: dish.largeImage,
        name: dish.name,
        description: dish.description,
        price: dish.price
      }));
      
      // Find the index of the clicked dish
      const clickedIndex = category.dishes.findIndex(dish => dish.Id === clickedDish.Id);
      
      setLightboxImages(images);
      setLightboxIndex(clickedIndex);
      setIsLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.dishes.some(dish => 
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Error message={error} onRetry={loadCategories} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Savory Reserve
                                      </h1>
                </div>
                {/* Search and Cart */}
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <ApperIcon
                            name="Search"
                            size={20}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search dishes..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64" />
                    </div>
                    {/* Cart Icon */}
                    <div className="relative">
                        <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                            <ApperIcon name="ShoppingCart" size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div></header>
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
            <p className="text-xl opacity-90">Discover our carefully curated selection of fine dishes
                          </p>
            <p className="text-sm mt-2 opacity-80">Click on any dish image to view it in our photo gallery
                          </p>
        </div>
    </div>
    {/* Menu Content */}
    <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {filteredCategories.length === 0 ? <div className="text-center py-12">
            <ApperIcon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No dishes found</h3>
            <p className="text-gray-600">Try adjusting your search terms</p>
        </div> : filteredCategories.map(category => <MenuCategory
            key={category.Id}
            category={category}
            onDishImageClick={handleDishImageClick} />)}
    </main>
    {/* Photo Lightbox */}
    <PhotoLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox} />
</div>
  );
};

export default Menu;