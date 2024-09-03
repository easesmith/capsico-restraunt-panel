/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import restaurantOptions from '@/data/restaurantOptions.json';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PiCameraPlus } from "react-icons/pi";
import { z } from "zod";

const EditContactInfoModal = ({ isEditContactModalOpen, setIsEditContactModalOpen }) => {
    const schema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address").min(1, "Email is required"),
        phone: z.string().min(10, "Phone number is required"),
    });
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        }
    })
    const { register, control, watch, setValue, getValues } = form;

    const onSubmit = (data) => {
        console.log("data", data);
        setIsEditContactModalOpen(false);
    }


    return (
        <Dialog open={isEditContactModalOpen} onOpenChange={() => setIsEditContactModalOpen(!isEditContactModalOpen)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Contact Info</DialogTitle>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-5">
                            <div className="w-full mt-5">
                                <FormField
                                    control={control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel className="">Name</FormLabel>
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
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel className="">Phone Number</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Enter Phone Number"  {...field} />
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
                                        <FormItem className="z-20">
                                            <FormLabel className="">Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="Enter Email"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex justify-end mt-3">
                                <Button type="submit" variant="capsico" className="w-20">Submit</Button>
                            </div>
                        </form>
                    </Form>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default EditContactInfoModal