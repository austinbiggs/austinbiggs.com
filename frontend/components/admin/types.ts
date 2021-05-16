export interface User {
  id: number;
  type: "User"
  firstName: string;
  fullName: string;
  lastName: string;
}

export interface Post {
  id: number;
  type: "Post"
  createdAt?: Date;
  title?: string;
  slug?: string;
  status?: string;
  updatedAt?: Date;
  userByCreatedById?: User;
  userByUpdatedById?: User;
}

export interface Page {
  id: number;
  type: "Page"
  createdAt?: Date;
  title?: string;
  slug?: string;
  status?: string;
  updatedAt?: Date;
  userByCreatedById?: User;
  userByUpdatedById?: User;
}

export type Entity = Page | Post;
