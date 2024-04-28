export default async function Hours() {
    return (
        <section className="flex flex-col gap-4 h-full justify-evenly">
            {hourList.map((hour, index) => <Hour hour={hour} key={index}/>)} 
        </section>
    )
}
const hourList = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
];

async function Hour({hour}: {hour: string}) {
    return (
        <div className="bg-transparent rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-400">
        <span>{hour}</span>
        </div>
    )
}