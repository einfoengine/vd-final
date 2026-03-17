"use client";

import Image from "next/image";
import React, { useState } from "react";
import { X } from "lucide-react";

interface CulturePhoto {
  id: number;
  image: string;
  title: string;
  description?: string;
}

interface GalleryProps {
  photos: CulturePhoto[];
}

export const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<CulturePhoto | null>(null);

  return (
    <div>
      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.image}
              alt={photo.title}
              width={400}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center modal"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white overflow-hidden rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white rounded-full cursor-pointer "
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-8 h-8 text-white" />
            </button>

            <>
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                width={800}
                height={500}
                className="object-cover w-full h-auto"
              />
              <div className="p-6">
                <h3>{selectedPhoto.title}</h3>
                {selectedPhoto.description && (
                  <p className="mt-5">{selectedPhoto.description}</p>
                )}
              </div>
            </>
          </div>
        </div>
      )}
    </div>
  );
};
