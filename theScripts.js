
      function validate()
      {
         if( document.thisForm.firstName.value == "" )
         {
            alert( "Please provide your first name!" );
            document.thisForm.firstName.focus() ;
            return false;
         }
         if( document.thisForm.lastName.value == "" )
         {
            alert( "Please provide your last name!" );
            document.thisForm.lastName.focus() ;
            return false;
         }
         if (document.thisForm.myemail.value == "")
         {
            alert( "Please provide your email address!" );
            document.thisForm.myemail.focus() ;
            return false;
         }

         if (document.thisForm.phone.value == "")
         {
            alert( "Please provide your telephone number" );
            document.thisForm.phone.focus() ;
            return false;
         }
         else
         {
            window.location.href = "thankYouPage.html";
            return true;
         }
        
      }

      // function redirect()
      // {
      //    window.location.href = "thankYouPage.html";
      // }
      
      function greyOut()
      {
         // document.getElementById("formID").style.opacity = 1;
         // document.body.style.opacity = .5;
         // document.body.style.backgroundImage = 
      }
      