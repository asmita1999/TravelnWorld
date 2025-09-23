import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
 
import Img1 from "../../assets/images/verifiedCustomers/img1.jpeg";
import Img2 from "../../assets/images/verifiedCustomers/img2.jpeg";
import Img3 from "../../assets/images/verifiedCustomers/img3.jpeg";
import Icon1 from "../../assets/images/icons/icon1.jpeg";
import Icon2 from "../../assets/images/icons/icon2.jpeg";
import Icon3 from "../../assets/images/icons/icon3.jpeg";
import Icon4 from "../../assets/images/icons/icon4.jpeg";
 
const PIXELS_PER_SECOND = 60;
const PAUSE_DURATION = 1000;
const CARD_WIDTH = 320;
const CARD_GAP = 16;
const REPS = 3;
 
const combinedData = [
  {
    image: Img1,
    name: "Rajat",
    profile: Icon1,
    text: "Sitaaram Travels Pvt Ltd is an excellent choice for travel needs. They are always prompt in making reservations and provide fast responses to queries.",
    time: "00:17 PM",
    date: "31 Dec, 2024",
  },
  {
    image: Img2,
    name: "Krish",
    profile: Icon2,
    text: "Sitaaram Travels Pvt Ltd offers excellent deals and discounts. Their service is top-notch and their packages are budget-friendly. I highly recommend them.",
    time: "06:47 PM",
    date: "04 Mar, 2024",
  },
  {
    image: Img3,
    name: "Rahul",
    profile: Icon3,
    text: "I had a great experience with Sitaaram Travels Pvt Ltd. They provided excellent customer service which was very helpful for my trip planning.",
    time: "09:36 AM",
    date: "29 Jan, 2024",
  },
  {
    image: Img1,
    name: "Nehal",
    profile: Icon4,
    text: "Booking was smooth and easy. The team guided me with best offers. My family trip turned out to be amazing because of them!",
    time: "11:15 AM",
    date: "15 Feb, 2024",
  },
];
 
const HappyCustomer = () => {
  const scrollRef = useRef(null);
  const pauseTimeout = useRef(null);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
 
  const [modalIndex, setModalIndex] = useState(null);
 
  const marqueeData = [];
  for (let i = 0; i < REPS; i++) marqueeData.push(...combinedData);
 
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);
 
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
 
    const imgs = container.querySelectorAll("img");
    const notLoaded = Array.from(imgs).filter((img) => !img.complete);
 
    const waitForImages = () =>
      new Promise((resolve) => {
        if (notLoaded.length === 0) return resolve();
        let loaded = 0;
        notLoaded.forEach((img) =>
          img.addEventListener(
            "load",
            () => {
              loaded += 1;
              if (loaded === notLoaded.length) resolve();
            },
            { once: true }
          )
        );
        setTimeout(resolve, 500);
      });
 
    let singleWidth = 0;
 
    const startLoop = async () => {
      await waitForImages();
      singleWidth = container.scrollWidth / REPS || 1;
      let last = performance.now();
 
      const step = (now) => {
        const dt = now - last;
        last = now;
 
        if (!isPausedRef.current) {
          const distance = (PIXELS_PER_SECOND * dt) / 1000;
          container.scrollLeft += distance;
          if (container.scrollLeft >= singleWidth) {
            container.scrollLeft -= singleWidth;
          }
        }
 
        rafRef.current = requestAnimationFrame(step);
      };
 
      rafRef.current = requestAnimationFrame(step);
    };
 
    startLoop();
 
    const handleResize = () => {
      singleWidth = container.scrollWidth / REPS || 1;
    };
 
    window.addEventListener("resize", handleResize);
 
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 
  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const amount =
      direction === "next" ? CARD_WIDTH + CARD_GAP : -(CARD_WIDTH + CARD_GAP);
    setIsPaused(true);
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setIsPaused(false), PAUSE_DURATION);
  };
 
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const handleTouchStart = (e) =>
    (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const deltaX = touchEndX.current - touchStartX.current;
    if (Math.abs(deltaX) > 50) handleScroll(deltaX < 0 ? "next" : "prev");
  };
 
  const openModal = (index) => {
    setModalIndex(index % combinedData.length);
    document.body.style.overflow = "hidden";
  };
 
  const closeModal = () => {
    setModalIndex(null);
    document.body.style.overflow = "auto";
  };
 
  const nextModal = () => {
    setModalIndex((prev) => (prev + 1) % combinedData.length);
  };
 
  const prevModal = () => {
    setModalIndex(
      (prev) => (prev - 1 + combinedData.length) % combinedData.length
    );
  };
 
  return (
    <div className="relative w-full py-6">
      <h1 className="text-xl font-bold mb-4">Our Happy Customers</h1>
 
      <div
        ref={scrollRef}
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex gap-4 items-stretch" style={{ width: "max-content" }}>
          {marqueeData.map((item, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="cursor-pointer min-w-[320px] max-w-[320px] bg-white border border-gray-500 rounded-lg shadow-md flex-shrink-0 flex flex-col overflow-hidden
              hover:scale-[1.02] transition-transform
              [transform:translateZ(0)] [backface-visibility:hidden] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={item.profile}
                    alt={item.name}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <span className="font-bold text-gray-900">{item.name}</span>
                </div>
                <p className="text-sm font-medium text-gray-800 mb-2 line-clamp-3">
                  {item.text}{" "}
                  <span className="text-blue-600 cursor-pointer font-semibold">
                    ...More
                  </span>
                </p>
                <p className="text-xs font-medium text-gray-600">
                  {item.time} • {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      <button
        onClick={() => handleScroll("prev")}
        className="absolute top-1/2 -translate-y-1/2 left-0 bg-white border rounded-full shadow-md p-2 hover:bg-gray-100"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => handleScroll("next")}
        className="absolute top-1/2 -translate-y-1/2 right-0 bg-white border rounded-full shadow-md p-2 hover:bg-gray-100"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>
 
      {modalIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg max-w-lg w-full p-6 shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform"
            >
              <X size={20} className="text-red-600" />
            </button>
            <div className="w-full h-56 rounded-md overflow-hidden mb-4">
              <img
                src={combinedData[modalIndex].image}
                alt={combinedData[modalIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={combinedData[modalIndex].profile}
                alt={combinedData[modalIndex].name}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <h2 className="text-lg font-bold">
                  {combinedData[modalIndex].name}
                </h2>
                <p className="text-xs font-medium text-gray-600">
                  {combinedData[modalIndex].time} • {combinedData[modalIndex].date}
                </p>
              </div>
            </div>
            <p className="text-gray-800 font-medium mb-4">
              {combinedData[modalIndex].text}
            </p>
            <div className="flex justify-between">
              <button
                onClick={prevModal}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 flex items-center gap-1 font-semibold"
              >
                <ChevronLeft size={18} /> Prev
              </button>
              <button
                onClick={nextModal}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 flex items-center gap-1 font-semibold"
              >
                Next <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default HappyCustomer;