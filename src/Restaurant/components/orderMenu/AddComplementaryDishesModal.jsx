import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"
import { X } from "lucide-react"
import AddComplementaryDishes from "@/assets/AddComplementaryDishes.png"

const AddComplementaryDishesModal = ({ isAddComplementaryDishesModalOpen, setIsAddComplementaryDishesModalOpen }) => {
    return (
        <Sheet className="" open={isAddComplementaryDishesModalOpen} onOpenChange={setIsAddComplementaryDishesModalOpen}>
            <SheetContent className="sm:w-1/2 p-0 overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="text-xl border-b p-5  z-30 flex justify-between top-0 bg-white">
                        Add complementary dishes to your menu
                        <X onClick={() => setIsAddComplementaryDishesModalOpen(false)} className="h-6 w-6 cursor-pointer" />
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="p-5 h-[88%] flex flex-col justify-center items-center">
                    <img src={AddComplementaryDishes} alt="AddComplementaryDishes" />
                    <p className="font-bold font-inter text-xl mt-1">You don’t have any items in your menu</p>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default AddComplementaryDishesModal