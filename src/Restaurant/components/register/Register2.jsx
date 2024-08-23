import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { CiLocationOn } from "react-icons/ci";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import cuisines from '@/data/cuisines.json';
import restaurantOptions from '@/data/restaurantOptions.json';
import days from '@/data/days.json';
import { useEffect, useState } from 'react';
import { generateTimeOptions } from '@/utils/generateTimeOptions';

const Register2 = ({ form }) => {
    const { register, control, watch, setValue } = form;
    const [showMoreRestaurantOptions, setShowMoreRestaurantOptions] = useState(false)
    const [showMoreCuisines, setShowMoreCuisines] = useState(false)

    const handleToggle = () => {
        setShowMoreRestaurantOptions(!showMoreRestaurantOptions);
    };

    const handleToggleCuisines = () => {
        setShowMoreCuisines(!showMoreCuisines);
    };

    const selectedCuisines = watch('cuisines');
    const selectedRestaurantOptions = watch('restaurantOptions');
    const selectedDays = watch('days');

    const timeOptions = generateTimeOptions();

    useEffect(() => {
        console.log('Selected cuisines:', selectedCuisines);
        console.log('Selected Days:', selectedDays);
        console.log('Selected restaurantOptions:', selectedRestaurantOptions);
    }, [selectedCuisines, selectedRestaurantOptions, selectedDays]);



    return (
        <div>
            <div className='border border-[#C2CDD6] rounded-md px-8 py-6'>
                <h3 className='text-[33px] font-bold text-[#4A5E6D]'>Choose options for your restaurant</h3>
                {/* <p className='text-[25px] font-normal text-[#92A5B5]'>Restaurant name. address. contact no., owner details</p> */}
                <div className='mt-5'>
                    <FormField
                        control={control}
                        name="restaurantOptions"
                        render={({ field }) => (
                            <FormItem>
                                <div className="grid grid-cols-3 gap-3 items-center">
                                    {restaurantOptions.slice(0, showMoreRestaurantOptions ? restaurantOptions.length : 4).map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={control}
                                            name="restaurantOptions"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="flex flex-row items-center space-x-3 space-y-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                className="w-5 h-5"
                                                                checked={field.value?.includes(item.id)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, item.id])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value) => value !== item.id
                                                                            )
                                                                        )
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal text-xl text-[#667085]">
                                                            {item.label}
                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}

                                    <div>
                                        <button type='button' onClick={handleToggle} className="text-[#1AA6F1] text-xl font-normal">
                                            {showMoreRestaurantOptions ? '- View less' : '+ View more'}
                                        </button>
                                    </div>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>

            <div className='border border-[#C2CDD6] rounded-md px-8 py-6 mt-6'>
                <h3 className='text-[33px] font-bold text-[#4A5E6D]'>Sorts of Cuisines</h3>
                <p className='text-[25px] font-normal text-[#92A5B5]'>Pick options which best describe food you serve</p>
                <div className='mt-5'>
                    <FormField
                        control={control}
                        name="cuisines"
                        render={({ field }) => (
                            <FormItem>
                                <div className="grid grid-cols-3 gap-3 items-center">
                                    {cuisines.slice(0, showMoreCuisines ? cuisines.length : 4).map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={control}
                                            name="cuisines"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="flex flex-row items-center space-x-3 space-y-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                className="w-5 h-5"
                                                                checked={field.value?.includes(item.id)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, item.id])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value) => value !== item.id
                                                                            )
                                                                        )
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal text-xl text-[#667085]">
                                                            {item.label}
                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}
                                    <div>
                                        <button type='button' onClick={handleToggleCuisines} className="text-[#1AA6F1] text-xl font-normal">
                                            {showMoreCuisines ? '- View less' : '+ View more'}
                                        </button>
                                    </div>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>

            <div className='border border-[#C2CDD6] rounded-md px-8 py-6 mt-6'>
                <h3 className='text-[33px] font-bold text-[#4A5E6D]'>Restaurant Working Hours</h3>
                <p className='text-[25px] font-normal text-[#92A5B5]'>Set restaurant opening and closing hours.</p>

                <div className='mt-5 grid grid-cols-[47%_2%_47%] gap-5'>
                    <FormField
                        control={control}
                        name="openingTime"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg text-[#344054] font-inter">Opening Time</FormLabel>
                                <FormControl>
                                    <Select
                                        {...field}
                                        onValueChange={(e) => {
                                            field.onChange(e);
                                            // handleOnChange(i);
                                        }}
                                    // disabled={fields.find((item) => item.index === i) ? false : true}
                                    >
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Opening Time" />
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
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className='mt-auto mb-4 text-xl text-[#667085]'>to</div>
                    <FormField
                        control={control}
                        name="closingTime"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg text-[#344054] font-inter">Closing Time</FormLabel>
                                <FormControl>
                                    <Select
                                        {...field}
                                        onValueChange={(e) => {
                                            field.onChange(e);
                                            // handleOnChange(i);
                                        }}
                                    // disabled={fields.find((item) => item.index === i) ? false : true}
                                    >
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Closing Time" />
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
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className='mt-5'>
                    <FormField
                        control={control}
                        name="days"
                        render={({ field }) => (
                            <FormItem>
                                <div className="grid grid-cols-3 gap-3 items-center">
                                    {days.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={control}
                                            name="days"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="flex flex-row items-center space-x-3 space-y-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                className="w-5 h-5"
                                                                checked={field.value?.includes(item.id)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, item.id])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value) => value !== item.id
                                                                            )
                                                                        )
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal text-xl text-[#667085]">
                                                            {item.label}
                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}
                                    <div>
                                        <button className="text-[#1AA6F1] text-xl font-normal">+ View more</button>
                                    </div>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default Register2