const users = [
  {
    id: 0,
    name: "Alex Doe",
    role: "Front-End Developer",
    avatar: "https://randomuser.me/api/portraits/men/72.jpg",
    cover:
      "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=50&w=500",
  },
  {
    id: 1,
    name: "Helena Lee",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    id: 2,
    name: "Rebecca Morales",
    role: "Back-End Developer",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 4,
    name: "Alice Johnson",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    id: 5,
    name: "Daniel Lee",
    role: "Data Scientist",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

export function getUserById(id) {
  return users.find((user) => user.id === id);
}
