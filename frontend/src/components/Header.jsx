import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";

const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <>
      <div className="flex justify-around">
        <div className="xl:block lg:hidden md:hidden sm:hidden pl-36">
          <div className="grid grid-cols-2">
            <h1 className="text-5xl font-extrabold text-white tracking-wide leading-tight shadow-lg  px-12 py-4 rounded-md">
              Welcome to Our Online Marketplace
              <br />
              Discover the Best Deals Today!
            </h1>
          </div>
        </div>
        <ProductCarousel />
      </div>
    </>
  );
};

export default Header;
