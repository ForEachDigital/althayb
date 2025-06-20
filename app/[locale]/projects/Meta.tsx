import {MapPin, CalendarClock} from "lucide-react";
import {format} from "date-fns";

interface Props {
    date: string;
    location: string;
}

export default function ProjectMeta({date, location}: Props) {
    return (
        <div className="flex flex-wrap items-center gap-6 py-5 text-sm text-gray-500">
      <span className="flex text-lg font-montserrat items-center gap-1">
        <MapPin className="h-4 w-4 text-accent"/> {location}
      </span>
            <span className="flex  text-lg font-montserrat items-center gap-1">
        <CalendarClock className="h-4 w-4  text-accent"/>{" "}
                {format(new Date(date), "yyyy-MM-dd")}
      </span>
        </div>
    );
}


