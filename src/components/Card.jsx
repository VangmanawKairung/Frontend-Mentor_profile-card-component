import AvatarVictor from "../assets/image-victor.jpg";

const STAT_DATA = [
  { value: "80K", label: "Followers" },
  { value: "803K", label: "Likes" },
  { value: "1.4K", label: "Photos" },
];

const Card = () => {
  return (
    <article className="profile-card">
      <div className="profile-card__hero">
        <img
          src={AvatarVictor}
          alt="Victor Crest"
          className="profile-card__avatar"
        />
        <h1 className="profile-card__name">
          Victor Crest{" "}
          <span className="profile-card__age" aria-label="26 years old">
            26
          </span>
        </h1>
        <p className="profile-card__city">London</p>
      </div>
      <ul className="profile-card__stats" aria-label="User statistics">
        {STAT_DATA.map((stat) => (
          <li key={stat.label} className="profile-card__stat">
            <span className="profile-card__stat-value">{stat.value}</span>
            <span className="profile-card__stat-label">{stat.label}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Card;
