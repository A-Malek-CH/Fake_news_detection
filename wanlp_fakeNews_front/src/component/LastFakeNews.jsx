function LastFakeNews() {
  return (
    <div className="my-12">
      <div className="p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">آخر الأخبار الرائجة</h2>
        <ul className="space-y-4">
          {[1, 2, 3].map((item) => (
            <li
              key={item}
              className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200"
              dir="rtl"
            >
              <h3 className="font-medium text-gray-900 mb-1">عنوان الخبر المزيف {item}</h3>
              <p className="text-gray-600 text-sm">تم التحقق من هذا الخبر وتبين أنه غير صحيح...</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-amber-500 text-xs">منذ {item} ساعات</span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs">خبر مزيف</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LastFakeNews;

