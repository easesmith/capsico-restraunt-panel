import { cn } from "@/lib/utils";
import React from "react";

const DataNotFound = ({ name, className="" }) => {
  return (
    <div className={cn("w-full text-center", className)}>{name} not found.</div>
  );
};

export default DataNotFound;
