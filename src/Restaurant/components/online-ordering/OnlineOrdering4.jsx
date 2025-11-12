import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { updatePreview } from '@/utils/updatePreview';
import { useEffect } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';
import { PiCameraPlus } from 'react-icons/pi';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Plan from './Plan';

const OnlineOrdering3 = ({ form }) => {
  const { register, control, watch, setValue, getValues } = form;
  const panImageRef = register("panImage");
  const fssaiImageRef = register("fssaiImage");

  const panImage = watch("panImage");
  const fssaiImage = watch("panImage");


  useEffect(() => {
    updatePreview(panImage, "panImagePreview", setValue);
    updatePreview(fssaiImage, "fssaiPreview", setValue);
  }, [form, panImage, fssaiImage, setValue]);

  return (
    <div className='grid grid-cols-2'>
      <Plan />
    </div>
  )
}

export default OnlineOrdering3