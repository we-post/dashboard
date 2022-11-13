

import react from "react";


function tweet(){
    return(
      <body>
        <div>
          <h3 className="user">Sarang Kumar</h3>

            <div className="center-container">
                <div>
                <label>Post Title</label>
                <br></br>
                <br></br>
                <input type="text" max="20 " placeholder="Title in 20 Characters"/>
                <br></br>
                <br></br>
                </div>
                <div>
                <label>Post Description</label>
                <br></br>
                <br></br>
                <textarea className="p_desc" placeholder="Post Description"></textarea>
                </div>
                <div>
                <button role="button" className="button-86" >Post</button>
                </div>

            </div>

        </div>
      </body>
    );
}
export default tweet;
