import Link from "next/link"
export default function Navbar(){
    return(
        <div>
        <Link href="/">Home</Link>&nbsp;|&nbsp;
        <Link href="/aboutus">About Us</Link>&nbsp;|&nbsp;
        <Link href="/contactus">Contact Us</Link>&nbsp;|&nbsp;
        <Link href="/country">Country</Link>
        </div>
    )
}

