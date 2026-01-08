import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetApiReq from "@/hooks/useGetApiReq";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Payout } from "./Payout";
import { PaginationComp } from "@/Restaurant/components/PaginationComp";
import DatePicker from "@/Restaurant/components/DatePicker";

export default function PayoutTable({
  getDeliveryPartnerEarnings,
  type = "DELIVERY_PARTNER",
  recipientId = "",
}) {
  const { deliveryAgentId } = useParams();
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
  });

  const [payouts, setPayouts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const { res, fetchData, isLoading } = useGetApiReq();

  const getDeliveryPartnerPayouts = () => {
    fetchData(
      `/payout/get-payouts?recipientType=${type}&recipientId=${
        recipientId || deliveryAgentId
      }`,
      {
        params: {
          ...filters,
          page,
          limit: 10,
          sortBy: "createdAt",
          sortOrder: "desc",
        },
      }
    );
  };

  useEffect(() => {
    getDeliveryPartnerPayouts();
  }, [deliveryAgentId, page, filters]);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("getDeliveryPartnerPayoutDetails res", res);
      setPayouts(res?.data?.payouts);
      setPageCount(res?.data?.meta?.totalPages);
    }
  }, [res]);

  console.log("payouts", payouts);

  return (
    <Card className="rounded-2xl shadow-sm mt-6">
      <CardHeader className="flex flex-row justify-between items-center gap-4 w-full">
        <CardTitle className="text-xl font-semibold">Payout History</CardTitle>
        <div className="flex justify-end gap-3 mt-5">
          {/* <Select
                          onValueChange={(v) =>
                            setFilters((f) => ({ ...f, referenceType: v }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Reference Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ORDER">Order</SelectItem>
                            <SelectItem value="PAYOUT">Payout</SelectItem>
                          </SelectContent>
                        </Select> */}

          <div>
            <Label>StartDate</Label>

            <DatePicker
              value={filters.startDate}
              onChange={(value) => {
                console.log("value", value);

                setFilters((f) => ({ ...f, startDate: value }));
              }}
            />
          </div>

          <div>
            <Label>EndDate</Label>

            <DatePicker
              value={filters.endDate}
              onChange={(value) =>
                setFilters((f) => ({ ...f, endDate: value }))
              }
            />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Transaction</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payout Report</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading && <Payout.Skeleton />}
            {!isLoading && payouts.length === 0 && (
              <div className="text-center text-muted-foreground py-10">
                No payouts found
              </div>
            )}
            {payouts?.map((payout) => (
              <Payout key={payout._id} payout={payout} />
            ))}
          </TableBody>
        </Table>

        <PaginationComp
          page={page || 1}
          pageCount={pageCount}
          setPage={setPage}
        />
      </CardContent>
    </Card>
  );
}
