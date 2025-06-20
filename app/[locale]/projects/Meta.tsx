import { MapPin, CalendarClock } from "lucide-react";
import { format } from "date-fns";

export default function ProjectMeta({
                                        date,
                                        location,
                                    }: {
    date: string;
    location: string;
}) {
    return (
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 font-medium">
      <span className="flex items-center gap-1">
        <MapPin className="h-4 w-4 text-accent" /> {location}
      </span>
            <span className="flex items-center gap-1">
        <CalendarClock className="h-4 w-4 text-accent" />
                {format(new Date(date), "yyyy-MM-dd")}
      </span>
        </div>
    );
}
