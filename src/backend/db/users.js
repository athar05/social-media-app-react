// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 1,
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: 2,
    firstName: "Test",
    lastName: "Tester",
    username: "tester",
    password: "Test123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: 3,
    firstName: "John ",
    lastName: "Doe",
    username: "doejohn",
    password: "IamJohnDoe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: 4,
    firstName: "Sara Ali",
    lastName: "Khan",
    username: "sakpataudi",
    password: "Sarasak123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  },
  {
    _id: 5,
    firstName: "Athar",
    lastName: "Shakeel",
    username: "athar05",
    password: "AtharShakeel123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
    bookmarks: [],
  }
];
