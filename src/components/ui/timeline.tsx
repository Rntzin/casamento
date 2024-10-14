import { FC } from "react";

interface TimelineItem {
  time: string;
  description: string;
  icon: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative space-y-16 -mt-8">
      <div className="absolute inset-0 left-8 w-px mb-10 mt-20 bg-slate-300" />

      {items.map((item, index) => (
        <div key={index} className="flex items-start relative">
          <div className="flex-shrink-0 z-10 bg-white p-3 rounded-full border-2 border-slate-50">
            {item.icon}
          </div>

          <div className="ml-8">
            <h4 className="font-semibold text-lg">{item.time}</h4>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
