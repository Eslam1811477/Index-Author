import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/dashboard">
                        <span className="hover:underline">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link href="/templates">
                        <span className="hover:underline">Templates</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
