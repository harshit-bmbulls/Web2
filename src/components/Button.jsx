import Link from "next/link";
import { Phone } from "lucide-react";


 const PrimaryButton = ({ title = "Call Now" }) => {
  return (
    <div className="text-center overflow-hidden w-fit mx-auto relative h-fit">
          <Link
            href={"/"}
            className="h-fit p-px relative rounded-[15px] text-sm xl:text-base   overflow-hidden"
          >
            <div className="px-4 xl:px-6 py-2.5 xl:py-3 flex gap-2 xl:gap-2.5 items-center bg-[#f87a0a]  text-white z-10 rounded-[15px] whitespace-nowrap">
              {title}
              <Phone
                size={14}
                stroke="white"
                className="group-hover:rotate-45 duration-150 ease-in xl:w-4 xl:h-4"
              />
            </div>
          </Link>
        </div>
  );
};
export default PrimaryButton