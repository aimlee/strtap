import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
interface CategoryProps {
  type: string;
}
export default function useCategory({ type }: CategoryProps) {
  const { data, mutate, error } = useSWR('/api/categories.json', fetcher);

  const loading = !data && !error;
  const categories = data?.filter((current) => current.type === type);

  return {
    loading,
    error,
    data: categories,
   mutate,
  };
}
