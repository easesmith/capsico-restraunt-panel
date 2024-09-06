import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

const AddOn = ({ control }) => {
    return (
        <div className='grid grid-cols-[80px_1fr_70px_1fr] gap-4'>
            <div className='border rounded-lg h-20 p-4'></div>
            <div>
                <FormField
                    control={control}
                    name="addOnName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Add on name</FormLabel>
                            <FormControl>
                                <FormControl>
                                    <Input placeholder="Enter name"  {...field} />
                                </FormControl>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div>
                <FormField
                    control={control}
                    name="foodType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="opacity-0">w</FormLabel>
                            <FormControl>
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Delivery">Delivery</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <div>
                <FormField
                    control={control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </div>
    )
}

export default AddOn