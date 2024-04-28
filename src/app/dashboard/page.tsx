import { ClockIcon } from "lucide-react";
import Hours from "~/components/Hours";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
// const mockData = [
//   {
//     id: '123413r5231',
//     title: 'dfwsdf',
//     startHour: new Date()
//     endHour: new Date().
//   }
// ]
export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
       <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 p-6 dark:bg-zinc-950">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 flex flex-col h-full">
          <h2 className="text-lg font-bold mb-4 dark:text-white">Shift Schedule</h2>
          <div className="flex-1 grid grid-cols-[auto_1fr] gap-4 overflow-auto">
            <Hours/>
            <div className="flex flex-col gap-4">

                  <div className="bg-zinc-100 dark:bg-zinc-700 rounded-lg p-4">
                    <h3 className="text-md font-bold mb-2 dark:text-white">Afternoon Shift</h3>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                      <span className="text-zinc-500 dark:text-zinc-400">1:00 PM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Avatar>
                        <AvatarImage alt="Jane Doe" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium dark:text-white">Jane Doe</div>
                        <div className="text-zinc-500 dark:text-zinc-400 text-sm">Team Member</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-zinc-100 dark:bg-zinc-700 rounded-lg p-4">
                    <h3 className="text-md font-bold mb-2 dark:text-white">Evening Shift</h3>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                      <span className="text-zinc-500 dark:text-zinc-400">6:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Avatar>
                        <AvatarImage alt="Bob Smith" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>BS</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium dark:text-white">Bob Smith</div>
                        <div className="text-zinc-500 dark:text-zinc-400 text-sm">Team Member</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-zinc-100 dark:bg-zinc-700 rounded-lg p-4">
                    <h3 className="text-md font-bold mb-2 dark:text-white">Night Shift</h3>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                      <span className="text-zinc-500 dark:text-zinc-400">10:00 PM - 6:00 AM</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Avatar>
                        <AvatarImage alt="Sarah Lee" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>SL</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium dark:text-white">Sarah Lee</div>
                        <div className="text-zinc-500 dark:text-zinc-400 text-sm">Team Member</div>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
