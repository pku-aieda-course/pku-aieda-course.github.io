import { Book, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resources() {
  return (
    <section className="py-16 bg-secondary/20 border-t border-border" id="resources">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-display font-bold text-primary mb-8 border-b border-border pb-2">
          教学资源与工具
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Software Tools */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">软件与工具</h3>
            </div>
            
            <div className="bg-background border border-border p-6 rounded-sm shadow-sm">
              <h4 className="font-semibold text-foreground mb-2 text-lg">UniVista Design Assistant (UDA)</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                本课程主要使用的工业级 AI-EDA 工具平台。基于大模型技术，支持从自然语言到 Verilog RTL 的自动生成、智能纠错、Testbench 自动生成以及 QoR 快速分析预估，帮助学生掌握最前沿的 AI 辅助芯片设计流程。
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="text-xs" disabled>
                  访问 Web 门户 (校内网)
                </Button>
                <Button variant="outline" size="sm" className="text-xs" disabled>
                  下载客户端 (Windows/Linux)
                </Button>
              </div>
            </div>
          </div>

          {/* Textbooks */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Book className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">参考教材</h3>
            </div>

            <div className="bg-background border border-border p-6 rounded-sm shadow-sm h-full">
              <ul className="space-y-4">
                <li className="flex flex-col gap-1">
                  <span className="text-foreground font-bold text-lg">Machine Learning in VLSI Computer-Aided Design</span>
                  <span className="text-sm text-muted-foreground">Author: Ibrahim (Abe) M. Elfadel, Duane S. Boning, Xin Li</span>
                  <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 w-fit rounded-sm mt-1">Primary Textbook</span>
                </li>
                <li className="border-t border-border pt-4 flex flex-col gap-1">
                  <span className="text-foreground font-bold">Electronic Design Automation: Synthesis, Verification, and Test</span>
                  <span className="text-sm text-muted-foreground">Author: Laung-Terng Wang, Yao-Wen Chang, Kwang-Ting Cheng</span>
                  <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 w-fit rounded-sm mt-1">Recommended Reading</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
