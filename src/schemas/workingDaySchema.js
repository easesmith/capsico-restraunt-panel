import { z } from "zod";

export const TimingSchema = z.object({
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required"),
});

export const DaySchema = z.object({
    timings: z.array(TimingSchema).min(1, "At least one timing is required"),
    outletOpen: z.boolean(),
    timingToAllDays: z.boolean(),
});

export const WorkingDayFormSchema = z.object({
    monday: DaySchema,
    tuesday: DaySchema,
    wednesday: DaySchema,
    thursday: DaySchema,
    friday: DaySchema,
    saturday: DaySchema,
    sunday: DaySchema,
});