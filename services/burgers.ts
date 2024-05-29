import client from "@/clients/pocketbase";

// Types
import { Burger } from "@/types";

export async function getBurgers() {
    const burgers = await client.collection("burgers").getFullList<Burger>({
        sort: "-created",
      });
      return burgers;
}
