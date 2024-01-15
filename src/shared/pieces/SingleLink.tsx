
interface LinkProps {
    link: {
        path: string,
        label: string
    }
}
export default function SingleLink({link}: LinkProps) {
    return (
        <li key={link.label} className="max-lg:mt-3 font-normal text-md text-gray-500 hover:text-primary">
            <a href={link.path}> {link.label}  </a>
        </li>
    )
}
