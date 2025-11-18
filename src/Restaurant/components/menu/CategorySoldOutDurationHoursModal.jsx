import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import usePutApiReq from "@/hooks/usePutApiReq";
import { readCookie } from "@/utils/readCookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CategorySoldOutDurationHoursModal = ({
  isModal,
  setIsModal,
  isOn,
  categoryId,
  getCategories,
}) => {
  const form = useForm({
    resolver: zodResolver(
      z.object({
        duration: z.coerce.number().min(0, "Duration is required.").default(0),
      })
    ),
    defaultValues: {
      duration: 0,
    },
  });

  const { res, fetchData, isLoading } = usePutApiReq();
  const userInfo = readCookie("userInfo");

  const onSubmit = (data) => {
    console.log("data :", data);
    fetchData(
      `/restaurant/restaurants/${userInfo.id}/update-category/${categoryId}`,
      {
        isActive: false,
        soldOutDurationHours: data.duration,
      }
    );
  };

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("update status res", res);
      getCategories();
      setIsModal(false);
    }
  }, [res]);

  return (
    <Dialog open={isModal} onOpenChange={setIsModal}>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-[#111928] text-xl font-semibold font-inter">
              Select Duration
            </h2>
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={`text-[#111928] font-semibold font-inter opacity-80`}
                  >
                    Duration (in Hours) (e.g., 2 for 2 hours, 0 for 0 hour)
                  </FormLabel>
                  <FormControl>
                    <Input
                      // className="w-full h-9"
                      type="number"
                      value={field.value}
                      min={0}
                      placeholder="Hours"
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="h-11 w-full text-base font-inter"
              variant="capsico"
              disabled={isLoading}
            >
              {isLoading ? "Submiting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CategorySoldOutDurationHoursModal;
