import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Gamepad2, RotateCcw, ChevronRight } from "lucide-react"

interface GameChoice {
  text: string
  nextScene: number
  impact?: {
    money?: number
    rating?: number
    kpi?: number
  }
}

interface Character {
  name: string
  avatar: string
  role: string
}

interface GameScene {
  id: number
  title: string
  character?: Character
  dialogue: string[]
  choices?: GameChoice[]
  isEnding?: boolean
  endingType?: "bad" | "good"
}

const characters = {
  minh: { name: "Minh", avatar: "👨‍💼", role: "Tài xế mới" },
  huy: { name: "Huy", avatar: "👨‍💻", role: "Tài xế lâu năm" },
  ai: { name: "AI System", avatar: "🤖", role: "Hệ thống ứng dụng" },
  company: { name: "Đại diện công ty", avatar: "💼", role: "Quản lý nền tảng" },
}

const scenes: GameScene[] = [
  {
    id: 0,
    title: "CẢNH 1 — GIA NHẬP NỀN TẢNG",
    character: characters.minh,
    dialogue: [
      "Minh: Mình vừa tốt nghiệp xong, cần kiếm tiền.",
      "Bạn của Minh: Chạy app đi, tự do lắm. Muốn làm lúc nào cũng được.",
      "Minh: Thật sao? Nghe có vẻ ổn...",
      "[Minh tải ứng dụng]",
      "🤖 AI System: Chúc mừng! Bạn đã trở thành đối tác tự do của X App.",
      "🤖 AI System: Hãy làm chủ thời gian và thu nhập của bạn.",
      "Minh: Nghe có vẻ ổn thật."
    ],
    choices: [
      { text: "Bật app và bắt đầu", nextScene: 1 }
    ]
  },
  {
    id: 1,
    title: "CẢNH 2 — NHỮNG NGÀY ĐẦU 'TỰ DO'",
    character: characters.minh,
    dialogue: [
      "[Minh bật app]",
      "🤖 AI System: Có 5 cuốc chờ bạn!",
      "Minh: Dễ quá! Cuốc nào cũng nhận được.",
      "[Sau 3 giờ làm việc]",
      "✅ Kiếm được: 450.000đ",
      "⭐ Khách đánh giá: 5.0 sao (5 chuyến 5 sao)",
      "Minh: Mình thật sự đang làm chủ!"
    ],
    choices: [
      { text: "Tiếp tục chạy", nextScene: 2, impact: { money: 450000 } }
    ]
  },
  {
    id: 2,
    title: "CẢNH 3 — THUẬT TOÁN BẮT ĐẦU KIỂM SOÁT",
    character: characters.ai,
    dialogue: [
      "[Sau 5 giờ làm việc, Minh cảm thấy mệt]",
      "Minh: Mình muốn nghỉ sớm...",
      "🤖 AI System: ⚠️ THÔNG BÁO",
      "🤖 AI System: Hoàn thành thêm 3 cuốc để nhận thưởng giờ cao điểm: +500.000đ",
      "Minh: Ồ, 500k thưởng? Chạy tiếp vậy..."
    ],
    choices: [
      { 
        text: "Tiếp tục chạy để nhận thưởng", 
        nextScene: 3,
        impact: { money: 500000 }
      },
      { 
        text: "Tắt app và nghỉ", 
        nextScene: 3,
        impact: { money: 0, kpi: 10 }
      }
    ]
  },
  {
    id: 3,
    title: "CẢNH 4 — KHÔNG ĐƯỢC QUYỀN LỰA CHỌN",
    character: characters.ai,
    dialogue: [
      "[Minh nhận một cuốc]",
      "Minh: Được rồi, nhận này.",
      "[Sau khi nhận]",
      "🤖 AI System: Đơn hàng: Quận 9 → Quận Tân Bình",
      "Minh: Cái gì? Xa quá vậy? Kẹt xe mất 1 tiếng!",
      "Minh: Mình không biết khách đi đâu trước khi nhận?",
      "[Muốn hủy cuốc]",
      "🤖 AI System: ⚠️ Tỷ lệ hủy chuyến của bạn đang vượt mức cho phép.",
      "🤖 AI System: Tiếp tục hủy sẽ bị hạn chế quyền chọn cuốc."
    ],
    choices: [
      { 
        text: "Chấp nhận cuốc (khổ)", 
        nextScene: 4,
        impact: { money: 150000, rating: -0.1 }
      },
      { 
        text: "Hủy cuốc (bị phạt)", 
        nextScene: 4,
        impact: { kpi: 20 }
      }
    ]
  },
  {
    id: 4,
    title: "CẢNH 5 — ÁP LỰC ĐÁNH GIÁ SAO",
    character: characters.ai,
    dialogue: [
      "[Một khách khó tính đánh giá 1 sao dù Minh không làm sai]",
      "Minh: Gì vậy? Mình đã chở tốt mà!",
      "🤖 AI System: ⚠️ Điểm đánh giá của bạn đang giảm.",
      "🤖 AI System: Tài khoản có nguy cơ bị hạn chế nếu tiếp tục.",
      "Minh: Nhưng mình không làm sai gì cả... Minh chỉ là tài xế!"
    ],
    choices: [
      { text: "Tiếp tục", nextScene: 5, impact: { rating: 0 } }
    ]
  },
  {
    id: 5,
    title: "CẢNH 6 — CHI PHÍ TĂNG CAO",
    character: characters.huy,
    dialogue: [
      "[Minh gặp Huy - tài xế lâu năm]",
      "Minh: Anh Huy, sao lúc anh kiếm được nhiều hơn mình?",
      "Huy: Cái đó là cũ rồi. Xe hỏng giờ, xăng tăng, giá cước thì không đổi.",
      "Minh: Nhưng giá do app quyết định chú à? Mình chi tiền mua xe, xăng, sửa xe...",
      "Huy: Ừ. Mình sở hữu cái xe, nhưng đâu sở hữu công việc.",
      "Huy: Đó chính là sự khác biệt.",
      "Minh: Vậy mình đang làm gì? Đối tác hay nhân viên?"
    ],
    choices: [
      { text: "Tiếp tục chạy", nextScene: 6 }
    ]
  },
  {
    id: 6,
    title: "CẢNH 7 — TĂNG CHIẾT KHẤU",
    character: characters.company,
    dialogue: [
      "📧 THÔNG BÁO TỪ NỀN TẢNG",
      "💼 Đại diện công ty: Nhằm nâng cao trải nghiệm khách hàng,",
      "💼 Đại diện công ty: mức chiết khấu sẽ tăng từ 25% lên 30%.",
      "[Minh tính toán lại...]",
      "Minh: 30%? Chạy nhiều hơn mà tiền ít hơn?",
      "Huy (qua tin nhắn): Đối tác mà không có quyền thương lượng thì có thật sự là đối tác không?",
      "Minh: Anh nói đúng..."
    ],
    choices: [
      { 
        text: "Bức xúc nhưng tiếp tục", 
        nextScene: 7,
        impact: { money: -300000 }
      }
    ]
  },
  {
    id: 7,
    title: "CẢNH 8 — NHÓM CHAT TÀI XẾ",
    character: characters.huy,
    dialogue: [
      "📱 NHÓM CHAT TÀI XẾ",
      "Người 1: Không chạy thì lấy gì ăn?",
      "Người 2: Càng im lặng thì họ càng ép.",
      "Huy: Một người nghỉ thì không ai quan tâm.",
      "Huy: Nhưng hàng nghìn người cùng tắt app thì khác.",
      "Huy: Có ai dám cùng nhau đấu tranh không?",
      "Minh: ... Mình cân nhắc..."
    ],
    choices: [
      { 
        text: "Tắt app cùng mọi người (tham gia đấu tranh)", 
        nextScene: 9,
        impact: { kpi: -50 }
      },
      { 
        text: "Im lặng và tiếp tục chạy", 
        nextScene: 8,
        impact: { money: 400000 }
      }
    ]
  },
  {
    id: 8,
    title: "KẾT THÚC - ENDING XẤU",
    isEnding: true,
    endingType: "bad",
    character: characters.ai,
    dialogue: [
      "❌ KẾT CỤC",
      "🤖 AI System: Vì tỷ lệ hủy cao, tài khoản của bạn bị hạn chế.",
      "🤖 AI System: Bạn chỉ nhận được 20% cuốc gốc.",
      "🤖 AI System: Công việc trở nên rất khó khăn.",
      "",
      "Minh: Sao vậy? Mình không làm sai gì cả...",
      "Huy: Bạn chọn một mình đối đầu với hệ thống.",
      "Huy: Người lao động riêng lẻ khó chống lại.",
      "",
      "💔 BÀI HỌC:",
      "Khi bạn bị cô lập, hệ thống sẽ kiểm soát bạn dễ dàng."
    ],
    choices: []
  },
  {
    id: 9,
    title: "CẢNH 9 — TẮT APP TẬP THỂ",
    character: characters.ai,
    dialogue: [
      "[Đột ngột, cùng lúc hàng nghìn tài xế tắt app]",
      "📱 TIN TỨC NÓNG",
      "\"Hàng nghìn tài xế đồng loạt offline\"",
      "\"để phản đối chính sách tăng chiết khấu\"",
      "",
      "🤖 AI System: ⚠️ LỰ DẠC CAO",
      "🤖 AI System: Hiện tại chỉ có 15% tài xế online.",
      "📊 Bản đồ: Rất ít xe",
      "💰 Giá: Tăng 200%",
      "😤 Khách: \"Không tìm được xe!\"",
      "",
      "Minh: Nó hoạt động thật đó!"
    ],
    choices: [
      { text: "Tiếp tục tắt app", nextScene: 10 }
    ]
  },
  {
    id: 10,
    title: "KẾT THÚC - ENDING TỐT",
    isEnding: true,
    endingType: "good",
    character: characters.company,
    dialogue: [
      " THÔNG BÁO - SAU 2 NGÀY",
      "💼 Công ty: Chúng tôi sẵn sàng đối thoại với đại diện tài xế",
      "💼 Công ty: về chính sách chiết khấu.",
      "",
      "📰 TIN TỨC",
      "\"Công ty X App và tài xế đạt thỏa thuận mới\"",
      "\"Giảm chiết khấu từ 30% về 27%\"",
      "\"Bổ sung phí bảo hiểm toàn bộ tài xế\"",
      "",
      "Minh: Nó thực sự làm được!",
      "Huy: Sức mạnh tập thể là vậy.",
      "Huy: Bây giờ tài xế hiểu rồi:",
      "Huy: Đấu tranh tập thể là cách bảo vệ quyền lợi.",
      "",
      "✅ CHIẾN THẮNG: Người lao động có tiếng nói"
    ],
    choices: []
  }
]

