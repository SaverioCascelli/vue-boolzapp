const {createApp} = Vue;

createApp({
    data(){
        return{
            contacts: [
                        {
                            name: 'Michele',
                            avatar: '_1',
                            visible: true,
                            messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                                },
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                                },
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                                },
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                                },
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                                },
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                                },

                            ]
                        },
                        {
                            name: 'Fabio',
                            avatar: '_2',
                            visible: true,
                            messages: [
                                {
                                date: '20/03/2020 16:30:00',
                                message: 'Ciao come stai?',
                                status: 'sent'
                                },
                                {
                                date: '20/03/2020 16:30:55',
                                message: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received'
                                },
                                {
                                date: '20/03/2020 16:35:00',
                                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent'
                                }
                            ],
                        },
                        {
                            name: 'Samuele',
                            avatar: '_3',
                            visible: true,
                            messages: [
                                {
                                date: '28/03/2020 10:10:40',
                                message: 'La Marianna va in campagna',
                                status: 'received'
                                },
                                {
                                date: '28/03/2020 10:20:10',
                                message: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent'
                                },
                                {
                                date: '28/03/2020 16:15:22',
                                message: 'Ah scusa!',
                                status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Alessandro B.',
                            avatar: '_4',
                            visible: true,
                            messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Si, ma preferirei andare al cinema',
                                status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Alessandro L.',
                            avatar: '_5',
                            visible: true,
                            messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Ricordati di chiamare la nonna',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Va bene, stasera la sento',
                                status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Claudia',
                            avatar: '_6',
                            visible: true,
                            messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao Claudia, hai novità?',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Non ancora',
                                status: 'received'
                                },
                                {
                                date: '10/01/2020 15:51:00',
                                message: 'Nessuna nuova, buona nuova',
                                status: 'sent'
                                }
                            ],
                        },
                        {
                            name: 'Federico',
                            avatar: '_7',
                            visible: true,
                            messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                status: 'received'
                                }
                            ],
                        },
                        {
                            name: 'Davide',
                            avatar: '_8',
                            visible: true,
                            messages: [
                                {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                status: 'received'
                                },
                                {
                                date: '10/01/2020 15:50:00',
                                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                status: 'sent'
                                },
                                {
                                date: '10/01/2020 15:51:00',
                                message: 'OK!!',
                                status: 'received'
                                }
                            ],
                        }
            ],
            currentActive:0,
            newMsg:'',
            searchName:'',
        }
    },
    methods:{
        getLastTime(index){
            const msgPosition = this.contacts[index].messages.length -1;
            return this.contacts[index].messages[msgPosition].date;
        },
        pushNewMsg(obj){
            if (this.newMsg === '') return;

            const msg ={
                date: this.getCurrentTime(),
                message: this.newMsg,
                status: 'sent'
            }
            obj.messages.push(msg);
            setTimeout(this.tuttoOk,1000)
            this.newMsg='';
        },

        tuttoOk(obj){
            this.newMsg='ok!';
            const msg ={
                date: this.getCurrentTime(),
                message: this.newMsg,
                status:'received'
            }
            this.contacts[this.currentActive].messages.push(msg);
            this.newMsg='';
        },

        getCurrentTime(){

            const date = new Date();
            return currentTime = `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth()+1)).slice(-2)}/${date.getFullYear()} ${('0' + (date.getHours()+1)).slice(-2)}:${('0' + (date.getMinutes())).slice(-2)}:${('0'+(date.getSeconds())).slice(-2)}`
        },
        search(){
            this.contacts.forEach(element => {
                element.visible = false;
            });
            if (this.searchName === '') this.contacts.forEach(element => {
                element.visible = true;
                return
            });
            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().startsWith(this.searchName.toLowerCase())){
                    contact.visible = true;
                }
            });
        },
        showOption(index){
            this.setShowOff();
            const i = this.contacts[this.currentActive].messages.length - index -1;
            this.contacts[this.currentActive].messages[i].show = true;

            this.mouseLeaveOff();
        }, 
        setShowOff(){
            console.log('showoff');
            this.contacts[this.currentActive].messages.forEach(message => {
                message.show = false;
            });
        },

        mouseLeaveOff(){
            console.log('mouse');
            const dropdownArr = document.querySelectorAll('.drop-down');
            const msgArr = document.querySelectorAll('.msg');
            dropdownArr.forEach(element => {
                element.addEventListener('mouseleave', this.retContacts)
                
            });
            msgArr.forEach(element => {
                element.addEventListener('mouseleave', this.retContacts)
                
            });
        },
        retContacts(){
            this.setShowOff();
        }

    },created(){
    }
}).mount('#app');


