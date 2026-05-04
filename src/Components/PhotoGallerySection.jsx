import { useState } from "react";
import photos from "../Data/PhotoData";
import PhotoGallery from "./PhotoGallery";

export default function PhotoGallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="photoGallerySection py-6 px-4" id="photo-gallery">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-[#1E293B] font-bold mb-10 text-center">
          Photo Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <PhotoGallery
              key={photo.id}
              photo={photo}
              onClick={() => setSelectedImage(photo.src)}
            />
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-w-[90%] max-h-[90%] rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
