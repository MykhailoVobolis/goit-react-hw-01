import FriendListItem from "../FriendListItem/FriendListItem";

import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((friends) => (
        <li key={friends.id}>
          <FriendListItem friends={friends} />
        </li>
      ))}
    </ul>
  );
}
