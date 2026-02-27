export default function CourseIntro() {
  return (
    <section className="py-12 bg-secondary/30 border-b border-border" id="intro">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">课程简介</h2>
        
        <div className="prose prose-lg text-muted-foreground max-w-none font-body">
          <p className="mb-4">
            本课程以 <strong>“理论—工具—实践”</strong> 三位一体为核心教学理念，系统介绍AI辅助芯片设计的技术原理与发展现状。
            重点涵盖AI辅助数字电路RTL生成与模拟电路设计、验证调试、后端设计优化等关键环节。
          </p>
          <p className="mb-4">
            通过模块化教学（共16学时，含8学时理论讲授与8学时实践操作），学生将掌握主流AI-EDA协同设计平台（本课程为选课同学提供的完善的开发环境！！！）的使用方法，
            完成从设计规范到后端的完整AI辅助设计流程实践。
          </p>
          <p>
            课程注重产教融合，引入企业真实案例与产业专家资源，强化学生的工具应用能力与创新实践能力。
            通过本课程的学习，学生将具备运用AI技术提升芯片设计效率与质量的能力。
          </p>
        </div>
      </div>
    </section>
  );
}
