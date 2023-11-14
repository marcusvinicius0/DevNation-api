export interface PostProps {
  post: {
    id: string;
    author: string;
    authorID: string;
    publication: string;
    image?: string;
    likes?: LikesProps;
    comments?: CommentProps;
    createdAt: Date;
    updatedAt: Date;
  };
}

interface CommentProps {}

interface LikesProps {}
