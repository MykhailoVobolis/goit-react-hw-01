import css from "./FriendListItem.module.css";

export default function FriendListItem({ friends: { avatar, name, isOnline } }) {
  return (
    <div className={css.friend}>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      {isOnline ? <p className={css.isOnline}>Online</p> : <p className={css.isOffline}>Offline</p>}
    </div>
  );
}
