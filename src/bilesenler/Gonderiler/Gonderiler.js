import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiyeYorumYap, gonderiler } = props;

  return (
    <div className="posts-container-wrapper">
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
      {
            gonderiler.map((gonderiItem, idx) => 
                <React.Fragment key={idx}>
                    <Gonderi gonderi={gonderiItem} gonderiyeYorumYap={gonderiyeYorumYap} gonderiyiBegen={gonderiyiBegen}/>
                </React.Fragment>
            )
      }
    </div>
  );
};

export default Gonderiler;
