const app = Vue.createApp({
    data(){
        return{
            newTodo:'',
            lista:[],
            fatte:[],
            nonFatte:[],
            rimandate:[],
        }
    },
    methods: {
           aggiungi:function(){
            if(!this.lista.includes(this.newTodo)){
                  if(this.newTodo.trim()===''){
                       alert('non lasciare campi vuoti ')
                    return    
                
                  }
                this.lista.push(this.newTodo);
                this.newTodo=''
            }
           },
           myTodo:function(index,array,){
            faccenda = this.lista[index];
            this.array=array
            if(!array.includes(faccenda)){
                array.push(faccenda);
                this.lista.splice(index,1)
                
                
            }
           },
           cancellaTutto: function () {
            if (confirm("Sei sicuro di voler cancellare tutte le liste?")) {
                this.fatte = [];
                this.nonFatte = [];
                this.lista = [];
            }
        },
        eseguite:function(index){
            if(!this.fatte.includes(this.rimandate[index])){
                this.fatte.push(this.rimandate[index])
                this.rimandate.splice(index,1)
            }
        },
        cancellate:function(index){
            if(!this.nonFatte.includes(this.rimandate[index])){
                this.nonFatte.push(this.rimandate[index])
                this.rimandate.splice(index,1)
            }
        }

        
    },
    mounted() {
        
    },
})

app.mount('#app')