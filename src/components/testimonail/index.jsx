import Image from "next/image";
import { TextAnimate } from "../TextAnimater";
// import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import PrimaryButton from "../Button";
// import PrimaryButton from "@/components/Button";
// import { PrimaryButton } from "@/components/Button"; // ✅ named import

// import  PrimaryButton  from "../Button";

const Index = () => {
  const gridItems = [
    // Left column - 3 cards
    {
      id: 1,
      userName: "Alex Johnson",
      userReview:
        "Exploring the future of artificial intelligence and its impact on modern technology. The possibilities are endless!",
      image: "photo-1485827404703-89b55fcc595e",
      span: "col-span-1 row-span-2", // Tall card
      position: "left",
    },
    {
      id: 2,
      userName: "Sarah Chen",
      userReview:
        "Building responsive and modern web applications with cutting-edge technologies has never been more exciting.",
      image: "photo-1461749280684-dccba630e2f6",
      span: "col-span-1 row-span-1", // Equal height
      position: "left",
    },
    {
      id: 3,
      userName: "Mike Rodriguez",
      userReview:
        "Latest trends in technology and innovation are shaping our digital world in amazing ways.",
      image: "photo-1518770660439-4636190af475",
      span: "col-span-1 row-span-1", // Equal height
      position: "left",
    },
    // Center column - 3 cards
    {
      id: 4,
      userName: "Emily Davis",
      userReview:
        "Creating efficient and productive digital work environments for teams is crucial for success.",
      image: "photo-1486312338219-ce68d2c6f44d",
      span: "col-span-1 row-span-1", // Equal height top
      position: "center",
    },
    {
      id: 5,
      userName: "David Kim",
      userReview:
        "Adapting to the new era of remote work and digital collaboration has transformed how we operate.",
      image: "photo-1581091226825-a6a2a5aee158",
      span: "col-span-1 row-span-1", // Equal height top
      position: "center",
    },
    {
      id: 6,
      userName: "Lisa Thompson",
      userReview:
        "Transforming raw data into actionable insights for business growth is what drives our decisions.",
      image: "photo-1488590528505-98d2b5aba04b",
      span: "col-span-1 row-span-2", // Tall card bottom
      position: "center",
    },
    // Right column - 2 cards
    {
      id: 7,
      userName: "James Wilson",
      userReview:
        "Innovative approaches to solving complex problems in the digital age require creative thinking.",
      image: "photo-1649972904349-6e44c42644a7",
      span: "col-span-1 row-span-1", // Equal height and width
      position: "right",
    },
    {
      id: 8,
      userName: "Rachel Green",
      userReview:
        "Emerging technologies that will revolutionize how we live and work are truly fascinating.",
      image: "photo-1526374965328-7f61d4dc18c5",
      span: "col-span-1 row-span-1", // Equal height and width
      position: "right",
    },
  ];

  return (
    <div className="min-h-screen  bg-[#022150] max-w-[1200px] mx-auto px-4 sm:px-6  py-30 lg:px-0">
      <div className="">
        <div className="mb-8">
          <div className="text-[#f87a09]  text-[31px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]   text-center mb-4">
            <TextAnimate as="h2" animation="blurInUp" by="word">
              Clients who stopped losing deals
            </TextAnimate>
          </div>

          <div className="text-center text-[#f87a09]  text-[14px] sm:text-[15px] lg:text-[16px]">
            <TextAnimate
              animation="blurInUp"
              as="p"
              delay={0.3}
              duration={0.5}
              className=""
              once
            >
              Join them
            </TextAnimate>
          </div>
        </div>

        {/* Desktop Layout - 3 columns */}
        <div className="hidden lg:grid grid-cols-3 gap-3 h-[750px] px-0 lg:px-4">
          {/* Left Column */}
          <div className="grid grid-rows-3 gap-2">
            {gridItems
              .filter((item) => item.position === "left")
              .map((item, index) => (
                <div
                  key={item.id}
                  className={`${
                    index === 0 ? "row-span-2" : "row-span-1"
                  } bg-[#152f59] text-white border-[#69433f] border rounded-[25px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative`}
                >
                  <div className="p-4">
                    {/* User image and name in top row */}
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=100&q=80`}
                        alt={item.userName}
                        className="w-[50px] h-[50px] rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <h3 className="text-lg font-semibold text-white">
                        {item.userName}
                      </h3>
                    </div>

                    {/* User review below */}
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.userReview}
                    </p>
                  </div>

                  {/* Bottom image only on first card */}
                  {index === 0 && (
                    <div className="p-4">
                      <Image
                        src="/chart.png"
                        alt="Bottom Image"
                        className="rounded-xl"
                        height={100}
                        width={400}
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>

          {/* Center Column */}
          <div className="grid grid-rows-3 gap-2">
            {gridItems
              .filter((item) => item.position === "center")
              .map((item, index) => (
                <div
                  key={item.id}
                  className={`${
                    index === 2 ? "row-span-2" : "row-span-1"
                  } bg-[#152f59] text-white border-[#69433f] border rounded-[25px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative`}
                >
                  <div className="p-4">
                    {/* User image and name in top row */}
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=100&q=80`}
                        alt={item.userName}
                        className="w-[50px] h-[50px] rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <h3 className="text-lg font-semibold text-white">
                        {item.userName}
                      </h3>
                    </div>

                    {/* User review below */}
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.userReview}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-2 gap-2">
            {gridItems
              .filter((item) => item.position === "right")
              .map((item) => (
                <div
                  key={item.id}
                  className="row-span-1 h-[370px] border-[#69433f] border bg-[#152f59] text-white rounded-[25px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
                >
                  <div className="p-4">
                    {/* User image and name in top row */}
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=100&q=80`}
                        alt={item.userName}
                        className="w-[50px] h-[50px] rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <h3 className="text-lg font-semibold text-white">
                        {item.userName}
                      </h3>
                    </div>

                    {/* User review below */}
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.userReview}
                    </p>
                  </div>
                  {item.id === 7 && (
                    <div className="p-4">
                      <Image
                        src="/chart.png"
                        alt="Bottom Image"
                        className="rounded-xl"
                        height={100}
                        width={400}
                      />
                    </div>
                  )}

                  {item.id === 8 && (
                    <div className="flex justify-center">
                      <Image
                        src="/graph.png"
                        alt="Bottom Image"
                        className="rounded-xl"
                        height={10}
                        width={300}
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Tablet Layout - 2 columns */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-3 auto-rows-fr">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#152f59] text-white rounded-[20px] border-[#69433f] border overflow-hidden min-h-[200px]"
            >
              <div className="p-4 h-full flex flex-col">
                {/* User image and name in top row */}
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-base font-semibold text-white">
                    {item.userName}
                  </h3>
                </div>

                {/* User review below */}
                <p className="text-sm text-gray-300 leading-relaxed flex-1">
                  {item.userReview}
                </p>

                {/* Images for specific cards */}
                {(item.id === 1 || item.id === 7) && (
                  <div className="mt-4">
                    <Image
                      src="/chart.png"
                      alt="Chart"
                      className="rounded-xl w-full"
                      height={80}
                      width={300}
                    />
                  </div>
                )}

                {item.id === 8 && (
                  <div className="flex justify-center mt-4">
                    <Image
                      src="/graph.png"
                      alt="Graph"
                      className="rounded-xl"
                      height={10}
                      width={250}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout - 1 column */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#152f59] text-white rounded-[20px] border-[#69433f] border "
            >
              <div className="p-4">
                {/* User image and name in top row */}
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-base font-semibold text-white">
                    {item.userName}
                  </h3>
                </div>

                {/* User review below */}
                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                  {item.userReview}
                </p>

                {/* Images for specific cards */}
                {(item.id === 1 || item.id === 7) && (
                  <div className="mt-3">
                    <Image
                      src="/chart.png"
                      alt="Chart"
                      className="rounded-xl w-full"
                      height={70}
                      width={280}
                    />
                  </div>
                )}

                {item.id === 8 && (
                  <div className="flex justify-center mt-3">
                    <Image
                      src="/graph.png"
                      alt="Graph"
                      className="rounded-xl"
                      height={8}
                      width={200}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrimaryButton title="Book a Call" />
    </div>
  );
};

export default Index;
