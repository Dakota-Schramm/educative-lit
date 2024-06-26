import { defineConfig } from 'vite';
export default defineConfig({
    server: {
      host: true,
      port: 3000, // This is the port which we will use in docker
      // Thanks @sergiomoura for the window fix
      // add the next lines if you're using windows and hot reload doesn't work
       watch: {
         usePolling: true
       }
    }
   })
   