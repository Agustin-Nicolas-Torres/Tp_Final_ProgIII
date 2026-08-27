import FrontPage from "../components/front_page";
import { useState } from "react";

export default function UserAuth() {
  const [user, setuser] = useState({ username:"", password:""});

}
export const userList = [
  {
    id: 1,
    nameuser: "admin",
    password: "admin",
  },
];
