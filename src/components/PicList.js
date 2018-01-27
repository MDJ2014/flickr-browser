import React from 'react';
import Cats from './Cats'


const PicList = props =>{

    const photos = props.data;

   
    let picUrls = photos.map(photo => <Cats urls={
       ` "https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg"`
    }/>);

    return(
        <ul>
       {picUrls}
        </ul>
    );
}
export default PicList;