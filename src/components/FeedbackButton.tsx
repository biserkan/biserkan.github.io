import { useState, useEffect } from "react";

export function FeedbackButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const isAtBottom = scrollTop + winHeight >= docHeight - 100;
      setIsVisible(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.open("https://forms.gle/zkeNTbc6p3Xthuvn8", "_blank")}
      className={`fixed bottom-4 left-4 bg-white text-slate-800 px-4 py-2.5 rounded-none shadow-xl font-medium text-sm z-50 border border-slate-200 cursor-pointer transition-all duration-500 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4 pointer-events-none"
      } hover:shadow-2xl hover:scale-105`}
    >
      Geri Bildirim
    </button>
  );
}