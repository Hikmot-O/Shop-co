type ProductViewProps = {
  products: {
    img: string;
    title: string;
    ratings: number;
    price: number;
    discount: number;
  }[];
};
const ProductView = (props: ProductViewProps) => {
  const { products } = props;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-4 gap-5 w-full">
        {products.map((product) => (
          <div className="">
            <div className="rounded-[20px] bg-[#F0EEED] w-auto h-[298px] mb-4"></div>
            <p className="font-[700] text-[20px]">{product.title}</p>
            <div className="text-sm gap-3 flex items-center my-2">
              <div className="flex gap-1.5 item-center">
                {/* /{newArrivals.map(newArrival =>(
                        // <img src={star} alt="Star Svg" className="" />
                        // if(newArrival.ratings !== 0) {
                        //     return (<img src="" alt="" className="" />)
                        // }
                    ))} */}
              </div>
              <p className="">
                {product.ratings}/<span className="text-[#00000099]">5</span>
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <p className="text-2xl font-bold">${product.price}</p>
              {product.discount ? (
                <p className="text-2xl text-[#00000066] font-bold line-through">
                  ${(product.discount / 100) * product.price + product.price}
                </p>
              ) : (
                ""
              )}
              {product.discount ? (
                <p className="text-xs text-[#FF3333] bg-[#FF33331A] py-1.5 px-3.5 rounded-[62px]">
                  {product.discount}%
                </p>
              ) : (
                ""
              )}
            </div>

            {/* button */}
          </div>
        ))}
      </div>
      <button className="font-[500]  text-base w-[218px] text-center mt-9 mb-16 py-4 px-[54px] rounded-[62px] border border-[#0000001A]">
        View All
      </button>
    </div>
  );
};

export default ProductView;
