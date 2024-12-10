import { Input } from '@/components/ui/input'
import frame from '@/assets/Frame 1618874345.png'
import { IoSearchOutline } from 'react-icons/io5'
import WorkingDay from './WorkingDay'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { WorkingDayFormSchema } from '@/schemas/workingDaySchema'

const OutletWorkingTime = ({ operatingHours, getRestaurantProfile }) => {
  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = operatingHours || {};
  console.log("operatingHours", operatingHours);

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const form = useForm({
    resolver: zodResolver(WorkingDayFormSchema),
    defaultValues: {
      monday: {
        timings: [{ startTime: monday?.open || "", endTime: monday?.close || "" }],
        outletOpen: monday?.isOpen || false,
        timingToAllDays: false,
      },
      tuesday: {
        timings: [{ startTime: tuesday?.open || "", endTime: tuesday?.close || "" }],
        outletOpen: tuesday?.isOpen || false,
        timingToAllDays: false,
      },
      wednesday: {
        timings: [{ startTime: wednesday?.open || "", endTime: wednesday?.close || "" }],
        outletOpen: wednesday?.isOpen || false,
        timingToAllDays: false,
      },
      thursday: {
        timings: [{ startTime: thursday?.open || "", endTime: thursday?.close || "" }],
        outletOpen: thursday?.isOpen || false,
        timingToAllDays: false,
      },
      friday: {
        timings: [{ startTime: friday?.open || "", endTime: friday?.close || "" }],
        outletOpen: friday?.isOpen || false,
        timingToAllDays: false,
      },
      saturday: {
        timings: [{ startTime: saturday?.open || "", endTime: saturday?.close || "" }],
        outletOpen: saturday?.isOpen || false,
        timingToAllDays: false,
      },
      sunday: {
        timings: [{ startTime: sunday?.open || "", endTime: sunday?.close || "" }],
        outletOpen: sunday?.isOpen || false,
        timingToAllDays: false,
      },
    }
  })

  const { handleSubmit } = form;
  const handleSave = (data) => {
    console.log("data", data);
  }

  // console.log("defaultValues:", form.getValues());


  return (
    <div className='p-5'>
      <div className='w-full relative'>
        <IoSearchOutline className='absolute top-1/2 -translate-y-1/2 left-2 z-10 text-xl text-[#667085]' />
        <Input type="search" placeholder="Search by name, email or phone number" className="px-4 pl-8 w-full secondry-color class-sm2 placeholder:text-[#667085]" />
      </div>
      <div className="mt-5 grid grid-cols-[40%_58%] gap-5">
        <img className='w-full h-full rounded-lg' src={frame} alt="" />
        <div className='px-1'>
          <h2 className='class-base1'>How to Change Your Online Ordering Hours of Operation</h2>
          <p className='text-[#7991A4] text-xs font-numans mt-2'>Need to update your online ordering hours? Watch how you can effortlessly make changes using the Restaurant Partner App.</p>
        </div>
      </div>

      <div className="mt-5">

        {daysOfWeek.map((day, i) => (
          <WorkingDay
            key={i}
            day={day}
            form={form}
            getRestaurantProfile={getRestaurantProfile}
          />
        ))}

      </div>
    </div>
  )
}

export default OutletWorkingTime