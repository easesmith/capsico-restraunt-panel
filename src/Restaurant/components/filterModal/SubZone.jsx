import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const SubZone = ({ setFilters }) => {
    return (
        <div>
            <RadioGroup onValueChange={(value) => setFilters(value)} defaultValue="">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="khurramNagarEastGorakhpur" id="khurramNagarEastGorakhpur" />
                    <Label className="font-numans font-semibold text-lg" htmlFor="khurramNagarEastGorakhpur">Khurram NagarEast Gorakhpur (2)</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

export default SubZone