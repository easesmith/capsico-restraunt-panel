import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const City = ({ setFilters }) => {
    return (
        <div>
            <RadioGroup onValueChange={(value) => setFilters(value)} defaultValue="">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Gorakhpur" id="Gorakhpur" />
                    <Label className="font-numans font-semibold text-lg" htmlFor="Gorakhpur">Gorakhpur (2)</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

export default City