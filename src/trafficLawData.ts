export interface Regulation {
  id: string;
  article: string;
  title: string;
  content: string;
  chapter: string;
  keyphrases: string[];
}

export interface QAData {
  question: string;
  answer: string;
  regulationId: string;
}

export interface QAAnswer {
  question: string;
  answer: string;
  regulation: Regulation | null;
}

export const trafficLawData = {
  regulations: [
    {
      id: 'gt-001',
      article: 'Điều 1',
      title: 'Phạm vi điều chỉnh',
      content: 'Luật này quy định về hoạt động đường bộ và quản lý nhà nước về hoạt động đường bộ.',
      chapter: 'Chương I - Những quy định chung',
      keyphrases: ['phạm vi điều chỉnh', 'hoạt động đường bộ', 'quản lý nhà nước']
    },
    {
      id: 'gt-002',
      article: 'Điều 2',
      title: 'Giải thích từ ngữ',
      content: 'Định nghĩa chi tiết về: 1. Hoạt động đường bộ (quy hoạch, đầu tư, quản lý, bảo trì...); 2. Đường bộ (cầu, cống, hầm, phà...); 3. Công trình đường bộ; 4. Kết cấu hạ tầng đường bộ; 5. Hành lang an toàn; 6. Cơ quan quản lý đường bộ; 7. Người quản lý sử dụng đường bộ; 8. Đất của đường bộ...',
      chapter: 'Chương I - Những quy định chung',
      keyphrases: ['giải thích từ ngữ', 'định nghĩa', 'kết cấu hạ tầng', 'hành lang an toàn']
    },
    {
      id: 'gt-003',
      article: 'Điều 3',
      title: 'Nguyên tắc hoạt động đường bộ',
      content: '1. Bảo đảm giao thông thông suốt, an toàn, kết nối đồng bộ, hiệu quả, thân thiện với môi trường. 2. Phát triển đường bộ theo quy hoạch. 3. Mọi hành vi vi phạm phải được phát hiện, ngăn chặn và xử lý nghiêm minh. 4. Huy động nguồn lực xã hội hóa. 5. Ưu tiên phát triển vận tải công cộng và hạ tầng cho người khuyết tật, người già, trẻ em.',
      chapter: 'Chương I - Những quy định chung',
      keyphrases: ['nguyên tắc', 'an toàn giao thông', 'quy hoạch', 'xử lý vi phạm']
    },
    {
      id: 'gt-004',
      article: 'Điều 4',
      title: 'Chính sách phát triển đường bộ',
      content: '1. Ưu tiên nguồn lực đầu tư cho đường bộ cao tốc, quốc lộ và các công trình trọng điểm. 2. Có chính sách ưu đãi cho các tổ chức, cá nhân đầu tư hạ tầng và kinh doanh vận tải. 3. Khuyến khích ứng dụng công nghệ hiện đại, chuyển đổi số. 4. Phát triển bền vững, thích ứng biến đổi khí hậu.',
      chapter: 'Chương I - Những quy định chung',
      keyphrases: ['chính sách', 'ưu đãi', 'đầu tư', 'công nghệ hiện đại']
    },
    {
      id: 'gt-005',
      article: 'Điều 5',
      title: 'Quy hoạch đường bộ',
      content: '1. Quy hoạch mạng lưới đường bộ là quy hoạch ngành quốc gia. 2. Quy hoạch kết cấu hạ tầng đường bộ là quy hoạch kỹ thuật chuyên ngành. 3. Thời kỳ quy hoạch là 10 năm, tầm nhìn từ 20 đến 30 năm.',
      chapter: 'Chương I - Những quy định chung',
      keyphrases: ['quy hoạch', 'mạng lưới đường bộ', 'tầm nhìn quy hoạch']
    },
    {
      id: 'gt-006',
      article: 'Điều 6',
      title: 'Cơ sở dữ liệu đường bộ',
      content: 'Cơ sở dữ liệu đường bộ là tập hợp các thông tin về kết cấu hạ tầng, phương tiện giao thông, người điều khiển, hoạt động vận tải và xử lý vi phạm. Được xây dựng thống nhất từ trung ương đến địa phương để phục vụ quản lý nhà nước.',
      chapter: 'Chương I - Những quy định chung',
      keyphrases: ['cơ sở dữ liệu', 'thông tin giao thông', 'quản lý dữ liệu']
    },
    {
      id: 'gt-007',
      article: 'Điều 7',
      title: 'Các hành vi bị nghiêm cấm',
      content: '1. Phá hoại công trình đường bộ. 2. Đào, khoan, xẻ đường trái phép. 3. Mở đường nhánh trái phép đấu nối vào đường chính. 4. Lấn, chiếm hành lang an toàn đường bộ. 5. Sử dụng lòng đường, lề đường để họp chợ, bày bán hàng hóa trái phép. 6. Sản xuất, lắp ráp phương tiện không đúng tiêu chuẩn. 7. Kinh doanh vận tải không có giấy phép.',
      chapter: 'Chương I - Những quy định chung',
      keyphrases: ['hành vi cấm', 'phá hoại công trình', 'lấn chiếm lòng đường']
    },
    {
      id: 'gt-008',
      article: 'Điều 8',
      title: 'Phân loại đường bộ theo cấp quản lý',
      content: 'Đường bộ bao gồm: 1. Quốc lộ; 2. Đường tỉnh; 3. Đường huyện; 4. Đường xã; 5. Đường thôn; 6. Đường đô thị; 7. Đường chuyên dùng.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['phân loại đường', 'quốc lộ', 'đường tỉnh', 'đường xã']
    },
    {
      id: 'gt-009',
      article: 'Điều 9',
      title: 'Phân loại đường bộ theo chức năng phục vụ',
      content: 'Bao gồm: 1. Đường chính; 2. Đường nhánh; 3. Đường gom; 4. Đường bên; 5. Đường nội bộ; 6. Đường dành cho người đi bộ, xe đạp.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['chức năng đường', 'đường chính', 'đường gom', 'đường nội bộ']
    },
    {
      id: 'gt-010',
      article: 'Điều 10',
      title: 'Cấp kỹ thuật của đường bộ',
      content: '1. Cấp kỹ thuật đường bộ bao gồm các tiêu chuẩn về hình học, tải trọng, tốc độ thiết kế. 2. Các tuyến đường xây dựng mới hoặc nâng cấp phải tuân thủ quy chuẩn kỹ thuật quốc gia.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['cấp kỹ thuật', 'tiêu chuẩn thiết kế', 'quy chuẩn quốc gia']
    },
    {
      id: 'gt-011',
      article: 'Điều 11',
      title: 'Đặt tên, số hiệu đường bộ',
      content: '1. Tên đường được đặt theo tên danh nhân, địa danh, tập quán hoặc số hiệu. 2. Số hiệu đường bộ gồm chữ cái viết tắt của cấp đường và số tự nhiên.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['tên đường', 'số hiệu đường', 'danh nhân']
    },
    {
      id: 'gt-012',
      article: 'Điều 12',
      title: 'Quỹ đất dành cho kết cấu hạ tầng đường bộ',
      content: '1. Quỹ đất phải được xác định trong quy hoạch. 2. Tỷ lệ diện tích đất giao thông đô thị so với diện tích đất xây dựng đô thị phải đạt từ 11% đến 26%.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['quỹ đất', 'diện tích giao thông', 'đất đô thị']
    },
    {
      id: 'gt-013',
      article: 'Điều 13',
      title: 'Phạm vi bảo vệ kết cấu hạ tầng đường bộ',
      content: 'Bao gồm đất của đường bộ và hành lang an toàn đường bộ, không gian phía trên và phía dưới liên quan đến an toàn công trình.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['phạm vi bảo vệ', 'không gian đường']
    },
    {
      id: 'gt-014',
      article: 'Điều 14',
      title: 'Đất của đường bộ',
      content: 'Là phần đất để xây dựng công trình đường bộ và phần đất dọc hai bên đường bộ để quản lý, bảo trì, bảo vệ công trình đường bộ.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['đất đường bộ', 'quản lý đường', 'bảo trì']
    },
    {
      id: 'gt-015',
      article: 'Điều 15',
      title: 'Hành lang an toàn đường bộ',
      content: 'Là dải đất dọc hai bên đất của đường bộ nhằm bảo đảm an toàn giao thông và bảo vệ công trình. Giới hạn hành lang được quy định cụ thể đối với từng cấp đường và khu vực.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['hành lang an toàn', 'giới hạn hành lang', 'bảo vệ công trình']
    },
{
      id: 'gt-016',
      article: 'Điều 16',
      title: 'Sử dụng đất hành lang an toàn đường bộ',
      content: '1. Đất hành lang an toàn đường bộ đã được cơ quan nhà nước có thẩm quyền thu hồi phải được quản lý, sử dụng để bảo vệ công trình đường bộ và bảo đảm an toàn giao thông. 2. Trường hợp chưa thu hồi đất thì người sử dụng đất được tiếp tục sử dụng theo mục đích đã được xác định nhưng không được gây ảnh hưởng đến an toàn công trình và an toàn giao thông.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['sử dụng đất', 'hành lang an toàn', 'thu hồi đất']
    },
    {
      id: 'gt-017',
      article: 'Điều 17',
      title: 'Bảo vệ kết cấu hạ tầng đường bộ',
      content: '1. Bảo vệ kết cấu hạ tầng đường bộ gồm các hoạt động nhằm bảo đảm an toàn và tuổi thọ công trình, ngăn chặn mọi hành vi xâm phạm. 2. Trách nhiệm bảo vệ thuộc về cơ quan quản lý đường bộ, chính quyền địa phương và mọi tổ chức, cá nhân.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['bảo vệ hạ tầng', 'trách nhiệm', 'ngăn chặn xâm phạm']
    },
    {
      id: 'gt-018',
      article: 'Điều 18',
      title: 'Đầu tư xây dựng công trình đường bộ',
      content: '1. Việc đầu tư xây dựng phải phù hợp với quy hoạch đường bộ và quy hoạch khác có liên quan. 2. Phải tuân thủ trình tự, thủ tục về đầu tư xây dựng và quy chuẩn kỹ thuật.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['đầu tư', 'xây dựng', 'trình tự thủ tục']
    },
    {
      id: 'gt-019',
      article: 'Điều 19',
      title: 'Tiêu chuẩn, quy chuẩn kỹ thuật của công trình đường bộ',
      content: 'Công trình đường bộ khi xây dựng mới, cải tạo, nâng cấp phải áp dụng tiêu chuẩn kỹ thuật và quy chuẩn kỹ thuật quốc gia. Khuyến khích áp dụng công nghệ mới, vật liệu mới.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['tiêu chuẩn kỹ thuật', 'quy chuẩn quốc gia', 'vật liệu mới']
    },
    {
      id: 'gt-020',
      article: 'Điều 20',
      title: 'Thẩm định thiết kế và nghiệm thu công trình',
      content: 'Thiết kế công trình đường bộ phải được thẩm định theo quy định của pháp luật về xây dựng. Công trình hoàn thành phải được nghiệm thu, quyết toán và bàn giao đưa vào khai thác theo quy định.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['thẩm định thiết kế', 'nghiệm thu', 'bàn giao']
    },
    {
      id: 'gt-021',
      article: 'Điều 21',
      title: 'Hệ thống báo hiệu đường bộ',
      content: 'Hệ thống báo hiệu đường bộ bao gồm: 1. Hiệu lệnh của người điều khiển giao thông; 2. Tín hiệu đèn giao thông; 3. Biển báo hiệu; 4. Vạch kẻ đường; 5. Cọc tiêu, tiêu phản quang; 6. Tường bảo vệ, hàng rào hộ lan.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['báo hiệu đường bộ', 'biển báo', 'đèn tín hiệu', 'vạch kẻ đường']
    },
    {
      id: 'gt-022',
      article: 'Điều 22',
      title: 'Tín hiệu đèn giao thông',
      content: '1. Đèn xanh: Cho phép đi. 2. Đèn đỏ: Cấm đi. 3. Đèn vàng: Phải dừng lại trước vạch dừng; nếu đã đi quá vạch dừng thì được đi tiếp. Đèn vàng nhấp nháy: Được đi nhưng phải chú ý quan sát.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['đèn giao thông', 'đèn xanh', 'đèn đỏ', 'đèn vàng']
    },
    {
      id: 'gt-023',
      article: 'Điều 23',
      title: 'Biển báo hiệu đường bộ',
      content: 'Gồm 5 nhóm: 1. Biển báo cấm; 2. Biển báo nguy hiểm và cảnh báo; 3. Biển hiệu lệnh; 4. Biển chỉ dẫn; 5. Biển phụ, viết bằng tiếng Việt (trường hợp cần thiết có thêm tiếng Anh).',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['biển báo cấm', 'biển hiệu lệnh', 'biển chỉ dẫn']
    },
    {
      id: 'gt-024',
      article: 'Điều 24',
      title: 'Công trình phục vụ an toàn giao thông đường bộ',
      content: 'Bao gồm: Gương cầu lồi, dải phân cách, gờ giảm tốc, đường cứu nạn, tường chống ồn, hệ thống chiếu sáng và các công trình hỗ trợ khác để giảm thiểu tai nạn.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['an toàn giao thông', 'gương cầu lồi', 'gờ giảm tốc']
    },
    {
      id: 'gt-025',
      article: 'Điều 25',
      title: 'Nội dung tổ chức giao thông',
      content: '1. Quy định các tuyến đường, làn đường cho từng loại phương tiện. 2. Quy định về chiều đi, thời gian tham gia giao thông. 3. Quy định tốc độ xe chạy. 4. Lắp đặt hệ thống báo hiệu.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['tổ chức giao thông', 'phân làn', 'tốc độ xe']
    },
    {
      id: 'gt-026',
      article: 'Điều 26',
      title: 'Trách nhiệm tổ chức giao thông',
      content: '1. Bộ Giao thông vận tải tổ chức giao thông trên hệ thống quốc lộ. 2. Ủy ban nhân dân cấp tỉnh tổ chức giao thông trên các hệ thống đường thuộc phạm vi quản lý.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['trách nhiệm', 'Bộ Giao thông', 'UBND tỉnh']
    },
    {
      id: 'gt-027',
      article: 'Điều 27',
      title: 'Quản lý, vận hành khai thác công trình đường bộ',
      content: 'Hoạt động quản lý, vận hành khai thác phải bảo đảm công trình hoạt động bình thường, an toàn, thông suốt. Phải có quy trình bảo trì và trực ban giao thông.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['quản lý vận hành', 'khai thác công trình']
    },
    {
      id: 'gt-028',
      article: 'Điều 28',
      title: 'Thẩm tra, thẩm định an toàn giao thông',
      content: 'Là việc xem xét, đánh giá khả năng hình thành tai nạn hoặc yếu tố gây mất an toàn để đề xuất giải pháp khắc phục. Thực hiện ở các giai đoạn: Thiết kế, thi công và khai thác.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['thẩm tra an toàn', 'đánh giá tai nạn']
    },
    {
      id: 'gt-029',
      article: 'Điều 29',
      title: 'Xử lý điểm đen, điểm tiềm ẩn tai nạn giao thông',
      content: 'Cơ quan quản lý đường bộ có trách nhiệm phát hiện, thống kê và kịp thời xử lý các điểm đen (nơi hay xảy ra tai nạn) và điểm tiềm ẩn nguy cơ tai nạn.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['điểm đen', 'tiềm ẩn tai nạn', 'khắc phục']
    },
    {
      id: 'gt-030',
      article: 'Điều 30',
      title: 'Trạm dừng nghỉ, bãi đỗ xe',
      content: '1. Trạm dừng nghỉ phục vụ người và phương tiện nghỉ ngơi, cung cấp dịch vụ kỹ thuật. 2. Bãi đỗ xe là nơi trông giữ phương tiện phù hợp với quy hoạch.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['trạm dừng nghỉ', 'bãi đỗ xe']
    },
    {
      id: 'gt-031',
      article: 'Điều 31',
      title: 'Điểm dừng xe, đỗ xe trong đô thị',
      content: 'Phải được bố trí tại vị trí thuận tiện, không gây ùn tắc giao thông. Ưu tiên bố trí điểm dừng cho xe buýt và các loại hình vận tải công cộng.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['dừng xe đô thị', 'xe buýt']
    },
    {
      id: 'gt-032',
      article: 'Điều 32',
      title: 'Bảo trì đường bộ',
      content: 'Bảo trì đường bộ bao gồm các công việc: Kiểm tra, quan trắc, kiểm định, bảo dưỡng và sửa chữa công trình nhằm duy trì trạng thái kỹ thuật bình thường.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['bảo trì', 'sửa chữa đường', 'bảo dưỡng']
    },
    {
      id: 'gt-033',
      article: 'Điều 33',
      title: 'Thi công công trình trên đường bộ đang khai thác',
      content: 'Phải có giấy phép của cơ quan thẩm quyền. Khi thi công phải có biển báo, rào chắn, đèn tín hiệu ban đêm và người hướng dẫn giao thông để đảm bảo an toàn.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['thi công trên đường', 'giấy phép', 'rào chắn']
    },
    {
      id: 'gt-034',
      article: 'Điều 34',
      title: 'Giao thông tại nút giao và đường giao nhau',
      content: 'Nút giao phải được thiết kế bảo đảm tầm nhìn và an toàn. Ưu tiên xây dựng nút giao khác mức tại các vị trí quốc lộ giao nhau với đường sắt hoặc đường cao tốc.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['nút giao', 'tầm nhìn', 'giao nhau']
    },
    {
      id: 'gt-035',
      article: 'Điều 35',
      title: 'Đường bộ giao nhau với đường sắt',
      content: 'Tại nơi giao nhau phải xây dựng cầu vượt hoặc hầm chui. Nếu giao nhau cùng mức phải có rào chắn, đèn tín hiệu hoặc người gác theo quy định của pháp luật đường sắt.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['giao đường sắt', 'cầu vượt', 'rào chắn']
    },
    {
      id: 'gt-036',
      article: 'Điều 36',
      title: 'Đường bộ giao nhau với đường nội bộ, đường từ ngõ ra',
      content: 'Chủ đầu tư hoặc người quản lý sử dụng đường nội bộ, đường từ ngõ ra phải tự chịu trách nhiệm kết nối an toàn vào đường chính, đảm bảo tầm nhìn và không gây hư hỏng kết cấu đường chính.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['đường nội bộ', 'đấu nối', 'ngõ ra']
    },
    {
      id: 'gt-037',
      article: 'Điều 37',
      title: 'Đường bộ đi chung với đường sắt, đê điều, thủy lợi',
      content: 'Việc xây dựng, quản lý phải tuân thủ quy định của Luật Đường bộ và pháp luật về đê điều, thủy lợi, đường sắt. Phải có sự phối hợp giữa các cơ quan quản lý chuyên ngành.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['đi chung', 'đê điều', 'thủy lợi']
    },
    {
      id: 'gt-038',
      article: 'Điều 38',
      title: 'Đường bộ chạy qua vùng đất yếu, vùng sạt lở',
      content: 'Cơ quan quản lý phải có biện pháp quan trắc, cảnh báo và xử lý kịp thời các vị trí có nguy cơ sụt trượt, sạt lở để đảm bảo an toàn giao thông liên tục.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['đất yếu', 'sạt lở', 'quan trắc']
    },
    {
      id: 'gt-039',
      article: 'Điều 39',
      title: 'Xây dựng công trình hạ tầng kỹ thuật trong phạm vi đường bộ',
      content: 'Việc lắp đặt đường dây điện, cáp viễn thông, đường ống cấp thoát nước phải có giấy phép và không được làm ảnh hưởng đến an toàn, bền vững của công trình đường bộ.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['hạ tầng kỹ thuật', 'điện cáp', 'viễn thông']
    },
    {
      id: 'gt-040',
      article: 'Điều 40',
      title: 'Kiểm soát tải trọng, khổ giới hạn của xe',
      content: 'Xe quá tải trọng, quá khổ giới hạn chỉ được lưu hành khi có giấy phép lưu hành xe đặc biệt và phải thực hiện các biện pháp bảo vệ kết cấu hạ tầng đường bộ.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['tải trọng xe', 'xe quá khổ', 'giấy phép đặc biệt']
    },
    {
      id: 'gt-041',
      article: 'Điều 41',
      title: 'Trạm kiểm tra tải trọng xe',
      content: 'Sử dụng thiết bị cân điện tử để kiểm tra tải trọng, khổ giới hạn. Có thể là trạm cố định hoặc trạm lưu động, ưu tiên sử dụng thiết bị cân tự động.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['cân xe', 'kiểm tra tải trọng', 'trạm cân']
    },
    {
      id: 'gt-042',
      article: 'Điều 42',
      title: 'Phí sử dụng đường bộ',
      content: 'Phí thu qua đầu phương tiện giao thông cơ giới đường bộ. Khoản thu này được nộp vào ngân sách nhà nước để sử dụng cho mục đích quản lý, bảo trì đường bộ.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['phí đường bộ', 'thu phí đầu xe', 'bảo trì']
    },
    {
      id: 'gt-043',
      article: 'Điều 43',
      title: 'Thanh toán điện tử giao thông đường bộ',
      content: 'Việc thu phí, giá dịch vụ đường bộ trên cao tốc phải thực hiện theo hình thức điện tử không dừng (ETC). Phương tiện phải gắn thẻ đầu cuối và có tài khoản giao thông.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['thanh toán điện tử', 'ETC', 'tài khoản giao thông', 'không dừng']
    },
    {
      id: 'gt-044',
      article: 'Điều 44',
      title: 'Quy định chung về đường bộ cao tốc',
      content: 'Đường cao tốc chỉ dành cho xe cơ giới có tốc độ cao, không giao nhau cùng mức, có dải phân cách cố định, chỉ cho xe ra vào ở các điểm nhất định.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['cao tốc', 'xe cơ giới', 'dải phân cách']
    },
    {
      id: 'gt-045',
      article: 'Điều 45',
      title: 'Tiêu chuẩn, quy chuẩn kỹ thuật đường cao tốc',
      content: 'Phải đáp ứng tối thiểu 4 làn xe, có làn dừng xe khẩn cấp (trừ trường hợp đặc biệt), có hệ thống hàng rào bảo vệ và trung tâm quản lý điều hành giao thông.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['tiêu chuẩn cao tốc', '4 làn xe', 'làn khẩn cấp']
    },
    {
      id: 'gt-046',
      article: 'Điều 46',
      title: 'Hệ thống quản lý giao thông thông minh (ITS)',
      content: 'Bao gồm thiết bị cảm biến, camera giám sát, bảng thông tin điện tử và phần mềm để điều hành, giám sát giao thông trên đường cao tốc theo thời gian thực.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['ITS', 'thông minh', 'camera giám sát']
    },
    {
      id: 'gt-047',
      article: 'Điều 47',
      title: 'Đầu tư, xây dựng đường bộ cao tốc',
      content: 'Khuyến khích đầu tư theo hình thức đối tác công tư (PPP). Nhà đầu tư được thu phí để hoàn vốn theo quy định của pháp luật.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['đầu tư cao tốc', 'PPP', 'thu phí hoàn vốn']
    },
    {
      id: 'gt-048',
      article: 'Điều 48',
      title: 'Mở rộng, nâng cấp đường cao tốc',
      content: 'Ưu tiên mở rộng các tuyến cao tốc đang khai thác theo quy mô phân kỳ để đạt chuẩn hoàn chỉnh theo quy hoạch đã phê duyệt.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['mở rộng cao tốc', 'nâng cấp']
    },
    {
      id: 'gt-049',
      article: 'Điều 49',
      title: 'Quản lý, vận hành khai thác đường cao tốc',
      content: 'Phải thực hiện liên tục 24/24 giờ. Đơn vị quản lý phải đảm bảo an toàn, cứu hộ, cứu nạn kịp thời khi có sự cố xảy ra.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['vận hành cao tốc', '24/24', 'cứu hộ']
    },
    {
      id: 'gt-050',
      article: 'Điều 50',
      title: 'Phí sử dụng đường bộ cao tốc',
      content: 'Người sử dụng dịch vụ đường bộ cao tốc do Nhà nước đầu tư hoặc đại diện chủ sở hữu phải trả phí theo quy định để bù đắp chi phí vận hành, bảo trì.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['phí cao tốc', 'trả phí', 'nhà nước đầu tư']
    },
    {
      id: 'gt-051',
      article: 'Điều 51',
      title: 'Tạm dừng khai thác đường bộ cao tốc',
      content: 'Chỉ được tạm dừng khi: Công trình bị hư hỏng nghiêm trọng; Xảy ra tai nạn đặc biệt nghiêm trọng; Do thiên tai hoặc theo yêu cầu quốc phòng, an ninh.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['tạm dừng khai thác', 'đóng đường', 'sự cố']
    },
    {
      id: 'gt-052',
      article: 'Điều 52',
      title: 'Duy trì tình trạng kỹ thuật đường cao tốc',
      content: 'Công tác bảo trì phải thực hiện nghiêm ngặt theo quy trình kỹ thuật. Tuyệt đối không để hư hỏng mặt đường gây nguy hiểm cho xe chạy tốc độ cao.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['kỹ thuật cao tốc', 'bảo trì mặt đường']
    },
    {
      id: 'gt-053',
      article: 'Điều 53',
      title: 'Trung tâm quản lý, điều hành giao thông',
      content: 'Là nơi tiếp nhận thông tin từ hệ thống ITS để điều phối giao thông, xử lý sự cố và cung cấp thông tin cho người tham gia giao thông.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['điều hành giao thông', 'trung tâm xử lý']
    },
    {
      id: 'gt-054',
      article: 'Điều 54',
      title: 'Trạm dừng nghỉ trên đường cao tốc',
      content: 'Phải được bố trí theo khoảng cách quy hoạch, cung cấp dịch vụ thiết yếu (xăng dầu, nghỉ ngơi, vệ sinh, sửa chữa nhỏ) và phải được xây dựng đồng bộ với đường.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['trạm dừng nghỉ', 'dịch vụ cao tốc']
    },
    {
      id: 'gt-055',
      article: 'Điều 55',
      title: 'Hành lang an toàn đường bộ cao tốc',
      content: 'Khoảng cách được xác định từ mép ngoài của đất đường bộ ra mỗi bên, đảm bảo không có công trình lấn chiếm gây khuất tầm nhìn hoặc ảnh hưởng an toàn.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['hành lang cao tốc', 'khoảng cách an toàn']
    },
    {
      id: 'gt-056',
      article: 'Điều 56',
      title: 'Kinh doanh vận tải bằng xe ô tô',
      content: '1. Là việc tổ chức, cá nhân thực hiện ít nhất một công đoạn gồm: Trực tiếp điều hành phương tiện, lái xe hoặc quyết định giá cước để vận chuyển hành khách, hàng hóa nhằm mục đích sinh lợi. 2. Kinh doanh vận tải là ngành nghề kinh doanh có điều kiện.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['kinh doanh vận tải', 'sinh lợi', 'ngành nghề có điều kiện']
    },
    {
      id: 'gt-057',
      article: 'Điều 57',
      title: 'Các loại hình kinh doanh vận tải hành khách',
      content: 'Bao gồm: 1. Kinh doanh vận tải hành khách theo tuyến cố định. 2. Kinh doanh vận tải hành khách bằng xe buýt. 3. Kinh doanh vận tải hành khách bằng xe taxi. 4. Kinh doanh vận tải hành khách theo hợp đồng.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['vận tải hành khách', 'xe buýt', 'taxi', 'xe hợp đồng']
    },
    {
      id: 'gt-058',
      article: 'Điều 58',
      title: 'Kinh doanh vận tải hành khách theo tuyến cố định',
      content: 'Phải có bến xe đi, bến xe đến, hành trình, lịch trình quy định và được cơ quan nhà nước có thẩm quyền phê duyệt.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['tuyến cố định', 'bến xe', 'lịch trình']
    },
    {
      id: 'gt-059',
      article: 'Điều 59',
      title: 'Kinh doanh vận tải hành khách bằng xe buýt',
      content: 'Thực hiện trên tuyến cố định, có các điểm dừng đón, trả khách theo quy định. Xe buýt được ưu tiên tổ chức làn đường riêng và các ưu đãi về hạ tầng.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['xe buýt', 'điểm dừng', 'làn ưu tiên']
    },
    {
      id: 'gt-060',
      article: 'Điều 60',
      title: 'Kinh doanh vận tải hành khách bằng xe taxi',
      content: 'Sử dụng xe ô tô dưới 09 chỗ (kể cả người lái). Tính cước dựa trên đồng hồ tính tiền hoặc phần mềm kết nối vận tải và phạm vi hoạt động tự do.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['taxi', 'đồng hồ tính tiền', 'dưới 9 chỗ']
    },
    {
      id: 'gt-061',
      article: 'Điều 61',
      title: 'Kinh doanh vận tải hành khách theo hợp đồng',
      content: 'Thực hiện trên cơ sở hợp đồng vận chuyển bằng văn bản hoặc điện tử giữa đơn vị kinh doanh và người thuê vận chuyển. Không được đón trả khách ngoài các địa điểm ghi trong hợp đồng.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['xe hợp đồng', 'hợp đồng điện tử', 'đón trả khách']
    },
    {
      id: 'gt-062',
      article: 'Điều 62',
      title: 'Kinh doanh vận tải hàng hóa bằng xe ô tô',
      content: 'Gồm kinh doanh vận tải hàng hóa thông thường và kinh doanh vận tải hàng hóa nguy hiểm, hàng siêu trường, siêu trọng. Phải đảm bảo an toàn và bảo vệ môi trường.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['vận tải hàng hóa', 'hàng nguy hiểm', 'siêu trường siêu trọng']
    },
    {
      id: 'gt-063',
      article: 'Điều 63',
      title: 'Quyền và nghĩa vụ của đơn vị kinh doanh vận tải',
      content: 'Được thu cước vận chuyển; có nghĩa vụ bảo đảm an toàn giao thông, trang bị thiết bị giám sát hành trình, đóng bảo hiểm cho hành khách và chịu trách nhiệm về vi phạm của lái xe.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['nghĩa vụ nhà xe', 'thiết bị giám sát', 'bảo hiểm']
    },
    {
      id: 'gt-064',
      article: 'Điều 64',
      title: 'Quyền và nghĩa vụ của người lái xe',
      content: 'Phải kiểm tra an toàn xe trước khi đi; có quyền từ chối điều khiển xe nếu không an toàn; có nghĩa vụ giúp đỡ hành khách và tuân thủ thời gian lái xe quy định.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['nghĩa vụ lái xe', 'kiểm tra xe', 'từ chối lái xe']
    },
    {
      id: 'gt-065',
      article: 'Điều 65',
      title: 'Quyền và nghĩa vụ của hành khách',
      content: 'Được vận chuyển theo đúng vé/hợp đồng; có nghĩa vụ mua vé, chấp hành nội quy xe và không mang theo hàng cấm, chất cháy nổ.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['quyền hành khách', 'vé xe', 'hàng cấm']
    },
    {
      id: 'gt-066',
      article: 'Điều 66',
      title: 'Thời gian làm việc của người lái xe ô tô',
      content: 'Tổng thời gian lái xe không quá 10 giờ trong 01 ngày. Thời gian lái xe liên tục không quá 04 giờ. Ban đêm (từ 22 giờ đến 06 giờ sáng) lái liên tục không quá 03 giờ.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['thời gian lái xe', 'nghỉ ngơi', 'lái xe ban đêm']
    },
    {
      id: 'gt-067',
      article: 'Điều 67',
      title: 'Thiết bị giám sát hành trình và camera trên xe',
      content: 'Xe kinh doanh vận tải phải gắn thiết bị giám sát hành trình và camera (đối với một số loại xe) để ghi nhận dữ liệu về hành trình, tốc độ và hình ảnh lái xe.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['hành trình', 'camera xe', 'dữ liệu tốc độ']
    },
    {
      id: 'gt-068',
      article: 'Điều 68',
      title: 'Vận tải đa phương thức',
      content: 'Sử dụng ít nhất hai phương thức vận tải khác nhau trên cơ sở một hợp đồng vận tải đa phương thức.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['đa phương thức', 'kết nối']
    },
    {
      id: 'gt-069',
      article: 'Điều 69',
      title: 'Vận tải trung chuyển hành khách',
      content: 'Là việc đưa đón hành khách từ nhà/điểm hẹn đến bến xe hoặc ngược lại. Không được thu thêm tiền ngoài giá vé tuyến cố định.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['trung chuyển', 'xe trung chuyển', 'giá vé']
    },
    {
      id: 'gt-070',
      article: 'Điều 70',
      title: 'Vận chuyển hành khách, hàng hóa quốc tế',
      content: 'Thực hiện theo quy định của Luật Đường bộ và các điều ước quốc tế mà Việt Nam là thành viên.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['vận tải quốc tế', 'liên vận']
    },
    {
      id: 'gt-071',
      article: 'Điều 71',
      title: 'Dịch vụ bến xe, trạm dừng nghỉ, bãi đỗ xe',
      content: 'Là các dịch vụ hỗ trợ vận tải. Bến xe phải đảm bảo tiêu chuẩn về phân cấp và chất lượng dịch vụ phục vụ hành khách.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['dịch vụ bến xe', 'trạm dừng', 'bãi đỗ']
    },
    {
      id: 'gt-072',
      article: 'Điều 72',
      title: 'Đại lý vận tải hàng hóa',
      content: 'Đại lý vận tải hàng hóa thực hiện các dịch vụ như gom hàng, làm thủ tục hải quan, giao nhận hàng hóa cho đơn vị vận tải.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['đại lý vận tải', 'gom hàng']
    },
    {
      id: 'gt-073',
      article: 'Điều 73',
      title: 'Dịch vụ đại lý bán vé',
      content: 'Tổ chức, cá nhân thực hiện việc bán vé cho đơn vị kinh doanh vận tải hành khách để hưởng hoa hồng.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['bán vé', 'đại lý vé']
    },
    {
      id: 'gt-074',
      article: 'Điều 74',
      title: 'Dịch vụ thu gom, chuyển phát hàng hóa',
      content: 'Nhận hàng từ người gửi để chuyển cho đơn vị vận tải hoặc trực tiếp vận chuyển bằng phương tiện phù hợp.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['thu gom hàng', 'chuyển phát']
    },
    {
      id: 'gt-075',
      article: 'Điều 75',
      title: 'Dịch vụ kho bãi',
      content: 'Cung cấp các hoạt động lưu giữ, bảo quản hàng hóa trong quá trình vận chuyển đường bộ.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['kho bãi', 'bảo quản hàng']
    },
    {
      id: 'gt-076',
      article: 'Điều 76',
      title: 'Dịch vụ cứu hộ giao thông đường bộ',
      content: 'Là dịch vụ hỗ trợ di dời phương tiện bị hư hỏng, tai nạn hoặc sa lầy đến nơi sửa chữa hoặc nơi quy định. Xe cứu hộ phải có thiết bị chuyên dùng và đảm bảo an toàn khi kéo, chở xe khác.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['cứu hộ giao thông', 'xe kéo', 'di dời phương tiện']
    },
    {
      id: 'gt-077',
      article: 'Điều 77',
      title: 'Dịch vụ phần mềm hỗ trợ kết nối vận tải',
      content: 'Là việc sử dụng môi trường số để kết nối giữa người thuê vận tải và đơn vị vận tải. Đơn vị cung cấp phần mềm phải tuân thủ pháp luật về giao dịch điện tử và bảo mật thông tin.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['phần mềm vận tải', 'kết nối', 'công nghệ số']
    },
    {
      id: 'gt-078',
      article: 'Điều 78',
      title: 'Vận tải người và hàng hóa bằng xe thô sơ, xe máy, xe gắn máy',
      content: 'Việc sử dụng xe máy, xe thô sơ để vận chuyển phải đảm bảo an toàn, không quá khổ giới hạn và phải phù hợp với quy định của Ủy ban nhân dân cấp tỉnh tại địa phương đó.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['xe máy', 'xe thô sơ', 'chở hàng', 'xe ôm']
    },
    {
      id: 'gt-079',
      article: 'Điều 79',
      title: 'Quản lý nhà nước về hoạt động đường bộ',
      content: 'Chính phủ thống nhất quản lý nhà nước. Bộ Giao thông vận tải là cơ quan đầu mối giúp Chính phủ thực hiện quản lý nhà nước về hoạt động đường bộ trên phạm vi cả nước.',
      chapter: 'Chương V - Quản lý nhà nước',
      keyphrases: ['quản lý nhà nước', 'Bộ Giao thông']
    },
    {
      id: 'gt-080',
      article: 'Điều 80',
      title: 'Trách nhiệm của Bộ Giao thông vận tải',
      content: 'Xây dựng chiến lược, quy hoạch; ban hành tiêu chuẩn kỹ thuật; quản lý hệ thống quốc lộ; cấp phép kinh doanh vận tải và đào tạo, sát hạch lái xe.',
      chapter: 'Chương V - Quản lý nhà nước',
      keyphrases: ['trách nhiệm Bộ GTVT', 'quy hoạch', 'đào tạo lái xe']
    },
    {
      id: 'gt-081',
      article: 'Điều 81',
      title: 'Trách nhiệm của Bộ Công an',
      content: 'Chủ trì bảo đảm trật tự, an toàn giao thông; tuần tra, kiểm soát và xử lý vi phạm pháp luật về giao thông đường bộ; quản lý đăng ký xe.',
      chapter: 'Chương V - Quản lý nhà nước',
      keyphrases: ['Bộ Công an', 'xử lý vi phạm', 'đăng ký xe']
    },
    {
      id: 'gt-082',
      article: 'Điều 82',
      title: 'Trách nhiệm của các Bộ, cơ quan ngang Bộ',
      content: 'Các Bộ (Quốc phòng, Tài chính, Xây dựng...) trong phạm vi nhiệm vụ, quyền hạn của mình có trách nhiệm phối hợp với Bộ GTVT quản lý hoạt động đường bộ.',
      chapter: 'Chương V - Quản lý nhà nước',
      keyphrases: ['phối hợp liên bộ', 'nhiệm vụ']
    },
    {
      id: 'gt-083',
      article: 'Điều 83',
      title: 'Trách nhiệm của Hội đồng nhân dân, Ủy ban nhân dân các cấp',
      content: 'Quản lý hệ thống đường địa phương; bảo đảm hành lang an toàn; tổ chức vận tải hành khách công cộng và thanh tra, kiểm tra trên địa bàn quản lý.',
      chapter: 'Chương V - Quản lý nhà nước',
      keyphrases: ['UBND các cấp', 'địa phương', 'quản lý địa bàn']
    },
    {
      id: 'gt-084',
      article: 'Điều 84',
      title: 'Thanh tra đường bộ',
      content: 'Thực hiện nhiệm vụ thanh tra chuyên ngành; kiểm tra việc chấp hành quy định về kết cấu hạ tầng và vận tải; có quyền dừng phương tiện để ngăn chặn hành vi phá hoại công trình.',
      chapter: 'Chương V - Quản lý nhà nước',
      keyphrases: ['thanh tra', 'kiểm tra chuyên ngành']
    },
    {
      id: 'gt-085',
      article: 'Điều 85',
      title: 'Hiệu lực thi hành',
      content: 'Luật này có hiệu lực từ 01/01/2025. Riêng các quy định về phí đường bộ, ETC (Điều 42, 43, 50) và một số nội dung khác có hiệu lực từ 01/10/2024.',
      chapter: 'Chương VI - Điều khoản thi hành',
      keyphrases: ['hiệu lực thi hành', '2025', 'tháng 10/2024']
    },
    {
      id: 'gt-086',
      article: 'Điều 86',
      title: 'Quy định chuyển tiếp',
      content: 'Các dự án đường bộ, giấy phép kinh doanh vận tải đã được cấp trước ngày Luật này có hiệu lực được tiếp tục thực hiện cho đến khi hết thời hạn hoặc cần điều chỉnh.',
      chapter: 'Chương VI - Điều khoản thi hành',
      keyphrases: ['chuyển tiếp', 'giấy phép cũ', 'dự án']
    }
  ] as Regulation[],
  
  qaData: [
    {
      question: "Phạm vi điều chỉnh của Luật Đường bộ 2024 là gì?",
      answer: "Luật này quy định về hoạt động đường bộ và quản lý nhà nước về hoạt động đường bộ. Hoạt động đường bộ bao gồm quy hoạch, đầu tư, xây dựng, quản lý, sử dụng, vận hành, khai thác, bảo trì, bảo vệ kết cấu hạ tầng đường bộ và vận tải đường bộ.",
      regulationId: "gt-001"
    },
    {
      question: "Kết cấu hạ tầng đường bộ theo luật mới bao gồm những thành phần nào?",
      answer: "Kết cấu hạ tầng đường bộ bao gồm: công trình đường bộ; bến xe; bãi đỗ xe; trạm dừng nghỉ; điểm dừng xe, đỗ xe; đất của đường bộ; hành lang an toàn đường bộ và các công trình phụ trợ phục vụ cho hoạt động đường bộ.",
      regulationId: "gt-002"
    },
    {
      question: "Hoạt động đường bộ dựa trên những nguyên tắc cơ bản nào?",
      answer: "Có 5 nguyên tắc chính: 1. Bảo đảm giao thông thông suốt, an toàn, kết nối đồng bộ, hiệu quả, thân thiện môi trường. 2. Phát triển theo quy hoạch. 3. Mọi vi phạm phải được phát hiện, ngăn chặn và xử lý nghiêm minh. 4. Huy động nguồn lực xã hội hóa. 5. Ưu tiên phát triển vận tải hành khách công cộng và hỗ trợ người khuyết tật, người già, trẻ em.",
      regulationId: "gt-003"
    },
    {
      question: "Nhà nước có những chính sách gì để phát triển đường bộ?",
      answer: "Nhà nước ưu tiên nguồn lực cho đường bộ cao tốc, quốc lộ và các công trình trọng điểm; hỗ trợ phát triển hạ tầng tại vùng sâu, vùng xa; khuyến khích ứng dụng công nghệ hiện đại và chuyển đổi số; ưu tiên phát triển vận tải công cộng.",
      regulationId: "gt-004"
    },
    {
      question: "Quy hoạch đường bộ bao gồm những loại quy hoạch nào?",
      answer: "Bao gồm 02 loại chính: Quy hoạch mạng lưới đường bộ (quy hoạch ngành quốc gia) và Quy hoạch kết cấu hạ tầng đường bộ (quy hoạch kỹ thuật chuyên ngành). Tầm nhìn quy hoạch thường từ 20 đến 30 năm.",
      regulationId: "gt-005"
    },
    {
      question: "Cơ sở dữ liệu đường bộ được xây dựng nhằm mục đích gì?",
      answer: "Để phục vụ công tác quản lý nhà nước, tra cứu thông tin về kết cấu hạ tầng, phương tiện, người điều khiển và hoạt động vận tải. Cơ sở dữ liệu này được xây dựng thống nhất và số hóa từ trung ương đến địa phương.",
      regulationId: "gt-006"
    },
    {
      question: "Những hành vi nào bị nghiêm cấm trong Luật Đường bộ 2024?",
      answer: "Các hành vi bị cấm bao gồm: Phá hoại công trình; Đấu nối trái phép vào đường chính; Lấn chiếm hành lang an toàn; Kinh doanh vận tải không phép; Sản xuất xe không đúng tiêu chuẩn; Thay đổi phụ tùng xe trái phép; Lập điểm đón trả khách trái phép; Gây cản trở giao thông.",
      regulationId: "gt-007"
    },
    {
      question: "Hệ thống đường bộ được phân loại theo cấp quản lý như thế nào?",
      answer: "Đường bộ được chia làm 7 loại: Quốc lộ, Đường tỉnh, Đường huyện, Đường xã, Đường thôn, Đường đô thị và Đường chuyên dùng.",
      regulationId: "gt-008"
    },
    {
      question: "Chức năng của đường gom và đường bên được quy định thế nào?",
      answer: "Đường gom dùng để gom hệ thống đường nội bộ, đường nhánh vào đường chính hoặc đường cao tốc. Đường bên là đường được xây dựng dọc theo đường chính để ngăn cách giao thông khu vực với giao thông trên đường chính.",
      regulationId: "gt-009"
    },
    {
      question: "Cấp kỹ thuật của đường bộ được xác định dựa trên tiêu chí nào?",
      answer: "Cấp kỹ thuật bao gồm các tiêu chuẩn về hình học, tải trọng và tốc độ thiết kế. Các tuyến đường khi xây mới hoặc nâng cấp phải đạt tiêu chuẩn cấp I, II, III, IV, V, VI hoặc đường cao tốc, đường đô thị theo quy chuẩn quốc gia.",
      regulationId: "gt-010"
    },
    {
      question: "Tên và số hiệu đường bộ được đặt như thế nào?",
      answer: "Tên đường thường đặt theo tên danh nhân, địa danh hoặc sự kiện lịch sử. Số hiệu đường bao gồm chữ cái viết tắt của cấp đường (ví dụ: QL cho Quốc lộ) kèm theo số tự nhiên.",
      regulationId: "gt-011"
    },
    {
      question: "Quỹ đất dành cho giao thông đô thị phải đạt tỷ lệ bao nhiêu?",
      answer: "Tỷ lệ diện tích đất giao thông đô thị so với diện tích đất xây dựng đô thị phải đạt từ 11% đến 26%. Mức cụ thể do Chính phủ quy định phù hợp với từng loại đô thị.",
      regulationId: "gt-012"
    },
    {
      question: "Phạm vi bảo vệ kết cấu hạ tầng đường bộ bao gồm những gì?",
      answer: "Bao gồm đất của đường bộ, hành lang an toàn đường bộ, không gian phía trên công trình đường bộ và phần không gian dưới lòng đất (đối với cầu, hầm).",
      regulationId: "gt-013"
    },
    {
      question: "Giới hạn đất của đường bộ được xác định như thế nào?",
      answer: "Đối với đường không có nền đắp: tính từ mép ngoài của rãnh đỉnh hoặc mép ngoài của mái taluy dương. Đối với đường có nền đắp: tính từ chân taluy nền đắp ra mỗi bên 01 mét.",
      regulationId: "gt-014"
    },
    {
      question: "Hành lang an toàn đường bộ có giới hạn bao nhiêu?",
      answer: "Giới hạn được tính từ mép đất bảo trì trở ra. Khoảng cách cụ thể phụ thuộc vào cấp đường và địa hình, nhằm bảo đảm an toàn giao thông và bảo vệ công trình.",
      regulationId: "gt-015"
    },
    {
      question: "Người sử dụng đất trong hành lang an toàn có được xây dựng nhà cửa không?",
      answer: "Người sử dụng đất trong hành lang an toàn chỉ được sử dụng cho các mục đích không gây ảnh hưởng đến an toàn công trình. Nghiêm cấm xây dựng nhà ở, công trình kiên cố trong phạm vi này trừ các công trình thiết yếu được phép.",
      regulationId: "gt-016"
    },
    {
      question: "Trách nhiệm bảo vệ kết cấu hạ tầng đường bộ thuộc về ai?",
      answer: "Thuộc về cơ quan quản lý đường bộ, chính quyền địa phương các cấp, lực lượng công an và mọi tổ chức, cá nhân tham gia giao thông hoặc sinh sống dọc tuyến đường.",
      regulationId: "gt-017"
    },
    {
      question: "Việc đầu tư xây dựng công trình đường bộ phải tuân thủ điều kiện gì?",
      answer: "Phải phù hợp với quy hoạch đường bộ; tuân thủ trình tự đầu tư xây dựng; bảo đảm chất lượng theo quy chuẩn kỹ thuật và thực hiện đánh giá tác động môi trường theo quy định.",
      regulationId: "gt-018"
    },
    {
      question: "Luật khuyến khích điều gì trong xây dựng công trình đường bộ?",
      answer: "Khuyến khích ứng dụng công nghệ hiện đại, vật liệu mới; sử dụng năng lượng xanh, thân thiện môi trường và thiết kế đảm bảo kiến trúc cảnh quan đô thị.",
      regulationId: "gt-019"
    },
    {
      question: "Nghiệm thu công trình đường bộ được thực hiện khi nào?",
      answer: "Được thực hiện sau khi hoàn thành toàn bộ hoặc một phần dự án có thể vận hành độc lập. Công trình chỉ được đưa vào khai thác khi đã được nghiệm thu đạt yêu cầu và bàn giao cho đơn vị quản lý.",
      regulationId: "gt-020"
    },
    {
      question: "Hệ thống báo hiệu đường bộ bao gồm những gì?",
      answer: "Bao gồm: Hiệu lệnh của người điều khiển giao thông; Tín hiệu đèn giao thông; Biển báo hiệu; Vạch kẻ đường; Cọc tiêu, tiêu phản quang; Tường bảo vệ, hàng rào hộ lan.",
      regulationId: "gt-021"
    },
    {
      question: "Ý nghĩa của các màu đèn tín hiệu giao thông theo luật mới là gì?",
      answer: "Đèn xanh: Cho phép đi. Đèn đỏ: Cấm đi. Đèn vàng: Dừng lại trước vạch dừng; nếu đã đi quá vạch dừng hoặc quá gần không thể dừng lại an toàn thì được đi tiếp. Đèn vàng nhấp nháy: Được đi nhưng phải chú ý quan sát, nhường đường cho người đi bộ.",
      regulationId: "gt-022"
    },
    {
      question: "Biển báo hiệu đường bộ được chia làm mấy nhóm?",
      answer: "Có 5 nhóm chính: 1. Biển báo cấm (biểu thị các điều cấm); 2. Biển báo nguy hiểm và cảnh báo (cho biết trước tính chất nguy hiểm); 3. Biển hiệu lệnh (phải thi hành); 4. Biển chỉ dẫn (hướng dẫn hướng đi/điều cần thiết); 5. Biển phụ (thuyết minh bổ sung).",
      regulationId: "gt-023"
    },
    {
      question: "Các công trình phục vụ an toàn giao thông đường bộ gồm những loại nào?",
      answer: "Gồm: Cọc tiêu, tiêu phản quang; Tường bảo vệ, hàng rào hộ lan; Công trình chống chói; Gương cầu lồi; Hệ thống chiếu sáng; Dải phân cách; Tường chống ồn; Gờ giảm tốc, gồ giảm tốc và các công trình khác.",
      regulationId: "gt-024"
    },
    {
      question: "Nội dung tổ chức giao thông bao gồm những việc gì?",
      answer: "Quy định các tuyến đường, làn đường cho từng loại phương tiện; quy định chiều đi, thời gian tham gia giao thông; quy định tốc độ; lắp đặt hệ thống báo hiệu và các biện pháp điều tiết khác.",
      regulationId: "gt-025"
    },
    {
      question: "Cơ quan nào có trách nhiệm tổ chức giao thông trên hệ thống quốc lộ?",
      answer: "Bộ Giao thông vận tải có trách nhiệm tổ chức giao thông trên hệ thống quốc lộ. Đối với quốc lộ chạy qua đô thị loại đặc biệt hoặc loại I, Bộ có thể phân cấp cho UBND cấp tỉnh thực hiện.",
      regulationId: "gt-026"
    },
    {
      question: "Hoạt động vận hành khai thác công trình đường bộ phải đảm bảo yêu cầu gì?",
      answer: "Phải thực hiện theo quy trình vận hành khai thác được phê duyệt, đảm bảo an toàn giao thông liên tục, thông suốt và tuổi thọ của công trình.",
      regulationId: "gt-027"
    },
    {
      question: "Thẩm tra và thẩm định an toàn giao thông được thực hiện khi nào?",
      answer: "Thực hiện ở các giai đoạn: Thiết kế (Sơ bộ, kỹ thuật, bản vẽ thi công); Trước khi đưa công trình vào khai thác; Và trong quá trình khai thác (theo định kỳ hoặc đột xuất).",
      regulationId: "gt-028"
    },
    {
      question: "Thế nào là 'Điểm đen' tai nạn giao thông và xử lý như thế nào?",
      answer: "Điểm đen là vị trí hoặc đoạn đường thường xuyên xảy ra tai nạn giao thông vượt mức quy định. Cơ quan quản lý phải thống kê, đánh giá nguyên nhân và kịp thời áp dụng các biện pháp kỹ thuật để xử lý.",
      regulationId: "gt-029"
    },
    {
      question: "Trạm dừng nghỉ trên đường bộ có chức năng gì?",
      answer: "Phục vụ người tham gia giao thông dừng nghỉ, ăn uống, đi vệ sinh, bảo dưỡng phương tiện và cung cấp thông tin về giao thông, du lịch.",
      regulationId: "gt-030"
    },
    {
      question: "Quy định về điểm dừng xe, đỗ xe trong đô thị như thế nào?",
      answer: "Phải được bố trí trên đường phố phù hợp quy hoạch, không gây ùn tắc. Ưu tiên bố trí điểm dừng đón, trả khách cho xe buýt và các loại hình vận tải công cộng.",
      regulationId: "gt-031"
    },
    {
      question: "Công tác bảo trì đường bộ bao gồm những hoạt động nào?",
      answer: "Gồm: Kiểm tra, quan trắc, kiểm định chất lượng; Bảo dưỡng thường xuyên/định kỳ; Sửa chữa đột xuất và các hoạt động duy trì trạng thái kỹ thuật khác.",
      regulationId: "gt-032"
    },
    {
      question: "Khi thi công trên đường bộ đang khai thác phải đảm bảo điều kiện gì?",
      answer: "Phải có Giấy phép thi công; có phương án đảm bảo an toàn giao thông được phê duyệt; lắp đặt đầy đủ biển báo, rào chắn và có người hướng dẫn giao thông.",
      regulationId: "gt-033"
    },
    {
      question: "Quy định về nút giao và đường giao nhau như thế nào?",
      answer: "Nút giao phải đảm bảo tầm nhìn an toàn cho người lái xe. Tại các vị trí quốc lộ giao nhau với đường sắt hoặc đường cao tốc, ưu tiên xây dựng nút giao khác mức (cầu vượt/hầm chui).",
      regulationId: "gt-034"
    },
    {
      question: "Việc tổ chức giao thông tại nơi đường bộ giao nhau với đường sắt?",
      answer: "Phải tuân thủ quy định của pháp luật đường bộ và đường sắt. Ưu tiên nút giao khác mức; trường hợp giao cùng mức phải có rào chắn, đèn tín hiệu và hệ thống cảnh báo tự động hoặc người gác.",
      regulationId: "gt-035"
    },
    {
      question: "Trách nhiệm kết nối đường nội bộ vào đường chính thuộc về ai?",
      answer: "Chủ đầu tư hoặc người quản lý đường nội bộ, đường từ ngõ ra phải tự chịu trách nhiệm thực hiện kết nối an toàn theo đúng thỏa thuận với cơ quan quản lý đường chính.",
      regulationId: "gt-036"
    },
    {
      question: "Xây dựng hạ tầng kỹ thuật (điện, nước, cáp) trong phạm vi đường bộ phải làm gì?",
      answer: "Phải có văn bản chấp thuận và giấy phép thi công của cơ quan quản lý đường bộ; không được gây hư hỏng hoặc làm mất tác dụng của công trình đường bộ.",
      regulationId: "gt-039"
    },
    {
      question: "Quy định về xe quá tải trọng, quá khổ giới hạn khi lưu thông?",
      answer: "Chỉ được lưu hành trên đường bộ khi được cơ quan thẩm quyền cấp Giấy phép lưu hành xe đặc biệt và phải thực hiện các biện pháp gia cố, bảo vệ đường bộ nếu cần thiết.",
      regulationId: "gt-040"
    },
    {
      question: "Trạm kiểm tra tải trọng xe hoạt động như thế nào?",
      answer: "Kiểm soát tải trọng xe bằng các thiết bị cân cố định hoặc lưu động. Kết quả từ cân tự động có thể dùng trực tiếp để xử phạt vi phạm hành chính.",
      regulationId: "gt-041"
    },
    {
      question: "Phí sử dụng đường bộ được nộp và sử dụng như thế nào?",
      answer: "Phí thu qua đầu phương tiện cơ giới đường bộ được nộp vào ngân sách nhà nước, ưu tiên sử dụng cho việc quản lý, bảo trì hệ thống đường bộ.",
      regulationId: "gt-042"
    },
    {
      question: "Quy định bắt buộc về thanh toán điện tử giao thông (ETC) từ 2024?",
      answer: "Việc thu tiền sử dụng đường bộ trên cao tốc bắt buộc thực hiện theo hình thức điện tử không dừng. Chủ xe phải gắn thẻ đầu cuối và có tài khoản giao thông kết nối với phương tiện thanh toán hợp pháp.",
      regulationId: "gt-043"
    },
    {
      question: "Đường bộ cao tốc có những đặc điểm gì khác biệt so với đường thường?",
      answer: "Đường cao tốc chỉ dành cho xe cơ giới tốc độ cao; có dải phân cách chia đường cho hai chiều xe chạy riêng biệt; không giao nhau cùng mức với các đường khác; chỉ cho xe ra, vào ở những điểm nhất định; có trang thiết bị phục vụ bảo đảm giao thông an toàn, liên tục.",
      regulationId: "gt-044"
    },
    {
      question: "Tiêu chuẩn kỹ thuật tối thiểu của đường cao tốc là gì?",
      answer: "Đường cao tốc phải có quy mô tối thiểu 04 làn xe chạy và có làn dừng xe khẩn cấp liên tục (trừ trường hợp địa hình đặc biệt khó khăn hoặc phân kỳ đầu tư). Phải có hệ thống hàng rào bảo vệ và hệ thống giao thông thông minh (ITS).",
      regulationId: "gt-045"
    },
    {
      question: "Hệ thống quản lý giao thông thông minh (ITS) trên cao tốc bao gồm những gì?",
      answer: "Bao gồm hệ thống các thiết bị điện tử, thông tin, viễn thông, camera giám sát, cảm biến, bảng thông tin điện tử và phần mềm để quản lý, điều hành giao thông theo thời gian thực.",
      regulationId: "gt-046"
    },
    {
      question: "Nhà nước khuyến khích đầu tư đường cao tốc theo hình thức nào?",
      answer: "Nhà nước khuyến khích tổ chức, cá nhân đầu tư xây dựng, kinh doanh đường cao tốc theo hình thức đối tác công tư (PPP). Nhà đầu tư được thu phí để hoàn vốn.",
      regulationId: "gt-047"
    },
    {
      question: "Quản lý, vận hành khai thác đường cao tốc phải thực hiện như thế nào?",
      answer: "Phải thực hiện liên tục 24/24 giờ. Đơn vị quản lý phải bảo đảm giao thông an toàn, thông suốt và sẵn sàng lực lượng cứu hộ, cứu nạn khi có sự cố.",
      regulationId: "gt-049"
    },
    {
      question: "Đối tượng nào phải trả tiền sử dụng đường bộ cao tốc?",
      answer: "Người sử dụng phương tiện giao thông lưu thông trên đường cao tốc do Nhà nước đầu tư hoặc đại diện chủ sở hữu quản lý phải nộp tiền sử dụng dịch vụ theo quy định pháp luật.",
      regulationId: "gt-050"
    },
    {
      question: "Trong trường hợp nào thì đường cao tốc bị tạm dừng khai thác?",
      answer: "Khi công trình bị hư hỏng nghiêm trọng có nguy cơ sập đổ; khi xảy ra tai nạn đặc biệt nghiêm trọng; khi có thiên tai, dịch bệnh hoặc theo yêu cầu về quốc phòng, an ninh.",
      regulationId: "gt-051"
    },
    {
      question: "Trung tâm quản lý, điều hành giao thông đường cao tốc có nhiệm vụ gì?",
      answer: "Nhiệm vụ là theo dõi, giám sát tình hình giao thông; điều phối các lực lượng cứu hộ, cảnh sát giao thông; cung cấp thông tin cảnh báo cho người lái xe thông qua bảng điện tử hoặc ứng dụng.",
      regulationId: "gt-053"
    },
    {
      question: "Trạm dừng nghỉ trên đường cao tốc phải đảm bảo các dịch vụ gì?",
      answer: "Phải cung cấp các dịch vụ thiết yếu: bãi đỗ xe, nhà vệ sinh, trạm cung cấp nhiên liệu, trạm sạc điện, dịch vụ ăn uống và dịch vụ hỗ trợ sửa chữa nhỏ.",
      regulationId: "gt-054"
    },
    {
      question: "Hoạt động kinh doanh vận tải bằng xe ô tô được định nghĩa như thế nào?",
      answer: "Là việc thực hiện ít nhất một công đoạn gồm: trực tiếp điều hành phương tiện, lái xe hoặc quyết định giá cước để vận chuyển hành khách, hàng hóa nhằm mục đích sinh lợi.",
      regulationId: "gt-056"
    },
    {
      question: "Kinh doanh vận tải hành khách bằng xe ô tô gồm những loại hình nào?",
      answer: "Bao gồm 4 loại chính: 1. Tuyến cố định; 2. Xe buýt; 3. Xe taxi; 4. Xe hợp đồng.",
      regulationId: "gt-057"
    },
    {
      question: "Vận tải hành khách theo tuyến cố định có đặc điểm gì?",
      answer: "Phải có bến xe đi, bến xe đến, lộ trình và lịch trình quy định rõ ràng và đã được cơ quan thẩm quyền phê duyệt.",
      regulationId: "gt-058"
    },
    {
      question: "Quy định đối với xe taxi theo luật mới là gì?",
      answer: "Sử dụng xe ô tô dưới 09 chỗ (kể cả người lái); tính cước dựa trên đồng hồ tính tiền hoặc phần mềm kết nối vận tải; phạm vi hoạt động thường là trong địa bàn tỉnh hoặc liên tỉnh.",
      regulationId: "gt-060"
    },
    {
      question: "Xe hợp đồng có được đón trả khách dọc đường như xe khách tuyến cố định không?",
      answer: "Không. Xe hợp đồng chỉ được vận chuyển theo đúng danh sách hành khách và địa điểm trong hợp đồng đã ký kết, không được đón trả khách ngoài hợp đồng.",
      regulationId: "gt-061"
    },
    {
      question: "Kinh doanh vận tải hàng hóa bằng xe ô tô gồm những loại nào?",
      answer: "Gồm: Vận tải hàng hóa thông thường và Vận tải hàng hóa đặc biệt (hàng nguy hiểm, hàng siêu trường siêu trọng, hàng tươi sống).",
      regulationId: "gt-062"
    },
    {
      question: "Đơn vị kinh doanh vận tải có nghĩa vụ gì về bảo hiểm?",
      answer: "Đơn vị kinh doanh vận tải hành khách phải đóng bảo hiểm cho hành khách; mức phí bảo hiểm được tính trong giá vé hoặc giá dịch vụ vận chuyển.",
      regulationId: "gt-063"
    },
    {
      question: "Người lái xe kinh doanh vận tải có quyền từ chối điều khiển phương tiện không?",
      answer: "Có quyền từ chối nếu phương tiện không bảo đảm các điều kiện an toàn, không có thiết bị giám sát hành trình hoặc khi chủ xe yêu cầu vi phạm luật giao thông.",
      regulationId: "gt-064"
    },
    {
      question: "Nghĩa vụ của hành khách khi đi xe là gì?",
      answer: "Hành khách phải mua vé hoặc có hợp đồng vận chuyển; chấp hành các quy định về an toàn trên xe; không mang theo hàng cấm, chất cháy nổ hoặc động vật gây ảnh hưởng.",
      regulationId: "gt-065"
    },
    {
      question: "Thời gian làm việc của người lái xe ô tô được quy định như thế nào?",
      answer: "Thời gian lái xe không quá 10 giờ trong một ngày và không quá 48 giờ trong một tuần. Thời gian lái xe liên tục không quá 04 giờ; riêng lái xe ban đêm (từ 22 giờ đến 06 giờ sáng) thời gian lái liên tục không quá 03 giờ.",
      regulationId: "gt-066"
    },
    {
      question: "Xe kinh doanh vận tải bắt buộc phải gắn những thiết bị giám sát nào?",
      answer: "Phải gắn thiết bị giám sát hành trình. Đối với một số loại xe (như xe khách, xe tải lớn), phải gắn thêm camera để ghi nhận hình ảnh của người lái xe và khoang hành khách.",
      regulationId: "gt-067"
    },
    {
      question: "Vận tải đa phương thức được hiểu như thế nào?",
      answer: "Là việc vận chuyển hàng hóa bằng ít nhất hai phương thức vận tải khác nhau (ví dụ: đường bộ kết hợp đường thủy) trên cơ sở một hợp đồng vận tải đa phương thức duy nhất.",
      regulationId: "gt-068"
    },
    {
      question: "Xe trung chuyển hành khách có được thu thêm tiền của người dân không?",
      answer: "Không. Vận tải trung chuyển hành khách chỉ phục vụ việc đưa đón hành khách từ nhà đến bến xe hoặc ngược lại và không được thu thêm bất kỳ khoản chi phí nào ngoài giá vé đã quy định.",
      regulationId: "gt-069"
    },
    {
      question: "Dịch vụ bến xe, trạm dừng nghỉ được coi là gì trong vận tải?",
      answer: "Đây là các dịch vụ hỗ trợ vận tải đường bộ. Bến xe phải đảm bảo các tiêu chuẩn về an toàn, vệ sinh và chất lượng dịch vụ phục vụ hành khách và phương tiện.",
      regulationId: "gt-071"
    },
    {
      question: "Dịch vụ cứu hộ giao thông đường bộ bao gồm những hoạt động nào?",
      answer: "Bao gồm việc sử dụng xe cứu hộ để hỗ trợ di dời các phương tiện bị hư hỏng, tai nạn hoặc bị sa lầy đến nơi sửa chữa hoặc địa điểm quy định nhằm đảm bảo thông suốt giao thông.",
      regulationId: "gt-076"
    },
    {
      question: "Dịch vụ phần mềm hỗ trợ kết nối vận tải phải tuân thủ quy định gì?",
      answer: "Phải tuân thủ pháp luật về giao dịch điện tử, an toàn thông tin và các quy định về kinh doanh vận tải. Phải bảo mật dữ liệu khách hàng và cung cấp thông tin cho cơ quan quản lý khi có yêu cầu.",
      regulationId: "gt-077"
    },
    {
      question: "Việc chở người và hàng hóa bằng xe máy, xe thô sơ được quy định ra sao?",
      answer: "Phải đảm bảo an toàn giao thông, không chở quá số người quy định, không xếp hàng hóa quá khổ giới hạn và phải tuân theo quy định cụ thể của Ủy ban nhân dân cấp tỉnh.",
      regulationId: "gt-078"
    },
    {
      question: "Bộ Giao thông vận tải có trách nhiệm gì trong quản lý nhà nước?",
      answer: "Là cơ quan đầu mối giúp Chính phủ thực hiện quản lý nhà nước về hoạt động đường bộ: xây dựng quy hoạch, ban hành tiêu chuẩn, quản lý hệ thống quốc lộ, đào tạo lái xe...",
      regulationId: "gt-080"
    },
    {
      question: "Bộ Công an có trách nhiệm gì đối với hoạt động đường bộ?",
      answer: "Chủ trì bảo đảm trật tự an toàn giao thông; tuần tra, kiểm soát và xử lý các hành vi vi phạm; quản lý việc đăng ký và cấp biển số phương tiện giao thông.",
      regulationId: "gt-081"
    },
    {
      question: "Chính quyền địa phương (UBND) có nhiệm vụ gì đối với đường bộ?",
      answer: "Quản lý các hệ thống đường địa phương (đường tỉnh, huyện, xã, đô thị); bảo vệ hành lang an toàn; tổ chức vận tải công cộng và thanh tra giao thông trên địa bàn.",
      regulationId: "gt-083"
    },
    {
      question: "Lực lượng Thanh tra đường bộ có những quyền hạn gì?",
      answer: "Thanh tra việc chấp hành quy định pháp luật về hạ tầng và vận tải; có quyền dừng phương tiện trong trường hợp khẩn cấp để ngăn chặn phá hoại công trình hoặc xe quá tải trọng nghiêm trọng.",
      regulationId: "gt-084"
    },
    {
      question: "Luật Đường bộ 2024 khi nào chính thức có hiệu lực toàn bộ?",
      answer: "Toàn bộ luật có hiệu lực từ ngày 01/01/2025. Lưu ý một số quy định về phí và ETC đã có hiệu lực sớm từ 01/10/2024.",
      regulationId: "gt-085"
    },
    {
      question: "Các dự án hoặc giấy phép được cấp trước khi Luật 2024 có hiệu lực thì xử lý thế nào?",
      answer: "Đây là quy định chuyển tiếp: Các dự án đang thực hiện hoặc giấy phép kinh doanh còn hạn được tiếp tục áp dụng cho đến khi hết thời hạn hoặc cần phải điều chỉnh theo quy định mới.",
      regulationId: "gt-086"
    }
  ] as QAData[]
};