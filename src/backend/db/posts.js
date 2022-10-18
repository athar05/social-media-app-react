import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Hello hello hello",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstname: "Adarsh",
    lastname: "Balika",
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "tester",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "doejohn",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "What's up?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstname: "Adarsh",
    lastname: "Balika",
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "sakpataudi",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Ki haal hai?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstname: "Adarsh",
    lastname: "Balika",
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "athar05",
        text: "All good mate",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "What are the best places to eat in Bangalore?",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    firstname: "Athar",
    lastname: "Shakeel",
    username: "athar05",
    createdAt: formatDate(),
    updatedAt: formatDate(),

    comments: [
      {
        _id: uuid(),
        username: "sakpataudi",
        text: "Truffles",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "doejohn",
        text: "Hole in the wall cafe!!!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Time is but a stubborn Illusion",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    firstname: "Test",
    lastname: "Tester",
    username: "tester",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
];
