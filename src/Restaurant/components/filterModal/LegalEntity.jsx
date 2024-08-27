import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const LegalEntity = ({setFilters}) => {
  return (
    <div>
        <RadioGroup onValueChange={(value) => setFilters(value)} defaultValue="">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="raviSony" id="raviSony" />
                    <Label className="font-numans font-semibold text-lg" htmlFor="raviSony">Ravi Sony (2)</Label>
                </div>
            </RadioGroup>
    </div>
  )
}

export default LegalEntity