import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function Introduction() {
  return (
    <section id="gioi-thieu" className="bg-transparent py-14 sm:py-18">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="hero-text-shadow text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Taxi Quảng Ngãi – xe ghép tuyến miền Trung
              </h2>
              <p className="hero-subtext-shadow mt-4 text-sm leading-7 text-white/85 sm:text-base">
                {siteConfig.brand} tập trung vào trải nghiệm đặt xe nhanh và minh bạch. Chúng tôi phục vụ các tuyến Đà Nẵng
                ↔ Quảng Ngãi ↔ Bình Định, hỗ trợ đón/trả tận nơi, linh hoạt khung giờ theo lịch của khách.
              </p>
              <p className="hero-subtext-shadow mt-3 text-sm leading-7 text-white/85 sm:text-base">
                Với khách đi công tác, đi sân bay, đưa đón người thân hoặc cần xe gấp, bạn chỉ cần gọi hoặc nhắn Zalo để
                xác nhận ngay. Mục tiêu là: đúng giờ, an toàn, và “giá rõ ràng”.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur">
              <div className="text-sm font-semibold text-white/80">Điểm mạnh</div>
              <div className="mt-2 text-2xl font-extrabold text-white">Tập trung chuyển đổi: gọi/Zalo 1 chạm</div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Báo giá trước khi đón",
                  "Đón tận nơi – trả tận nơi",
                  "Xác nhận nhanh qua Zalo",
                  "Hỗ trợ linh hoạt theo lịch",
                ].map((x) => (
                  <div key={x} className="rounded-2xl bg-black/10 px-4 py-3 text-sm font-semibold text-white">
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

