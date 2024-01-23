import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "../tables/TableThree";
import { Metadata } from "next";
import TableFour from "../tables/TableFour";
export const metadata: Metadata = {
  title: "Form Layout Page | Next.js E-commerce Dashboard Template",
  description: "This is Form Layout page for TailAdmin Next.js",
  // other metadata
};

const FormLayout = () => {
  return (
    <>
      <Breadcrumb pageName="Special Donation Requests" />
      <TableFour />
    </>
  );
};

export default FormLayout;
