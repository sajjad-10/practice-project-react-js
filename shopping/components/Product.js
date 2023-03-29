import Link from "next/Link";
import Image from "next/Image";
export default function Product({ item }) {
    return (
        <>
            <div className="bg-white rounded-xl mb-5 block">
                <Link href={`/product/${item.slug}`}>
                    <Image width="400" height="200" src={item.image} className="rounded-t-xl"></Image>
                </Link>
                <div className="flex flex-col items-center justify-center p-5">
                    <Link href={`/product/${item.slug}`}>
                        <h2 className="text-lx">{item.title}</h2>
                    </Link>
                    <p className="p-2">{item.price}</p>
                    <button className="rounded-xl bg-gray-700 text-white px-4 py-2">
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
}
