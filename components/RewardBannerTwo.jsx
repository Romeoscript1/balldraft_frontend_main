import React from "react";
import Icon from "@/Reusable/Icons/Icons";
import gift from "@/public/images/giftbox.png";
import toast from "react-hot-toast";
const RewardBannerTwo = (props) => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const referralLink = `${url}/Auth/join?ref=${props.profile.username}`;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        toast.success("Rererral link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center w-[100%] sm:h-[300px] rounded-xl overflow-hidden">
      <div className="flex flex-row w-full sm:w-[70%] h-full py-10 px-4 bg-[#2B4565] bg-line-bg bg-no-repeat bg-cover bg-center">
        <div className="">
          <h2 className="text-xl text-white font-medium">Earn Reward</h2>
          {/* <p className="mt-[1rem] text-white leading-[2.5]">
            Refer a friend to Balldraft and earn a bonus of <span className="text-[#F9D848]">₦15</span>. For every
            friend you refer who registers for Balldraft, you’ll receive a <span className="text-[#F9D848]">₦15 </span>
             bonus
          </p> */}
          <p className="mt-[1rem] text-white leading-[2.5]">
            Invite your friends to join and get rewarded! Share the experience
            and enjoy a little something extra for each person who comes on
            board.
          </p>
          <button className="text-white px-4 py-[0.7rem] border-[1px] border-white rounded-full mt-[1rem] flex flex-row items-center gap-3" onClick={copyToClipboard}>
            Copy link <Icon type="copylink" />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full sm:w-[30%] h-full bg-[#E6F4FF] ">
        <img src={gift.src} alt="" className="object-cover object-center" />
      </div>
    </div>
  );
};

export default RewardBannerTwo;
