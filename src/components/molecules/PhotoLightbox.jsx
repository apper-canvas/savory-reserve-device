import React, { useState, useEffect } from 'react'
import ApperIcon from '@/components/ApperIcon'

function PhotoLightbox({ images, initialIndex = 0, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={onClose}
      />
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
      >
        <ApperIcon name="X" size={24} />
      </button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <ApperIcon name="ChevronLeft" size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <ApperIcon name="ChevronRight" size={24} />
          </button>
        </>
      )}

      {/* Image container */}
      <div className="relative max-w-7xl max-h-full mx-4 flex flex-col items-center">
        <img
          src={currentImage.largeImage || currentImage.image}
          alt={currentImage.name}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />
        
        {/* Image info */}
        <div className="mt-4 text-center max-w-md">
          <h3 className="text-white text-xl font-semibold mb-2">
            {currentImage.name}
          </h3>
          {currentImage.description && (
            <p className="text-gray-300 text-sm">
              {currentImage.description}
            </p>
          )}
          {currentImage.price && (
            <p className="text-white text-lg font-bold mt-2">
              ${currentImage.price}
            </p>
          )}
        </div>

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black bg-opacity-50 p-2 rounded-lg">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                index === currentIndex 
                  ? 'border-white' 
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={image.image}
                alt={image.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoLightbox;