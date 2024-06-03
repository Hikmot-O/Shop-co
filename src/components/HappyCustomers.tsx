import React from "react";
import star from "../assets/star.svg";
import verify from "../assets/verify.svg";

const happyCustomers = [
//   {
//     name: "Sarah M.",
//     comment:
//       "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
//     ratings: 5,
//   },
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
//   {
//     name: "Mooen H.",
//     comment:
//       "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
//     ratings: 5,
//   },
];

const HappyCustomers = () => {
  return (
    <div className="px-20 flex justify-center items-center gap-5 w-full">
      {happyCustomers.map((customer) => (
        <div className="min-w-[400px] h-[240px] py-7 px-8 rounded-[20px] border border-[#0000001A]">
          <div className="flex gap-1.5 item-center">
            {Array.from(Array(+customer.ratings.toString()[0]).keys()).map(
              (i) => (
                <img key={i} src={star} alt="Star Svg" className="" />
              )
            )}
          </div>
          <div className="mb-3 pt-[15px] gap-1 flex items-center">
            <h4 className="text-xl font-[700]">{customer.name}</h4>
            <img src={verify} alt="" className="" />
          </div>
          <p className="text-base text-[#00000099]">{customer.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default HappyCustomers;
