import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const Outlet = ({ setFilters }) => {
    return (
        <div>
            <RadioGroup onValueChange={(value) => setFilters(value)} defaultValue="">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Desi Platters (ID: 3405 0313)" id="Desi Platters (ID: 3405 0313)" />
                    <Label className="font-numans font-semibold text-lg" htmlFor="Desi Platters (ID: 3405 0313)">Desi Platters (ID: 3405 0313)</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Home Kitchen (ID: 3405 0345)" id="Home Kitchen (ID: 3405 0345)" />
                    <Label className="font-numans font-semibold text-lg" htmlFor="Home Kitchen (ID: 3405 0345)">Home Kitchen (ID: 3405 0345)</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

export default Outlet