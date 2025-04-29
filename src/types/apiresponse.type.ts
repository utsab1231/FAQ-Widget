export type HolidayApiResponse =
  | {
      meta: {
        code: 200;
      };
      response: {
        holidays: {
          name: string;
          description: string;
          date: {
            iso: string;
            datetime: {
              year: number;
              month: number;
              day: number;
            };
          };
          type: string[];
        }[];
      };
    }
  | {
      meta: {
        code: number; // like 401, 403, etc.
        error_type: string;
        error_detail: string;
      };
      response: [];
    };


