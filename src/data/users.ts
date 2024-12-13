import type { UserType } from '../types/userType';

const users: UserType[] = [
  {
    id: 1,
    name: 'Alex Doe',
    role: 'Front-End Developer',
    avatarUrl: 'https://randomuser.me/api/portraits/men/72.jpg',
    coverUrl:
      'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=50&w=500',
  },
  {
    id: 2,
    name: 'Helena Lee',
    role: 'UI/UX Designer',
    avatarUrl: 'https://randomuser.me/api/portraits/women/70.jpg',
  },
  {
    id: 3,
    name: 'Rebecca Morales',
    role: 'Back-End Developer',
    avatarUrl: 'https://randomuser.me/api/portraits/women/15.jpg',
  },
  {
    id: 4,
    name: 'John Smith',
    role: 'Software Engineer',
    avatarUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    id: 5,
    name: 'Alice Johnson',
    role: 'Product Manager',
    avatarUrl: 'https://randomuser.me/api/portraits/women/90.jpg',
  },
  {
    id: 6,
    name: 'Daniel Lee',
    role: 'Data Scientist',
    avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

export function getUserById(id: number): UserType | undefined {
  return users.find((user) => user.id === id);
}
