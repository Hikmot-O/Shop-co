import star from "../assets/star.svg";
import starhalf from "../assets/starhalf.svg";

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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 w-full">
        {products.map((product, i) => (
          <div key={i} className="">
            <div className="rounded-[20px] bg-[#F0EEED] w-auto h-[200px] md:h-[298px] mb-2.5 md:mb-4"></div>
            <p className="font-[700] text-base md:text-[20px]">{product.title}</p>
            <div className="text-sm gap-3 flex items-center my-1 md:my-2">
              <div className="flex gap-[4.44px] md:gap-1.5 item-center">
                {Array.from(Array(+product.ratings.toString()[0]).keys()).map(
                  (i) => (
                    <img key={i} src={star} alt="Star Svg" className="h-4 w-4 md:h-auto md:w-auto" />
                  )
                )}
                {product.ratings.toString().includes(".") ? (
                  <img
                    key={i}
                    src={starhalf}
                    alt="Half-star Svg"
                    className="h-4 w-[7.35px] md:h-auto md:w-auto"
                  />
                ) : (
                  ""
                )}
              </div>
              <p className="text-xs md:text-sm">
                {product.ratings}/<span className="text-[#00000099]">5</span>
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <p className="text-xl md:text-2xl font-bold">${product.price}</p>
              {product.discount ? (
                <p className="text-xl md:text-2xl text-[#00000066] font-bold line-through">
                  ${(product.discount / 100) * product.price + product.price}
                </p>
              ) : (
                ""
              )}
              {product.discount ? (
                <p className="flex items-center justify-center text-[10px] md:text-xs text-[#FF3333] bg-[#FF33331A] w-[42px] h-5 md:w-auto md:h-auto py-1.5 px-3.5 rounded-[62px]">
                  -{product.discount}%
                </p>
              ) : (
                ""
              )}
            </div>

            {/* button */}
          </div>
        ))}
      </div>
      <button className="font-[500] text-sm sm:text-base w-full sm:w-[218px] text-center mt-6 sm:mt-9 mb-10 sm:mb-16 py-4 px-[54px] rounded-[62px] border border-[#0000001A]">
        View All
      </button>
    </div>
  );
};

export default ProductView;
