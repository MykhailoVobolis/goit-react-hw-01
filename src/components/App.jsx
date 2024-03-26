import "./App.css";

import Profile from "./Profile";
import FriendList from "./FriendList";

import userData from "../userData.json";
import friends from "../friends.json";

export default function App() {
  return (
    <>
      <Profile user={userData} />
      <FriendList friends={friends} />
    </>
  );
}
