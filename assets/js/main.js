/* Istruzioni:
Genera 10 mail tramite api e stampale in una lista */


 let app = new Vue({
     el: '#app',
     data: {
       emailGenerated: [],
         
     },

     mounted(){
            for (let index = 0; index < 10; index ++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                //console.log(response.data.response);
                const ObtainedEmail = response.data.response;
                this.emailGenerated.push(ObtainedEmail);
         }
                )}
         
     }
 })
