import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookingForm } from "@/components/sections/BookingForm";
import { siteConfig } from "@/lib/site";
import { buildLocalBusinessJsonLd, buildRouteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRouteMetadata({
  slug: "xe-ghep-da-nang-quang-ngai",
  title: "Xe ghép Đà Nẵng ↔ Quảng Ngãi | Đón tận nơi, giá rẻ, chạy liên tục",
  description:
    "Xe ghép tuyến Đà Nẵng ↔ Quảng Ngãi — chỉ nhận xe xuất phát Quảng Ngãi. Đón tận nơi, giá hợp lý. Gọi hoặc nhắn Zalo để chốt giờ và điểm đón/trả.",
  keywords: [
    "xe ghép đà nẵng quảng ngãi",
    "taxi đà nẵng quảng ngãi",
    "xe ghép liên tỉnh",
    "đặt xe đà nẵng đi quảng ngãi",
    "xe ghép quảng ngãi đi đà nẵng",
  ],
});

export default function RouteDaNangQuangNgaiPage() {
  const telHref = `tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`;

  return (
    <div className="bg-[#070B15]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildLocalBusinessJsonLd("/xe-ghep-da-nang-quang-ngai")),
        }}
      />

      <section className="border-b border-white/10 bg-gradient-to-b from-[#0b2a66] via-[#070B15] to-[#070B15] py-14 sm:py-18">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Xe ghép Đà Nẵng ↔ Quảng Ngãi
            </h1>
            <p className="mt-4 text-pretty text-base leading-7 text-white/75 sm:text-lg">
              Chỉ nhận chuyến xuất phát từ Quảng Ngãi (đi Đà Nẵng và các hướng liên quan). Đón tận nơi – trả tận nơi, giá
              rõ ràng, xác nhận nhanh qua điện thoại/Zalo. Phù hợp đi công tác, về quê, sân bay hoặc đặt xe theo giờ.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={telHref} variant="primary" size="lg">
                📞 Gọi ngay
              </ButtonLink>
              <ButtonLink
                href={siteConfig.zaloUrl}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noreferrer"
              >
                💬 Zalo
              </ButtonLink>
              <ButtonLink href="/#dat-xe" variant="outline" size="lg">
                Đặt xe
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <article className="mx-auto max-w-3xl space-y-6 text-white/80">
            <h2 className="text-2xl font-extrabold text-white">Xe ghép Đà Nẵng đi Quảng Ngãi: nhanh, tiện, tiết kiệm</h2>
            <p className="leading-7">
              Tuyến <strong>xe ghép Đà Nẵng ↔ Quảng Ngãi</strong> là lựa chọn tối ưu khi bạn muốn di chuyển liên tỉnh nhưng
              vẫn cần sự riêng tư và chủ động thời gian hơn so với xe khách. Thay vì phải ra bến, chờ đợi và trung
              chuyển, bạn chỉ cần gửi điểm đón/trả. Tài xế đến tận nơi và đưa bạn đến đúng địa chỉ mong muốn.
            </p>
            <p className="leading-7">
              Dịch vụ <strong>taxi Đà Nẵng Quảng Ngãi</strong> theo hình thức xe ghép giúp chi phí mềm hơn so với đi riêng
              trọn xe, đặc biệt phù hợp cho 1–3 khách, hành lý vừa phải, cần đi sớm hoặc đi muộn. Chúng tôi ưu tiên trải
              nghiệm: xác nhận nhanh, thông tin rõ ràng, chạy tuyến ổn định và cam kết an toàn.
            </p>

            <h3 className="text-xl font-extrabold text-white">Giá xe ghép Đà Nẵng – Quảng Ngãi có đắt không?</h3>
            <p className="leading-7">
              Chi phí phụ thuộc vào điểm đón/trả (nội thành hay xa trung tâm), số khách và khung giờ. Khi bạn nhắn Zalo
              hoặc gọi điện, chúng tôi sẽ <strong>báo giá trước</strong> để bạn yên tâm. Mục tiêu là “giá rẻ nhưng không
              đánh đổi chất lượng”: xe sạch, tài xế lịch sự, lái xe an toàn.
            </p>

            <h3 className="text-xl font-extrabold text-white">Lịch chạy: linh hoạt theo nhu cầu</h3>
            <p className="leading-7">
              Với tuyến xe ghép liên tỉnh, nhu cầu di chuyển thường rơi vào các mốc: sáng sớm đi làm/công tác, chiều tối
              về quê, hoặc giờ bay/tàu. Vì vậy, chúng tôi tối ưu lịch chạy theo thực tế, hỗ trợ nhiều khung giờ trong ngày.
              Bạn chỉ cần cung cấp: <strong>giờ muốn đi</strong> + <strong>điểm đón</strong> + <strong>điểm trả</strong>.
            </p>

            <h3 className="text-xl font-extrabold text-white">Đón tận nơi, trả tận nơi: vì sao “đáng tiền”?</h3>
            <p className="leading-7">
              Nếu bạn từng đi xe khách tuyến Đà Nẵng – Quảng Ngãi, bạn sẽ hiểu cảm giác “ra bến – chờ – trung chuyển”.
              Xe ghép giảm tối đa các điểm chờ: tài xế đến đúng hẹn, hỗ trợ hành lý, và đi thẳng theo lộ trình tối ưu.
              Đây là lợi thế lớn khi bạn đi cùng người lớn tuổi, trẻ nhỏ, hoặc có lịch trình cần đúng giờ.
            </p>

            <h3 className="text-xl font-extrabold text-white">Quy trình đặt xe (nhanh, rõ ràng)</h3>
            <ol className="list-decimal space-y-2 pl-6 leading-7">
              <li>Gọi hotline hoặc nhắn Zalo.</li>
              <li>Cung cấp điểm đón/trả, giờ đi, số khách, hành lý.</li>
              <li>Nhận báo giá và xác nhận chuyến.</li>
              <li>Tài xế đến đón đúng hẹn, di chuyển an toàn.</li>
            </ol>

            <h3 className="text-xl font-extrabold text-white">Lộ trình gợi ý và điểm đón phổ biến</h3>
            <p className="leading-7">
              Để chuyến đi mượt nhất, bạn nên gửi địa chỉ cụ thể (có thể kèm ghim vị trí). Một số điểm đón phổ biến tại Đà
              Nẵng: Hải Châu, Thanh Khê, Sơn Trà, Ngũ Hành Sơn, Liên Chiểu. Tại Quảng Ngãi: TP. Quảng Ngãi, Sơn Tịnh, Tư
              Nghĩa, Mộ Đức, Đức Phổ (tuỳ khu vực). Với điểm xa trung tâm, tài xế sẽ tư vấn thời gian đón phù hợp để tránh
              chờ lâu.
            </p>

            <h3 className="text-xl font-extrabold text-white">Cam kết dịch vụ xe ghép tuyến Đà Nẵng ↔ Quảng Ngãi</h3>
            <ul className="list-disc space-y-2 pl-6 leading-7">
              <li>
                <strong>Ưu tiên đúng giờ</strong>: xác nhận lại trước giờ đón, hạn chế trễ hẹn.
              </li>
              <li>
                <strong>Giá rõ ràng</strong>: chốt trước khi đón, không mập mờ.
              </li>
              <li>
                <strong>An toàn</strong>: tài xế kinh nghiệm tuyến miền Trung, chạy đúng tốc độ – đúng làn.
              </li>
              <li>
                <strong>Hỗ trợ nhanh</strong>: cần đổi giờ/đổi điểm, nhắn Zalo để được xử lý sớm.
              </li>
            </ul>

            <h3 className="text-xl font-extrabold text-white">Câu hỏi thường gặp (FAQ)</h3>
            <div className="space-y-4 leading-7">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="font-extrabold text-white">Xe ghép có phải chờ bắt khách dọc đường không?</div>
                <p className="mt-2 text-sm text-white/75">
                  Xe ghép tuyến ưu tiên lộ trình gọn và điểm đón đã thống nhất trước. Trường hợp cần đón thêm khách cùng
                  tuyến, tài xế sẽ sắp xếp hợp lý để không làm bạn chờ lâu.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="font-extrabold text-white">Có đi đêm/sáng sớm không?</div>
                <p className="mt-2 text-sm text-white/75">
                  Có. Bạn chỉ cần báo giờ dự kiến. Với khung giờ đặc biệt, chúng tôi sẽ xác nhận lại để đảm bảo có xe phù
                  hợp.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="font-extrabold text-white">Có phụ thu hành lý hoặc điểm xa không?</div>
                <p className="mt-2 text-sm text-white/75">
                  Nếu hành lý nhiều/cồng kềnh hoặc điểm đón/trả xa trung tâm, có thể phát sinh phụ phí. Tất cả sẽ được báo
                  trước khi bạn xác nhận chuyến.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-white">Từ khóa bạn đang tìm: “xe ghép Đà Nẵng Quảng Ngãi”</h3>
            <p className="leading-7">
              Nếu bạn đang tìm <strong>xe ghép Đà Nẵng Quảng Ngãi</strong> với tiêu chí: nhanh – tiện – giá hợp lý – đón tận
              nơi, thì đây là trang dành cho bạn. Chúng tôi tập trung đúng nhu cầu cốt lõi: dễ liên hệ, xác nhận nhanh, và
              luôn có phương án linh hoạt theo lịch trình của khách.
            </p>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-base font-extrabold text-white">Cần xe gấp?</div>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Bấm gọi ngay để chốt chuyến nhanh nhất. Nếu bạn muốn gửi vị trí, nhắn Zalo sẽ tiện hơn.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={telHref} variant="primary" size="lg">
                  📞 Gọi {siteConfig.phoneDisplay}
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.zaloUrl}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 Nhắn Zalo
                </ButtonLink>
              </div>
            </div>

            <p className="leading-7">
              Lưu ý: nội dung trên nhằm giúp bạn hiểu rõ dịch vụ. Để có giá chính xác và lịch đón phù hợp, hãy liên hệ trực
              tiếp qua điện thoại hoặc Zalo. Chúng tôi sẵn sàng hỗ trợ bạn đặt xe cho tuyến Đà Nẵng ↔ Quảng Ngãi nhanh nhất.
            </p>
          </article>
        </Container>
      </section>

      <BookingForm defaultRoute="Quảng Ngãi ↔ Đà Nẵng" />
    </div>
  );
}

