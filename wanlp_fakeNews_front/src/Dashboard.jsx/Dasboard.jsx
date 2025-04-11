import { useState } from 'react';

function Dashboard() {
  const [analysisData] = useState({
    credibilityScore: 85,
    contentAnalysis: {
      emotionalLanguage: 65,
      factualContent: 75,
      sourceReliability: 80,
      clickbaitScore: 45
    },
    technicalIndicators: {
      grammarScore: 90,
      styleConsistency: 85,
      referencePresence: 70
    },
    sourceMetrics: {
      domainAge: "5+ years",
      authorCredibility: "High",
      citationCount: 12
    }
  });

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">تحليل الأخبار المزيفة</h2>
          <p className="text-xl text-gray-300">تقرير تفصيلي عن مصداقية المحتوى</p>
        </div>

        {/* Main Score */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="relative">
                <svg className="w-32 h-32">
                  <circle
                    className="text-gray-700"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="56"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-blue-500"
                    strokeWidth="10"
                    strokeDasharray={350.8889}
                    strokeDashoffset={350.8889 * (1 - analysisData.credibilityScore / 100)}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="56"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{analysisData.credibilityScore}%</span>
                </div>
              </div>
              <p className="mt-4 text-xl font-semibold text-white">درجة المصداقية</p>
            </div>
          </div>
        </div>

        {/* Analysis Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4 text-right">تحليل المحتوى</h3>
            <div className="space-y-4">
                <div className="flex justify-between items-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 font-medium">لغة عاطفية</span>
                    <span className="text-gray-300">{analysisData.contentAnalysis.emotionalLanguage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-blue-500 rounded-full h-2.5 transition-all duration-500 ease-out"
                      style={{ width: `${analysisData.contentAnalysis.emotionalLanguage}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 font-medium">محتوى واقعي</span>
                    <span className="text-gray-300">{analysisData.contentAnalysis.factualContent}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-green-500 rounded-full h-2.5 transition-all duration-500 ease-out"
                      style={{ width: `${analysisData.contentAnalysis.factualContent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4 text-right">مؤشرات تقنية</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-gray-300">{analysisData.technicalIndicators.grammarScore}%</div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-300">دقة لغوية</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-300">{analysisData.technicalIndicators.styleConsistency}%</div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-300">تناسق الأسلوب</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-300">{analysisData.technicalIndicators.referencePresence}%</div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-300">وجود المراجع</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Source Information */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 text-right">معلومات المصدر</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right">
            <div className="p-4 bg-gray-700 rounded-lg">
              <div className="text-sm text-gray-400">عمر النطاق</div>
              <div className="text-lg font-semibold text-white">{analysisData.sourceMetrics.domainAge}</div>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg">
              <div className="text-sm text-gray-400">مصداقية الكاتب</div>
              <div className="text-lg font-semibold text-white">{analysisData.sourceMetrics.authorCredibility}</div>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg">
              <div className="text-sm text-gray-400">عدد الاستشهادات</div>
              <div className="text-lg font-semibold text-white">{analysisData.sourceMetrics.citationCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;