import { importShared } from './__federation_fn_import-Dh9Z48dT.js';

const {defineStore} = await importShared('pinia');


const STORAGE_KEY = 'sreedeep_ghosh_ami_todo_app_week6';

const useTodoStore = defineStore('todo',
  {
  state:()=> 
    {
      let data = [];
      try 
      {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) data = JSON.parse(raw);
      } 
      catch(error) 
      {
        console.error('Error to load task from localStorage:', error);
        data=[];
      }
      return { tasks: data }
    },


  actions: 
  {
    sync_storage() 
    {
      localStorage.setItem(STORAGE_KEY,JSON.stringify(this.tasks));
    },

    add_task(text) 
    {
      // adding a limit of 80 characters
      const txt = text.length>80?text.slice(0, 80):text;
      this.tasks.push({ id:Date.now(),text:txt,done:false });
      this.sync_storage();
    },

    remove_task(id) 
    {
      this.tasks=this.tasks.filter(x=>x.id!==id);
      this.sync_storage();
    },

    toggle_task(id) 
    {
      const x=this.tasks.find(x=>x.id===id);
      if (x) x.done = !x.done;
      this.sync_storage();
    },
    
    update_task(id, val) 
    {
      const x =this.tasks.find(x=>x.id===id);
      if(x)
      {
        x.text =val.length>80?val.slice(0, 80):val;
      }
      this.sync_storage();
    }
  }
});

export { useTodoStore as u };
