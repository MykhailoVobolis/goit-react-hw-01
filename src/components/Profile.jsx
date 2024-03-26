import css from "./Profile.module.css";

export default function Profile({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.profile}>
      <div className={css.userCard}>
        <img className={css.userAvatar} src={avatar} alt="User avatar" />
        <p className={css.userName}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.userStats}>
        <li className={css.userStatsItem}>
          <span className={css.userStatsName}>Followers</span>
          <span className={css.userStatsItemValue}>{followers}</span>
        </li>
        <li className={css.userStatsItem}>
          <span className={css.userStatsName}>Views</span>
          <span className={css.userStatsItemValue}>{views}</span>
        </li>
        <li className={css.userStatsItem}>
          <span className={css.userStatsName}>Likes</span>
          <span className={css.userStatsItemValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
