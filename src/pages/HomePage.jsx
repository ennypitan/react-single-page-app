import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };
  return (
    <>
      <h1>This is the Home page</h1>
      <button onClick={handleNavigate}>Go to product Page</button>
    </>
  );
}

export default HomePage;
