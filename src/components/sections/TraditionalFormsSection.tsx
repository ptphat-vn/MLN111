
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { CheckCircle2 } from "lucide-react"

export function TraditionalFormsSection() {
  return (
    <section id="section-5" className="min-h-screen py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[10rem] sm:text-[20rem] font-serif font-bold text-text-muted opacity-5 select-none leading-none -mt-16 -mr-16 pointer-events-none">
        05
      </div>

      <div className="max-w-4xl mx-auto z-10 relative">
        <div className="grid md:grid-cols-12 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <h2 className="text-4xl font-bold mb-4">Hình Thức Đấu Tranh Truyền Thống</h2>
            <div className="w-24 h-1 bg-accent-red mb-8"></div>
            <p className="text-text-muted text-lg leading-relaxed">
              3 hình thức đấu tranh cơ bản của giai cấp vô sản theo quan điểm Mác - Lênin: Đấu tranh kinh tế, Đấu tranh chính trị và Đấu tranh tư tưởng. Mỗi hình thức có vai trò lịch sử và đặc tính riêng biệt.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex justify-center"
          >
            <img 
              src="/driver_strike.png" 
              alt="Phong trào đấu tranh của công nhân" 
              className="w-full max-w-sm rounded-xl shadow-lg border border-border object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Tabs defaultValue="kinhte" className="w-full">
            <TabsList className="flex overflow-x-auto md:grid md:grid-cols-3 w-full h-auto gap-2 p-1 mb-8 scrollbar-none whitespace-nowrap justify-start md:justify-center">
              <TabsTrigger value="kinhte" className="text-sm md:text-lg py-3 shrink-0 flex-1 md:flex-none min-w-[140px] md:min-w-0">Đấu tranh Kinh tế</TabsTrigger>
              <TabsTrigger value="chinhtri" className="text-sm md:text-lg py-3 shrink-0 flex-1 md:flex-none min-w-[140px] md:min-w-0">Đấu tranh Chính trị</TabsTrigger>
              <TabsTrigger value="tutuong" className="text-sm md:text-lg py-3 shrink-0 flex-1 md:flex-none min-w-[140px] md:min-w-0">Đấu tranh Tư tưởng</TabsTrigger>
            </TabsList>
            
            <TabsContent value="kinhte">
              <Card className="border-t-4 border-t-accent-red">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Cơ bản nhất</Badge>
                    <Badge variant="secondary">Hình thức đầu tiên</Badge>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Mục đích</h3>
                  <p className="text-text-muted mb-6 leading-relaxed">
                    Bảo vệ những lợi ích kinh tế hàng ngày của công nhân (tăng lương, giảm giờ làm, cải thiện điều kiện lao động, chống sa thải...).
                  </p>
                  
                  <h3 className="text-xl font-serif font-bold mb-4">Hình thức</h3>
                  <ul className="space-y-3 mb-8">
                    {["Bãi công", "Đình công", "Yêu sách kinh tế", "Thương lượng"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent-red" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-[#fffbf0] p-6 rounded-lg border border-accent-gold/20">
                    <h4 className="font-bold text-accent-gold mb-2 flex items-center gap-2">
                      <span className="text-xl">💡</span> Áp dụng thực tiễn:
                    </h4>
                    <p className="text-text-ink text-sm leading-relaxed">
                      Phong trào bãi công của công nhân dệt tại các nhà máy lớn để phản đối việc cắt giảm thu nhập, đòi tăng 15% lương cơ bản, giảm giờ làm từ 12 tiếng xuống 8 tiếng/ngày và cải thiện điều kiện bảo hộ lao động nguy hiểm.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="chinhtri">
              <Card className="border-t-4 border-t-blue-500">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Hình thức cao nhất</Badge>
                    <Badge variant="secondary">Quan trọng nhất</Badge>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Mục đích</h3>
                  <p className="text-text-muted mb-6 leading-relaxed">
                    Giành chính quyền, lật đổ sự thống trị của giai cấp tư sản, thiết lập chuyên chính vô sản.
                  </p>
                  
                  <h3 className="text-xl font-serif font-bold mb-4">Hình thức</h3>
                  <ul className="space-y-3 mb-8">
                    {["Bãi công chính trị", "Biểu tình", "Khởi nghĩa vũ trang"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">💡</span> Áp dụng thực tiễn:
                    </h4>
                    <p className="text-text-ink text-sm leading-relaxed">
                      Phong trào đấu tranh Hiến chương (Chartism) của giai cấp công nhân đòi quyền bầu cử phổ thông, hoặc các phong trào biểu tình đòi Nhà nước luật hóa quyền tự do lập nghiệp đoàn, công nhận các đạo luật lao động tiến bộ của quốc gia.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tutuong">
              <Card className="border-t-4 border-t-green-500">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">Tiền đề</Badge>
                    <Badge variant="secondary">Nhận thức</Badge>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Mục đích</h3>
                  <p className="text-text-muted mb-6 leading-relaxed">
                    Khắc phục ảnh hưởng của tư tưởng tư sản, vũ trang cho giai cấp công nhân lý luận cách mạng (chủ nghĩa Mác - Lênin).
                  </p>
                  
                  <h3 className="text-xl font-serif font-bold mb-4">Hình thức</h3>
                  <ul className="space-y-3 mb-8">
                    {["Tuyên truyền", "Giáo dục", "Báo chí cách mạng", "Lý luận"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <span className="text-xl">💡</span> Áp dụng thực tiễn:
                    </h4>
                    <p className="text-text-ink text-sm leading-relaxed">
                      Tổ chức các câu lạc bộ đọc sách lý luận cách mạng, xuất bản và phân phát các tờ báo vô sản (như tờ Tia lửa - Iskra) để tuyên truyền học thuyết Mác, giúp công nhân nhận rõ bản chất bóc lột giá trị thặng dư và chuyển từ đấu tranh tự phát sang tự giác.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
