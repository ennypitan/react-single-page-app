import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import Error from "./pages/Error";

const elementRouter = createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Error />}>
    <Route path="/" element={<HomePage />} />
    <Route path="products" element={<Products />} />
  </Route>
);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       {
//         path: "products",
//         element: <Products />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(elementRouter);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
