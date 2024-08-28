import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const Chain = ({ setFilters }) => {
    return (
        <div>
            <RadioGroup onValueChange={(value) => setFilters(value)} defaultValue="">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Desi Platters (1)" id="Desi Platters (1)" />
                    <Label className="font-numans font-semibold text-lg" htmlFor="Desi Platters (1)">Desi Platters (1)</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

export default Chain