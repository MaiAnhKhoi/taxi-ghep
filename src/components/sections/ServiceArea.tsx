import { Container } from "@/components/ui/Container";

const areas = [
  "Quảng Ngãi (TP. Quảng Ngãi, Sơn Tịnh, Tư Nghĩa, Mộ Đức, Đức Phổ…)",
  "Đà Nẵng (Hải Châu, Thanh Khê, Sơn Trà, Ngũ Hành Sơn, Liên Chiểu…)",
  "Bình Định (Quy Nhơn, An Nhơn, Tuy Phước, Phù Cát, Phù Mỹ…)",
] as const;

export function ServiceArea() {
  return (
    <section id="khu-vuc-phuc-vu" className="bg-transparent py-14 sm:py-18">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="hero-text-shadow text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Khu vực phục vụ
            </h2>
            <p className="hero-subtext-shadow mt-4 text-sm leading-6 text-white/85 sm:text-base">
              Tập trung miền Trung, hỗ trợ cả nội thành và điểm xa (báo trước phụ phí nếu có). Bạn cứ gửi vị trí cụ thể,
              chúng tôi tư vấn nhanh tuyến đi phù hợp.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              {areas.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                    ✓
                  </span>
                  <span className="leading-6">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur">
            <div className="text-sm font-semibold text-white/80">Cam kết</div>
            <div className="mt-2 text-2xl font-extrabold text-white">Đúng giờ – An toàn – Giá rõ ràng</div>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Khi bạn đặt xe, chúng tôi xác nhận lại thông tin trước giờ đón. Nếu cần đổi giờ/đổi điểm, nhắn Zalo để được
              hỗ trợ nhanh.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { t: "Xác nhận nhanh", d: "Gọi/Zalo là chốt" },
                { t: "Xe sạch sẽ", d: "Thoải mái suốt chuyến" },
                { t: "Tài xế kinh nghiệm", d: "Tuyến miền Trung" },
                { t: "Hỗ trợ 24/7", d: "Theo lịch khách" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-white/15 bg-black/10 p-4">
                  <div className="text-sm font-extrabold text-white">{x.t}</div>
                  <div className="mt-1 text-xs text-white/75">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

