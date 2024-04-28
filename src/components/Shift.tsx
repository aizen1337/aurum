import { ClockIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
interface Shift {
    id: string;
    added: Date,
    updated: Date
    title: string;
    startHour: Date;
    endHour: Date;
    assignee: string;
}
type ShiftWidgetProps = {
    shift: Partial<Shift>
}
export async function Shift({shift}: ShiftWidgetProps) {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-700 rounded-lg p-4">
        <h3 className="text-md font-bold mb-2 dark:text-white text-zinc-800">{shift.title}</h3>
        <div className="flex items-center gap-2">
          <ClockIcon className="h-4 w-4 text-zinc-800 dark:text-zinc-400" />
          <span className="text-zinc-800 dark:text-zinc-400">{shift?.startHour?.toLocaleTimeString('pl-PL')} - {shift?.endHour?.toLocaleTimeString('pl-PL')}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Avatar>
            <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium dark:text-white">{shift.assignee}</div>
            <div className="text-zinc-800 dark:text-zinc-400 text-sm">Team Lead</div>
          </div>
        </div>
      </div>
    )
}