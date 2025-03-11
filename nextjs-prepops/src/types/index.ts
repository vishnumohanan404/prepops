export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Note = {
  _id: string;
  _type: "note";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  topic?: string;
  subtopic?: string;
  description?: string;
  level: string;
  slug?: Slug;
  publishedAt: string;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};
