import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

export default function ListItem({data}){
    return(
        <li className="h-full relative flex items-center  py-5">
            <Link
                href={data.href}
             >
                {data.name}
            </Link>
            <div>
                <FaAngleDown/>
            </div>
        </li>
    );
}