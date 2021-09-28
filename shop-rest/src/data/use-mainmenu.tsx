import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
interface MenuProps {
    type: string;
}
export default function useMainMenu({ type }: MenuProps) {
    const { data, mutate, error } = useSWR('/api/mainMenu.json', fetcher);

    const loading = !data && !error;
    const mainMenu = data?.filter((current) => current.type === type);

    return {
        loading,
        error,
        data: mainMenu,
        mutate,
    };
}
