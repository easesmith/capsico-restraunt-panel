import CustomMultiSelect from '@/components/MultiSelect'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import useGetApiReq from '@/hooks/useGetApiReq'
import { CreateOfferSchema2 } from '@/schemas/CreateOfferSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const CreateOfferModal2 = ({ setStep, setApiData }) => {
  const form = useForm({
    resolver: zodResolver(CreateOfferSchema2),
    defaultValues: {
      minOrderValue: "",
      applicableOn: "",
      // applicableCuisines: "",
      // applicableItems: "",
      maxUsageCount: "",
      maxUsagePerUser: "",
      usageFrequency: "",
      applicableCuisines: [],
      applicableItems: [],
    }
  })
  const { register, handleSubmit, watch, control, getValues } = form;

  const [cuisines, setCuisines] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const { res, fetchData, isLoading } = useGetApiReq();
  const { res: foodItemsRes, fetchData: fetchFoodItemsData, isLoading: isFoodItemLoading } = useGetApiReq();

  const getCuisines = () => {
    fetchData("/restaurant/get-cuisines");
  }

  useEffect(() => {
    getCuisines();
  }, [])

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("get cuisines res", res);
      setCuisines(res?.data?.data?.cuisines);
    }
  }, [res])

  const getFoodItems = () => {
    fetchFoodItemsData("/restaurant/food-list");
  }

  useEffect(() => {
    getFoodItems();
  }, [])

  useEffect(() => {
    if (foodItemsRes?.status === 200 || foodItemsRes?.status === 201) {
      console.log("get food list res", foodItemsRes);
      setFoodItems(foodItemsRes?.data?.data);
    }
  }, [foodItemsRes])

  const applicableOnValue = watch('applicableOn');

  const onsubmit = (data) => {
    console.log("data", data);
    setStep(3)
    setApiData((prev) => ({ ...prev, ...data }))
  }


  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onsubmit)} className='flex flex-col px-4 py-2 justify-between h-full'>
        <div>
          <div className="grid gap-6 py-4">
            <FormField
              control={control}
              name="applicableOn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-medium font-inter'>Applicable to</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Items</SelectItem>
                        <SelectItem value="cuisine">Specific Cuisines</SelectItem>
                        <SelectItem value="specific_items">Specific Items</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            {applicableOnValue === 'cuisine' && (
              <FormField
                control={control}
                name="applicableCuisines"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium font-inter">Select Cuisines</FormLabel>
                    <FormControl className="bg-blue-500 w-full">
                      <CustomMultiSelect
                        options={cuisines}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Select Cuisines..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {applicableOnValue === 'specific_items' && (
              <FormField
                control={control}
                name="applicableItems"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium font-inter">Select Items</FormLabel>
                    <FormControl className="bg-blue-500 w-full">
                      <CustomMultiSelect
                        options={foodItems}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Select Items..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* <FormField
              control={control}
              name="usageLimits"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-medium font-inter'>Usage Limits</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={control}
              name="minOrderValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-medium font-inter'>Minimum Order Value </FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="maxUsageCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-medium font-inter'>Maximum Usage</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="maxUsagePerUser"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-medium font-inter'>Maximum Uses Per User</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="usageFrequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-medium font-inter'>Usage Frequency</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no_restriction">No Restriction</SelectItem>
                        <SelectItem value="once_per_day">Once Per Day</SelectItem>
                        <SelectItem value="once_per_week">Once Per Week</SelectItem>
                        <SelectItem value="once_per_month">Once Per Month</SelectItem>
                      </SelectContent>
                    </Select>
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

export default CreateOfferModal2