function ImageModal({ imageUrl, onClose }) {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-80 z-50">
      <div className="relative max-w-3xl mx-auto">
        <img src={imageUrl} alt="Modal" className="max-w-full max-h-full" />
      </div>
      <button
        className="absolute top-2 right-2 text-white text-2xl"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
}

export default ImageModal;
