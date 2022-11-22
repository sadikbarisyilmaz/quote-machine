import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Quotes() {

    const [quotes, setQuotes] = useState({})

    useEffect(() => {

        axios('https://dummyjson.com/quotes/random')
            .then(res => setQuotes(res.data))

        return () => {

        }
    }, [])

    function newQuote() {
        axios('https://dummyjson.com/quotes/random')
        .then(res => setQuotes(res.data))
        
    }


    return (
        <div id="quote-box">

            <div id="text">

                <span><i id="quote-mark" className="fa-solid fa-quote-left"></i> {quotes.quote}
                </span>

            </div>
            <div id="author">
                <p>- {quotes.author}</p>
            </div>
            <div id='footer'>
                <a id="tweet-quote" href={`https://twitter.com/intent/tweet?&original_referer=https%3A%2F%2Fdeveloper.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&related=twitterapi%2Ctwitter&text=${quotes.quote} - ${quotes.author}`}target="_blank">
                    <div id='tweet'>
                        <i className="fa fa-twitter"></i>
                    </div>
                </a>
                <button onClick={newQuote} className='btn btn-default' id="new-quote">New Quote</button>
            </div>
        </div>

    )
}

export default Quotes