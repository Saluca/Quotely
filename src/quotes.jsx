import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useState } from "react";
import "./quotes.css";

export default function Quotes() {
  const [quote, setQuote] = useState({
    quote: "Click the button for a quote...",
    author: "Quotely",
  });
  const [copied, setCopied] = useState(false);
  async function getQuote() {
    const response = await getDocs(collection(db, "quotes"));
    const quotes = response.docs.map((doc) => doc.data());
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(quote.quote);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="page">
      <div className="container">
        <button className="btn" onClick={getQuote}>
          Get Quote
        </button>
        <div className="quote-container">
          {quote && (
            <>
              <p className="quote-text">{quote.quote}</p>
              <p className="quote-author"> - {quote.author}</p>
            </>
          )}
          <button onClick={copyToClipboard} className="copy-btn">
            {copied ? "Copied!" : "Copy Quote"}
          </button>
        </div>
      </div>
    </div>
  );
}
