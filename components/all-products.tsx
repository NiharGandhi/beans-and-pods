import { ProductCategories } from "./product-categories"

export function AllProducts() {
    return (
        <div className="space-y-12">
            {/* Show categories overview instead of all products */}
            <ProductCategories />
        </div>
    )
}