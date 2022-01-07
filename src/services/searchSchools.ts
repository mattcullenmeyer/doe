import useAxios, { RequestTypes, ResponseBody } from "./useAxios";


export interface School {
  id: string;
  name: string;
  address: string;
  slug: string;
}

interface SearchSchoolsParameters {
  searchTerm: string;
}

export const searchSchools = async ({
  searchTerm,
}: SearchSchoolsParameters): Promise<ResponseBody<School[]>> => {
  const response = await useAxios<School[]>({
    path: 'schools',
    method: RequestTypes.Get,
    params: {
      search: searchTerm,
    },
  });

  return response;
}