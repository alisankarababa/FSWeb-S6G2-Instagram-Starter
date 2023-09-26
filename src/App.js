/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, {useState} from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu"
import sahteVeri from "./sahte-veri"
let nextCommentId = 37;

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.

    const [gonderiler, setGonderiler] = useState(sahteVeri);
    const [searchCriterion, setSearchCriterion] = useState("");

  const gonderiyiBegen = (gonderiID) => {
    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */

        
        setGonderiler( gonderiler.map( ( gonderi ) => {
            
            if ( gonderi.id === gonderiID )
            {
                ++gonderi.likes;
            }
            return gonderi;
        }))
  };

    function gonderiyeYorumYap(gonderiID, username, comment)
    {
        setGonderiler( gonderiler.map( ( gonderi ) => {
            if(gonderiID === gonderi.id)
            {
                gonderi.comments.push({
                    id: nextCommentId++,
                    username: username,
                    text: comment,
                })
            }
            return gonderi;
        }))

        console.log(nextCommentId);
    }

    function updateSearchCriterion(text)
    {
        setSearchCriterion(text);
    }

    function searchBarContent(text)
    {
        if(text === "")
        {
            setGonderiler(sahteVeri);
        }
        else
        {
            setGonderiler( gonderiler.filter( ( gonderi ) => {
                return gonderi.username.includes(text);
            }))
        }
    }

    function searchFunc()
    {
        if("" !== searchCriterion)
            return gonderiler.filter((gonderi) => gonderi.username.includes(searchCriterion));
            
        return gonderiler;
    }


  return (
    <div className="App">
      {/* Yukarıdaki metni projeye başladığınızda silin*/}
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}

      <AramaCubugu  updateSearchCriterion={updateSearchCriterion}/>
      <Gonderiler gonderiler={searchFunc()} gonderiyeYorumYap={gonderiyeYorumYap} gonderiyiBegen={gonderiyiBegen}/>
    </div>
  );
};

export default App;
