import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/custom-popover'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { CreateOfferSchema2, CreateOfferSchema3 } from '@/schemas/CreateOfferSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import usePostApiReq from '@/hooks/usePostApiReq'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const CreateOfferModal3 = ({ setStep, setIsCreateCouponModalOpen, apiData }) => {
    const form = useForm({
        resolver: zodResolver(CreateOfferSchema3),
        defaultValues: {
            startDate: "",
            endDate: "",
            dealType: "",
            dealoftheday: false,
            priority: ""
        }
    })
    const { register, handleSubmit, watch, control, getValues } = form;
    const { res, fetchData, isLoading } = usePostApiReq();

    const onsubmit = (data) => {
        console.log("data", data);
        console.log("apiData", apiData);
        console.log("rest", { ...data, ...apiData });
        setStep(3);
        fetchData("/restaurant/create-coupons", { ...data, ...apiData });
        // setIsCreateCouponModalOpen(false);
    }

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("create coupon res", res);
        }
    }, [res])

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col px-4 py-2 justify-between h-full'>
                <div>
                    <div className="grid gap-6 py-4">
                        <div className='grid grid-cols-2 gap-5'>
                            <FormField
                                control={control}
                                name="startDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='font-medium font-inter'>Start Date</FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Start Date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="endDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='font-medium font-inter'>End Date</FormLabel>
                                        <FormControl>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>End Date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={control}
                            name="dealoftheday"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between">
                                    <div className="space-y-0.5">
                                        <FormLabel>Deal of the Day</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            className="data-[state=checked]:bg-[#34C759]"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="dealType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Deal Type</FormLabel>
                                    <FormControl>
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="restaurant">Restaurant</SelectItem>
                                                <SelectItem value="item">Item</SelectItem>
                                                <SelectItem value="category">Category</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="priority"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-medium font-inter'>Priority Level</FormLabel>
                                    <FormControl>
                                        <Input placeholder="0" type="number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <Button type="submit" variant="capsico" className="w-full">Continue</Button>
            </form>
        </Form>
    )
}
export default CreateOfferModal3