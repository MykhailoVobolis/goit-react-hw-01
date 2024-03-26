import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friends) => (
        <li key={friends.id}>
          <FriendListItem friends={friends} />
        </li>
      ))}
    </ul>
  );
}
