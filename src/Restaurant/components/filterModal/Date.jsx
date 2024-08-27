import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const Date = ({ setFilters }) => {
    return (
        <div>
            <RadioGroup onValueChange={(value) => setFilters(value)} defaultValue="Daily">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Daily" id="Daily" />
                    <Label className="font-numans font-semibold text-lg" htmlFor="Daily">Daily</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Weekly" id="Weekly" />
                    <Label className="font-numans font-semibold text-lg" htmlFor="Weekly">Weekly</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Monthly" id="Monthly" />
                    <Label className="font-numans font-semibold text-lg" htmlFor="Monthly">Monthly</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

export default Date