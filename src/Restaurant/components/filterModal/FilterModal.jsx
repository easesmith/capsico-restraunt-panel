import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import Date from "./Date";
import LegalEntity from "./LegalEntity";
import City from "./City";
import Zone from "./Zone";
import SubZone from "./SubZone";
import Chain from "./Chain";
import Outlet from "./Outlet";
import { Button } from "@/components/ui/button";

const FilterModal = ({ isFilterModalOpen, setIsFilterModalOpen, setSelectedFilters }) => {
    const [selceted, setSelceted] = useState("date");
    const [filters, setFilters] = useState("");

    const handleFilterApply = ()=>{
        setSelectedFilters(filters)
    }

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
                        <div className="p-4">
                            {selceted === "date" && <Date setFilters={setFilters} />}
                            {selceted === "legal-entity" && <LegalEntity setFilters={setFilters} />}
                            {selceted === "city" && <City setFilters={setFilters} />}
                            {selceted === "zone" && <Zone setFilters={setFilters} />}
                            {selceted === "subzone" && <SubZone setFilters={setFilters} />}
                            {selceted === "chain" && <Chain setFilters={setFilters} />}
                            {selceted === "outlet" && <Outlet setFilters={setFilters} />}
                        </div>
                    </div>
                    <div className="flex justify-end gap-5 items-center">
                        <Button onClick={()=> setFilters("")} variant="destructive" className="px-10 rounded font-numans font-medium text-lg">Clear all</Button>
                        <Button onClick={handleFilterApply} variant="capsico" className="px-10 rounded font-numans font-medium text-lg">Apply</Button>
                    </div>
                </DialogHeader>
                <DialogDescription></DialogDescription>
            </DialogContent>
        </Dialog >
    )
}

export default FilterModal