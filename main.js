new Vue({
    el: "#tasklist",
    data:{
        title: 'to do list',
        tasks: [
            {name: 'Today : Internal Meeting'},
            {name: 'Tomorrow: Read a Book'},
            {name: 'Daily: Event joins'}
        ],
        editingindex: -1 
    },
    methods: {
        newItem: function(){
            if(!this.tasks.name){
                return;
            }
            if(this.editingindex === -1){
                this.tasks.push({
                    name: this.tasks.name,
                    del: ''
                });
            } else {
                // Update an existing task
                this.tasks[this.editingindex].name = this.tasks.name;
                this.editingindex = -1; // Reset index to -1
            }
            this.tasks.name =  '';
        },
        delItem: function(task){
            this.tasks.splice(this.tasks.indexOf(task), 1);
        },
        editItem: function(index){
            // Set editing index and bind input field to the task being edited
            this.editingindex = index;
            this.tasks.name = this.tasks[index].name;
            this.tasks[index].name = '';
        }
    }
});
