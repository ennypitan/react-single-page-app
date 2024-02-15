import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Link to="products">
        <button>Products</button>
      </Link>
      <h1>This is the Home page</h1>
    </>
  );
}

export default HomePage;
