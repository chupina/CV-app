import { createServer, Model } from "miragejs";

const initialDataEducation = [
  {
    id: 1,
    date: 2021,
    title: "EPAM UpSkill",
    text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolorLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
  },
  {
    id: 2,
    date: 2019,
    title: "Moscow Institute of Physics and Technologies and Yandex",
    text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolorLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
  },
  {
    id: 3,
    date: 2010,
    title: "Belarusian State University of Informatics and Radioelectronics",
    text: "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.",
  },
  {
    id: 4,
    date: 2007,
    title: "Minsk State Radioengineering College",
    text: "Labore esse tempor ",
  },
];
const getDataFromStorage = (data) => JSON.parse(localStorage.getItem(data));
const setDataToStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

export default function serverSetup() {
  const server = createServer({
    models: {
      education: Model,
      skill: Model,
    },
    seeds(server) {
      const prelodedData = getDataFromStorage("skills");
        if (prelodedData) {
        prelodedData.forEach((skill) => {
          server.create("skill", skill);
        });
      }
    },
    routes() {
      this.get("/api/educations", () => initialDataEducation, { timing: 3000 });

      this.get(
        "/api/skills",
        (schema) => {
          return schema.skills.all();
        },
        { timing: 3000 }
      );

      this.post("/api/skills", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let skillsFromLocalStore = getDataFromStorage("skills") || [];
        skillsFromLocalStore.push({ ...attrs });
        setDataToStorage("skills", skillsFromLocalStore);
        return schema.skills.create(attrs);
      });
    },
  });
}
