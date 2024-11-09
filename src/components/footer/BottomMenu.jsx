import Link from "next/link";


export default function BottomMenu(){
    return (
        <div className="flex justify-center pb-10 yekanbakhHeavy">
            <ul className="flex gap-6 items-center">
                <li>
                    <Link href={""}>
                        درباره علی‌بابا
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        تماس با ما
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        فرصت‌های شغلی
                    </Link>
                </li>
            </ul>
        </div>
    )
}