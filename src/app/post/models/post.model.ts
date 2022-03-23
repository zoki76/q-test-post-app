export interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostListModel extends PostModel {
  name: string;
  numberOfComments: number;
}
