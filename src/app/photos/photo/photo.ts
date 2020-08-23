export interface Photo {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  like: number;
  comments: number;
  userId: number;
}
