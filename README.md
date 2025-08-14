# 365 Days and 365 Components 🧩

> Bộ sưu tập 365 UI Components tinh gọn, hiện đại – được tạo ra mỗi ngày trong suốt một năm.

![Phuong Linh Media](https://img.shields.io/badge/Phuong%20Linh-Media-blue?style=for-the-badge)
![Next.JS](https://img.shields.io/badge/Next.JS15+-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-06B6D4?style=for-the-badge&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/license-PL--NPCL-blueviolet?style=for-the-badge)
![Open Source Love](https://img.shields.io/badge/Open%20Source-%F0%9F%92%96-ff69b4?style=for-the-badge)

## 🌟 Tổng quan dự án

**365 Days & 365 Components** là hành trình thiết kế và lập trình giao diện liên tục trong 365 ngày, với mỗi ngày một component UI nhỏ gọn, chuẩn hóa và dễ tái sử dụng. Dự án này không chỉ là một bộ thư viện mà còn là nguồn cảm hứng cho cộng đồng lập trình viên, đặc biệt trong hệ sinh thái công nghệ của **Phuong Linh Ventures**.

### 🎯 Mục tiêu chiến lược

- **Xây dựng hệ sinh thái UI riêng biệt**: Tối ưu hóa cho các sản phẩm của Phuong Linh Media
- **Khuyến khích tư duy thiết kế tinh gọn**: Phát triển thói quen thiết kế gọn gàng, tinh tế và gợi cảm
- **Đóng góp cho cộng đồng**: Cung cấp kho tài nguyên thực tế, miễn phí cho lập trình viên Việt Nam
- **Chuẩn hóa quy trình**: Tạo ra bộ design system nhất quán cho toàn bộ hệ sinh thái

## 🛠️ Tech Stack

| Công nghệ | Phiên bản | Vai trò | Trạng thái |
|-----------|-----------|---------|------------|
| **Next.JS** | 15+ | Framework chính cho việc xây dựng components | ✅ Hoàn thành |
| **Tailwind CSS** | 3.4+ | Hệ thống styling tiện lợi và linh hoạt | ✅ Hoàn thành |
| **Framer Motion** | 10+ | Tạo animation mượt mà và chuyên nghiệp | ✅ Hoàn thành |
| **TypeScript** | 5.0+ | Đảm bảo tính an toàn kiểu dữ liệu | 🔄 Đang triển khai |
| **ShadCN UI** | Latest | Hỗ trợ xây dựng layout phức tạp | 📋 Tùy chọn |
| **Storybook** | 7+ | Documentation và testing components | 📋 Kế hoạch |

## 📁 Kiến trúc dự án

Dự án được tổ chức theo cấu trúc module hóa để dễ dàng bảo trì và mở rộng:

📦 365-days-and-365-components/
├── 📂 components/
│ ├── 📂 buttons/ # Nút bấm đa dạng (
│ │ ├── PrimaryButton.tsx
│ │ ├── GhostButton.tsx
│ │ └── ...
│ ├── 📂 forms/ # Form và input elements 
│ │ ├── TextInput.tsx
│ │ ├── SelectDropdown.tsx
│ │ └── ...
│ ├── 📂 cards/ # Card layout components 
│ │ ├── ProductCard.tsx
│ │ ├── ProfileCard.tsx
│ │ └── ...
│ ├── 📂 modals/ # Popup và dialog
│ │ ├── ConfirmModal.tsx
│ │ ├── ImageModal.tsx
│ │ └── ...
│ ├── 📂 loaders/ # Loading animations 
│ │ ├── SpinnerLoader.tsx
│ │ ├── SkeletonLoader.tsx
│ │ └── ...
│ ├── 📂 navigation/ # Menu và navigation 
│ │ ├── Navbar.tsx
│ │ ├── Sidebar.tsx
│ │ └── ...
│ └── 📂 utils/ # Công cụ hỗ trợ chung
│ ├── hooks/
│ ├── helpers/
│ └── types/
├── 📂 demos/ # Live examples cho từng component
├── 📂 docs/ # Tài liệu chi tiết
├── 📂 assets/ # Icons, images, fonts
└── 📂 tests/ # Unit tests và integration tests

text

### 🎨 Quy chuẩn thiết kế

Mỗi component tuân thủ **Phuong Linh Design System**:
- **Responsive-first**: Tối ưu cho mọi thiết bị
- **Accessibility**: Tuân thủ WCAG 2.1 AA
- **Performance**: Lazy loading và code splitting
- **Customizable**: Dễ dàng tùy chỉnh theme và variants
- **TypeScript Ready**: Hỗ trợ đầy đủ type definitions

## 🚀 Hướng dẫn sử dụng

### Cài đặt nhanh

Clone repository
git clone https://github.com/lengvinhkhoa/365-days-and-365-components.git

Di chuyển vào thư mục dự án
cd 365-days-and-365-components

Cài đặt dependencies (khuyến nghị dùng pnpm)
pnpm install

Chạy development server
pnpm dev

Mở browser tại http://localhost:3000

### Tích hợp vào dự án

// Import component cần thiết
import { PrimaryButton, ProductCard } from '365-components'

// Sử dụng trong JSX
function MyApp() {
return (
<div>
<ProductCard title="Sản phẩm của Phuong Linh" description="Component được thiết kế tỉ mỉ" variant="modern" />
<PrimaryButton
onClick={() => console.log('Clicked!')}
size="lg"
>
Khám phá ngay
</PrimaryButton>
</div>
)
}
  
## 🔒 Giấy phép sử dụng

Dự án được phát hành dưới **Phuong Linh Non-Profit Commercial License**:

- ✅ **Miễn phí**: Sử dụng cho mục đích cá nhân, giáo dục và phi lợi nhuận
- ✅ **Open Source**: Code nguồn mở, đóng góp từ cộng đồng
- ⚠️ **Thương mại**: Cần liên hệ để có giấy phép sử dụng thương mại
- 📞 **Tư vấn**: Liên hệ team để được hỗ trợ tích hợp chuyên sâu

> **Lưu ý**: Vui lòng đọc kỹ [LICENSE.md](./LICENSE.md) trước khi sử dụng trong dự án thương mại.

## 🌐 Demo & Resources

### Live Demo
🔗 **Production**: [https://365ui.phuonglinh.dev](https://365ui.phuonglinh.dev) *(Coming Q4 2025)*  
🔗 **Staging**: [https://staging.365ui.phuonglinh.dev](https://staging.365ui.phuonglinh.dev)  
🔗 **Storybook**: [https://storybook.365ui.phuonglinh.dev](https://storybook.365ui.phuonglinh.dev) *(Q3 2025)*

### Tài liệu & Hỗ trợ
📚 **Documentation**: [https://docs.365ui.phuonglinh.dev](https://docs.365ui.phuonglinh.dev)  
💬 **Discord Community**: [https://discord.gg/phuonglinhnonprofit](https://discord.gg/phuonglinhnonprofit)

## 👨‍💼 Về tác giả

**Le Nguyen Vinh Khoa** - *Chủ tịch & Founder*  
🏢 **Phuong Linh Media** - *Chạm Đúng Cảm Xúc – Kết Nối Đúng Người*  
🎭 **Phuong Linh Muse** - *Ngôi nhà sáng tạo nghệ thuật*  

### Liên hệ & Hỗ trợ
📧 **Email**: [contact@phuonglinh.dev](mailto:contact@phuonglinh.dev)  
🌐 **Website**: [https://phuonglinh.ventures](https://phuonglinh.ventures)  
📱 **Social**: [@phuonglinh.ventures](https://facebook.com/phuonglinhdev)

---
**🧩 Mỗi ngày một component, mỗi component một câu chuyện 🧩**

*Được tạo ra với ❤️ bởi Phuong Linh Ventures Ecosystem*

[![Star this repo](https://img.shields.io/github/stars/phuonglinh-ventures/365-days-and-365-components?style=social)](https://github.com/phuonglinh-ventures/365-days-and-365-components)
[![Follow @phuonglinh](https://img.shields.io/github/followers/phuonglinh-ventures?style=social)](https://github.com/phuonglinh-ventures)

</div>
