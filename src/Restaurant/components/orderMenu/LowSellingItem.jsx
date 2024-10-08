import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import React from 'react'

const LowSellingItem = ({ control, name,id,category }) => {
    return (
        <div className="flex justify-between gap-4 py-5 px-7 border-b">
            <div>
                <h4 className="text-lg font-inter font-normal">{name}</h4>
                <p className="text-lg font-inter font-normal text-[#858585]">{category}</p>
                <p className="text-lg font-inter font-normal text-[#858585]">Ordered 0 times in last 60 days </p>
            </div>
            <FormField
                control={control}
                name={id}
                render={({ field }) => (
                    <FormItem className="flex gap-3">
                        <FormControl>
                            <div>
                                <FormLabel></FormLabel>
                                <Checkbox
                                    // checked={fields.some((field) => field.name === item)}
                                    // onCheckedChange={() => handleOnChange(item)}
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </div>
                        </FormControl>
                    </FormItem>
                )}
            />
        </div>
    )
}

export default LowSellingItem