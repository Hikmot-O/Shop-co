import star from "../assets/star.svg";
import verify from "../assets/verify.svg";
import dots from "../assets/dots.svg";

const AllReviews = () => {
  const allReviews = [
    {
      name: "Sarah M.",
      comment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      ratings: 5,
    },
    {
      name: "Alex K.",
      comment:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      ratings: 5,
    },
    {
      name: "James L.",
      comment:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      ratings: 5,
    },
    {
      name: "Sarah M.",
      comment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      ratings: 5,
    },
    {
      name: "Alex K.",
      comment:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      ratings: 5,
    },
    {
      name: "James L.",
      comment:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      ratings: 5,
    },
  ];

  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-4 md:gap-5">
        {allReviews.map((review) => (
          <div className="w-auto h-auto py-7 px-6 md:px-8 rounded-[20px] border border-[#0000001A]">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5 item-center">
                {Array.from(Array(+review.ratings.toString()[0]).keys()).map(
                  (i) => (
                    <img key={i} src={star} alt="Star Svg" className="" />
                  )
                )}
              </div>
              <div className="">
                <img src={dots} alt="Three dots" className="hidden md:flex" />
              </div>
            </div>
            <div className="mb-2 md:mb-3 pt-3 md:pt-[15px] gap-1 flex items-center">
              <h4 className="text-base md:text-xl font-[700]">{review.name}</h4>
              <img src={verify} alt="" className="w-5 h-5 md:w-auto md:h-auto" />
            </div>
            <p className="text-sm md:text-base text-[#00000099]">{review.comment}</p>
            <p className="pt-4 md:pt-6 text-sm md:text-base">Posted on August 15, 2023</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="w-full flex items-center justify-center pt-5 md:pt-9">
        <button className="border border-[#0000001A] w-[230px] h-12 md:h-[52px] text-center flex items-center justify-center text-sm md:text-base font-[500] py-4 rounded-[62px]">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default AllReviews;
