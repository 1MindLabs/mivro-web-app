"use client";
import { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import client from "./typesenseclient"; 

interface Product {
  id: string;
}

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

async function indexFirestoreData() {
  try {
    const productsRef = collection(db, "users");
    const querySnapshot = await getDocs(productsRef);

    const documentsToIndex: { id: string; name: string; description: string }[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      documentsToIndex.push({
        id: doc.id,
        name: data.name || "",
        description: data.description || "",
      });
    });

    await client.collections("users").documents().upsert(documentsToIndex);
    console.log("Data indexed in Typesense successfully.");
  } catch (error) {
    console.error("Error indexing data:", error);
  }
}

async function searchProducts(searchText: string): Promise<Product[]> {
  try {
    const response = await client.collections("users").documents().search({
      q: searchText,
      query_by: "name,description",
    });

    const results: Product[] = response.hits
      ? response.hits.map((hit: any) => ({
          id: hit.document.id,
          name: hit.document.name,
          description: hit.document.description,
        }))
      : [];

    return results;
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
}

export default function Search() {
  const [searchText, setSearchText] = useState<string>(""); 
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const debouncedSearchText = useDebounce(searchText, 500); 

  useEffect(() => {
    indexFirestoreData(); 
  }, []);

  useEffect(() => {
    if (debouncedSearchText.length > 2) {
      searchProducts(debouncedSearchText).then((results) => {
        setSearchResults(results); 
      });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchText]);

  return (
    <div className="relative ml-auto w-full max-w-[560px]">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="bg-white w-full rounded-full border border-gray-300 py-3 pl-12 pr-16 text-gray-700 shadow-sm transition focus:border-teal-500 focus:outline-none focus:ring-teal-500 dark:bg-zinc-800 dark:text-gray-700"
        placeholder="Search...."
      />
      <SearchIcon
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-500 dark:text-gray-500"
        size={24}
      />

      {searchResults.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 max-h-60 overflow-auto rounded-lg bg-white shadow-lg">
          {searchResults.map((product) => (
            <div key={product.id} className="px-4 py-2 border-b border-gray-200">
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
