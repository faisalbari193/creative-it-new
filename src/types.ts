export interface Course {
  id: string;
  title: string;
  category: string;
  rating: number;
  reviewsCount: string;
  studentsCount: string;
  fee: string;
  originalFee?: string;
  badge?: string;
  image: string;
  mentor?: string;
  tags?: string[];
  description?: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  iconName: string;
  coursesCount?: number;
}

export interface SuccessStory {
  id: string;
  title: string;
  subtitle: string;
  studentName: string;
  earning?: string;
  image: string;
  youtubeId?: string;
  tag: string;
}

export interface CompanyPartner {
  name: string;
  category: 'working-with' | 'members-of' | 'our-concerns';
  logoText: string;
  subText?: string;
  accentColor?: string;
}
