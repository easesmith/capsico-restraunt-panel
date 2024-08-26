import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

const FilterModal = ({ isFilterModalOpen, setIsFilterModalOpen }) => {
    const [selceted, setSelceted] = useState("date");

    return (
        <Dialog open={isFilterModalOpen} onOpenChange={() => setIsFilterModalOpen(!isFilterModalOpen)}>
            <DialogContent className="max-w-2xl w-full">
                <DialogHeader>
                    <DialogTitle className="font-numans text-[30px] text-black border-b-2 border-black pb-4">Filter</DialogTitle>

                    <div className="pt-5 grid grid-cols-[200px_1fr]">
                        <div className="">
                            <button onClick={() => setSelceted("date")} className={`w-full py-3 text-left px-4 font-numans font-semibold text-lg ${selceted === "date" ? "bg-white border-r-4 border-[#1AA6F1]" : "bg-[#E7EBEF]"}`}>Date</button>
                            <button onClick={() => setSelceted("legal-entity")} className={`w-full py-3 text-left px-4 font-numans font-semibold text-lg ${selceted === "legal-entity" ? "bg-white border-r-4 border-[#1AA6F1]" : "bg-[#E7EBEF]"}`}>Legal Entity</button>
                            <button onClick={() => setSelceted("city")} className={`w-full py-3 text-left px-4 font-numans font-semibold text-lg ${selceted === "city" ? "bg-white border-r-4 border-[#1AA6F1]" : "bg-[#E7EBEF]"}`}>City</button>
                            <button onClick={() => setSelceted("zone")} className={`w-full py-3 text-left px-4 font-numans font-semibold text-lg ${selceted === "zone" ? "bg-white border-r-4 border-[#1AA6F1]" : "bg-[#E7EBEF]"}`}>Zone</button>
                            <button onClick={() => setSelceted("subzone")} className={`w-full py-3 text-left px-4 font-numans font-semibold text-lg ${selceted === "subzone" ? "bg-white border-r-4 border-[#1AA6F1]" : "bg-[#E7EBEF]"}`}>SubZone</button>
                            <button onClick={() => setSelceted("chain")} className={`w-full py-3 text-left px-4 font-numans font-semibold text-lg ${selceted === "chain" ? "bg-white border-r-4 border-[#1AA6F1]" : "bg-[#E7EBEF]"}`}>Chain</button>
                            <button onClick={() => setSelceted("outlet")} className={`w-full py-3 text-left px-4 font-numans font-semibold text-lg ${selceted === "outlet" ? "bg-white border-r-4 border-[#1AA6F1]" : "bg-[#E7EBEF]"}`}>Outlet</button>
                        </div>
                        <div className="p-4">qqq</div>
                    </div>
                </DialogHeader>
                <DialogDescription></DialogDescription>
            </DialogContent>
        </Dialog >
    )
}

export default FilterModal