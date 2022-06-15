export interface TrueUserProps {
  user: {
    name: string;
    email: string;
    image: string;
    sub?: string;
  };
}

export interface FalseUserProps {
  user?: { name: string; email: string; image: string; sub?: string };
}

export interface Todo {
  name: string;
  description: string;
  thumbnail: string;
  id: string;
}
