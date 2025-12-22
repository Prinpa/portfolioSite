import Link from "next/link";
export function TopNav() {
    return (
        <>
        <nav className={"navbar"}>
            <Link href={'/products'} className="navbar-item"><span>products</span></Link>
            <Link href={'/holding'} className="navbar-item">holding</Link>

        </nav>
        </>
    )
}