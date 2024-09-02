import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateTimeOptions } from "@/utils/generateTimeOptions";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BiTrash } from "react-icons/bi";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useFieldArray } from "react-hook-form";
import { toast } from "sonner";
// import { Switch } from "@/components/ui/switch"

const WorkingDay = ({ day, form }) => {
    const { register, control, watch, setValue, getValues } = form;
    const timeOptions = generateTimeOptions();
    const [timingsArray, setTimingsArray] = useState(["*"])

    const [isOpen, setIsOpen] = useState(false);

    const { fields, append, remove } = useFieldArray({
        control,
        name: "timings",
    });

    const handleSave = () => {
        const data = {
            day,
            timings: getValues("timings"),
            outletOpen: getValues("outletOpen"),
        }
        console.log("data", data);

    }


    const handleAdd = () => {
        if (timingsArray.length === 2) {
            toast.error("Can not add more than 2.")
            return;
        }
        setTimingsArray([...timingsArray, "*"])
    }

    const handleRemove = (index) => {
        if (index > -1 && index < timingsArray.length) {
            console.log("index", index);
            const timings = [...timingsArray]
            timings.splice(index, 1);
            setTimingsArray(timings);
        }
    }

    const handleOnChange = (index) => {
        const existingIndex = fields.find((_, i) => i === index);
        console.log("existingIndex", existingIndex);
        const newTiming = {
            startTime: getValues(`startTime${index}`),
            endTime: getValues(`endTime${index}`),
        };

        console.table(newTiming)

        if (existingIndex) {
            setValue(`timings.${index}`, newTiming);
        } else {
            append(newTiming);
        }
        console.log("timings", getValues("timings"));
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
                className={`transition-all ${isOpen ? "border-b" : ""} duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} w-full`}
            >
                <div className="px-5 py-3">
                    <div className="flex flex-col gap-3">
                        {timingsArray.map((_, i) => (
                            <div key={i} className="flex gap-6 items-center">
                                <p className="text-[#4A5E6D] class-base1">Slot {i + 1}</p>
                                <div className="flex items-center gap-4">
                                    <FormField
                                        control={control}
                                        name={`startTime${i}`}
                                        render={({ field }) => (
                                            <FormItem className="z-20">
                                                <div className="flex gap-2 items-center">
                                                    <FormLabel className="text-[#4A5E6D] class-sm1">Start time</FormLabel>
                                                    <FormControl>
                                                        <Select
                                                            {...field}
                                                            onValueChange={(e) => {
                                                                field.onChange(e);
                                                                handleOnChange(i);
                                                            }}
                                                        >
                                                            <SelectTrigger className="w-[120px]">
                                                                <SelectValue placeholder="12:00 AM" />
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
                                        name={`endTime${i}`}
                                        render={({ field }) => (
                                            <FormItem className="z-20">
                                                <div className="flex gap-2 items-center">
                                                    <FormLabel className="text-[#4A5E6D] class-sm1">End time</FormLabel>
                                                    <FormControl>
                                                        <Select
                                                            {...field}
                                                            onValueChange={(e) => {
                                                                field.onChange(e);
                                                                handleOnChange(i);
                                                            }}
                                                        >
                                                            <SelectTrigger className="w-[120px]">
                                                                <SelectValue placeholder="12:00 AM" />
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
                                <BiTrash onClick={() => handleRemove(i)} className="text-[#4A5E6D] text-xl cursor-pointer" />
                            </div>
                        ))}
                    </div>
                    <button onClick={handleAdd} className='class-base1 text-[#0083C9] my-4'>+ Add time slot</button>
                    <div className="flex items-center gap-6">
                        <FormField
                            control={control}
                            name="timingToAllDays"
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

                        <FormField
                            control={control}
                            name="outletOpen"
                            render={({ field }) => {
                                return (
                                    <FormItem className="flex gap-3 items-center">
                                        <FormControl>
                                            <Switch
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
                                )
                            }}
                        />
                    </div>
                    <Button onClick={handleSave} variant="capsico" className="mt-4">Save</Button>
                </div>
            </div>
        </div>
    )
}

export default WorkingDay