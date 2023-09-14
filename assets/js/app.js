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

Bonus: 
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista 
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */

// Importa il metodo createApp da Vue.js
const { createApp } = Vue

// Crea una nuova app Vue
createApp({
    // Definisce le proprietà dei dati per l'app
    data() {

        return {

            // L'array todos contiene  i compiti
            todos: [
                { 
                    text: 'Fare la spesa', 
                    done: '', 
                },
                { 
                    text:  'Lavare i panni', 
                    done: '', 
                },
                { 
                    text: 'Preparare la cena', 
                    done: '', 
                },
                {  
                    text: 'Studiare',
                    done: '', 
                },
                ],

                newTodo: '', // Il nuovo compito da aggiungere
                error: '' // Il messaggio di errore da mostrare
        }
        },
        methods: {
            addTodo() { // Aggiunge un nuovo compito
              if (!this.newTodo) { // Se il campo di input è vuoto, mostra un messaggio di errore
                this.error = 'Il campo non può essere vuoto.';

              } else {
                // Cerca un compito esistente con lo stesso testo
                const existingTodo = this.todos.find(todo => todo.text === this.newTodo);

                // Se il compito esiste, imposta il suo stato a "fatto"
                if (existingTodo) {
                    existingTodo.done = true;
                    // this.newTodo = '';
                    this.error = '';

                } else {
                    // Altrimenti, aggiunge un nuovo compito
                    this.todos.unshift({ text: this.newTodo, done: false });
                    this.newTodo = '';
                    this.error = '';
                }
            }
            },
            // Rimuove un compito
            removeTodo(index) {
              this.todos.splice(index, 1);
            }
          }
        
}).mount('#app');  // Monta l'app su un elemento con id 'app'

