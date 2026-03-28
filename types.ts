export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Photo extends CosmicObject {
  type: 'photos';
  metadata: {
    description?: string;
    image?: CosmicImage;
    camera_lens?: string;
    location?: string;
  };
}

export interface Collection extends CosmicObject {
  type: 'collections';
  metadata: {
    description?: string;
    cover_image?: CosmicImage;
    photos?: Photo[];
  };
}

export interface About extends CosmicObject {
  type: 'about';
  metadata: {
    heading?: string;
    bio?: string;
    profile_photo?: CosmicImage;
    contact_email?: string;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    client_name?: string;
    client_role?: string;
    client_photo?: CosmicImage;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}