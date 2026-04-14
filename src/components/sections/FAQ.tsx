import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export const faqItems = [
  {
    question: "Xe ghép có đón tận nơi không?",
    answer:
      "Có. Tài xế đón tận nơi và trả tận nơi theo địa chỉ bạn cung cấp. Bạn chỉ cần gửi vị trí (Zalo) hoặc đọc địa chỉ khi gọi điện.",
  },
  {
    question: "Giá xe ghép Đà Nẵng ↔ Quảng Ngãi, Quảng Ngãi ↔ Bình Định tính như thế nào?",
    answer:
      "Giá phụ thuộc điểm đón/trả, số khách, khung giờ và nhu cầu đi gấp. Chúng tôi báo giá trước khi đón để bạn yên tâm, ưu tiên minh bạch và không phát sinh.",
  },
  {
    question: "Có chạy sáng sớm/đêm không?",
    answer:
      "Có. Dịch vụ hỗ trợ nhiều khung giờ trong ngày. Bạn nên đặt sớm để giữ lịch, đặc biệt nếu đi sân bay/đi công tác.",
  },
  {
    question: "Đặt xe nhanh nhất bằng cách nào?",
    answer:
      `Nhanh nhất là bấm gọi hotline ${siteConfig.phoneDisplay}. Nếu cần gửi vị trí hoặc ghi chú chi tiết, bạn nhắn Zalo để được xác nhận nhanh.`,
  },
] as const;

export function FAQ() {
  return (
    <section id="faq" className="bg-transparent py-14 sm:py-18">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="hero-text-shadow text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Câu hỏi thường gặp
          </h2>
          <p className="hero-subtext-shadow mt-3 text-sm leading-6 text-white/85 sm:text-base">
            Giải đáp nhanh trước khi bạn đặt xe. Nếu cần xe gấp, bấm gọi để chốt lịch nhanh nhất.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {faqItems.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-extrabold text-white sm:text-lg">
                <span>{faq.question}</span>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-[color:var(--brand-accent)] transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-sm leading-7 text-white/80">{faq.answer}</div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

