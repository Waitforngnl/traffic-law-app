import { useState } from 'react';
import { Search, Book, MessageSquare, FileText, AlertCircle, Sparkles, Scale } from 'lucide-react';

import { trafficLawData } from './trafficLawData';

interface Regulation {
  id: string;
  article: string;
  title: string;
  content: string;
  chapter: string;
  keyphrases: string[];
}

interface QAData {
  question: string;
  answer: string;
  regulationId: string;
}

interface QAAnswer {
  question: string;
  answer: string;
  regulation: Regulation | null;
}

const TrafficLawQASystem = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'qa'>('search');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [questionInput, setQuestionInput] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Regulation[]>([]);
  const [qaAnswer, setQaAnswer] = useState<QAAnswer | null>(null);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isAnswering, setIsAnswering] = useState<boolean>(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = trafficLawData.regulations.filter(reg => {
        const matchContent = reg.content.toLowerCase().includes(query);
        const matchTitle = reg.title.toLowerCase().includes(query);
        const matchArticle = reg.article.toLowerCase().includes(query);
        const matchKeyphrases = reg.keyphrases.some(kp => 
          kp.toLowerCase().includes(query) || query.includes(kp.toLowerCase())
        );
        return matchContent || matchTitle || matchKeyphrases || matchArticle;
      });

      setSearchResults(results);
      setIsSearching(false);
    }, 400);
  };

  const handleQuestion = () => {
    if (!questionInput.trim()) return;

    setIsAnswering(true);
    setQaAnswer(null);

    setTimeout(() => {
      const query = questionInput.toLowerCase();
      
      let bestMatch: QAData | null = null;
      let highestScore = 0;

      trafficLawData.qaData.forEach(qa => {
        const questionWords = qa.question.toLowerCase().split(' ');
        const queryWords = query.split(' ');
        
        let score = 0;
        queryWords.forEach(word => {
          if (word.length > 2 && questionWords.some(qw => qw.includes(word) || word.includes(qw))) {
            score++;
          }
        });

        if (score > highestScore) {
          highestScore = score;
          bestMatch = qa;
        }
      });

      if (bestMatch && highestScore > 0) {
        const regulation = trafficLawData.regulations.find(r => r.id === bestMatch!.regulationId);
        setQaAnswer({
          ...bestMatch,
          regulation: regulation || null
        });
      } else {
        setQaAnswer({
          question: questionInput,
          answer: 'Xin lỗi, tôi không tìm thấy câu trả lời phù hợp trong Luật Giao thông đường bộ. Vui lòng thử đặt câu hỏi khác hoặc sử dụng chức năng tìm kiếm để tra cứu trực tiếp các điều luật.',
          regulation: null
        });
      }

      setIsAnswering(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <Scale className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">Hệ Thống Tra Cứu Luật Giao Thông Đường Bộ</h1>
              <p className="text-blue-100 text-sm mt-1">Luật Đường bộ số 36/2024/QH15 - Có hiệu lực từ 01/01/2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('search')}
              className={`flex-1 px-6 py-4 font-medium transition-all flex items-center justify-center gap-2 ${
                activeTab === 'search'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Search className="w-5 h-5" />
              Tra Cứu Điều Luật
            </button>
            <button
              onClick={() => setActiveTab('qa')}
              className={`flex-1 px-6 py-4 font-medium transition-all flex items-center justify-center gap-2 ${
                activeTab === 'qa'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              Hỏi Đáp Pháp Luật
            </button>
          </div>

          <div className="p-6">
            {/* Search Tab */}
            {activeTab === 'search' && (
              <div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tìm kiếm điều luật, quy định
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                      placeholder="Nhập từ khóa: vận tải, tốc độ, hành khách, hàng hóa, cao tốc..."
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleSearch}
                      disabled={isSearching}
                      className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 flex items-center gap-2 font-medium"
                    >
                      <Search className="w-5 h-5" />
                      Tìm
                    </button>
                  </div>
                </div>

                {isSearching ? (
                  <div className="text-center py-16">
                    <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent mb-4"></div>
                    <p className="text-gray-600">Đang tìm kiếm...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800 text-lg mb-4 flex items-center gap-2">
                      <Book className="w-5 h-5 text-blue-600" />
                      Tìm thấy {searchResults.length} kết quả
                    </h3>
                    {searchResults.map(result => (
                      <div key={result.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-white">
                        <div className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-2">
                                  {result.article}
                                </span>
                                <h4 className="font-bold text-gray-900 text-lg">{result.title}</h4>
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-3">{result.chapter}</p>
                            <p className="text-gray-700 leading-relaxed mb-3">{result.content}</p>
                            <div className="flex flex-wrap gap-2">
                              {result.keyphrases.map((kp: string, idx: number) => (
                                <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full font-medium">
                                  {kp}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : searchQuery ? (
                  <div className="text-center py-16">
                    <AlertCircle className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 text-lg">Không tìm thấy kết quả phù hợp</p>
                    <p className="text-gray-500 text-sm mt-2">Thử sử dụng từ khóa khác</p>
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-600 text-lg mb-2">Nhập từ khóa để tìm kiếm</p>
                    <p className="text-gray-500 text-sm">Ví dụ: "vận tải hành khách", "tốc độ", "đường cao tốc"</p>
                  </div>
                )}
              </div>
            )}

            {/* Q&A Tab */}
            {activeTab === 'qa' && (
              <div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    Đặt câu hỏi về Luật Giao thông đường bộ
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={questionInput}
                      onChange={(e) => setQuestionInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleQuestion()}
                      placeholder="Ví dụ: Hành khách có những quyền gì? Khi nào được thi công trên đường?"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleQuestion}
                      disabled={isAnswering}
                      className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 flex items-center gap-2 font-medium"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Hỏi
                    </button>
                  </div>
                </div>

                {isAnswering ? (
                  <div className="text-center py-16">
                    <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-green-600 border-t-transparent mb-4"></div>
                    <p className="text-gray-600">Đang tìm câu trả lời...</p>
                  </div>
                ) : qaAnswer ? (
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-lg p-5">
                      <p className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5" />
                        Câu hỏi của bạn:
                      </p>
                      <p className="text-blue-800 text-lg">{qaAnswer.question}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-lg p-5">
                      <p className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Câu trả lời:
                      </p>
                      <p className="text-green-800 leading-relaxed text-base">{qaAnswer.answer}</p>
                    </div>

                    {qaAnswer.regulation && (
                      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                        <p className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-indigo-600" />
                          Quy định pháp luật liên quan:
                        </p>
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full mr-2">
                            {qaAnswer.regulation.article}
                          </span>
                          <h4 className="font-bold text-gray-800 inline">{qaAnswer.regulation.title}</h4>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">{qaAnswer.regulation.chapter}</p>
                        <p className="text-gray-700 leading-relaxed mb-3">{qaAnswer.regulation.content}</p>
                        <div className="flex flex-wrap gap-2">
                          {qaAnswer.regulation.keyphrases.map((kp: string, idx: number) => (
                            <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full font-medium">
                              {kp}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-600 text-lg mb-4">Đặt câu hỏi để nhận câu trả lời</p>
                    <div className="text-sm text-gray-500 space-y-2 max-w-md mx-auto">
                      <p className="font-medium">Ví dụ các câu hỏi:</p>
                      <p>• "Hành khách có những quyền và nghĩa vụ gì?"</p>
                      <p>• "Khi nào được thi công trên đường đang khai thác?"</p>
                      <p>• "Đường cao tốc có đặc điểm gì?"</p>
                      <p>• "Những hành vi nào bị nghiêm cấm?"</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Reference Info */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <div className="flex items-start gap-3">
            <Book className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-gray-600">
              <p className="font-semibold text-gray-800 mb-1">Căn cứ pháp lý:</p>
              <p><strong>Luật Đường bộ số 36/2024/QH15</strong></p>
              <p>Được Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam khóa XV, kỳ họp thứ 7 thông qua ngày 27 tháng 6 năm 2024</p>
              <p className="mt-2"><strong>Hiệu lực:</strong> Có hiệu lực thi hành từ ngày <strong>01/01/2025</strong></p>
              <p className="mt-2">
                <strong>Nguồn:</strong>{' '}
                <a 
                  href="https://thuvienphapluat.vn/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  thuvienphapluat.vn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficLawQASystem;