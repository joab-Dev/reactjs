async function getQuotes() {
    try {
   const res = await fetch('https://dummyjson.com/quotes?limit=3');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
    console.log(data);
} catch (error) {
    console.error(`Could not load quote: ${error}`);
}

}

console.log("Start");
getQuotes();
console.log("End");



