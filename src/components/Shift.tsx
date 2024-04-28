import { ClockIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export async function Shift() {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-700 rounded-lg p-4">
        <h3 className="text-md font-bold mb-2 dark:text-white">Morning Shift</h3>
        <div className="flex items-center gap-2">
          <ClockIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          <span className="text-zinc-500 dark:text-zinc-400">8:00 AM - 12:00 PM</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Avatar>
            <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium dark:text-white">John Doe</div>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm">Team Lead</div>
          </div>
        </div>
      </div>
    )
}