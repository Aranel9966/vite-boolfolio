import { reactive } from "vue";

export const store = reactive({
  urlApi: "http://127.0.0.1:8000/api/projects?page=1",
  projects: [],
  pagination: "",
});
