import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import yiboImg from "@/assets/images/yibo_lin.jpg";
import { Mail, MapPin, Clock } from "lucide-react";

export default function Staff() {
  return (
    <section className="py-16 bg-background border-b border-border" id="staff">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-display font-bold text-primary mb-8 border-b border-border pb-2">
          Course Staff
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Instructor Card */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-foreground">Instructor</h3>
            <div className="flex items-start gap-4">
              <Avatar className="h-20 w-20 rounded-sm border border-border">
                <AvatarImage src={yiboImg} alt="Prof. Yibo Lin" className="object-cover" />
                <AvatarFallback className="bg-muted text-primary font-display font-bold text-xl rounded-sm">YL</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-primary">Prof. Yibo Lin</h4>
                <p className="text-sm text-muted-foreground">Course Instructor</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Mail className="h-3.5 w-3.5" />
                  <a href="mailto:yibolin@pku.edu.cn" className="hover:underline hover:text-primary">
                    yibolin@pku.edu.cn
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Science Bldg No.1</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Tue 3:30-4:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* CAs / TAs Group */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-4">Course Assistants</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* TA Placeholder 1 */}
              <div className="flex items-start gap-3 p-3 border border-border bg-secondary/10">
                <Avatar className="h-12 w-12 rounded-sm border border-border">
                   <AvatarFallback className="bg-white text-muted-foreground rounded-sm">TA</AvatarFallback>
                </Avatar>
                <div>
                  <h5 className="font-bold text-foreground">Teaching Assistant (TBD)</h5>
                  <p className="text-xs text-muted-foreground">Head TA</p>
                  <a href="#" className="text-xs text-primary hover:underline block mt-1">staff-list@course.edu</a>
                </div>
              </div>

              {/* TA Placeholder 2 */}
              <div className="flex items-start gap-3 p-3 border border-border bg-secondary/10">
                 <Avatar className="h-12 w-12 rounded-sm border border-border">
                   <AvatarFallback className="bg-white text-muted-foreground rounded-sm">TA</AvatarFallback>
                </Avatar>
                <div>
                  <h5 className="font-bold text-foreground">Teaching Assistant (TBD)</h5>
                  <p className="text-xs text-muted-foreground">Course Assistant</p>
                  <a href="#" className="text-xs text-primary hover:underline block mt-1">staff-list@course.edu</a>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-muted/30 border border-border text-sm text-muted-foreground">
              <strong>Note:</strong> Course assistants will hold office hours starting from Week 2. 
              Check the <a href="#" className="text-primary underline">Office Hours Calendar</a> for the latest schedule.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
