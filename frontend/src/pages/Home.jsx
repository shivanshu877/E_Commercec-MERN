import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  // Sample categories, replace with your actual categories
  const categories = [
    "Electronics",
    "Fashion",
    "Home & Furniture",
    "Appliances",
    "Toys & Baby Products",
    "Books",
    "Sports, Books & More",
    "Mobiles & Accessories",
  ];

  return (
    <>
      <div className="soul-tript-banner bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-6 text-center mb-3">
        <h1 className="text-4xl font-bold">Soul Tript</h1>
        <p className="text-lg">Discover Your Soulful Journey</p>
      </div>

      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
          {/* Explore Our Categories */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Explore Our Categories</h2>
            <div className="flex justify-center ml-10">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={"/shop"} // Replace with actual category route
                  className="bg-blue-600  font-bold rounded-full py-2 px-6 mr-4"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
          {/* Special Products */}
          <div className="flex justify-between items-center">
            <h1 className="ml-[20rem] mt-[1rem] text-[3rem]">
              Special Products
            </h1>

            <Link
              to="/shop"
              className="bg-blue-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[1rem]"
            >
              Shop
            </Link>
          </div>

          <div>
            <div className="flex justify-center flex-wrap mt-[2rem]">
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
