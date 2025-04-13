export interface Post {
    id: number;
    title: string;
    body: string;
    author: string;
    date: string;
    comments: PostComment[];
}

export interface PostComment {
    id: string;
    text: string;
    username: string;
}