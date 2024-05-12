/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import 'server-only'
import { db } from './db'
import { type ShiftType } from '@prisma/client'

interface ShiftWithShiftType {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    startTime: Date;
    endTime: Date;
    orgId: string;
    assigneeId: string;
    notes: string | null;
    shiftType: ShiftType
    shiftTypeId: string;
}
export async function getShiftsByDay(orgId: string, day: Date): Promise<ShiftWithShiftType[]> {
    const shifts = await db.shift.findMany({
        include: {
            shiftType: true
        },
        where: {
            orgId: orgId,
            startTime: {
                equals: day
            }
        }
    }) 
    return shifts as ShiftWithShiftType[]
}