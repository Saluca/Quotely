import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useState } from "react";
import "./quotes.css";

export default function Quotes() {
  const [quote, setQuote] = useState(null);

  async function getQuote() {
    const response = await getDocs(collection(db, "quotes"));
    const quotes = response.docs.map((doc) => doc.data());
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }

  return (
    <div>
      <button onClick={getQuote}>Get Quote</button>
      <div className="quote-container">
        {quote && (
          <>
            <p> {quote.quote}</p>
            <p> {quote.author}</p>
          </>
        )}
      </div>
    </div>
  );
}
