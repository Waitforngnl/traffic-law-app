import React, { useState } from 'react';
import { Search, Book, MessageSquare, FileText, AlertCircle, Sparkles, Scale } from 'lucide-react';

// Dữ liệu luật giao thông
const trafficLawData = {
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

const TrafficLawQASystem = () => {
  // SỬA LỖI TYPESCRIPT Ở ĐÂY: Thêm <any> hoặc <any[]> để TypeScript không báo lỗi
  const [activeTab, setActiveTab] = useState('search');
  const [searchQuery, setSearchQuery] = useState('');
  const [questionInput, setQuestionInput] = useState('');
  
  // FIX: Định nghĩa kiểu mảng cho searchResults (any[])
  const [searchResults, setSearchResults] = useState<any[]>([]);
  
  // FIX: Định nghĩa kiểu cho qaAnswer (any) để chấp nhận object hoặc null
  const [qaAnswer, setQaAnswer] = useState<any>(null);
  
  const [isSearching, setIsSearching] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false);

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
      
      let bestMatch: any = null;
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
        const regulation = trafficLawData.regulations.find(r => r.id === bestMatch.regulationId);
        setQaAnswer({
          ...bestMatch,
          regulation: regulation
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
                    {searchResults.map((result: any) => (
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
                  href="https://thuvienphaqluat.vn/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  thuvienphaqluat.vn
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