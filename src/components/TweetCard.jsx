import { useState } from "react";

function TweetCard() {

    const [words, setWords] = useState(0);
    const [character, setCharacter] = useState(0);

    function changeWords(){
        const desc = document.querySelector('.tweet_input_desc');
        // console.log(desc.value);
        setWords(desc.value.split(" ").length);
        setCharacter(desc.value.length);
        if(character===0){
            console.log('character');
            setWords(0);
        }
    }

    return (
        <div className="centered">
            <form className="tweet_comp" action='./' method="POST">
                <div className="tweet_title">
                    <div className="tweet_title_text">
                        <input className="tweet_input_text" maxLength="80" type="text" placeholder="Title"/>
                    </div>
                </div>
                <div className="tweet_desc">
                    <div className="tweet_desc_text">
                        <textarea onChange={changeWords} rows='15' maxLength="1650" style={{"height":"100%"}} className="tweet_input_desc" type="text" placeholder="Description"/>
                    </div>
                </div>
                <div className="tweet_btns">
                    <div className="tweet_wordcount">{words} {words<= 1? `word`: `words`} | {character} {character<= 1? `character`: `characters`}</div>
                    <input type="submit" className="tweet_input_submit"/>
                </div>
            </form>
        </div>
    );
}
export default TweetCard;