export const Avatar = (props) => {
  return (
    <div
      className="avatar"
      style={{
        background: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: '#3f51b5',
      }}
    >
    </div>
  );
}
