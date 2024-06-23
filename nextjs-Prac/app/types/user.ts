export interface ISearchParams {
  [key: string]: any;
  id?: number;
  postId?: number;
  name?: string;
  email?: string;
  body?: string;
}

export interface ICommentsDataType {
  key: React.Key;
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
