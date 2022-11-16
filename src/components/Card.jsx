// import user_pic1 from "../images/user_profile/fox.png"
// import user_pic2 from "../images/user_profile/tiger.png"

function Card(props) {
    return (
        <div className='comp_center'>
            <div className='card_comp'>
                <div className='card_profile'>
                    {/* <div className='card_profile_block'> */}
                    <img className="card_profile_img" src={props.image} alt=""></img>
                    {/* </div> */}
                    <div className="card_verticalline"></div>
                </div>
                <div className='card_content'>
                    <div className='user_name'>{props.username} <span className='card_userid'> @{props.userid}</span></div>
                    <div className="card_title">{props.title}</div>
                    <div className='user_desc'>{props.desc}</div>
                    <div className='card_buttons'>
                        <button className="card_btn">Like</button>
                        <button className="card_btn card_btn_dislike">Dislike</button>
                        {/* <button className="card_btn">Upvote</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;


// export default function Card(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }

