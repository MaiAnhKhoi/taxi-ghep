import { Container } from "@/components/ui/Container";

const services = [
  {
    icon: "🚗",
    title: "Taxi liên tỉnh",
    desc: "Đà Nẵng ↔ Quảng Ngãi ↔ Bình Định. Lộ trình rõ ràng, đi thẳng tối ưu thời gian.",
  },
  {
    icon: "✈️",
    title: "Đưa đón sân bay",
    desc: "Hỗ trợ đặt lịch theo giờ bay. Ưu tiên đúng giờ, an toàn, thoải mái.",
  },
  {
    icon: "⏱️",
    title: "Thuê xe theo giờ",
    desc: "Phù hợp đi công việc, khám bệnh, sự kiện. Linh hoạt điểm dừng.",
  },
  {
    icon: "🏠",
    title: "Đón/trả tận nơi",
    desc: "Không cần ra bến. Chỉ cần gửi vị trí, tài xế đến đúng điểm hẹn.",
  },
] as const;

export function Services() {
  return (
    <section id="dich-vu" className="bg-transparent py-14 sm:py-18">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="hero-text-shadow text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Dịch vụ nổi bật
          </h2>
          <p className="hero-subtext-shadow mt-3 text-sm leading-6 text-white/85 sm:text-base">
            Tập trung vào trải nghiệm đặt xe nhanh – giá minh bạch – đón đúng giờ.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
            >
              <div className="text-3xl">{s.icon}</div>
              <div className="mt-3 text-lg font-extrabold text-white">{s.title}</div>
              <p className="mt-2 text-sm leading-6 text-white/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

