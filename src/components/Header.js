const Header = ({ title }) => {
  return (
    <header className="header">
      <h2> {title}</h2>
	  <h5 style={{ color: "gray" }}>
        https://jsonplaceholder.typicode.com/comments
      </h5>
    </header>
  );
};

Header.defaultProps = {
  title: "Hello from React",
};

export default Header;
