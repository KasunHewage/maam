import axios from "axios";

const familyPack = axios.create({
  baseURL:
    "https://res.cloudinary.com/slktech/raw/upload/v1632853309/Maam/Family%20Pack/family_f8ltio.json",
});

export default familyPack;
