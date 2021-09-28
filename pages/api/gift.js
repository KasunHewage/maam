import axios from "axios";

const giftPack = axios.create({
  baseURL:
    "https://res.cloudinary.com/slktech/raw/upload/v1632815452/Maam/Gift%20Item/gift_chgted.json",
});

export default giftPack;
