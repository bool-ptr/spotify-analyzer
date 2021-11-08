import React from 'react';

const Detail = ({album, artists, name}) => {

    return (
        <div className="offset-md-1 col-sm-3" >
            <div className="row col-sm-8 px-2">
                <img 
                    src={album.images[0].url}
                    alt={name}>                    
                </img>
            </div>
            <div className="row col-sm-12 px-4">
                <label style={{color: "#ccc39e", fontWeight :"bold", fontSize:"2rem"}}  htmlFor={name} className="form-label col-sm-12">
                    {name}
                </label>
            </div>
            <div className="row col-sm-12 px-4">
                <label style={{color: "#ccc39e", fontSize:"1.4rem"}}  htmlFor={artists[0].name} className="form-label col-sm-12">
                    {artists[0].name}
                </label>
            </div>
        </div>
    );
}

export default Detail;