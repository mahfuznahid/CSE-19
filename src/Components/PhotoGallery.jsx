export default function PhotoGallery({ photo, onClick }) {
  return (
    <div
      onClick={onClick}
      className="overflow-hidden rounded-xl shadow hover:shadow-lg transition"
    >
      <img
        src={photo.src}
        alt={photo.title || "gallery image"}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
