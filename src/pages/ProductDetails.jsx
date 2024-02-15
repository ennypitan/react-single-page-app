import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const params = useParams();

  return (
    <>
      <h4>This is product Details Page</h4>
      <p>{params.productId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}
export default ProductDetails;
