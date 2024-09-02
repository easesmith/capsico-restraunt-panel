import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateTimeOptions } from "@/utils/generateTimeOptions";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BiTrash } from "react-icons/bi";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const WorkingDay = ({ day, form }) => {
    const { register, control, watch, setValue, getValues } = form;
    const timeOptions = generateTimeOptions();

    const [isOpen, setIsOpen] = useState(false);

    const handleOnChange = (index) => {
        // fields.map((element) => {
        //     if (index === element.index) {
        //         const existingIndex = selectedDaysWithTimingFields.findIndex(item => item.day === element.day);

        //         console.log("existingIndex", existingIndex);
        //         const newTiming = {
        //             day: element.day,
        //             session1ClinicOpeningTime: getValues(`session1ClinicOpeningTime${index}`),
        //             session1ClinicClosingTime: getValues(`session1ClinicClosingTime${index}`),
        //             session2ClinicOpeningTime: getValues(`session2ClinicOpeningTime${index}`),
        //             session2ClinicClosingTime: getValues(`session2ClinicClosingTime${index}`),
        //         };

        //         if (existingIndex !== -1) {
        //             setValue(`selectedDaysWithTiming.${existingIndex}`, newTiming);
        //         } else {
        //             appendSelectedDayWithTiming(newTiming);
        //         }
        //     }
        // });
    };

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
                className={`transition-all ${isOpen ? "border-b" : ""} duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} w-full`}
            >
                <div className="px-5 py-3">
                    <div className="flex gap-6 items-center">
                        <p className="text-[#4A5E6D] class-base1">Slot 1</p>
                        <div className="flex items-center gap-4">
                            <FormField
                                control={control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="z-20">
                                        <div className="flex gap-2 items-center">
                                            <FormLabel className="text-[#4A5E6D] class-sm1">End time</FormLabel>
                                            <FormControl>
                                                <Select
                                                    {...field}
                                                    onValueChange={(e) => {
                                                        field.onChange(e);
                                                        handleOnChange();
                                                    }}
                                                >
                                                    <SelectTrigger className="w-[120px]">
                                                        <SelectValue placeholder="From" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            {timeOptions.map((time, index) => (
                                                                <SelectItem key={index} value={time}>
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
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="z-20">
                                        <div className="flex gap-2 items-center">
                                            <FormLabel className="text-[#4A5E6D] class-sm1">Start time</FormLabel>
                                            <FormControl>
                                                <Select
                                                    {...field}
                                                    onValueChange={(e) => {
                                                        field.onChange(e);
                                                        handleOnChange();
                                                    }}
                                                >
                                                    <SelectTrigger className="w-[120px]">
                                                        <SelectValue placeholder="From" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            {timeOptions.map((time, index) => (
                                                                <SelectItem key={index} value={time}>
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
                        <BiTrash onClick={() => { }} className="text-[#4A5E6D] text-xl cursor-pointer" />
                    </div>
                    <button onClick={() => { }} className='class-base1 text-[#0083C9]'>+ Add time slot</button>
                    <div className="mt-2">
                        <FormField
                            control={control}
                            name="category"
                            render={({ field }) => {
                                return (
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
                                )
                            }}
                        />
                    </div>
                    <Button variant="capsico" className="mt-4">Save</Button>
                </div>
            </div>
        </div>
    )
}

export default WorkingDay