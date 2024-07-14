import React, { useEffect, useState } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import { useCart } from "../../CartContext";
import { search, fill, shoppingcart } from "../../assets/Index";

const ProductStore = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false); 
  const itemsPerPage = 10;
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init({ duration: 700 });

    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://api.timbu.cloud/products?organization_id=0dc9ac0c03574086ad33de39ec7bf281&Appid=SREBVD43CPA8C50&Apikey=f0a615c5a3e04c908034b7bf32f9aee020240712184249231985");
        const data = await response.data;
        console.log(data);
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const priorityProductIds = [
    "3222be75d0b74c48b06080674b5ccd7f",
    "86fbd85909e5419ebdb143c2ca8d69e8",
    "4ffb359f6dd443da854a7fad1fad165e",
    "71ef1a1c5d0948ec88d6a02636d34897",
    "ae241c5c664f423781040a1e53ae5d1a",
    "d58716d2e2964fbaa0b34d1c4b699471",
    "919f6f9a8a054f04a349d52ff08581d6",
    "8095060fce44484d85f1f4ecb744fa64",
    "480039fed2c84b01b160616b9cb6590b",
    "334a16af0e374362b2c1092a124b2119",
    "e57cb37ac9fe45f286cfefab80683efc",
    "d442d55f33e9408aa9611db1dc73b40d",
    "a1a4255750f54c828cd653541e5fa924",
    "8931df9db1104a7a8878123da89b262b",
    "62e0b035ee7f42c2b4d95626647af92e",
    "ec3e4f06283d410e9e4ff28ae858e83f",
    "62e0b035ee7f42c2b4d95626647af92e",
    "a0e9282489e9479fb2d68cd1d2a639a2",
    "37aabec3b184407b8d2778cc495c2323",
    "93649e9c95c84055ba112bffdb6f5c89",
    "5a4ed1b07bfd4b27ad0c6ebdd8f051cf",
    "143c853c387145ca8629dfe13c3b0741",
    "f81716a0429d4956adf642fb04532cab",
    "6d10134c8c7542f0b1015f7373288304",
    "9a3b108860fc4a9287e612245a2f44a4",
    "8aa56af6572c4c07ba4f208cb86de1ef",
  ];

  const reorderProducts = (products) => {
    const priorityMap = new Map(priorityProductIds.map((id, index) => [id, index]));

    const sortedProducts = products.slice().sort((a, b) => {
      const aIndex = priorityMap.get(a.id) ?? Infinity;
      const bIndex = priorityMap.get(b.id) ?? Infinity;
      return aIndex - bIndex;
    });

    return sortedProducts;
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = reorderProducts(filteredProducts).slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchClick = () => {
    setShowSearch((prevShowSearch) => !prevShowSearch);
  };

  return (
    <div className="w-[90%] m-auto flex flex-col gap-5 my-5" style={{ fontFamily: "poppins" }}>
      <div className="hidden lg:flex justify-between items-center mx-auto w-full my-5">
        <ul className="text-[#5a5555] flex justify-between w-[60%]">
          <li className="text-[#589c32]">All Products</li>
          <li>Vegetables</li>
          <li>Fruits</li>
          <li>Organic</li>
          <li>Packaged</li>
        </ul>
        <div className="flex justify-between items-center w-[10%]">
          <div onClick={handleSearchClick} style={{ cursor: "pointer" }}>
            <img src={search} alt="Search" title="click to search for products"/>
          </div>
          <div>
            <img src={fill} alt="Filter" />
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="flex justify-center items-center w-full my-5">
          <div className="relative w-[50%]">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search products..."
              className="w-full p-2 border rounded outline-none"
            />
            <img
              src={search}
              alt="Search"
              className="absolute right-2 top-2"
              width={20}
              height={20}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 w-full gap-5">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            data-aos="fade-up"
            className="bg-[#fafafa] h-[399px] w-full rounded-2xl flex flex-col"
          >
            <p className={`bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff]`}>
              12%
            </p>
            <div className="flex justify-center items-center m-auto">
              <div className="flex flex-col items-center gap-2">
                <div>
                  <img
                    src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
                    alt={product.name}
                    width={85}
                  />
                </div>
                <p className="font-semibold text-[18px] text-[#0a0b0a]">
                  {product.name}
                </p>
                <p className="text-[#488129]">
                  ₦{product.current_price[0]?.NGN[0]}
                </p>
                <p className="text-[#9f9c9c] line-through">
                  ₦{product.discounted_price}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  title="Click to add to your cart"
                  className="bg-[#7AC74F] p-2 rounded-lg text-[#fff] flex justify-center items-center"
                >
                  <img src={shoppingcart} alt="Cart" /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-lg ${currentPage === 1 ? "bg-gray-400" : "bg-[#7AC74F]"} text-white`}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(filteredProducts.length / itemsPerPage)}
          className={`p-2 rounded-lg ${currentPage >= Math.ceil(filteredProducts.length / itemsPerPage) ? "bg-gray-400" : "bg-[#7AC74F]"} text-white`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductStore;
