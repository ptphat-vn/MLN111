import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"

export function ClassDefinitionSection() {
  return (
    <section id="section-2" className="min-h-screen py-24 px-4 bg-bg-muted relative flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 text-[10rem] sm:text-[20rem] font-serif font-bold text-black opacity-[0.03] select-none leading-none -mt-16 -mr-16 pointer-events-none">
        02
      </div>

      <div className="max-w-5xl mx-auto z-10 relative w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Khái Niệm Giai Cấp</h2>
          <div className="w-24 h-1 bg-accent-red mx-auto"></div>
        </motion.div>

        {/* Quote Block Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 bg-bg-surface p-8 md:p-10 shadow-md border-l-8 border-accent-red rounded-r-2xl flex flex-col justify-center"
          >
            <blockquote className="font-serif italic text-xl md:text-2xl leading-relaxed text-text-ink">
              "Giai cấp là những tập đoàn người to lớn gồm những người khác nhau về địa vị của họ trong một hệ thống sản xuất xã hội nhất định trong lịch sử, về quan hệ của họ đối với những tư liệu sản xuất, về vai trò của họ trong tổ chức lao động xã hội, và như vậy là khác nhau về cách thức hưởng thụ và về phần của cải ít hoặc nhiều mà họ được hưởng."
            </blockquote>
            <p className="mt-4 text-right font-bold text-accent-red text-base md:text-lg">— V.I. Lênin</p>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 flex items-center justify-center"
          >
            <img 
              src="/digital_exploitation.png" 
              alt="Bản chất quan hệ giai cấp trong sản xuất" 
              className="w-full max-w-sm rounded-2xl shadow-md border border-border object-cover aspect-[4/3] md:aspect-auto"
            />
          </motion.div>
        </div>

        {/* Significance: Separate Premium Card with Large Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Card className="bg-[#FAF6EE] border-t-4 border-accent-gold shadow-lg rounded-2xl">
            <CardContent className="p-8 sm:p-10 space-y-6">
              <h3 className="font-serif font-bold text-accent-red text-xl sm:text-2xl flex items-center gap-2 border-b border-[#e0d9d0] pb-4">
                <span>💡 Ý nghĩa lý luận & thực tiễn sâu sắc:</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-text-ink font-serif font-semibold">
                {/* Significance 1 */}
                <div className="bg-white/80 p-5 rounded-2xl border border-[#e0d9d0] flex gap-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl shrink-0 mt-0.5">🧐</div>
                  <div className="space-y-1.5">
                    <span className="text-accent-red font-bold block text-base sm:text-lg">Không thuần túy là thu nhập</span>
                    <span className="text-text-muted text-xs sm:text-sm font-sans font-medium leading-relaxed block">
                      Phân chia giai cấp không đơn giản chỉ là dựa vào mức thu nhập cao hay thấp, hay sự phân hóa giàu - nghèo đơn thuần.
                    </span>
                  </div>
                </div>

                {/* Significance 2 */}
                <div className="bg-white/80 p-5 rounded-2xl border border-[#e0d9d0] flex gap-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl shrink-0 mt-0.5">🏗️</div>
                  <div className="space-y-1.5">
                    <span className="text-accent-red font-bold block text-base sm:text-lg">Vị trí sản xuất là gốc rễ</span>
                    <span className="text-text-muted text-xs sm:text-sm font-sans font-medium leading-relaxed block">
                      Nhân tố cốt lõi quan trọng nhất là vai trò và vị trí quyết định của tập đoàn người đó trong hệ thống sản xuất xã hội.
                    </span>
                  </div>
                </div>

                {/* Significance 3 */}
                <div className="bg-white/80 p-5 rounded-2xl border border-[#e0d9d0] flex gap-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl shrink-0 mt-0.5">🔑</div>
                  <div className="space-y-1.5">
                    <span className="text-accent-red font-bold block text-base sm:text-lg">Kiểm soát tư liệu sản xuất</span>
                    <span className="text-text-muted text-xs sm:text-sm font-sans font-medium leading-relaxed block">
                      Ai nắm quyền sở hữu và kiểm soát tư liệu sản xuất chủ yếu sẽ có ưu thế tuyệt đối trong phân phối sản phẩm xã hội.
                    </span>
                  </div>
                </div>

                {/* Significance 4 */}
                <div className="bg-white/80 p-5 rounded-2xl border border-[#e0d9d0] flex gap-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl shrink-0 mt-0.5">⚒️</div>
                  <div className="space-y-1.5">
                    <span className="text-accent-red font-bold block text-base sm:text-lg">Bản chất giai cấp lao động</span>
                    <span className="text-text-muted text-xs sm:text-sm font-sans font-medium leading-relaxed block">
                      Những người không sở hữu tư liệu sản xuất, phải hoàn toàn phụ thuộc vào việc bán sức lao động để sống đều thuộc giai cấp lao động.
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
