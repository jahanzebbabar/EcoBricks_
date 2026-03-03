import React from 'react';

const TextureOverlay = ({ type = 'concrete', opacity = 0.15, className = '' }) => {
  const textures = {
    concrete: 'https://images.unsplash.com/photo-1560659123-7e1976ff8554?w=1200&q=80',
    clay: 'https://images.unsplash.com/photo-1679466230930-4c53a8f0a699?w=1200&q=80',
    sand: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=1200&q=80'
  };

  return (
    <div 
      className={`absolute inset-0 pointer-events-none mix-blend-multiply z-0 ${className}`}
      style={{
        backgroundImage: `url(${textures[type]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: opacity
      }}
      aria-hidden="true"
    />
  );
};

export default TextureOverlay;