import './auth-header.css';

export function AuthHeader(props) {
  const { headerText } = props;

  return (
    <div className="auth-header">
      <img
        src={`${process.env.PUBLIC_URL}logo.png`}
        alt="FindPasttime"
        className="auth-header__logo"
      />
      <h1>{headerText}</h1>
    </div>
  );
}

