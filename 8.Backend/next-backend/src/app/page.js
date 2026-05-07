import Button from "@/components/button";
import List from "@/components/list";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <div className="bg-neutral-800 h-full w-full">
      <div className="max-w-7xl mx-auto bg-neutral-100 text-neutral-800 font-sans text-md h-full w-full p-4">
        <Navbar />
        <SearchBar />
        <div className="flex justify-between w-1/2 mx-auto text-sm mt-8 select-none">
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1 bg-secondary border px-1 py-1 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
              <span className="text-sm font-medium">1</span>
              <span className="text-sm text-muted-foreground">pending</span>
            </div>
            <div className="flex items-center gap-1 bg-secondary border px-1 py-1 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-teal-500 inline-block" />
              <span className="text-sm font-medium">2</span>
              <span className="text-sm text-muted-foreground">completed</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button title={"All"} />
            <Button title={"Active"} />
            <Button title={"Completed"} />
          </div>
        </div>
        <List />
      </div>
    </div>
  );
}
