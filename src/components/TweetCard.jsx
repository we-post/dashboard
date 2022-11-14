import { useState } from "react";

function TweetCard() {

    const [words, setWords] = useState(0);

    function changeWords(){
        const desc = document.querySelector('.tweet_input_desc');
        console.log(desc.value.split(" ").length)
        setWords(desc.value.split(" ").length)
        // setWords(desc.value.split(" "))
    }

    return (
        <div className="comp_center">
            <form className="tweet_comp" action='/' method="POST">
                <div className="tweet_title">
                    <div className="tweet_title_text">
                        <input className="tweet_input_text" type="text" placeholder="Title"/>
                    </div>
                </div>
                <div className="tweet_desc">
                    <div className="tweet_desc_text">
                        <textarea onChange={changeWords} rows='15' maxlength="1650" style={{"height":"100%"}} className="tweet_input_desc" type="text" placeholder="Description"/>
                    </div>
                </div>
                <div className="tweet_btns">
                    <div className="tweet_wordcount">{words} {words<= 1? `word`: `words`}</div>
                    <input type="submit" className="tweet_input_submit"/>
                </div>
            </form>
        </div>
    );
}
export default TweetCard;