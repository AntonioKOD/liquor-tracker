'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { Button } from "@/components/ui/button";
import handler from "../api/search/search";

const prisma = new PrismaClient();

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([])
 
  useEffect(() => {
    if(searchTerm){
      fetch(`/api/search?query=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setResults(data))
    }
  }, [searchTerm])
  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."></input>
      <ul>
        {results.map((result)=> (
          <li key={result.id}>{result.liquorName}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;


