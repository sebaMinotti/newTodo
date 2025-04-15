const app  = Vue.createApp({
    data(){
        return{
             lista:[],
             fatte:[],
             nonFatte:[],
             rimandate:[],
             newTodo:'',
        }
    },
        methods: {
             aggiungi:function(){
                if(!this.lista.includes(this.newTodo)){
                    if (this.newTodo.trim() === '') {
                        alert('non lasciare campi vuoti ');
                        return;
                    }
                    this.lista.push(this.newTodo);
                    this.newTodo=''
                }
             },
             taskFatte:function(index){
              
                  if(!this.fatte.includes(this.lista[index])){
                         this.fatte.push(this.lista[index])
                         this.lista.splice(index,1)
                  }
             },
             taskNonFatte:function(index){
              
                  if(!this.nonFatte.includes(this.lista[index])){
                         this.nonFatte.push(this.lista[index])
                         this.lista.splice(index,1)
                  }
             },
             taskRimandate:function(index){
              
                  if(!this.rimandate.includes(this.lista[index])){
                         this.rimandate.push(this.lista[index])
                         this.lista.splice(index,1)
                  }
             },
    
             mostraMappe:function(faccenda){
                const parolaChiave=['palestra','supermercato','banca','farmacia']
                return parolaChiave.some(parola=>faccenda.toLowerCase().includes(parola))
             },
             generaLinkMappe:function(faccenda){
                const query= encodeURIComponent(faccenda);
                if(/iphone|ipad|/.test(navigator.userAgent)){
                    return`maps://?q=${query}`;
                } else {
                    return `https://www.google.com/maps/search/?api=1&query=${query}`;
                }
             }
        },
        mounted() {
            
        },
    
    })
    
    
    app.mount("#app");
