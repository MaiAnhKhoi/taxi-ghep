import { Container } from "@/components/ui/Container";

const reviews = [
  {
    name: "Chị Hạnh (Sơn Trà, Đà Nẵng)",
    text: "Đặt xe qua Zalo nhanh, tài xế đến đúng giờ. Xe sạch sẽ, chạy êm. Về Quảng Ngãi không phải chờ lâu.",
  },
  {
    name: "Anh Tuấn (TP. Quảng Ngãi)",
    text: "Giá báo rõ ràng, không phát sinh. Đi tuyến Quảng Ngãi – Bình Định tiện, đón tận nơi nên tiết kiệm thời gian.",
  },
  {
    name: "Bạn Linh (Quy Nhơn)",
    text: "Mình đi buổi tối, tài xế hỗ trợ nhiệt tình. Nhắn vị trí là xác nhận ngay, cực kỳ tiện.",
  },
] as const;

export function Reviews() {
  return (
    <section id="danh-gia" className="bg-white/70 py-16 backdrop-blur-sm sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Khách hàng nói gì</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Một vài phản hồi thực tế (mô phỏng) để bạn hình dung trải nghiệm đặt xe.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex items-center gap-1 text-[var(--brand-accent)]" aria-hidden="true">
                {"★★★★★"}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-700">“{r.text}”</p>
              <div className="mt-5 text-sm font-bold text-slate-900">{r.name}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

