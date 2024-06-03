import { auth, currentUser } from "@clerk/nextjs/server";
import DashboardTable from "~/components/DashboardTable";
import Hours from "~/components/Hours";
import { Shift } from "~/components/Shift";
import { getOrgMembers } from "~/server/clerkQueries";
import { getShiftsByDay } from "~/server/shiftQueries";
// Function to generate a random ID
function generateID() {
  return Math.random().toString(36).substr(2, 10); // Random alphanumeric string
}

// Function to generate a random title
function generateTitle() {
  const titles = ["Meeting", "Project Review", "Training Session", "Brainstorming", "Presentation"];
  return titles[Math.floor(Math.random() * titles.length)];
}

// Function to generate a random assignee
function generateAssignee() {
  const assignees = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Emma Davis"];
  return assignees[Math.floor(Math.random() * assignees.length)];
}

// Function to generate mock data for a shift
function generateShift() {
  const startHour = new Date(); // Current date and time
  const endHour = new Date(startHour.getTime() + Math.floor(Math.random() * 86400000)); // Random end time within 24 hours

  return {
      id: generateID(),
      title: generateTitle(),
      startHour: startHour,
      endHour: endHour,
      assignee: generateAssignee()
  };
}
async function passShifts() {
  const shifts = []
  for(let i = 0; i <= 10; i++) {
    shifts.push(generateShift());
  }
  return shifts
}
export default async function HomePage() {
  const {orgId} = auth()
  const shifts = await getShiftsByDay(orgId!, new Date())
  const teamMembers = await getOrgMembers(orgId!)
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-950 text-white">
       <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 p-6 dark:bg-zinc-950">
        <DashboardTable shifts={shifts} teamMembers={teamMembers}/>
      </div>
    </main>
  );
}
