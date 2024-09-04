import { Input } from '@/components/ui/input'
import frame from '@/assets/Frame 1618874345.png'
import { IoSearchOutline } from 'react-icons/io5'
import WorkingDay from './WorkingDay'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { WorkingDayFormSchema } from '@/schemas/workingDaySchema'

const OutletWorkingTime = () => {
  const form = useForm({
    resolver: zodResolver(WorkingDayFormSchema),
    defaultValues: {
      monday: {
        timings: [{ startTime: "", endTime: "" }],
        outletOpen: false,
        timingToAllDays: false,
      },
      tuesday: {
        timings: [{ startTime: "", endTime: "" }],
        outletOpen: false,
        timingToAllDays: false,
      },
      wednesday: {
        timings: [{ startTime: "", endTime: "" }],
        outletOpen: false,
        timingToAllDays: false,
      },
      thursday: {
        timings: [{ startTime: "", endTime: "" }],
        outletOpen: false,
        timingToAllDays: false,
      },
      friday: {
        timings: [{ startTime: "", endTime: "" }],
        outletOpen: false,
        timingToAllDays: false,
      },
      saturday: {
        timings: [{ startTime: "", endTime: "" }],
        outletOpen: false,
        timingToAllDays: false,
      },
      sunday: {
        timings: [{ startTime: "", endTime: "" }],
        outletOpen: false,
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
      {/* <div className="mt-5 grid grid-cols-[40%_58%] gap-5">
        <img className='w-full h-full rounded-lg' src={frame} alt="" />
        <div>
          <h2 className='class-base1'>How to Change Your Online Ordering Hours of Operation</h2>
          <p className='text-[#7991A4] text-sm font-numans'>Need to update your online ordering hours? Watch how you can effortlessly make changes using the Restaurant Partner App.</p>
        </div>
      </div> */}

      <div className="mt-5">

        <WorkingDay
          day="Monday"
          form={form}
        />
        <WorkingDay
          day="Tuesday"
          form={form}
        />
        <WorkingDay
          day="Wednesday"
          form={form}
        />
        <WorkingDay
          day="Thursday"
          form={form}
        />
        <WorkingDay
          day="Friday"
          form={form}
        />
        <WorkingDay
          day="Saturday"
          form={form}
        />
        <WorkingDay
          day="Sunday"
          form={form}
        />

      </div>
    </div>
  )
}

export default OutletWorkingTime