export function GameSection() {
  const [currentScene, setCurrentScene] = useState(0)
  const [gameState, setGameState] = useState({
    money: 2000000,
    rating: 5.0,
    kpi: 0
  })
  const [displayedDialogue, setDisplayedDialogue] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)

  const scene = scenes[currentScene]

  const handleChoice = (choice: GameChoice) => {
    if (choice.impact) {
      setGameState(prev => ({
        money: Math.max(0, prev.money + (choice.impact.money || 0)),
        rating: Math.max(0, Math.min(5, prev.rating + (choice.impact.rating || 0))),
        kpi: Math.max(0, prev.kpi + (choice.impact.kpi || 0))
      }))
    }
    setDisplayedDialogue(0)
    setCurrentScene(choice.nextScene)
  }

  const handleContinueDialogue = () => {
    if (displayedDialogue < scene.dialogue.length - 1) {
      setDisplayedDialogue(displayedDialogue + 1)
    } else if (scene.choices && scene.choices.length > 0) {
      // Already showing choices
    } else if (scene.isEnding) {
      setGameComplete(true)
    }
  }

  const resetGame = () => {
    setCurrentScene(0)
    setGameState({ money: 2000000, rating: 5.0, kpi: 0 })
    setDisplayedDialogue(0)
    setGameComplete(false)
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', 'đ')
  }

  return (
    <section id="section-7" className="min-h-screen py-24 px-4 bg-bg-base relative flex items-center justify-center">
      <div className="absolute top-0 right-0 text-[20rem] font-serif font-bold text-text-muted opacity-5 select-none leading-none -mt-16 -mr-16">
        08
      </div>

      <div className="max-w-5xl mx-auto w-full z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Game Nhập Vai: Đối Tác Hay Người Làm Thuê?</h2>
          <div className="w-24 h-1 bg-accent-red mx-auto mb-8"></div>
          <p className="text-lg text-text-muted">Trải nghiệm một ngày làm tài xế công nghệ</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!gameComplete ? (
            <motion.div
              key={`scene-${currentScene}-${displayedDialogue}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Game Area */}
                <div className="lg:col-span-2">
                  <Card className="bg-bg-base border-2 border-[#e0d9d0] shadow-md">
                    <CardContent className="p-8">
                      {/* Scene Title */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-accent-red mb-4">{scene.title}</h3>
                        {scene.character && (
                          <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-lg">
                            <span className="text-4xl">{scene.character.avatar}</span>
                            <div>
                              <div className="font-bold">{scene.character.name}</div>
                              <div className="text-sm text-gray-600">{scene.character.role}</div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Dialogue Display */}
                      <div className="space-y-3 mb-8 min-h-[300px]">
                        {scene.dialogue.slice(0, displayedDialogue + 1).map((line, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-3 rounded-lg ${
                              line.startsWith('💰') || line.startsWith('⭐') || line.startsWith('📊')
                                ? 'bg-yellow-50 text-yellow-900 font-semibold'
                                : line.startsWith('🤖')
                                ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-400'
                                : line.startsWith('💼')
                                ? 'bg-purple-50 text-purple-900 border-l-4 border-purple-400'
                                : line.startsWith('❌') || line.startsWith('✅')
                                ? 'bg-red-50 text-red-900 font-bold text-lg'
                                : line.startsWith('💔')
                                ? 'bg-red-100 text-red-900 font-bold'
                                : line.startsWith('[') && line.endsWith(']')
                                ? 'bg-gray-100 text-gray-700 italic'
                                : line.startsWith('📧') || line.startsWith('📱') || line.startsWith('📰') || line.startsWith('📊')
                                ? 'bg-indigo-50 text-indigo-900 font-semibold'
                                : 'bg-white border'
                            }`}
                          >
                            {line}
                          </motion.div>
                        ))}
                      </div>

                      {/* Continue Button or Choices */}
                      {displayedDialogue < scene.dialogue.length - 1 ? (
                        <Button
                          onClick={handleContinueDialogue}
                          className="w-full bg-accent-red hover:bg-red-700 text-white"
                        >
                          Tiếp tục <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      ) : scene.choices && scene.choices.length > 0 ? (
                        <div className="space-y-3">
                          {scene.choices.map((choice, idx) => (
                            <motion.button
                              key={idx}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleChoice(choice)}
                              className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-accent-red hover:bg-gray-50 transition-all"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{choice.text}</span>
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      ) : scene.isEnding ? (
                        <Button
                          onClick={() => setGameComplete(true)}
                          className="w-full bg-accent-red hover:bg-red-700 text-white"
                        >
                          Xem tóm tắt <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      ) : null}
                    </CardContent>
                  </Card>
                </div>

                {/* Stats Sidebar */}
                <div className="space-y-4">
                  <Card className="bg-yellow-50 border-2 border-yellow-200">
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-600 mb-1">Lương hiện tại</div>
                      <div className="text-2xl font-bold text-yellow-700">{formatCurrency(gameState.money)}</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-50 border-2 border-blue-200">
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-600 mb-1">Đánh giá</div>
                      <div className="text-2xl font-bold text-blue-700">⭐ {gameState.rating.toFixed(1)}</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-red-50 border-2 border-red-200">
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-600 mb-1">Áp lực KPI</div>
                      <div className="text-2xl font-bold text-red-700">{gameState.kpi}</div>
                      <div className="mt-2 h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-600 transition-all"
                          style={{ width: `${Math.min(gameState.kpi, 100)}%` }}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-purple-50 border-2 border-purple-200">
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-600 mb-1">Tiến độ</div>
                      <div className="text-2xl font-bold text-purple-700">{currentScene + 1}/{scenes.length}</div>
                      <div className="mt-2 space-y-1">
                        {Array(scenes.length).fill(null).map((_, i) => (
                          <div key={i} className="text-xs">
                            {i < currentScene ? '✅' : i === currentScene ? '▶️' : '⬜'} {scenes[i].title.split('—')[0].trim()}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Card className="bg-bg-base border-2 border-[#e0d9d0] shadow-md">
                <CardContent className="p-12">
                  <div className="text-center">
                    <div className="text-6xl mb-6">
                      {scenes[currentScene].endingType === 'good' ? '✅' : '❌'}
                    </div>

                    <h3 className={`text-3xl font-bold mb-4 ${
                      scenes[currentScene].endingType === 'good' 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      {scenes[currentScene].endingType === 'good' 
                        ? '✅ CHIẾN THẮNG - Người lao động có tiếng nói'
                        : '❌ THẤT BẠI - Bị kiểm soát bởi hệ thống'}
                    </h3>

                    <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg mb-8">
                      <p className="text-lg text-text-muted leading-relaxed mb-6">
                        {scenes[currentScene].endingType === 'good'
                          ? 'Khi người lao động đoàn kết và hành động tập thể, họ có sức mạnh để bảo vệ quyền lợi của mình. Cuộc đấu tranh không phải chống lại công ty, mà là đòi sự công bằng.'
                          : 'Một cá nhân khó có thể chống lại hệ thống. Nhưng nếu biết cách tổ chức, tập hợp sức mạnh của hàng trăm hay hàng nghìn người lao động, bạn sẽ có tiếng nói.'}
                      </p>

                      <div className="bg-white p-4 rounded border-l-4 border-accent-red">
                        <p className="font-bold mb-2">Bài học từ game:</p>
                        <ul className="text-left space-y-1 text-text-muted">
                          <li>• "Đối tác tự do" không có quyền thương lượng = Nhân viên</li>
                          <li>• Thuật toán điều khiển, con người phục vụ</li>
                          <li>• Quyền lợi bảo vệ bằng đấu tranh tập thể</li>
                          <li>• Biết "không làm" cũng là một sức mạnh</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">{formatCurrency(gameState.money)}</div>
                        <div className="text-xs text-gray-600 mt-1">Thu nhập cuối cùng</div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">⭐ {gameState.rating.toFixed(1)}</div>
                        <div className="text-xs text-gray-600 mt-1">Đánh giá cuối</div>
                      </div>
                      <div className="p-4 bg-red-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">{gameState.kpi}</div>
                        <div className="text-xs text-gray-600 mt-1">Áp lực KPI</div>
                      </div>
                    </div>

                    <Button
                      onClick={resetGame}
                      className="gap-2 bg-accent-red hover:bg-red-700"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Chơi lại
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
