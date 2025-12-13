import { useEffect } from "react";

export default function Products() {
    const fetchProducts = () => {
        const container = document.getElementById("product-container");
        const loading = document.getElementById("loading");

        loading.classList.remove("hidden");
        container.innerHTML = "";

        loading.textContent = "мэдээлэл ачааллаж байна....";

        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((products) => {
                loading.classList.add("hidden");
                products.forEach((product) => {
                    const card = document.createElement("div");
                    card.className = "bg-white rounded-xl shadow-md p-5 text-center hover:-translate-y-1 transition";

                    card.innerHTML = `
            <img src="${product.image}"
              class="w-32 h-32 mx-auto obejct-contain mb-3"/>
              <h3 class="text-lg font-seimbold text-gray-800">${product.title}</h3>
              <p class="text-blue-600 font-bold text-xl mt-2">${product.price}</p>
              <p class="text-gary-500 text-sm">${product.category}</p>
            `;
                    container.appendChild(card);

                });
            })
            .catch(() => {
                loading.textContent = "Барааны мэдээлэл ачааллаж чадсангүй ";
            });
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Бүтээгдэхүүнний жагсаалт
            </h1>
            <div id="loading" className="text-center text-gray-600 mb-4">

            </div>
            <div id="product-container"
                className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
            <div className="text-center mt-6">
                <button
                    onClick={fetchProducts}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Дахин ачааллах
                </button>
            </div>
        </div>
    )
}