import { reactive } from "vue";

export const store = reactive ({
   baseUrl: 'http://localhost:8000/',
   urlApi: "http://localhost:8000/api/"
});