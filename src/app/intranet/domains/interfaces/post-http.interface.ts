export interface UserPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface UserPostForm {
    id?: number;
    title: string;
    body: string;
    userId: number;
}