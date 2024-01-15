
interface LinkProps {
    link: {
        path: string,
        label: string
    }
}
export default function SingleLink({link}: LinkProps) {
    return (
        <li key={link.label} className="block bg-white max-lg:mt-3 font-normal text-md text-gray-500 hover:text-primary z-40">
            <a href={link.path}> {link.label}  </a>
        </li>
    )
}
