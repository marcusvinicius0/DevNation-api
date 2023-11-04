export interface UserProps {
  id: string;
  email: string;
  name: string;
  nickname: string;
  post: string;
  password?: string;
  presentation: string;
  isVerified: boolean;
  banner: string;
  avatar: string;
  location: string;
  linkedinURL: string;
  githubURL: string;
  defaultURL: string;
  xp: number;
  isBanned: boolean;
  role: string;
}