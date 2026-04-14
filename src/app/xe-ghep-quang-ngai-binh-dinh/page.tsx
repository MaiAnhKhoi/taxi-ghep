import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { BookingForm } from "@/components/sections/BookingForm";
import { siteConfig } from "@/lib/site";
import { buildLocalBusinessJsonLd, buildRouteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRouteMetadata({
  slug: "xe-ghep-quang-ngai-binh-dinh",
  title: "Xe ghép Quảng Ngãi ↔ Bình Định | Đón tận nơi, giá tốt, đi linh hoạt",
  description:
    "Xe ghép Quảng Ngãi ↔ Bình Định: đón tận nơi, giá hợp lý, xác nhận nhanh. Gọi ngay hoặc nhắn Zalo để chốt lịch và điểm đón.",
  keywords: [
    "xe ghép quảng ngãi bình định",
    "taxi quảng ngãi bình định",
    "xe ghép quảng ngãi đi quy nhơn",
    "xe ghép bình định đi quảng ngãi",
    "xe ghép liên tỉnh miền trung",
  ],
});

export default function RouteQuangNgaiBinhDinhPage() {
  const telHref = `tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`;

  return (
    <div className="bg-[#070B15]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildLocalBusinessJsonLd("/xe-ghep-quang-ngai-binh-dinh")),
        }}
      />

      <section className="border-b border-white/10 bg-gradient-to-b from-[#0b2a66] via-[#070B15] to-[#070B15] py-14 sm:py-18">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Xe ghép Quảng Ngãi ↔ Bình Định
            </h1>
            <p className="mt-4 text-pretty text-base leading-7 text-white/75 sm:text-lg">
              Đi Quy Nhơn, An Nhơn, Tuy Phước, Phù Cát… nhanh gọn, đón trả tận nơi. Xác nhận lịch nhanh qua hotline/Zalo.
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
            <h2 className="text-2xl font-extrabold text-white">
              Xe ghép Quảng Ngãi đi Bình Định: giải pháp hợp lý cho tuyến ngắn – trung bình
            </h2>
            <p className="leading-7">
              Tuyến <strong>xe ghép Quảng Ngãi ↔ Bình Định</strong> được nhiều khách lựa chọn vì quãng đường vừa phải, nhu
              cầu đi lại thường xuyên (công việc, thăm người thân, du lịch Quy Nhơn). Với hình thức xe ghép, bạn tối ưu chi
              phí nhưng vẫn giữ được sự thuận tiện của taxi: <strong>đón tận nơi</strong>, <strong>trả tận nơi</strong> và
              linh hoạt theo giờ.
            </p>
            <p className="leading-7">
              Khi tìm kiếm “<strong>taxi Quảng Ngãi Bình Định</strong>” hoặc “<strong>xe ghép Quảng Ngãi đi Quy Nhơn</strong>”,
              điều khách quan tâm nhất thường là: có dễ đặt không, giá có rõ ràng không, có đúng giờ không. Chúng tôi tập
              trung vào đúng 3 điều đó: quy trình đơn giản, báo giá trước, và ưu tiên đúng hẹn.
            </p>

            <h3 className="text-xl font-extrabold text-white">Điểm đón/trả phổ biến</h3>
            <ul className="list-disc space-y-2 pl-6 leading-7">
              <li>Quảng Ngãi: TP. Quảng Ngãi, Sơn Tịnh, Tư Nghĩa, Mộ Đức, Đức Phổ (tuỳ vị trí).</li>
              <li>Bình Định: Quy Nhơn, An Nhơn, Tuy Phước, Phù Cát, Phù Mỹ (tuỳ vị trí).</li>
            </ul>
            <p className="leading-7">
              Bạn cứ gửi vị trí cụ thể, tài xế sẽ tư vấn điểm đón thuận tiện nhất. Với các điểm xa trung tâm, chúng tôi sẽ
              thông báo phụ phí (nếu có) trước khi bạn xác nhận chuyến.
            </p>

            <h3 className="text-xl font-extrabold text-white">Khi nào nên chọn xe ghép?</h3>
            <p className="leading-7">
              Xe ghép phù hợp khi bạn đi 1–3 người, muốn di chuyển thoải mái hơn xe khách và không muốn lo chuyện gửi – nhận
              đồ tại bến. Nếu bạn cần riêng tư tuyệt đối, mang nhiều hành lý hoặc đi nhóm đông, bạn có thể đặt xe riêng (đặt
              trước qua Zalo để được tư vấn).
            </p>

            <h3 className="text-xl font-extrabold text-white">Báo giá và thời gian di chuyển</h3>
            <p className="leading-7">
              Thời gian di chuyển phụ thuộc vào tuyến đường và điểm đón/trả. Về giá, chúng tôi ưu tiên minh bạch: báo giá
              trước khi đón, chốt rõ điểm đón, số khách và ghi chú. Điều này giúp hạn chế phát sinh và giúp bạn chủ động chi
              tiêu, đặc biệt khi đi công tác hoặc đặt xe cho người thân.
            </p>

            <h3 className="text-xl font-extrabold text-white">Cam kết phục vụ tuyến Quảng Ngãi ↔ Bình Định</h3>
            <ul className="list-disc space-y-2 pl-6 leading-7">
              <li>
                <strong>Xác nhận nhanh</strong>: ưu tiên khách gọi/Zalo, chốt thông tin trong vài phút.
              </li>
              <li>
                <strong>Đón đúng điểm</strong>: nhận vị trí rõ ràng để tránh vòng vèo, tiết kiệm thời gian.
              </li>
              <li>
                <strong>Trải nghiệm thoải mái</strong>: xe sạch sẽ, điều hoà ổn định, hỗ trợ hành lý.
              </li>
              <li>
                <strong>Minh bạch</strong>: báo giá trước, phụ phí (nếu có) được thông tin rõ.
              </li>
            </ul>

            <h3 className="text-xl font-extrabold text-white">FAQ nhanh: xe ghép Quảng Ngãi Bình Định</h3>
            <div className="space-y-4 leading-7">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="font-extrabold text-white">Có nhận đón ở huyện xa không?</div>
                <p className="mt-2 text-sm text-white/75">
                  Có. Bạn gửi vị trí cụ thể, chúng tôi sẽ tư vấn thời gian đón và phụ phí (nếu phát sinh) trước khi xác nhận.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="font-extrabold text-white">Có thể đặt trước 1–2 ngày không?</div>
                <p className="mt-2 text-sm text-white/75">
                  Nên đặt trước nếu bạn có lịch cố định (đi sân bay, đi khám, đi công tác). Đặt trước giúp giữ chỗ và chọn
                  khung giờ phù hợp.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="font-extrabold text-white">Đi Quy Nhơn có đón/trả tận nơi không?</div>
                <p className="mt-2 text-sm text-white/75">
                  Có. Bạn chỉ cần cung cấp địa chỉ cụ thể tại Quy Nhơn (hoặc khu vực lân cận), tài xế sẽ sắp xếp điểm trả phù
                  hợp.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-white">Mẹo đặt xe nhanh qua Zalo</h3>
            <ul className="list-disc space-y-2 pl-6 leading-7">
              <li>Gửi vị trí GPS (chia sẻ vị trí) để tài xế đón đúng điểm.</li>
              <li>Ghi rõ giờ muốn đi và số khách.</li>
              <li>Nếu có trẻ em/hành lý nhiều, nói trước để sắp xếp xe phù hợp.</li>
            </ul>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-base font-extrabold text-white">Đặt xe tuyến Quảng Ngãi ↔ Bình Định</div>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Bấm gọi để được chốt lịch nhanh. Hoặc nhắn Zalo để gửi vị trí/ghi chú chi tiết.
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
              Dù bạn đi chiều Quảng Ngãi → Bình Định hay chiều Bình Định → Quảng Ngãi, chỉ cần liên hệ là chúng tôi sẽ tư
              vấn khung giờ phù hợp và hỗ trợ đặt xe nhanh. Mục tiêu là giúp bạn có chuyến đi an toàn, tiết kiệm và ít phải
              chờ đợi nhất.
            </p>
          </article>
        </Container>
      </section>

      <BookingForm defaultRoute="Quảng Ngãi ↔ Bình Định" />
    </div>
  );
}

