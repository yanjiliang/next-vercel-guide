import {fetchCardData} from "@/app/lib/data";
import {Card} from "@/app/ui/dashboard/cards";

export default async function CardWrapper() {
  const {
    totalPendingInvoices,
    totalPaidInvoices,
    numberOfCustomers,
    numberOfInvoices,
  } = await fetchCardData();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  )
}