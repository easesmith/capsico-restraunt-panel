/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteModal from "../outletInfo/DeleteModal";
import useGetApiReq from "@/hooks/useGetApiReq";
import useDeleteApiReq from "@/hooks/useDeleteApiReq";

const Offer = ({ offer, getOffers }) => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { res, fetchData, isLoading } = useDeleteApiReq();

  const deleteOffer = () => {
    fetchData(`/offers/delete-offer/${offer.id}`);
  };

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("deleteOffer res", res);
      setIsDeleteModalOpen(false);
      getOffers();
    }
  }, [res]);

  const {
    applicableItems,
    applicableCategories,
    offerCode,
    name,
    scope,
    offerType,
    isActive,
    currentUsageCount,
    maxUsageCount,
    startDate,
    endDate,
    description,
  } = offer;
  return (
    <>
      <TableRow>
        <TableCell>{offer.offerCode}</TableCell>
        <TableCell className="whitespace-nowrap">{offer.name}</TableCell>
        <TableCell className="whitespace-nowrap">{offer.description}</TableCell>
        <TableCell>
          <Badge variant="secondary">{offer.offerType}</Badge>
        </TableCell>
        <TableCell className="whitespace-nowrap">{offer.scope}</TableCell>
        <TableCell>
          {/* <Switch checked={isActive} /> */}
          <Badge variant={isActive ? "default" : "secondary"}>
            {isActive ? "Active" : "Inactive"}
          </Badge>
        </TableCell>
        <TableCell className="whitespace-nowrap">
          {format(offer.startDate, "dd-MM-yyyy")}
        </TableCell>
        <TableCell className="whitespace-nowrap">
          {format(offer.endDate, "dd-MM-yyyy")}
        </TableCell>
        <TableCell className="whitespace-nowrap">{offer.priority}</TableCell>
        <TableCell className="whitespace-nowrap">
          {offer.maxUsageCount || "NA"}
        </TableCell>
        <TableCell className="whitespace-nowrap">
          {offer.maxUsagePerUser || "NA"}
        </TableCell>
        <TableCell className="whitespace-nowrap">
          {offer.currentUsageCount || "NA"}
        </TableCell>
        <TableCell className="whitespace-nowrap">
          {offer.minOrderValue}
        </TableCell>
        <TableCell className="whitespace-nowrap">
          {offer.offerDetails?.comboItems.length > 0
            ? offer.offerDetails?.comboItems?.map((item) => (
                <div key={item.id}>
                  {item.itemId} (Qty: {item.quantity}, Required:{" "}
                  {item.isRequired ? "Yes" : "No"})
                </div>
              ))
            : "NA"}
        </TableCell>
        <TableCell className="whitespace-nowrap">
          {offer.offerDetails?.comboPrice ?? "NA"}
        </TableCell>
        <TableCell className="whitespace-nowrap">
          {offer.offerDetails?.bogoConfig ? (
            <div>
              Buy: {offer.offerDetails.bogoConfig.buyQuantity}, Get:{" "}
              {offer.offerDetails.bogoConfig.getQuantity}
            </div>
          ) : (
            "NA"
          )}
        </TableCell>
        <TableCell className="whitespace-nowrap">
          {offer.displaySettings ? (
            <div>
              Spotlight: {offer.displaySettings.showInSpotlight ? "Yes" : "No"},
              Boost: {offer.displaySettings.boostInSearch ? "Yes" : "No"}, Auto
              Top: {offer.displaySettings.autoMoveToTop ? "Yes" : "No"}
            </div>
          ) : (
            "NA"
          )}
        </TableCell>
        {/* <TableCell className="whitespace-nowrap">
        {offer.restaurant?.name}
        {offer.restaurant?.location?.address?.addressLine}
      </TableCell> */}
        <TableCell className="whitespace-nowrap">
          {applicableCategories.length > 0
            ? applicableCategories.map((item) => item.name).join(", ")
            : "NA"}
        </TableCell>
        <TableCell className="whitespace-nowrap">
          {applicableItems.length > 0
            ? applicableItems.map((item) => item.name).join(", ")
            : "NA"}
        </TableCell>
        <TableCell className="text-right">
          <div className="flex gap-2 items-center">
            <Button
              onClick={() => navigate(`/restaurant/offers/${offer.id}/update`,{state:offer})}
              title="Update Offer"
              size="icon"
              className="ml-2"
            >
              <Edit className="size-5" />
            </Button>
            <Button
              onClick={() => setIsDeleteModalOpen(true)}
              title="Delete Offer"
              size="icon"
              variant="destructive"
            >
              <Trash className="size-5" />
            </Button>
          </div>
        </TableCell>
      </TableRow>

      {isDeleteModalOpen && (
        <DeleteModal
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          desc="This action cannot be undone. This will permanently delete the offer."
          onDelete={deleteOffer}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default Offer;
