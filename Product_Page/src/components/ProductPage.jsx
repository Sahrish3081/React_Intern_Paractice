import laptopData from "./data.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductPage() {

    const products = laptopData.map(product => {

        return (

            <ProductCard
                key={product.id}
                product={product}
            />

        )

    })

    return (

        <main>

            {products}

        </main>

    )

}