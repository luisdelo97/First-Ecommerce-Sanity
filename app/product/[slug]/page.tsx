import { fullProduct } from "@/app/interfase";
import { client } from "@/app/lib/sanity";

const getData = async (slug: string) => {
  const query = `*[_type == 'product' && slug.current == "${slug}"][0]{
 _id,
   images,
   price,
   name,
   description,
   "slug":slug.current,
   "categoryName":category->name
}`;
  const data = await client.fetch(query);
  return data;
};

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct = await getData(params.slug);
  return (
    <div className="bg-white">
      <div className="ms-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2"></div>
      </div>
    </div>
  );
};

export default ProductPage;
