import { useEffect, useState } from "react";
import { CalendarProps, Holiday } from "../../types/components.types";

function Calendar({
  year = new Date().getFullYear(),
  country = "NP",
  apiKey,
}: CalendarProps) {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [refreshHolidayCounter, setRefreshHolidayCounter] = useState(0);
  const fetchData = async () => {
    const res = await fetch(
      `https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=${country}&year=${year}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };
  useEffect(() => {
    async function fetchHolidays() {
      try {
        const response = await fetchData();
        if (response.meta.code === 200) {
          setHolidays(response.response.holidays);
        } else {
          console.error("Error fetching holidays:", response.meta.error_detail);
        }
      } catch (error) {
        console.error("Error fething holidays:", error);
      }
    }
    fetchHolidays();
  }, [apiKey, country, year, refreshHolidayCounter]);

  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Holidays in {year}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {holidays.map((holiday) => (
          <div
            key={holiday.date.iso}
            className="p-4 border rounded-lg shadow-sm bg-gray-50"
          >
            <h3 className="text-xl font-semibold">{holiday.name}</h3>
            <p className="text-gray-600">{holiday.description}</p>
            <p className="text-gray-500">
              Date: {holiday.date.iso} ({holiday.date.datetime.month}/
              {holiday.date.datetime.day}/{holiday.date.datetime.year})
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={() => setRefreshHolidayCounter((prev) => prev + 1)}
        >
          Refresh Holidays
        </button>
      </div>
    </div>
  );
}
export default Calendar;
