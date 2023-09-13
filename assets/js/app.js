/* Descrizione:

Rifare l’esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1 
Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2 
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3 
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus: 1
- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */

// Importa il metodo createApp da Vue.js
const { createApp } = Vue

// Crea una nuova app Vue
createApp({
    // Definisce le proprietà dei dati per l'app
    data() {

        return {
            // L'oggetto newTodo e' il nuovo compito da aggiungere alla lista
            newTodo: { text: '', done: false },

            // L'array todos contiene tutti i compiti
            todos: ['Fare la spesa', 'Lavare i panni', 'Preparare la cena', 'Studiare', 'Andare a dormire presto']
        }
    },
    methods: {
        // Il metodo addTodo aggiunge il nuovo compito all'array todos
        addTodo() {

            // Controlla se il testo del nuovo compito non è vuoto
            if (this.newTodo.text.trim()) {

                // Aggiunge una copia dell'oggetto newTodo all'array todos
                this.todos.push(Object.assign({}, this.newTodo));

                // Svuota il campo di input
                this.newTodo.text = '';
            }
        },

        // Il metodo toggleDone cambia il valore di done per il compito all'indice specificato
        toggleDone(index) {
            this.todos[index].done = !this.todos[index].done;
        }
    }

}).mount('#app');  // Monta l'app su un elemento con id 'app'
    
