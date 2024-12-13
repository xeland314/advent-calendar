import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function getFormattedDate(date: Date): string {
  const formattedDate = format(date, "EEEE, dd MMMM yyyy", { locale: es });
  const capitalizedDate =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  return capitalizedDate;
}
