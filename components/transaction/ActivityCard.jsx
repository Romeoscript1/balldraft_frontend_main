import Icon from "@/Reusable/Icons/Icons";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RxDownload } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { formatDistanceToNow, parseISO } from "date-fns";
import usePostData from "@/Hooks/usePostData";
import toast from "react-hot-toast";

const ActivityCard = (props) => {
  const url = process.env.NEXT_PUBLIC_API_URL;

  const { loading, postData } = usePostData();

  const deleteNotificationHandler= (id)=>{
    const apiUrl = `${url}/profile/notifications/${id}/delete/`;
    postData(apiUrl, {}, (data)=>{
      props.onDelete(id)
      toast.success('Notification deleted sucessfully')
    }, (error)=>{
      toast.error(error)
    }, 'DELETE')
  }

  let iconType= 'notify'
  if (props.type == "deposit") {
    iconType = 'topup'
  }

  if (props.type == 'withdrawal'){
    iconType = 'withdraw'
  }

  return (
    <div className="w-full flex flex-row justify-between">
      <div className="flex flex-row gap-2 items-center">
        <div
          className={`${
            iconType == "topup" ? "bg-[#0163E0]" : "bg-[#FF6D00]"
          } rounded-full w-[50px] h-[50px] flex items-center justify-center max-[324px]:hidden`}
        >
          <Icon type={iconType} />
        </div>

        <div className="flex flex-col">
          <p className="text-black font-medium">{props.subject}</p>
          <p className="text-sm">{formatDistanceToNow(parseISO(props.date), { addSuffix: true })}</p>
        </div>
      </div>

      <Popover>
        <PopoverTrigger>
          <div className="max-[330px]:w-[30px] max-[330px]:h-[30px] w-[40px] h-[40px] bg-[#F2F2F2] rounded-full flex items-center justify-center cursor-pointer">
            <HiOutlineDotsVertical />
          </div>
        </PopoverTrigger>

        <PopoverContent className="bg-white rounded-md w-max">
          <div className="w-full flex flex-col gap-3">
            {/* <div className="flex flex-row cursor-pointer items-center gap-2">
                <RxDownload className="fill-black" color="#000000"/>
                <p className="text-black">Archive</p>
            </div> */}

            <div className="flex flex-row cursor-pointer items-center gap-2" onClick={deleteNotificationHandler.bind(null, props.id)}>
                <RiDeleteBin6Line className="fill-[#FF0000]" color="#FF0000"/>
                <p className="text-black">Delete activity</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ActivityCard;
