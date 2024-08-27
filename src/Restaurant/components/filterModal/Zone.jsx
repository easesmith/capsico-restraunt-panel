import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const Zone = ({ setFilters }) => {
    return (
        <div>
            <RadioGroup onValueChange={(value) => setFilters(value)} defaultValue="">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="eastGorakhpur" id="eastGorakhpur" />
                    <Label className="font-numans font-semibold text-lg" htmlFor="eastGorakhpur">East Gorakhpur (2)</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

export default Zone