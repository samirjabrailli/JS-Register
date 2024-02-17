 /*
        3 eded input ve 1 eded button yaradin(alt alta olsun. Yungulvari css verin).
         Ilk input "username" üçün olan inputdur. 2ci input "password"
          ve 3cü input "repassword"
          (yəni parolu yeniden daxil edin) olacaq.
          En aşagida login register butonu olacaq. 
          O butona klikleyende eger "username" inputunun içi doldurulmayibsa
           formun en yuxarisinda bildiriş kimi bir yazi çixsin. 
           "Xaiş olunur username xanasini doldurun".
            Bu yazi qirmizi rengde olsun. Eynile password ve repassword da bele olsun
Eger password inputunun içindeki password-un uzunluğu 8-den kiçikdirse onda yene 
yuxarida yazsinki "Şifrə minimum 8 xarakterden ibaret olmalidir". 
Repassword xanasinin içinde yazilan ile password xanasinin içinde yazilanlar bir biri ile
 tutuşmursa onda xeta versinki "Şifrələr bir biri ilə uyğun gəlmir".
  Eger herşey qaydasindadirsa onda registere klikleyende yuxarida 
  yaşil rengli mesaj çixsinki "Uğurla qeydiyyatdan keçdiniz"
        */

  let form = document.getElementById("form")

  let user = document.getElementById("user")

  let password = document.getElementById("pass")

  let repassword = document.getElementById("repass")

  

 

  function register() {
      let bow = ""
     
     

      if (user.value.trim() == bow) {
          alert("Xahiş olunur username xanasını doldurun")
         
         
      }

     else if (password.value == bow   ) {
          alert("Xahiş olunur şifrəni daxil edin")
      }

     else if (repassword.value == bow) {
          alert("Xahiş olunur şifrəni yenidən daxil edin")
      }

      else if(repassword.value !== password.value ) {
          alert("Şifrələr uyğun gəlmir")
      }

      

      else{
          alert("Qediyyatdan uğurla keçdiz")
      }
  }
