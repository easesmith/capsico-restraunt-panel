import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';

const ItemDescriptionInput = ({ control, getValues, trigger, name, category }) => {
    const inputMaxLength = 400;
    const [inputLength, setInputLength] = useState(0);

    const handleLength = () => {
        const text = getValues("itemDescription");
        setInputLength(() => text.length);
        if (text.length > inputMaxLength) {
            trigger("itemDescription");
        }
    }

    return (
        <div className="w-full grid grid-cols-[35%_65%] mt-5">
            <div>
                <h4 className="font-inter font-normal">{name}</h4>
                <p className="font-inter font-normal text-[#858585]">{category}</p>
            </div>
            
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormControl>
                            <Textarea
                                className="min-h-[40px]"
                                {...field}
                                onChange={(e) => {
                                    field.onChange(e);
                                    handleLength();
                                }} />
                        </FormControl>
                        <div className="flex justify-between">
                            <FormMessage />
                            <p className="ml-auto">{inputLength}/{inputMaxLength}</p>
                        </div>
                    </FormItem>
                )}
            />
        </div>
    )
}

export default ItemDescriptionInput