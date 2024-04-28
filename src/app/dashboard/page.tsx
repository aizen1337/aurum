import Hours from "~/components/Hours";
import { Shift } from "~/components/Shift";
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
  const shifts = await passShifts()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-950 text-white">
       <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 p-6 dark:bg-zinc-950">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 flex flex-col h-full">
          <h2 className="text-lg font-bold mb-4 dark:text-white text-zinc-900">Shift Schedule</h2>
          <div className="flex-1 grid grid-cols-[auto_1fr] gap-4 overflow-auto">
            <Hours/>
            <div className="flex flex-col gap-4">
                  {shifts.map((shift) => <Shift key={shift.id} shift={shift}/>)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
