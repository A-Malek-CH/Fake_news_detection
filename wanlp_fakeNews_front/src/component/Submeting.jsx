import { useState } from "react";
import imageIcon from "../assets/photo.svg";

function SubmitNews() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [inputType, setInputType] = useState("text");
  const maxChars = 1500;

  const handleSubmit = async () => {
    if (!text.trim()) return;
    setIsLoading(true);
    // Simulate API call - replace with actual implementation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] py-8 px-4">
      <div className="w-full max-w-lg bg-white/70 rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            className="bg-amber-300 px-4 py-2 rounded-lg text-gray-900 font-medium hover:bg-amber-400 transition-colors"
            dir="rtl"
          >
            <option value="text">نص</option>
            <option value="link">رابط</option>
          </select>
          <h2 className="text-xl font-bold text-gray-800">تحليل الأخبار المزيفة</h2>
        </div>

        {/* Main Input Area */}
        <div className="relative mt-4">
          <textarea
            name="submit"
            value={text}
            onChange={(e) => {
              if (e.target.value.length <= maxChars) {
                setText(e.target.value);
              }
            }}
            className="w-full h-60 rounded-xl bg-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white border border-gray-200 placeholder:text-gray-500 text-right resize-none"
            placeholder={inputType === "text" ? "انسخ نص الخبر ..." : "انسخ رابط الخبر ..."}
            dir="rtl"
          />
          
          {/* Character Counter */}
          <div className="absolute bottom-3 left-3 text-gray-500 text-sm">
            {text.length}/{maxChars}
          </div>

          {/* Image Upload Button */}
          <button className="absolute bottom-3 right-3 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <span className="ml-2">إستعمال صورة</span>
            <img src={imageIcon} alt="upload image" className="w-5 h-5" />
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            disabled={!text.trim() || isLoading}
            className="bg-amber-500 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-amber-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {isLoading ? "جاري التحليل..." : "تحليل الخبر"}
          </button>
        </div>

        {/* Loading Progress */}
        {isLoading && (
          <div className="mt-6">
            <div className="w-full h-2 bg-gray/20 rounded-full overflow-hidden">
              <div className="bg-amber-500 h-full w-2/3 rounded-full animate-pulse"></div>
            </div>
            <p className="text-amber-600 text-center mt-2 text-sm">
              جاري تحليل الخبر... يرجى الانتظار
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SubmitNews;
