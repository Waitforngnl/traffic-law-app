
export interface Regulation {
  id: string;
  article: string;
  title: string;
  content: string;
  chapter: string;
  keyphrases: string[];
}

export interface QAItem {
  question: string;
  answer: string;
  regulationId: string;
  regulation?: Regulation;
}

// 2. Dữ liệu chính
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
      article: 'Điều 3',
      title: 'Nguyên tắc hoạt động đường bộ',
      content: 'Bảo đảm giao thông thông suốt, an toàn, kết nối đồng bộ, hiệu quả, thân thiện với môi trường. Phát triển đường bộ theo quy hoạch. Mọi hành vi vi phạm pháp luật về hoạt động đường bộ phải được phát hiện, ngăn chặn kịp thời, xử lý nghiêm minh, đúng pháp luật.',
      chapter: 'Chương I - Những quy định chung',
      keyphrases: ['nguyên tắc', 'an toàn giao thông', 'vi phạm pháp luật', 'xử lý nghiêm minh']
    },
    {
      id: 'gt-003',
      article: 'Điều 7',
      title: 'Các hành vi bị nghiêm cấm',
      content: 'Phá hoại kết cấu hạ tầng đường bộ. Đấu nối trái phép vào đường chính. Lấn, chiếm, sử dụng, xây dựng trái phép trong phạm vi bảo vệ kết cấu hạ tầng đường bộ. Lắp đặt, tháo dỡ báo hiệu đường bộ trái quy định. Kinh doanh vận tải không có giấy phép hoặc không đúng giấy phép.',
      chapter: 'Chương I - Những quy định chung',
      keyphrases: ['hành vi cấm', 'phá hoại', 'lấn chiếm', 'không có giấy phép', 'trái phép']
    },
    {
      id: 'gt-004',
      article: 'Điều 8',
      title: 'Phân loại đường bộ theo cấp quản lý',
      content: 'Đường bộ gồm: quốc lộ, đường tỉnh, đường huyện, đường xã, đường thôn, đường đô thị, đường chuyên dùng. Quốc lộ là đường nối liền Thủ đô Hà Nội với trung tâm hành chính cấp tỉnh; đường nối liền các trung tâm hành chính cấp tỉnh.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['phân loại đường', 'quốc lộ', 'đường tỉnh', 'đường đô thị', 'cấp quản lý']
    },
    {
      id: 'gt-005',
      article: 'Điều 15',
      title: 'Hành lang an toàn đường bộ',
      content: 'Hành lang an toàn đường bộ là dải đất dọc hai bên đất của đường bộ để bảo đảm an toàn giao thông đường bộ, bảo đảm tầm nhìn xe chạy và hạn chế ảnh hưởng đến môi trường xung quanh.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['hành lang an toàn', 'tầm nhìn', 'bảo vệ môi trường', 'dải đất']
    },
    {
      id: 'gt-006',
      article: 'Điều 23',
      title: 'Lắp đặt báo hiệu đường bộ',
      content: 'Báo hiệu đường bộ bao gồm: Đèn tín hiệu giao thông; Biển báo hiệu (biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh, biển chỉ dẫn, biển phụ); Vạch kẻ đường; Cọc tiêu, đinh phản quang; Tường bảo vệ và rào chắn.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['báo hiệu đường bộ', 'đèn tín hiệu', 'biển báo', 'vạch kẻ đường', 'cọc tiêu']
    },
    {
      id: 'gt-007',
      article: 'Điều 26',
      title: 'Tốc độ thiết kế và tốc độ khai thác',
      content: 'Tốc độ khai thác trên đường bộ là giá trị giới hạn tốc độ (tốc độ tối đa, tốc độ tối thiểu) cho phép phương tiện tham gia giao thông đường bộ bảo đảm an toàn giao thông và khai thác hiệu quả tuyến đường.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['tốc độ', 'tốc độ tối đa', 'tốc độ tối thiểu', 'giới hạn tốc độ', 'an toàn']
    },
    {
      id: 'gt-008',
      article: 'Điều 27',
      title: 'Tải trọng và khổ giới hạn của đường bộ',
      content: 'Tải trọng của đường bộ là khả năng chịu tải khai thác của đường bộ để bảo đảm khai thác an toàn và tuổi thọ công trình đường bộ. Khổ giới hạn là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['tải trọng', 'khổ giới hạn', 'chịu tải', 'chiều cao', 'chiều rộng']
    },
    {
      id: 'gt-009',
      article: 'Điều 32',
      title: 'Thi công công trình trên đường bộ đang khai thác',
      content: 'Tổ chức, cá nhân chỉ được thi công công trình trên đường bộ đang khai thác khi có giấy phép thi công, trừ một số trường hợp đặc biệt. Phải bố trí người cảnh báo, hướng dẫn giao thông, bố trí báo hiệu, rào chắn tạm thời.',
      chapter: 'Chương II - Kết cấu hạ tầng đường bộ',
      keyphrases: ['thi công', 'giấy phép', 'cảnh báo', 'rào chắn', 'đường đang khai thác']
    },
    {
      id: 'gt-010',
      article: 'Điều 44',
      title: 'Quy định chung đối với đường bộ cao tốc',
      content: 'Đường cao tốc là cấp kỹ thuật đường bộ, chỉ dành cho một số loại xe cơ giới, có dải phân cách phân chia hai chiều xe chạy riêng biệt, không giao nhau cùng mức, chỉ cho xe ra vào ở những điểm nhất định, có hàng rào bảo vệ.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['đường cao tốc', 'xe cơ giới', 'dải phân cách', 'không giao nhau cùng mức']
    },
    {
      id: 'gt-011',
      article: 'Điều 50',
      title: 'Phí sử dụng đường cao tốc',
      content: 'Nhà nước thu phí sử dụng đường cao tốc đối với phương tiện lưu thông trên đường cao tốc thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu và trực tiếp quản lý, khai thác.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['phí cao tốc', 'thu phí', 'đường cao tốc', 'lưu thông']
    },
    {
      id: 'gt-012',
      article: 'Điều 51',
      title: 'Tạm dừng khai thác đường cao tốc',
      content: 'Tạm dừng khai thác khi: công trình bị hư hỏng không an toàn; xảy ra sự cố cháy nổ, tai nạn đặc biệt nghiêm trọng; có yêu cầu phục vụ quốc phòng an ninh.',
      chapter: 'Chương III - Đường bộ cao tốc',
      keyphrases: ['tạm dừng', 'hư hỏng', 'sự cố', 'tai nạn nghiêm trọng', 'quốc phòng']
    },
    {
      id: 'gt-013',
      article: 'Điều 56',
      title: 'Hoạt động vận tải đường bộ',
      content: 'Hoạt động vận tải đường bộ là việc tổ chức, cá nhân sử dụng xe để vận tải người, hàng hóa trên đường bộ. Gồm kinh doanh vận tải và vận tải nội bộ. Kinh doanh vận tải bằng xe ô tô gồm: vận tải hành khách và vận tải hàng hóa.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['vận tải', 'kinh doanh vận tải', 'hành khách', 'hàng hóa', 'xe ô tô']
    },
    {
      id: 'gt-014',
      article: 'Điều 57',
      title: 'Vận tải hành khách bằng xe ô tô',
      content: 'Đơn vị kinh doanh vận tải hành khách phải: điều hành phương tiện và lái xe hoặc quyết định giá cước; tổ chức khám sức khỏe cho lái xe; công bố tiêu chuẩn chất lượng dịch vụ; ứng dụng công nghệ thông tin.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['vận tải hành khách', 'giá cước', 'khám sức khỏe', 'chất lượng dịch vụ']
    },
    {
      id: 'gt-015',
      article: 'Điều 58',
      title: 'Quyền và nghĩa vụ của đơn vị kinh doanh vận tải hành khách',
      content: 'Quyền: thu tiền vận tải; từ chối vận tải hành khách gây rối. Nghĩa vụ: mua bảo hiểm cho hành khách; thực hiện miễn giảm giá vé cho người cao tuổi, người khuyết tật; không sử dụng lái xe không có giấy phép hoặc bị trừ hết điểm.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['quyền nghĩa vụ', 'bảo hiểm', 'miễn giảm giá vé', 'giấy phép lái xe']
    },
    {
      id: 'gt-016',
      article: 'Điều 60',
      title: 'Quyền và nghĩa vụ của hành khách',
      content: 'Quyền: được vận tải theo đúng vé; được miễn giảm giá vé theo quy định. Nghĩa vụ: thanh toán tiền cước; chấp hành quy định về vận tải; không mang hàng hóa cấm lưu thông, hàng nguy hiểm.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['hành khách', 'quyền', 'nghĩa vụ', 'vé', 'hàng cấm']
    },
    {
      id: 'gt-017',
      article: 'Điều 61',
      title: 'Vận tải hàng hóa bằng xe ô tô',
      content: 'Giấy vận tải là giấy tờ xác nhận việc người lái xe đã nhận hàng hóa để vận tải. Đơn vị kinh doanh vận tải hàng hóa phải: điều hành phương tiện; khám sức khỏe cho lái xe; ứng dụng công nghệ thông tin.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['vận tải hàng hóa', 'giấy vận tải', 'điều hành', 'công nghệ']
    },
    {
      id: 'gt-018',
      article: 'Điều 62',
      title: 'Quyền và nghĩa vụ của đơn vị kinh doanh vận tải hàng hóa',
      content: 'Nghĩa vụ: không sử dụng lái xe không có giấy phép; hướng dẫn xếp dỡ hàng không vượt khối lượng cho phép, không vượt tải trọng, khổ giới hạn đường bộ; bồi thường thiệt hại.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['vận tải hàng hóa', 'không vượt tải', 'bồi thường', 'xếp dỡ hàng']
    },
    {
      id: 'gt-019',
      article: 'Điều 63',
      title: 'Quyền và nghĩa vụ của người lái xe vận tải hàng hóa',
      content: 'Từ chối điều khiển phương tiện khi: phương tiện không an toàn; không có thiết bị giám sát hành trình; xếp hàng vượt tải, vượt khổ giới hạn; hàng hóa cấm lưu thông; không có giấy vận tải.',
      chapter: 'Chương IV - Vận tải đường bộ',
      keyphrases: ['lái xe', 'từ chối', 'vượt tải', 'giám sát hành trình', 'không an toàn']
    },
    {
      id: 'gt-020',
      article: 'Điều 83',
      title: 'Thanh tra đường bộ',
      content: 'Thanh tra đường bộ có nhiệm vụ: thanh tra, kiểm tra, xử lý vi phạm về kết cấu hạ tầng đường bộ; vận tải đường bộ tại đơn vị vận tải, bến xe, bãi đỗ xe; hoạt động đào tạo, sát hạch, cấp giấy phép lái xe, kiểm định an toàn kỹ thuật.',
      chapter: 'Chương V - Quản lý nhà nước',
      keyphrases: ['thanh tra', 'kiểm tra', 'xử lý vi phạm', 'giấy phép lái xe', 'kiểm định']
    }
  ],
  
  qaData: [
    {
      question: 'Luật Đường bộ quy định về những vấn đề gì?',
      answer: 'Theo Điều 1, Luật Đường bộ quy định về hoạt động đường bộ và quản lý nhà nước về hoạt động đường bộ. Bao gồm các hoạt động về quy hoạch, đầu tư, xây dựng, quản lý, sử dụng, vận hành, khai thác, bảo trì, bảo vệ kết cấu hạ tầng đường bộ và vận tải đường bộ.',
      regulationId: 'gt-001'
    },
    {
      question: 'Những hành vi nào bị nghiêm cấm trong hoạt động đường bộ?',
      answer: 'Theo Điều 7, các hành vi bị nghiêm cấm gồm: Phá hoại kết cấu hạ tầng đường bộ; Đấu nối trái phép vào đường chính; Lấn, chiếm, sử dụng, xây dựng trái phép trong phạm vi bảo vệ kết cấu hạ tầng; Lắp đặt, tháo dỡ báo hiệu đường bộ trái quy định; Kinh doanh vận tải không có giấy phép hoặc không đúng giấy phép.',
      regulationId: 'gt-003'
    },
    {
      question: 'Đường bộ được phân loại như thế nào?',
      answer: 'Theo Điều 8, đường bộ theo cấp quản lý gồm: quốc lộ, đường tỉnh, đường huyện, đường xã, đường thôn, đường đô thị, đường chuyên dùng. Quốc lộ là đường nối liền Thủ đô Hà Nội với trung tâm hành chính cấp tỉnh hoặc nối các trung tâm hành chính cấp tỉnh với nhau.',
      regulationId: 'gt-004'
    },
    {
      question: 'Hành lang an toàn đường bộ là gì?',
      answer: 'Theo Điều 15, hành lang an toàn đường bộ là dải đất dọc hai bên đất của đường bộ, tính từ mép ngoài phần đất để bảo vệ, bảo trì đường bộ ra hai bên để bảo đảm an toàn giao thông đường bộ, bảo đảm tầm nhìn xe chạy và hạn chế ảnh hưởng đến môi trường xung quanh.',
      regulationId: 'gt-005'
    },
    {
      question: 'Báo hiệu đường bộ gồm những loại nào?',
      answer: 'Theo Điều 23, báo hiệu đường bộ bao gồm: Đèn tín hiệu giao thông; Biển báo hiệu đường bộ (biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh, biển chỉ dẫn, biển phụ); Vạch kẻ đường và các dấu hiệu khác trên mặt đường; Cọc tiêu, đinh phản quang, tiêu phản quang, cột Km; Tường bảo vệ và rào chắn; Thiết bị âm thanh báo hiệu.',
      regulationId: 'gt-006'
    },
    {
      question: 'Tốc độ khai thác trên đường bộ là gì?',
      answer: 'Theo Điều 26, tốc độ khai thác trên đường bộ là giá trị giới hạn tốc độ (tốc độ tối đa, tốc độ tối thiểu) cho phép phương tiện tham gia giao thông đường bộ bảo đảm an toàn giao thông và khai thác hiệu quả tuyến đường. Được xác định trên cơ sở tốc độ thiết kế, hiện trạng tuyến đường, thời tiết, lưu lượng xe.',
      regulationId: 'gt-007'
    },
    {
      question: 'Tải trọng và khổ giới hạn của đường bộ được quy định như thế nào?',
      answer: 'Theo Điều 27, tải trọng của đường bộ là khả năng chịu tải khai thác để bảo đảm an toàn và tuổi thọ công trình. Khổ giới hạn là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.',
      regulationId: 'gt-008'
    },
    {
      question: 'Khi nào được thi công trên đường bộ đang khai thác?',
      answer: 'Theo Điều 32, tổ chức, cá nhân chỉ được thi công công trình trên đường bộ đang khai thác khi có giấy phép thi công của cơ quan có thẩm quyền, trừ một số trường hợp đặc biệt. Trong quá trình thi công phải bố trí người cảnh báo, hướng dẫn giao thông, bố trí báo hiệu, rào chắn tạm thời.',
      regulationId: 'gt-009'
    },
    {
      question: 'Đường cao tốc có đặc điểm gì?',
      answer: 'Theo Điều 44, đường cao tốc là một cấp kỹ thuật của đường bộ, chỉ dành cho một số loại xe cơ giới, có dải phân cách phân chia hai chiều xe chạy riêng biệt, không giao nhau cùng mức với đường khác, chỉ cho xe ra vào ở những điểm nhất định, có hàng rào bảo vệ, bảo đảm giao thông liên tục, an toàn.',
      regulationId: 'gt-010'
    },
    {
      question: 'Có phải trả phí khi đi trên đường cao tốc không?',
      answer: 'Theo Điều 50, có. Nhà nước thu phí sử dụng đường cao tốc đối với phương tiện lưu thông trên đường cao tốc thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu và trực tiếp quản lý, khai thác.',
      regulationId: 'gt-011'
    },
    {
      question: 'Trong trường hợp nào đường cao tốc bị tạm dừng khai thác?',
      answer: 'Theo Điều 51, đường cao tốc phải tạm dừng khai thác khi: Công trình bị hư hỏng do sự cố không thể khai thác an toàn; Xảy ra sự cố cháy nổ, tai nạn giao thông đặc biệt nghiêm trọng cần cứu nạn cứu hộ; Có yêu cầu phục vụ quốc phòng, an ninh hoặc trường hợp đặc biệt khác.',
      regulationId: 'gt-012'
    },
    {
      question: 'Hoạt động vận tải đường bộ gồm những loại hình nào?',
      answer: 'Theo Điều 56, hoạt động vận tải đường bộ gồm hoạt động kinh doanh vận tải và hoạt động vận tải nội bộ. Kinh doanh vận tải bằng xe ô tô gồm kinh doanh vận tải hành khách và kinh doanh vận tải hàng hóa.',
      regulationId: 'gt-013'
    },
    {
      question: 'Đơn vị kinh doanh vận tải hành khách có trách nhiệm gì?',
      answer: 'Theo Điều 57, đơn vị kinh doanh vận tải hành khách phải: Thực hiện điều hành phương tiện và lái xe hoặc quyết định giá cước; Tổ chức khám sức khỏe cho người lái xe; Công bố tiêu chuẩn chất lượng dịch vụ; Ứng dụng công nghệ thông tin để quản lý điều hành.',
      regulationId: 'gt-014'
    },
    {
      question: 'Đơn vị vận tải hành khách có nghĩa vụ gì với hành khách?',
      answer: 'Theo Điều 58, đơn vị vận tải phải: Mua bảo hiểm cho hành khách; Thực hiện miễn giảm giá vé cho người cao tuổi, người khuyết tật và các đối tượng chính sách; Không sử dụng người lái xe không có giấy phép hoặc có giấy phép bị trừ hết điểm, bị tước hoặc thu hồi.',
      regulationId: 'gt-015'
    },
    {
      question: 'Hành khách có những quyền và nghĩa vụ gì?',
      answer: 'Theo Điều 60, hành khách có quyền: Được vận tải theo đúng vé, hợp đồng; Được nhận vé và từ chối chuyến đi trước khi khởi hành; Được miễn giảm giá vé theo quy định. Nghĩa vụ: Thanh toán tiền cước; Chấp hành quy định; Không mang hàng cấm lưu thông, hàng nguy hiểm, động vật hoang dã.',
      regulationId: 'gt-016'
    },
    {
      question: 'Giấy vận tải hàng hóa là gì?',
      answer: 'Theo Điều 61, giấy vận tải là giấy tờ để xác nhận việc người lái xe đã nhận hàng hóa với số lượng, chủng loại, tình trạng hàng hóa để vận tải đến nơi trả hàng. Đây là bằng chứng của hợp đồng vận tải hàng hóa.',
      regulationId: 'gt-017'
    },
    {
      question: 'Khi nào không được xếp hàng lên xe?',
      answer: 'Theo Điều 62, không được xếp hàng hóa trên phương tiện vượt quá khối lượng hàng hóa chuyên chở cho phép tham gia giao thông, vượt quá tải trọng, khổ giới hạn của đường bộ hoặc quá kích thước giới hạn cho phép xếp hàng của xe, trừ trường hợp có giấy phép lưu hành theo quy định.',
      regulationId: 'gt-018'
    },
    {
      question: 'Người lái xe được từ chối vận chuyển khi nào?',
      answer: 'Theo Điều 63, người lái xe vận tải hàng hóa được từ chối điều khiển phương tiện khi: Phương tiện không an toàn; Không có thiết bị giám sát hành trình hoặc thiết bị không hoạt động; Xếp hàng vượt tải trọng, vượt khổ giới hạn; Vận chuyển hàng hóa cấm lưu thông; Không có giấy vận tải.',
      regulationId: 'gt-019'
    },
    {
      question: 'Thanh tra đường bộ có nhiệm vụ gì?',
      answer: 'Theo Điều 83, Thanh tra đường bộ có nhiệm vụ: Thanh tra, kiểm tra, xử lý vi phạm pháp luật về kết cấu hạ tầng đường bộ; Thanh tra vận tải đường bộ tại đơn vị vận tải, bến xe, bãi đỗ xe; Thanh tra hoạt động đào tạo, sát hạch, cấp giấy phép lái xe và kiểm định an toàn kỹ thuật.',
      regulationId: 'gt-020'
    }
  ]
};