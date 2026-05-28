
import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion"
import { Swords } from "lucide-react"

export function StruggleTheorySection() {
  return (
    <section id="section-4" className="min-h-screen py-24 px-4 bg-bg-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[10rem] sm:text-[20rem] font-serif font-bold text-black opacity-[0.03] select-none leading-none -mt-16 -mr-16 pointer-events-none">
        04
      </div>

      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Lý Thuyết Đấu Tranh Giai Cấp</h2>
          <div className="w-24 h-1 bg-accent-red mx-auto mb-8"></div>
          <p className="text-text-muted text-lg">
            Động lực phát triển của xã hội có giai cấp là đấu tranh giai cấp.
          </p>
        </motion.div>

        {/* General Marxist Definition Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <Card className="bg-[#FAF6EE] border-l-4 border-accent-red shadow-md">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-serif font-bold text-accent-red flex items-center gap-2">
                <span>📖 Quan Điểm Chủ Nghĩa Mác – Lênin</span>
              </h3>
              <p className="text-text-ink text-base font-serif font-semibold leading-relaxed">
                Đấu tranh giai cấp là cuộc đấu tranh giữa các giai cấp có lợi ích đối lập nhau.
              </p>
              <div className="border-t border-[#e0d9d0] pt-3.5">
                <p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-3">Sự đối lập này xuất hiện vì:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-serif text-text-ink font-semibold">
                  <div className="bg-white/70 p-3.5 rounded-xl border border-[#e0d9d0] flex flex-col gap-2 shadow-sm">
                    <span className="text-accent-gold text-xl">⚙️</span>
                    <span className="leading-relaxed">Mỗi giai cấp có vị trí khác nhau trong hệ thống sản xuất.</span>
                  </div>
                  <div className="bg-white/70 p-3.5 rounded-xl border border-[#e0d9d0] flex flex-col gap-2 shadow-sm">
                    <span className="text-accent-gold text-xl">💰</span>
                    <span className="leading-relaxed">Có quyền lợi kinh tế khác nhau.</span>
                  </div>
                  <div className="bg-white/70 p-3.5 rounded-xl border border-[#e0d9d0] flex flex-col gap-2 shadow-sm">
                    <span className="text-accent-gold text-xl">🎯</span>
                    <span className="leading-relaxed">Có mục tiêu khác nhau.</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Conflict Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-16 relative">
          {/* Vertical line behind items on mobile */}
          <div className="md:hidden absolute top-10 bottom-10 left-1/2 w-[2px] bg-gradient-to-b from-red-200 via-accent-red to-blue-200 z-0 -translate-x-1/2"></div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 relative z-10"
          >
            <Card className="bg-white border-2 border-red-100 shadow-md">
              <CardContent className="p-6 text-center">
                <Badge variant="outline" className="mb-4 bg-red-50 text-red-700 border-red-200">Chủ Doanh Nghiệp</Badge>
                <h3 className="font-serif font-bold text-xl mb-3 text-red-950">Mục tiêu của giới chủ</h3>
                <ul className="text-sm text-text-muted text-left list-disc list-inside space-y-2 font-serif font-medium">
                  <li>Muốn tăng lợi nhuận</li>
                  <li>Giảm chi phí lao động</li>
                  <li>Tăng hiệu suất làm việc</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             className="z-10 flex flex-col items-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 bg-white hidden md:block">
              <img src="/platform_vs_worker.png" alt="Mâu thuẫn" className="w-full h-full object-cover" />
            </div>
            <div className="bg-bg-muted p-4 rounded-full shadow-sm relative z-10 border border-border">
              <Swords className="w-8 h-8 text-accent-red" />
            </div>
          </motion.div>

          {/* Animated line behind swords */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-red-200 via-accent-red to-blue-200 z-0 -translate-y-1/2"></div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 relative z-10"
          >
            <Card className="bg-white border-2 border-blue-100 shadow-md">
              <CardContent className="p-6 text-center">
                <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-700 border-blue-200">Người Lao Động</Badge>
                <h3 className="font-serif font-bold text-xl mb-3 text-blue-950">Mục tiêu của người lao động</h3>
                <ul className="text-sm text-text-muted text-left list-disc list-inside space-y-2 font-serif font-medium">
                  <li>Muốn tăng thu nhập</li>
                  <li>Giảm áp lực công việc</li>
                  <li>Có quyền lợi và điều kiện tốt hơn</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <Badge className="text-lg py-2 px-6 shadow-md bg-accent-red hover:bg-accent-red/90 text-white">
            =&gt; Mâu Thuẫn Lợi Ích Không Thể Điều Hòa
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-bg-surface border border-border shadow-sm rounded-xl">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-border/60">
                  <AccordionTrigger className="text-lg font-serif font-bold text-accent-red hover:text-red-800">
                    Nguyên nhân sâu xa (Kinh tế)
                  </AccordionTrigger>
                  <AccordionContent className="text-text-ink text-sm sm:text-base leading-relaxed font-serif font-medium pt-2 pl-2">
                    Mâu thuẫn cơ bản giữa **lực lượng sản xuất** ngày càng có tính chất xã hội hóa cao với **quan hệ sản xuất** dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu. Khi quan hệ sản xuất lỗi thời kìm hãm lực lượng sản xuất phát triển, mâu thuẫn này sẽ bùng nổ thành đấu tranh giai cấp sâu sắc.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-none">
                  <AccordionTrigger className="text-lg font-serif font-bold text-accent-red hover:text-red-800">
                    Nguyên nhân trực tiếp (Xã hội)
                  </AccordionTrigger>
                  <AccordionContent className="text-text-ink text-sm sm:text-base leading-relaxed font-serif font-medium pt-2 pl-2">
                    Sự đối kháng gay gắt không thể điều hòa được về mặt **lợi ích kinh tế** (như việc giai cấp thống trị bóc lột giá trị thặng dư, chiếm đoạt kết quả lao động thặng dư của giai cấp bị trị). Khi mâu thuẫn lợi ích tích tụ đến đỉnh điểm, nó chuyển hóa trực tiếp thành đấu tranh chính trị - xã hội quyết liệt nhằm giành lại quyền lợi của giai cấp lao động.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
