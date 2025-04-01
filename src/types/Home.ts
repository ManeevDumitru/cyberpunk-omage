export interface HomeGalleryImageInterface {
  url: string;
  alt: string;
}

export interface HomeGalleryImagesInterface {
  main: HomeGalleryImageInterface;
  additional: HomeGalleryImageInterface[];
}

export interface HomeGalleryCategoryInterface {
  title: string;
  value: string;
  images: HomeGalleryImagesInterface[];
}

export interface HomeFeatureInterface {
  title: string;
  desc: string;
  imgPath: string;
}