import type { PostType } from '../types/postType';

export const posts: PostType[] = [
  {
    id: 1,
    authorId: 1,
    content: [
      [
        {
          type: 'text',
          value: 'I was recently interviewed by the amazing folks at',
        },
        {
          type: 'mention',
          value: '@TechInsider',
        },
        {
          type: 'text',
          value:
            'to talk about my journey as a developer and how I got started in the tech industry!',
        },
      ],
    ],
    publishedAt: new Date('2024-12-09 08:03:02'),
    comments: [
      {
        id: 1,
        authorId: 2,
        content: [
          [
            {
              type: 'text',
              value: 'That’s so cool! Can’t wait to read it!',
            },
          ],
        ],
        publishedAt: new Date('2024-12-11 08:47:19'),
        applauses: 7,
      },
    ],
  },
  {
    id: 2,
    authorId: 2,
    content: [
      [{ type: 'text', value: 'Hey everyone 👋' }],
      [
        {
          type: 'text',
          value:
            'I’ve finally finished my new website/portfolio! It was quite a challenge to design everything and code it from scratch, but I made it 💪🏻',
        },
      ],
      [
        { type: 'text', value: 'Check it out and share your feedback 👉' },
        { type: 'link', value: 'https://www.lipsum.com/' },
      ],
      [
        { type: 'hashtag', value: '#uiux' },
        { type: 'hashtag', value: '#userexperience' },
      ],
    ],
    publishedAt: new Date('2024-12-09 21:54:30'),
    comments: [
      {
        id: 1,
        authorId: 3,
        content: [
          [{ type: 'text', value: 'Loved your new portfolio Helena!!' }],
        ],
        publishedAt: new Date('2024-12-09 22:31:19'),
        applauses: 14,
      },
      {
        id: 2,
        authorId: 4,
        content: [[{ type: 'text', value: 'Great! Congratulations! 👏👏👏' }]],
        publishedAt: new Date('2024-12-10 09:05:54'),
        applauses: 3,
      },
      {
        id: 3,
        authorId: 5,
        content: [[{ type: 'text', value: '💜💜' }]],
        publishedAt: new Date('2024-12-10 10:32:39'),
        applauses: 1,
      },
    ],
  },
  {
    id: 3,
    authorId: 3,
    content: [
      [
        {
          type: 'text',
          value:
            'Just finished reading a great book called “Sapiens: A Brief History of Humankind” by Yuval Noah Harari. It’s a must-read! 📚',
        },
      ],
      [{ type: 'text', value: 'Has anyone else read it? What did you think?' }],
    ],
    publishedAt: new Date('2024-12-10 11:22:45'),
    comments: [
      {
        id: 1,
        authorId: 2,
        content: [
          [
            {
              type: 'text',
              value: 'Yes! It’s an amazing book! I loved it too! 📖',
            },
          ],
        ],
        publishedAt: new Date('2024-12-10 12:04:30'),
        applauses: 5,
      },
      {
        id: 2,
        authorId: 1,
        content: [[{ type: 'text', value: 'One of my favorites! 🙌' }]],
        publishedAt: new Date('2024-12-10 12:35:19'),
        applauses: 2,
      },
    ],
  },
  {
    id: 4,
    authorId: 4,
    content: [
      [
        {
          type: 'text',
          value:
            'Just wrapped up an amazing workshop on SAFe Scrum! 🎓 Sharing knowledge and connecting with others in the field is always so rewarding. It’s incredible to see how much we can grow when we collaborate.',
        },
      ],
      [
        {
          type: 'text',
          value:
            'Big thanks to everyone who participated—you made it unforgettable! 🙌',
        },
      ],
    ],
    publishedAt: new Date('2024-12-10 14:50:00'),
    comments: [],
  },
];
