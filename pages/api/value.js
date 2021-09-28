import axios from "axios";

const valuePack = axios.create({
  baseURL:
    "https://res.cloudinary.com/slktech/raw/upload/v1632815677/Maam/Value%20Added/value_nwradg.json",
});

export default valuePack;