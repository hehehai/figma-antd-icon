import * as antdIcons from "@ant-design/icons-svg";
import Fuse from "fuse.js";
import React from "react";

function useSearch(query: string) {
  const [results, setResults] = React.useState(Object.values(antdIcons));

  const fuse = new Fuse(Object.values(antdIcons), {
    threshold: 0.2,
    keys: ["name", "theme"],
  });

  React.useEffect(() => {
    // if (query.trim()) {
    //   setResults(fuse.search(query.trim()));
    // } else {
    setResults(Object.values(antdIcons));
    // }
  }, [query]);

  return results;
}

export default useSearch;
