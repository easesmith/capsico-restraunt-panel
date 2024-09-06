/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { generateTimeOptions } from "@/utils/generateTimeOptions";
import { useEffect, useState } from "react";
import { useFieldArray } from "react-hook-form";
import { BiTrash } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { toast } from "sonner";

const WorkingDay = ({ day, form }) => {
    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    const { control, setValue, getValues, handleSubmit } = form;
    const timeOptions = generateTimeOptions();
    const { fields, append, remove } = useFieldArray({
        control,
        name: `${day.toLowerCase()}.timings`,
    });

    const [isOpen, setIsOpen] = useState(false);

    const handleAdd = () => {
        if (fields.length >= 2) {
            toast.error("Cannot add more than 2.");
            return;
        }
        append({ startTime: "", endTime: "" });
    };

    const handleRemove = (index) => {
        if (fields.length > 1) {
            remove(index);
        } else {
            toast.error("You need at least one timing slot.");
        }
    };


    const handleSave = () => {
        const selectedDay = getValues(day.toLowerCase());
        console.log(day, selectedDay);
        if (selectedDay.timingToAllDays) {
            daysOfWeek.forEach((item) => {
                setValue(item.toLowerCase(), {
                    timings: selectedDay.timings,
                    outletOpen: selectedDay.outletOpen,
                })
            })
        }
        else {
            daysOfWeek.forEach((item) => {
                setValue(item.toLowerCase(), {
                    timings: [],
                    outletOpen: false,
                    timingToAllDays: false,
                })
            })
        }

    }


    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex justify-between px-5 py-3 ${isOpen ? "" : "border-b"} w-full items-center class-base1`}
            >
                <p>{day}</p>
                <IoIosArrowDown
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </button>
            <div
                className={`transition-all ${isOpen ? "border-b" : ""} duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} w-full`}
            >
                <Form {...form}>
                    <form className="w-full py-5">
                        <div className="px-5 py-3">
                            <div className="flex flex-col gap-3">
                                {fields.map((item, index) => (
                                    <div key={item.id} className="flex gap-6 items-center">
                                        <p className="text-[#4A5E6D] class-base1">Slot {index + 1}</p>
                                        <div className="flex items-center gap-4">
                                            <FormField
                                                control={control}
                                                name={`${day.toLowerCase()}.timings.${index}.startTime`}
                                                render={({ field }) => (
                                                    <FormItem className="z-20">
                                                        <div className="flex gap-2 items-center">
                                                            <FormLabel className="text-[#4A5E6D] class-sm1">Start time</FormLabel>
                                                            <FormControl>
                                                                <Select
                                                                    value={field.value}
                                                                    onValueChange={(value) => {
                                                                        field.onChange(value);
                                                                        setValue(`${day.toLowerCase()}.timings.${index}.startTime`, value);
                                                                    }}
                                                                >
                                                                    <SelectTrigger className="w-[120px]">
                                                                        <SelectValue placeholder="12:00 AM" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectGroup>
                                                                            {timeOptions.map((time, idx) => (
                                                                                <SelectItem key={idx} value={time}>
                                                                                    {time}
                                                                                </SelectItem>
                                                                            ))}
                                                                        </SelectGroup>
                                                                    </SelectContent>
                                                                </Select>
                                                            </FormControl>
                                                        </div>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={control}
                                                name={`${day.toLowerCase()}.timings.${index}.endTime`}
                                                render={({ field }) => (
                                                    <FormItem className="z-20">
                                                        <div className="flex gap-2 items-center">
                                                            <FormLabel className="text-[#4A5E6D] class-sm1">End time</FormLabel>
                                                            <FormControl>
                                                                <Select
                                                                    value={field.value}
                                                                    onValueChange={(value) => {
                                                                        field.onChange(value);
                                                                        setValue(`${day.toLowerCase()}.timings.${index}.endTime`, value);
                                                                    }}
                                                                >
                                                                    <SelectTrigger className="w-[120px]">
                                                                        <SelectValue placeholder="12:00 AM" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectGroup>
                                                                            {timeOptions.map((time, idx) => (
                                                                                <SelectItem key={idx} value={time}>
                                                                                    {time}
                                                                                </SelectItem>
                                                                            ))}
                                                                        </SelectGroup>
                                                                    </SelectContent>
                                                                </Select>
                                                            </FormControl>
                                                        </div>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <BiTrash onClick={() => handleRemove(index)} className="text-[#4A5E6D] text-xl cursor-pointer" />
                                    </div>
                                ))}
                            </div>
                            <button type="button" onClick={handleAdd} className='class-base1 text-[#0083C9] my-4'>+ Add time slot</button>
                            <div className="flex items-center gap-6">
                                <FormField
                                    control={control}
                                    name={`${day.toLowerCase()}.timingToAllDays`}
                                    render={({ field }) => (
                                        <FormItem className="flex gap-3 items-center">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    className="h-6 w-6"
                                                />
                                            </FormControl>
                                            <div>
                                                <FormLabel className="text-[#667085] class-base1 flex -mt-1">
                                                    Copy above timings to all days
                                                </FormLabel>
                                            </div>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={control}
                                    name={`${day.toLowerCase()}.outletOpen`}
                                    render={({ field }) => (
                                        <FormItem className="flex gap-3 items-center">
                                            <FormControl>
                                                <Switch
                                                    className="data-[state=checked]:bg-[#34C759]"
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <div>
                                                <FormLabel className="text-[#667085] class-base1 flex -mt-1">
                                                    Outlet Open
                                                </FormLabel>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button onClick={handleSave} type="button" variant="capsico" className="mt-4">Save</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default WorkingDay;
