import { Cpu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-primary/20 bg-background sticky top-0 z-50">
      {/* Top Accent Bar */}
      <div className="h-2 w-full bg-primary" />
      
      <div className="container mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
        {/* Academic Identity */}
        <a href="#" className="flex items-center gap-3">
          <div className="p-2 bg-primary/5 rounded-sm">
            <Cpu className="h-6 w-6 text-primary" />
          </div>
          
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl md:text-2xl text-primary tracking-tight leading-none">
              AI辅助集成电路设计实践
            </span>
            <span className="text-sm text-muted-foreground tracking-wide mt-1 font-medium">
              2026年春季学期 | 北京大学 研究生课程
            </span>
          </div>
        </a>
      </div>
    </nav>
  );
}
