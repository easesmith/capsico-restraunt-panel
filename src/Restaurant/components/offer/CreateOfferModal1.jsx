import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { CreateOfferSchema1 } from '@/schemas/CreateOfferSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const CreateOfferModal1 = ({ setStep, setApiData }) => {
    const form = useForm({
        resolver: zodResolver(CreateOfferSchema1),
        defaultValues: {
            name: "",
            description: "",
            discountType: "",
            discountValue: "",
            maxDiscount: "",
        }
    })
    const { register, handleSubmit, watch, control } = form;

    const selectedType = watch("discountType");

    const onsubmit = (data) => {
        console.log("data", data);
        setApiData(data)
        setStep(2)
        // setIsCreateCouponModalOpen(false);
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col px-4 py-2 justify-between h-full'>
                <div className="grid gap-6 py-4">
                    <FormField
                        control={control}
                        name="couponCode"
                        render={({ field }) => (
                            <FormItem className="z-20">
                                <FormLabel className='font-medium font-inter'>Coupon Code</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field}
                                        onChange={(e) => {
                                            field.onChange(e.target.value.replace(/\s+/g, '').toUpperCase());
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="z-20">
                                <FormLabel className='font-medium font-inter'>Coupon Name</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="z-20">
                                <FormLabel className='font-medium font-inter'>Description</FormLabel>
                                <FormControl>
                                    <Textarea className="resize-none" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="discountType"
                        render={({ field }) => (
                            <FormItem className="z-20">
                                <FormLabel className='font-medium font-inter'>Discount Type</FormLabel>
                                <FormControl>
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="fixed">Fixed</SelectItem>
                                            <SelectItem value="percentage">Percentage</SelectItem>
                                            <SelectItem value="buyOneGetOne">Buy One Get One</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {selectedType === "percentage" &&
                        <>
                            <div className="w-full mt-5">
                                <FormField
                                    control={control}
                                    name="discountValue"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel>Discount Value</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="10"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full mt-5">
                                <FormField
                                    control={control}
                                    name="maxDiscount"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel>Maximum Discount (In Rs)</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="20"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </>}

                    {selectedType === "buyOneGetOne" &&
                        <>
                            <div className="w-full mt-5">
                                <FormField
                                    control={control}
                                    name="discountValue"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel>Discount Value</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="10"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </>}

                    {selectedType === "fixed" &&
                        <div className="w-full mt-5">
                            <FormField
                                control={control}
                                name="discountValue"
                                render={({ field }) => (
                                    <FormItem className="z-20">
                                        <FormLabel>Discount Value</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="20"  {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>}
                </div>
                <Button type="submit" variant="capsico" className="w-full">Continue</Button>
            </form>
        </Form>
    )
}

export default CreateOfferModal1