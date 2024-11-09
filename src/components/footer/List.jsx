import Link from "next/link";

export default function List({ title, links }) {
    return (
        <div className="w-full px-2">
            <div className="flex items-center justify-between mb-4">
                <h1 className="w-[90px] text-nowrap text-2xl yekanbakhFat">
                    {title}
                </h1>
                <div
                    className="w-[40%] h-[9px] opacity-30 my-auto"
                    style={{
                        backgroundImage: "url('/img/line.png')"
                    }}
                >

                </div>
            </div>

            <ul className="mt-6 text-gray-700">
                {links.map((link, index) => {
                    return (
                        <li key={index} className="w-full my-2 h-[32px] pr-2 text-sm flex items-center transition duration-600 hover:text-white hover:bg-yellow-500">
                            <Link href="/">
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}