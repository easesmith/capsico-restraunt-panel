/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import restaurantOptions from '@/data/restaurantOptions.json';
import { updateMultiplePreview } from "@/utils/updatePreview";
import { useCallback, useEffect, useRef, useState } from "react";
import { PiCameraPlus } from "react-icons/pi";
import { Autocomplete, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { CiLocationOn } from "react-icons/ci";
import { Label } from "@/components/ui/label";

const libraries = ["places", "marker"];

const EditOutletModal = ({ isEditOutletModalOpen, setIsEditOutletModalOpen, form, onSubmit }) => {
    const { register, control, watch, setValue, getValues } = form;

    const restaurantRef = register("restaurant");

    const restaurant = watch("restaurant");

    useEffect(() => {
        updateMultiplePreview(restaurant, "restaurantPreview", setValue);
    }, [form, restaurant, setValue]);

    const containerStyle = {
        width: '100%',
        height: '350px'
    };

    const [center, setCenter] = useState({
        lat: 19.8429547,
        lng: 75.2333128
    })

    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {
            const map = mapRef.current;

            // Create an AdvancedMarkerElement instance
            const marker = new google.maps.marker.AdvancedMarkerElement({
                position: center,
                map: map,
                content: "<div style='color: red;'>Hello, World!</div>" // Custom content
            });

            // Add additional marker configuration if needed
        }
    }, [mapRef]);

    const [markerPosition, setMarkerPosition] = useState(null);
    const [autocomplete, setAutocomplete] = useState(null);

    const handlePlaceSelect = () => {

        if (autocomplete) {
            const place = autocomplete.getPlace();
            console.log("place", place);
            if (place.geometry && place.geometry.location) {
                setValue("latitude", place.geometry.location.lat())
                setValue("longitude", place.geometry.location.lng())

                setCenter({
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                })
                center.lat = place.geometry.location.lat()
                center.lng = place.geometry.location.lng()

                setMarkerPosition({
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                });
                setValue("search", place.name);
                setValue("location", {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                });
            }
        }
    };

    const onMapClick = useCallback((e) => {
        console.log("location", e);

        setValue("latitude", e.latLng.lat())
        setValue("longitude", e.latLng.lng())
        setMarkerPosition({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        });
        setValue("location", {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        });
    }, []);

    console.log("markerPosition", markerPosition);

    const detectLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setValue("latitude", position.coords.latitude)
                setValue("longitude", position.coords.longitude)
                const currentLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                setMarkerPosition(currentLocation);
                setValue("location", currentLocation);
            });
        }
    }


    return (
        <Dialog open={isEditOutletModalOpen} onOpenChange={() => setIsEditOutletModalOpen(!isEditOutletModalOpen)}>
            <DialogContent className="max-h-[90vh] max-w-[600px] w-full h-full overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Outlet Info</DialogTitle>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-5">
                            <div className="w-full">
                            <Label className="pb-2 flex" htmlFor="category">Restaurant Images</Label>
                                <FormField
                                    control={control}
                                    name="restaurant"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel className="cursor-pointer left-0 w-full h-full top-0">
                                                <span className="cursor-pointer absolute right-0 -top-7 text-xs p-1 border-dashed rounded-sm">Change</span>
                                                {!watch("restaurantPreview") &&
                                                    <div className='border-2 border-dashed border-[#C2CDD6] w-full h-72  flex flex-col justify-center items-center rounded-md'>
                                                        <div className='border-2 flex flex-col items-center primary-color border-dashed rounded px-5 py-4'>
                                                            <PiCameraPlus size={45} />
                                                            <p className='font-bold text-center primary-color text-sm mt-2'>Add Photo</p>
                                                        </div>
                                                        <p className='font-normal text-xs mt-2'>or drop files to upload</p>
                                                    </div>
                                                }
                                            </FormLabel>
                                            <FormControl className="hidden">
                                                <Input multiple={false} type="file" accept='.png,.jpeg,.jpg' {...restaurantRef} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {watch("restaurantPreview") &&
                                    <div className='flex flex-wrap h-full gap-4'>
                                        {watch("restaurantPreview").map((prev, i) => (
                                            <img key={i} className='w-64 h-52' src={prev} alt="" />
                                        ))}
                                    </div>}
                            </div>

                            <div className="w-full mt-5">
                                <FormField
                                    control={control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel className="">Name</FormLabel>
                                            <FormControl>
                                                <Input  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className='mt-5'>
                                <Label className="pb-2 flex" htmlFor="category">Category</Label>
                                <FormField
                                    control={control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="grid grid-cols-3 gap-3 items-center">
                                                {restaurantOptions.map((item) => (
                                                    <FormField
                                                        key={item.id}
                                                        control={control}
                                                        name="category"
                                                        render={({ field }) => {
                                                            return (
                                                                <FormItem
                                                                    key={item.id}
                                                                    className="flex flex-row items-center space-x-3 space-y-0"
                                                                >
                                                                    <FormControl>
                                                                        <Checkbox
                                                                            className="w-5 h-5"
                                                                            checked={field.value?.includes(item.label) || getValues("category").includes(item.label)}
                                                                            onCheckedChange={(checked) => {
                                                                                return checked
                                                                                    ? field.onChange([...field.value, item.label])
                                                                                    : field.onChange(
                                                                                        field.value?.filter(
                                                                                            (value) => value !== item.label
                                                                                        )
                                                                                    )
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal text-base text-[#667085]">
                                                                        {item.label}
                                                                    </FormLabel>
                                                                </FormItem>
                                                            )
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="w-full mt-5 mb-5">
                                <FormField
                                    control={control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel className="">Address</FormLabel>
                                            <FormControl>
                                                <Input  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <LoadScript
                                googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                                libraries={libraries}
                                loadingElement={<div>Loading...</div>}
                                async
                            >
                                <div className='mb-2'>
                                    <FormField
                                        control={control}
                                        name="search"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className=" text-[#344054] font-inter"></FormLabel>
                                                <FormControl>
                                                    <Autocomplete
                                                        onLoad={(autocomplete) => setAutocomplete(autocomplete)}
                                                        onPlaceChanged={handlePlaceSelect}
                                                    >
                                                        <div className='flex border rounded'>
                                                            <Input placeholder="Search for your store here & drop a pin on its location." className="placeholder:text-[#667085] placeholder:font-inter border-none focus-visible:ring-0 focus-visible:ring-offset-0" {...field} />
                                                            <button onClick={detectLocation} type='button' className="text-[#1AA6F1] flex items-center gap-1 px-4 py-2">
                                                                <CiLocationOn size={20} />
                                                                <span className='font-bold'>Detect</span>
                                                            </button>
                                                        </div>
                                                    </Autocomplete>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={10}
                                    onClick={onMapClick}
                                    onLoad={(map) => mapRef.current = map}
                                >
                                    {markerPosition && <Marker position={markerPosition} />}
                                </GoogleMap>
                            </LoadScript>

                            <div className="flex justify-end mt-3">
                                <Button onClick={() => setIsEditOutletModalOpen(false)} type="submit" variant="capsico" className="w-20">Submit</Button>
                            </div>
                        </form>
                    </Form>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default EditOutletModal