import Link from "next/link";

export const Menu = () => {
    return (
        <ul>
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/users'}>Users</Link>
            </li>
            <li>
                <Link href={'/posts'}>Posts</Link>
            </li>
            <li>
                <Link href={'/comments'}>Comments</Link>
            </li>
        </ul>
    );
};