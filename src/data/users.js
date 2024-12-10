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
];

export function getUser(id) {
  return users.find((user) => user.id === id);
}
