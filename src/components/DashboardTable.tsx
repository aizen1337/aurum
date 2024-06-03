import { type ShiftWithShiftType } from "~/server/shiftQueries";
import Hours from "./Hours";
import { Shift } from "./Shift";
import { type OrganizationMembership } from "@clerk/nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DicesIcon, GripVertical, Plus } from "lucide-react";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "./ui/context-menu";


type DashboardTableProps = {
    shifts: ShiftWithShiftType[],
    teamMembers: OrganizationMembership[]
}
export default async function DashboardTable({shifts,teamMembers}: DashboardTableProps) {
    return (
      <>
        <ContextMenu >
        <ContextMenuTrigger>
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 flex flex-col h-full">
          <div className="flex w-full items-center">
          <h2 className="text-lg font-bold mb-4 dark:text-white text-zinc-900 h-full">Shift Schedule</h2>
          </div>

        {shifts.length !== 0 
        ?
        <div className="flex-1 grid grid-cols-[auto_1fr] gap-4 overflow-auto">
          <Hours/>
          <div className="flex flex-col gap-4">
          {shifts.map((shift) => <Shift key={shift.id} shift={shift}/>)}
          </div>
        </div>
        :
        <p>Todays schedule looks empty... (you remember about right-click right?) </p>
        }
      </div>
      </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Create shift <Plus/></ContextMenuItem>
                <ContextMenuItem>Randomize shifts <DicesIcon/></ContextMenuItem>
                <ContextMenuItem>Next day</ContextMenuItem>
                <ContextMenuItem>Previous day</ContextMenuItem>
              </ContextMenuContent>
      </ContextMenu>
      <div className="hidden lg:flex bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 flex flex-col w-full">
        <h2 className="text-lg font-bold mb-4 dark:text-white text-zinc-900">Team members</h2>
        <div className="flex-1 grid grid-cols-[auto_1fr] gap-4 overflow-auto w-full">
          <div className="flex flex-col gap-4 w-full">
            {teamMembers.map((teamMember) => 
            (
              <div className="bg-zinc-100 dark:bg-zinc-700 rounded-lg p-4 w-full relative" key={teamMember.id}>
                <GripVertical className="relative top-0 right-0"/>
                <div className="flex items-center gap-2 mt-2 w-full">
                  <Avatar>
                    <AvatarImage alt={`${teamMember.publicUserData?.firstName} ${teamMember.publicUserData?.lastName}`} src={teamMember.publicUserData?.hasImage ? teamMember.publicUserData.imageUrl : ''} />
                    <AvatarFallback className="dark:text-white text-zinc-900 bg-zinc-300 dark:bg-zinc-900">{`${teamMember?.publicUserData?.firstName?.[0] ?? "E"} ${teamMember?.publicUserData?.lastName?.[0] ?? "S"}`}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium dark:text-white text-zinc-900">{`${teamMember.publicUserData?.firstName} ${teamMember.publicUserData?.lastName}`}</div>
                    <div className="text-zinc-800 dark:text-zinc-400 text-sm">{teamMember.role}</div>
                  </div>
                </div>
              </div>

          ))}
          </div>
        </div>

      </div>
      </>
    )
}