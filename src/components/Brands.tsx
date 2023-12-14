import { brands } from "../constants"

export default function Brands() {
    return (
        <div className="flex justify-between items-center mt-20">
            {brands.map((brand) => {
                return (
                    <img src={brand} alt="brand-logo" width={60} height={60} className="object-contain" />
                )

            })}
            {/* TODO: slider */}
        </div>
    )
}
