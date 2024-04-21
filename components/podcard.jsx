const PodCard = ({ src, id }) => {
  return (
    <div className="eventcard" data-aos="fade-up">
      <iframe
        style={{ borderRadius: '12px' }}
        src={src}
        width="100%"
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
