/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import usePostApiReq from "@/hooks/usePostApiReq";
import { OutletBasicInfoSchema } from "@/schemas/outletSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditOutletBasicInfoModal = ({ isEditOutletBasicInfoModalOpen, setIsEditOutletBasicInfoModalOpen, profile, getRestaurantProfile }) => {
    const { res, fetchData, isLoading } = usePostApiReq();

    const form = useForm({
        resolver: zodResolver(OutletBasicInfoSchema),
        defaultValues: {
            name: profile?.name || "",
            email: profile?.basicInfo?.email || "",
            phone: profile?.basicInfo?.phone || "",
            restaurantType: ""
        }
    })

    const { control, handleSubmit } = form;

    const onSubmit = (data) => {
        console.log("data", data);
        fetchData("/restaurant/update-basic-info", data);
    }

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("update-basic-info response", res);
            getRestaurantProfile();
            setIsEditOutletBasicInfoModalOpen(false);
        }
    }, [res])


    return (
        <Dialog open={isEditOutletBasicInfoModalOpen} onOpenChange={setIsEditOutletBasicInfoModalOpen}>
            <DialogContent className="max-h-[90vh] max-w-[600px] w-full overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Outlet Basic Info</DialogTitle>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full py-5">
                            <div className="w-full mt-5">
                                <FormField
                                    control={control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Name"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="w-full mt-5 mb-5">
                                <FormField
                                    control={control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="Enter Email"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full mt-5 mb-5">
                                <FormField
                                    control={control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input type="phone" placeholder="Enter Phone"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full mt-5 mb-5">
                                <FormField
                                    control={control}
                                    name="restaurantType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Restaurant Type</FormLabel>
                                            <FormControl>
                                                <Select value={field.value} onValueChange={field.onChange}>
                                                    <SelectTrigger className="text-[#667085]">
                                                        <SelectValue placeholder="Select restaurant type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="BAKERY">BAKERY</SelectItem>
                                                        <SelectItem value="PURE_VEG">PURE VEG</SelectItem>
                                                        <SelectItem value="FOOD_COURT">FOOD COURT</SelectItem>
                                                        <SelectItem value="DESSERT_SHOP">DESSERT SHOP</SelectItem>
                                                        <SelectItem value="BEVERAGE_SHOP">BEVERAGE SHOP</SelectItem>
                                                        <SelectItem value="FAST_FOOD">FAST FOOD</SelectItem>
                                                        <SelectItem value="CASUAL_FOOD_STALL">CASUAL FOOD STALL</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>



                            <div className="flex justify-end mt-3">
                                <Button type="submit" variant="capsico">{isLoading ? "Submiting..." : "Submit"}</Button>
                            </div>
                        </form>
                    </Form>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default EditOutletBasicInfoModal