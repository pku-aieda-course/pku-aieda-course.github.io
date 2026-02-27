import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import yiboImg from "@/assets/images/yibo_lin.jpg";

export default function Hero() {
  return (
    <header className="py-16 md:py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary tracking-tight">
              AI辅助集成电路设计实践
            </h1>
            <span className="text-xl text-muted-foreground font-light font-display">
              2026年春季学期：
1学分，16学时，每周授课2学时（共8周）
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-muted-foreground bg-secondary/20 p-8 border-l-4 border-primary shadow-sm">
            <div>
              <strong className="text-foreground block mb-2 font-bold text-lg">时间与地点</strong>
              <p className="mb-1">周二、周四 13:30 - 15:20</p>
              <p>地点：待定</p>
            </div>
            
            <div className="flex items-start gap-4">
               <Avatar className="h-16 w-16 rounded-sm border border-border">
                  <AvatarImage src={yiboImg} alt="Prof. Yibo Lin" className="object-cover" />
                  <AvatarFallback className="bg-muted text-primary font-display font-bold rounded-sm">YL</AvatarFallback>
               </Avatar>
               <div>
                  <strong className="text-foreground block mb-1 font-bold text-lg">授课教师</strong>
                  <p className="text-foreground font-medium mb-1">Prof. Yibo Lin</p>
                  <p className="text-sm">Office Hours: 周二 15:30-16:30</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
