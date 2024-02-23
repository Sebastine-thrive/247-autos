import { FcMoneyTransfer } from "react-icons/fc";
import { FaBusinessTime } from "react-icons/fa";
import { SiCircle } from "react-icons/si";
import { IoTime } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";




export const benefitsData = [
  {
    icon: <SiCircle />,
    title: "Wholistic Servicing",
    description:
      "Import/buy, sales and delivery, repairs, pimping and maintenance for your ride.",
    className: "benefits_icon benefits__servicing rounded-[50%] p-4",
  },
  {
    icon: <FcMoneyTransfer />,
    title: "Transparent Pricing",
    description:
      "Transparent, fair pricing. See how much you will pay on cars you want.",
    className: "benefits_icon benefits__money  rounded-[50%] p-4",
  },

  {
    icon: <IoTime />,
    title: "Efficient response time",
    description: "Quick response to potential buyer requests",
    className: "benefits_icon benefits__time  rounded-[50%] p-4 ",
  },

  {
    icon: <RiTeamLine />
    ,
    title: "skilled, productive team",
    description:
      "Effective team of technicians to deliver your request promptly and professionally.",
    className: "benefits_icon benefits__technicians  rounded-[50%] p-4",
  },
  {
    icon: <FaBusinessTime />,
    title: "Find your car fast",
    description:
      "Time-saving tool to help you find the right car according to your budget fast.",
    className: "benefits_icon benefits__technicians text-red-600  flex justify-center  items-center  p-4",
  },
];
