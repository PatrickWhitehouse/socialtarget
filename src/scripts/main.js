import { formatDistance, subDays } from "date-fns";

console.log(
  formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
);
console.log("%cDon't read my console ;]", "color:salmon;font-size:40px");
