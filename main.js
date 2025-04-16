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
            elimina() {
                this.fatte = [];
                this.nonFatte = [];
                this.rimandate = [];
                this.lista = [];
                this.salva()
              },
            salva() {
                // Salva tutte le liste in un'unica chiave
                localStorage.setItem('todolist', JSON.stringify({
                  lista: this.lista,
                  fatte: this.fatte,
                  nonFatte: this.nonFatte,
                  rimandate: this.rimandate
                }));
              },
             aggiungi:function(){
                if(!this.lista.includes(this.newTodo)){
                    if (this.newTodo.trim() === '') {
                        alert('non lasciare campi vuoti ');
                        return;
                    }
                    this.lista.push(this.newTodo);
                    this.newTodo=''
                    this.salva();
                }
             },
             taskFatte:function(index){
              
                  if(!this.fatte.includes(this.lista[index])){
                         this.fatte.push(this.lista[index])
                         this.lista.splice(index,1)
                         this.salva();
                  }
             },
             taskNonFatte:function(index){
                         this.lista.splice(index,1)
                         this.rimandate.splice(index,1)
                         this.salva();
                  
             },
             eliminaRimandate:function(index){
                  if(!this.fatte.includes(this.rimandate[index])){
                     this.fatte.push(this.rimandate[index])
                           this.rimandate.splice(index,1)
                  }
             },
             taskRimandate:function(index){
                    // Rimuovi il task da tutte le altre liste
               
                  if(!this.rimandate.includes(this.lista[index])){
                         this.rimandate.push(this.lista[index])
                         this.lista.splice(index,1);
                         this.salva();
                  }
             },
    
             mostraMappe: function(faccenda) {
                if (!faccenda || typeof faccenda !== 'string') return false;
              
                const parolaChiave = ['palestra', 'supermercato', 'banca', 'farmacia', 'ristorante', 'pizzeria','pub','dentista','ospedale','medico','canile','gattile'];
                return parolaChiave.some(parola => faccenda.toLowerCase().includes(parola));
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
            const data = localStorage.getItem('todolist');
            if (data) {
              const saved = JSON.parse(data);
              this.lista = saved.lista;
              this.fatte = saved.fatte;
              this.nonFatte = saved.nonFatte;
              this.rimandate = saved.rimandate;
            }
        },
    
    })
    
    
    app.mount("#app");
