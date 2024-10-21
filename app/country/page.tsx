import Link from "next/link"

export default function Country(){
    return(
        <div>
            <li><Link href="/country/pakistan">Pakistan</Link></li>
            <li><Link href="/country/india">India</Link></li>
        </div>
    )
}