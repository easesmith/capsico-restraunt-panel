import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import usePostApiReq from "@/hooks/usePostApiReq";
import { readCookie } from "@/utils/readCookie";
import { EditIcon, ImageOffIcon, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NonVegIcon from "../customIcons/NonVegIcon";
import VegIcon from "../customIcons/VegIcon";

const Food = ({ item }) => {
  const [isOn, setIsOn] = useState(item.isAvailable);

  const { res, fetchData, isLoading } = usePostApiReq();
  const navigate = useNavigate();
  const userInfo = readCookie("userInfo");

  const toggleFoodAvailability = (value) => {
    console.log("value: ", value);
    setIsOn(value);
    fetchData(
      `/restaurant/food-availability/${item?.id}?restaurantId=${userInfo?.id}`
    );
  };

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("toggleFoodAvailability res", res);
      setIsOn(res?.data?.data?.isAvailable);
    }
  }, [res]);

  const handleUpdate = () => {
    navigate(`/restaurant/${userInfo?.id}/updateMenu`, {
      state: {
        restaurantId: userInfo?.id,
        foodItem: item,
      },
    });
  };

  return (
    <div
      className={`flex items-center gap-4 p-4 hover:bg-background-light dark:hover:bg-background-dark/80 ${
        !isOn ? "opacity-60" : ""
      }`}
    >
      {/* Item Image */}
      {item.image ? (
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 flex-shrink-0"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      ) : (
        <div className="size-16 bg-muted-foreground/30 aspect-square rounded-lg flex items-center justify-center">
          <ImageOffIcon />
        </div>
      )}

      {/* Item Details */}
      <div className="flex-grow">
        {item?.veg ? <VegIcon /> : <NonVegIcon />}
        <p className="font-bold text-[#333333] dark:text-white">{item.name}</p>
        <p className="text-sm text-[#6B7280] dark:text-gray-400">
          ₹{item.price.toFixed(2)}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {item.isRecommended && (
          <Button
            variant="ghost"
            size="sm"
            className={`flex items-center gap-2 ${
              item.isRecommended
                ? "bg-primary/10 text-primary"
                : "text-[#6B7280] hover:text-primary hover:bg-primary/10"
            }`}
          >
            <Star
              size={16}
              className={item.isRecommended ? "fill-current" : ""}
            />
            {item.isRecommended ? "Recommended" : "Recommend"}
          </Button>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="[&_svg]:size-6"
          title="Edit Item"
          onClick={handleUpdate}
        >
          <EditIcon className="size-6" />
        </Button>
        <Switch
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-orange-500"
          checked={isOn}
          onCheckedChange={(value) => toggleFoodAvailability(value)}
        />
      </div>
    </div>
  );
};

export default Food;
