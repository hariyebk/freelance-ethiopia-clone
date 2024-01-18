import { brands } from "../../constants"

export default function Brands() {
    return (
        <div className="flex justify-between items-center mt-20">
            {brands.map((brand) => {
                return (
                    <img key={brand} src={brand} alt="brand-logo" width={80} height={80} className="object-contain mr-10" />
                )
            })}
        </div>
    )
}
