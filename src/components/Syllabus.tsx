import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText } from "lucide-react";

const modules = [
  { id: 1, title: "绪论：AI与EDA发展概览", type: "Lecture", materials: "Slides (PDF)", assignment: "-" },
  { id: 2, title: "AI辅助芯片设计的技术全景图", type: "Lecture", materials: "Slides (PDF)", assignment: "-" },
  { id: 3, title: "AI辅助RTL设计与代码生成", type: "Lecture/Project", materials: "Lab Guide 01", assignment: "Lab 1: RTL Gen" },
  { id: 4, title: "AI辅助验证与Testbench生成", type: "Lecture/Project", materials: "Lab Guide 02", assignment: "Lab 2: Verification" },
  { id: 5, title: "AI辅助后端设计与QoR预估", type: "Lecture/Project", materials: "Lab Guide 03", assignment: "Lab 3: QoR Analysis" },
  { id: 6, title: "集成调试与AI工程化实践", type: "Lecture/Project", materials: "Lab Guide 04", assignment: "Lab 4: Full Flow" },
  { id: 7, title: "产业实践与产品思维", type: "Lecture", materials: "Case Studies", assignment: "-" },
  { id: 8, title: "综合项目展示与课程总结", type: "Project", materials: "-", assignment: "Final Project Presentation" },
];

export default function Syllabus() {
  return (
    <section className="py-16 bg-background" id="syllabus">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-display font-bold text-primary mb-8 border-b border-border pb-2">
          教学大纲
        </h2>

        <div className="border border-border rounded-none overflow-hidden">
          <Table>
            <TableHeader className="bg-secondary/50">
              <TableRow>
                <TableHead className="w-[80px] font-bold text-foreground">周次</TableHead>
                <TableHead className="w-[100px] font-bold text-foreground">类型</TableHead>
                <TableHead className="font-bold text-foreground">主题</TableHead>
                <TableHead className="w-[200px] font-bold text-foreground">资料</TableHead>
                <TableHead className="w-[200px] font-bold text-foreground">作业</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {modules.map((mod) => (
                <TableRow key={mod.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">Week {mod.id}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`
                      rounded-sm font-normal border-opacity-50
                      ${mod.type === 'Lecture/Project' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                        mod.type === 'Project' ? 'bg-purple-50 text-purple-700 border-purple-200' : 
                        'bg-gray-50 text-gray-700 border-gray-200'}
                    `}>
                      {mod.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-base">{mod.title}</TableCell>
                  <TableCell>
                    {mod.materials !== "-" && (
                      <a href="#" className="flex items-center gap-1.5 text-primary hover:underline text-sm">
                        <FileText className="h-3.5 w-3.5" />
                        {mod.materials}
                      </a>
                    )}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {mod.assignment}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
