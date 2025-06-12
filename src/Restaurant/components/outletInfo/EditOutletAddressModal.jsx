/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import usePostApiReq from "@/hooks/usePostApiReq";
import { addressSchema } from "@/schemas/outletSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Autocomplete, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { CiLocationOn } from "react-icons/ci";
import { Label } from "@/components/ui/label";
const libraries = ["places", "marker"];

const EditOutletAddressModal = ({ isEditOutletAddressInfoModalOpen, setIsEditOutletAddressModalOpen, profile, getRestaurantProfile }) => {
    console.log("profile", profile);
    const { address,city, state, pinCode,coordinates } = profile.location || {};
    
    const { res, fetchData, isLoading } = usePostApiReq();
    const form = useForm({
        resolver: zodResolver(addressSchema),
        defaultValues: {
            addressLine: address || "",
            city: city || "",
            state:state || "",
            pinCode: pinCode || "",
            latitude: coordinates[1] || "",
            longitude: coordinates[0] ||"",
        }
    })

    const { control, handleSubmit, setValue } = form;

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

        setValue("latitude", `${e.latLng.lat()}`)
        setValue("longitude", `${e.latLng.lng()}`)
        setMarkerPosition({
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

    const onSubmit = (data) => {
        console.log("data", { ...data, coordinates: [data.latitude, data.longitude] });
        fetchData("/restaurant/update-address", { ...data, coordinates: [data.latitude, data.longitude] });
    }

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("update-basic-info response", res);
            getRestaurantProfile();
            setIsEditOutletAddressModalOpen(false);
        }
    }, [res])


    return (
        <Dialog open={isEditOutletAddressInfoModalOpen} onOpenChange={setIsEditOutletAddressModalOpen}>
            <DialogContent className="max-h-[90vh] max-w-[600px] w-full overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Outlet Address</DialogTitle>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full py-5">
                            <div className="w-full mt-5">
                                <FormField
                                    control={control}
                                    name="addressLine"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address Line</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Address Line"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="w-full mt-5">
                                <FormField
                                    control={control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>City</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter City"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="w-full mt-5">
                                <FormField
                                    control={control}
                                    name="state"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>State</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter State"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full mt-5">
                                <FormField
                                    control={control}
                                    name="pinCode"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Pincode</FormLabel>
                                            <FormControl>
                                                <Input maxLength={6} type="number" placeholder="Enter Pincode"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="w-full mt-5">
                                <Label>Pin location or type manually longitude and latitude</Label>
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
                            </div>

                            <p className="text-[#344054] text-xl font-semibold text-center mt-5">Or</p>

                            <div className='mt-5 grid grid-cols-2 gap-5'>
                                <FormField
                                    control={control}
                                    name="latitude"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className=" text-[#344054] font-inter"></FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Latitude" className="placeholder:text-[#667085] placeholder:font-inter" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={control}
                                    name="longitude"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className=" text-[#344054] font-inter"></FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Longitude" className="placeholder:text-[#667085] placeholder:font-inter" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex justify-end mt-3">
                                <Button type="submit" variant="capsico">{isLoading ? "Submiting..." : "Submit"}</Button>
                            </div>
                        </form>
                    </Form>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default EditOutletAddressModal