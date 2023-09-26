import React, {useState} from 'react';
import Yorum from './Yorum';
import './Yorumlar.css';


const user = {
    username: "RandomUserName",
}

const Yorumlar = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlar, gonderiId, gonderiyeYorumYap } = props;


  const [inputContent, setInputContent] = useState("");

    function getInput(e)
    {
        const {value} = e.target;

        setInputContent(value);
    }

    function leaveComment(e)
    {
        gonderiyeYorumYap(user.username, inputContent);
        console.log(user.username, inputContent);
        setInputContent("");
    }

  return (
    <div className='comment-form'>
      {/* her gönderi yorumları için map'le işleyerek bir Yorum bileşeni döndürün (proplarına dikkat ederek)*/}
      {
            yorumlar.map((yorumItem) => 
                <React.Fragment key={yorumItem.id}>
                    <Yorum yorum={yorumItem}/>
                </React.Fragment>)
      }
        <div id='comment-input'>
            <input type='text' onChange={getInput} value={inputContent}/>
            <button onClick={leaveComment}>Yorum Yap</button>
        </div>
    </div>
  );
};

export default Yorumlar;
