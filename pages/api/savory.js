import axios from "axios";

const savoryPack = axios.create({
  baseURL:
    "https://res.cloudinary.com/slktech/raw/upload/v1632815923/Maam/Savory/savory_nxew4j.json",
});

export default savoryPack;