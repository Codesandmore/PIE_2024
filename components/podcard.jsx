import React from 'react';

const PodCard = ({ src, id }) => {
  const screenWidth = window.innerWidth;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '20px', 
        flexDirection: screenWidth < 426 ? 'column' : 'row', // Switch direction based on screen width
      }}
      data-aos="fade-up"
    >
      <iframe
        style={{
          borderRadius: '12px',
          width: screenWidth < 426 ? '70%' : '30%', // Adjust width based on screen width
        }}
        src={src}
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={`Podcast Episode ${id}`}
      ></iframe>
    </div>
  );
};

export default PodCard;
