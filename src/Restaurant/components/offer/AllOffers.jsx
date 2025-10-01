import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LIMIT } from "@/constants/constants";
import useGetApiReq from "@/hooks/useGetApiReq";
import { useEffect, useState } from "react";
import DataNotFound from "../DataNotFound";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Offer from "./Offer";
import { PaginationComp } from "../PaginationComp";
import { Button } from "@/components/ui/button";
import { readCookie } from "@/utils/readCookie";

const AllOffers = () => {
  const userInfo = readCookie("userInfo");
  const [offers, setOffers] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantID, setRestaurantID] = useState(userInfo?.id || "");
  const [offerType, setOfferType] = useState("");
  const [scope, setScope] = useState("");
  const [status, setStatus] = useState("");


  const resetFilters = () => {
    setRestaurantID(userInfo?.id || ""); // reset to first restaurant
    setOfferType(""); // reset offer type
    setScope(""); // reset scope
    setStatus(""); // reset status
    setPage(1); // reset page
  };

  useEffect(() => {
    if (userInfo) {
      setRestaurantID(userInfo.id);
    }
  }, [userInfo]);

  const { res, fetchData, isLoading } = useGetApiReq();

  const getOffers = () => {
    let url = `/offers/get-offers?restaurantId=${restaurantID}&page=${page}&limit=${LIMIT}`;

    if (offerType) url += `&offerType=${offerType}`;
    if (scope) url += `&scope=${scope}`;
    if (status !== "") url += `&isActive=${status}`;

    fetchData(url);
  };

  useEffect(() => {
    getOffers();
  }, [page, restaurantID, offerType, scope, status]);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("offers res", res);
      setOffers(res?.data?.data?.offers || []);
      setTotalPage(res?.data?.data?.pagination?.totalPages);
      setPage(res?.data?.data?.pagination?.currentPage);
    }
  }, [res]);

  return (
    <div className="max-w-6xl">
      <div className="flex justify-end items-center gap-4 mt-5">
        <Select onValueChange={(value) => setStatus(value)} value={status}>
          <SelectTrigger className="w-auto">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            {/* <SelectItem value="all">All</SelectItem> */}
            <SelectItem value="true">Active</SelectItem>
            <SelectItem value="false">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) => setOfferType(value)}
          value={offerType}
        >
          <SelectTrigger className="w-auto">
            <SelectValue placeholder="Select Offer Type" />
          </SelectTrigger>
          <SelectContent>
            {/* <SelectItem value="all">All</SelectItem> */}
            <SelectItem value="flatOff">Flat Off</SelectItem>
            <SelectItem value="percentageDiscount">
              Percentage Discount
            </SelectItem>
            <SelectItem value="bogoOffers">Buy One Get One</SelectItem>
            <SelectItem value="comboDeals">Combo Deals</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setScope(value)} value={scope}>
          <SelectTrigger className="w-auto">
            <SelectValue placeholder="Select Scope" />
          </SelectTrigger>
          <SelectContent>
            {/* <SelectItem value="all">All</SelectItem> */}
            <SelectItem value="global">Global</SelectItem>
            <SelectItem value="categorywise">Category-wise</SelectItem>
            <SelectItem value="itemwise">Item-wise</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-auto px-4" onClick={resetFilters}>
          Reset Filters
        </Button>
      </div>

      {restaurantID ? (
        <div className="bg-white mt-10">
          <Table className="max-w-6xl overflow-x-scroll">
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Offer Code</TableHead>
                <TableHead className="whitespace-nowrap">Name</TableHead>
                <TableHead className="whitespace-nowrap">Description</TableHead>
                <TableHead className="whitespace-nowrap">Type</TableHead>
                <TableHead className="whitespace-nowrap">Scope</TableHead>
                <TableHead className="whitespace-nowrap">Active</TableHead>
                <TableHead className="whitespace-nowrap">Start Date</TableHead>
                <TableHead className="whitespace-nowrap">End Date</TableHead>
                <TableHead className="whitespace-nowrap">Priority</TableHead>
                <TableHead className="whitespace-nowrap">Max Usage</TableHead>
                <TableHead className="whitespace-nowrap">
                  Max Usage/User
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  Current Usage
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  Min Order Value
                </TableHead>
                <TableHead className="whitespace-nowrap">Combo Items</TableHead>
                <TableHead className="whitespace-nowrap">Combo Price</TableHead>
                <TableHead className="whitespace-nowrap">Bogo Config</TableHead>
                <TableHead className="whitespace-nowrap">
                  Display Settings
                </TableHead>
                {/* <TableHead>Restaurant</TableHead> */}
                <TableHead className="whitespace-nowrap">
                  Applicable Categories
                </TableHead>
                <TableHead className="whitespace-nowrap">
                  Applicable Items
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {offers.map((offer) => (
                <Offer key={offer.id} offer={offer} getOffers={getOffers} />
              ))}
            </TableBody>
          </Table>

          {offers.length === 0 && <DataNotFound name="Offers" />}

          <div className="mt-4 mb-6 pb-4">
            <PaginationComp
              page={page || 1}
              pageCount={totalPage}
              setPage={setPage}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-10 items-center text-center">
          Select Restaurant to see offers.
        </div>
      )}
    </div>
  );
};

export default AllOffers;
