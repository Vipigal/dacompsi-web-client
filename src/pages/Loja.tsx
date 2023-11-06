import React, { useEffect, useState } from "react";
import StoreProductCard from "../components/StoreProductCard";
import "../assets/css/loja.css";
import { api } from "../utils/api";
import { showNotification } from "@mantine/notifications";
import { Product } from "../interfaces/Product";
import { Loader } from "@mantine/core";

// produtos exemplo

const Loja = () => {
  const [view, setView] = useState("grid");
  const [sortOption, setSortOption] = useState("relevance");
  const [productsData, setProductsData] = useState<Product[] | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getProductsData = async () => {
      try {
        const res = await api.get("/products/type/PRODUCT");
        if (res.status === 200) {
          setProductsData(res.data);
          console.log(res.data);
        } else {
          showNotification({
            message: `Erro ao recuperar produtos ${res.statusText}`,
          });
        }
      } catch (e) {
        console.log(e);
        showNotification({ message: "Erro ao recuperar produtos" });
      }
      setIsLoading(false);
    };
    getProductsData();
  }, []);

  const filteredProducts = productsData; // todo - botar logica filtragem

  return isLoading ? (
    <Loader color="red" />
  ) : (
    <div className="container px-8 mt-4">
      <div className="flex">
        <aside className="w-1/4 px-4 py-6">
          <h2 className="font-bold mb-3">FILTRAR</h2>
          <div className="mb-4">
            <div className="font-bold">Categorias</div>
            <div className="mt-2">
              <a href="#" className="text-red-600 hover:underline">
                Camisas
              </a>
            </div>
            <div className="mt-2">
              <a href="#" className="text-red-600 hover:underline">
                Produtos D.A
              </a>
            </div>
          </div>
        </aside>
        {filteredProducts && filteredProducts.length ? (
          <div className="flex-1">
            <div className="flex justify-between mb-4">
              <div>{filteredProducts?.length} Produtos</div>
              <div>
                <label htmlFor="sort">Sort by: </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="relevance">Relevance</option>
                  <option value="priceLowHigh">Price: Low to High</option>
                  <option value="priceHighLow">Price: High to Low</option>
                </select>
                <button id="viewOptionButton" onClick={() => setView("grid")}>
                  Grid
                </button>
                <button id="viewOptionButton" onClick={() => setView("list")}>
                  List
                </button>
              </div>
            </div>
            <div className={`products-display ${view}`}>
              {filteredProducts?.map((product) => (
                <StoreProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        ) : (
          <span className="flex items-center text-center justify-center font-bold w-full">
            Ainda não há produtos cadastrados na loja. Volte novamente mais
            tarde!
          </span>
        )}
      </div>
    </div>
  );
};

export default Loja;
