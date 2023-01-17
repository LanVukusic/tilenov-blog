export interface Content {
  _type: string;
  children: {
    _key: string;
    _type: string;
    marks: mark[];
    text: string;
  }[];
  markDefs: any[];
  style: string;
}

export interface Post {
  naslov: string;
  postAt: string;
  url: string;
  _createdAt: string;
  _updatedAt: string;
  content: Content[];
}

export type mark = "strong" | "em" | "underline" | "code" | "link";
