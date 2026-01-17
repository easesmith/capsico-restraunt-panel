import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetApiReq from "@/hooks/useGetApiReq";
import DatePicker from "@/Restaurant/components/DatePicker";
import { PaginationComp } from "@/Restaurant/components/PaginationComp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EarningRow } from "./EarningRow";
import { readCookie } from "@/utils/readCookie";

const EarningTable = () => {
  const navigate = useNavigate();
  const userInfo = readCookie("userInfo");
  
    const restaurantId = userInfo?.id;
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    ownerType: "MERCHANT",
    type: "",
    referenceType: "",
    ownerId: restaurantId,
    startDate: "",
    endDate: "",
  });

  console.log("filters", filters);

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [meta, setMeta] = useState(null);
  const { res, fetchData, isLoading } = useGetApiReq();

  const fetchLedger = async () => {
    fetchData("/payout/earning-ledger", {
      params: {
        ...filters,
        page,
        limit: 10,
        sortBy: "createdAt",
        sortOrder: "desc",
      },
    });
  };

  useEffect(() => {
    fetchLedger();
  }, [page, filters]);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("fetchLedger res", res);
      setData(res?.data?.data);
      setPageCount(res?.data?.meta?.totalPages);
      setMeta(res?.data?.meta);
    }
  }, [res]);

  return (
    <div>
      <Card className="w-full mt-5">
        <CardHeader className="flex flex-row justify-between items-center gap-4 w-full">
          <CardTitle className="text-xl font-semibold">
            Earnings History
          </CardTitle>
          {/* Filters */}
          <div className="flex justify-end gap-3 mt-5">
            <div>
              <Label>Type</Label>

              <Select
                onValueChange={(v) => setFilters((f) => ({ ...f, type: v }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Transaction Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CREDIT">Credit</SelectItem>
                  <SelectItem value="DEBIT">Debit</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
        <CardContent className="space-y-4">
          {/* Table */}
          <Table>
            <TableHeader className="bg-slate-100">
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Owner Type</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                {/* <TableHead>Delivery Fee</TableHead>
                <TableHead>Incentive</TableHead> */}
                <TableHead>Reference</TableHead>
                <TableHead>Remark</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {isLoading ? (
                <EarningRow.Skeleton />
              ) : data.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6}>No records found</TableCell>
                </TableRow>
              ) : (
                data.map((row) => <EarningRow key={row._id} row={row} />)
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <PaginationComp
            page={page || 1}
            pageCount={pageCount}
            setPage={setPage}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EarningTable;
