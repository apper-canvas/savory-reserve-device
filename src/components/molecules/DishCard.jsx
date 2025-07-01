import React, { useState } from "react";
import ApperIcon from "@/components/ApperIcon";
const DishCard = ({ dish, onImageClick, onAddToOrder }) => {
const DishCard = ({ dish, onImageClick, onAddToOrder }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAddToOrder = async () => {
    if (!onAddToOrder || !dish) return;
    
    setIsAdding(true);
    setLoading(true);
    
    try {
      await onAddToOrder(dish);
    } catch (error) {
      console.error('Failed to add item to order:', error);
    } finally {
      setIsAdding(false);
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image container */}
      <div className="relative group">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-48 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
          onClick={() => onImageClick(dish)}
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center cursor-pointer">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ApperIcon name="ZoomIn" size={32} className="text-white" />
          </div>
        </div>

        {/* Vegetarian badge */}
        {dish.isVegetarian && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            <ApperIcon name="Leaf" size={12} className="inline mr-1" />
            Vegetarian
          </div>
        )}

        {/* Rating badge */}
        {dish.rating && (
          <div className="absolute top-2 right-2 bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <ApperIcon name="Star" size={12} className="text-yellow-500 mr-1" />
            {dish.rating}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 flex-1">
            {dish.name}
          </h3>
          <span className="text-lg font-bold text-gray-900 ml-2">
            ${dish.price}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {dish.description}
        </p>

        {/* Allergens */}
        {dish.allergens && dish.allergens.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {dish.allergens.map((allergen, index) => (
              <span
                key={index}
                className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full"
              >
                {allergen}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => onImageClick(dish)}
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            <ApperIcon name="Eye" size={16} className="mr-1" />
            View Details
          </button>
          
<button 
            onClick={handleAddToOrder}
            disabled={isAdding || loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors text-sm font-medium flex items-center"
          >
            {isAdding ? (
              <>
                <ApperIcon name="Loader2" size={16} className="mr-1 animate-spin" />
                Adding...
              </>
            ) : (
              <>
                <ApperIcon name="Plus" size={16} className="mr-1" />
                Add to Order
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;