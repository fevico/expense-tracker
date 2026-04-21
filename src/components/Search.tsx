import { Card } from "./ui/card";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

const SearchFilter = ({ search, setSearch }: Props) => {
    return ( <>
    <Card className="w-full p-4">
        <input 
            type="text" 
            placeholder="Search..." 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </Card>
    </> );
}
 
export default SearchFilter;