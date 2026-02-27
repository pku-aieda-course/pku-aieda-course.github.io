export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-primary/20 py-12 mt-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          
          {/* Column 1: School Info */}
          <div>
            <h3 className="font-display font-bold text-lg text-primary mb-4">北京大学集成电路学院</h3>
            <p className="text-muted-foreground leading-relaxed">
              School of Integrated Circuits, Peking University<br/>
              地址：北京市海淀区颐和园路5号<br/>
              邮编：100871
            </p>
          </div>
          
          {/* Column 2: Course Info */}
          <div>
            <h4 className="font-bold text-foreground mb-3">课程信息</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>AI辅助集成电路设计实践</li>
              <li>课程代码：0483XXXX</li>
              <li>学分：1.0 / 学时：16</li>
              <li>面向对象：研究生</li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-3">联系方式</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: yibolin@pku.edu.cn</li>
              <li>教学网: <a href="https://course.pku.edu.cn" target="_blank" className="text-primary hover:underline">course.pku.edu.cn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; 2026 Peking University. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
