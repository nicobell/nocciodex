import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useBinderStore } from "./binders";
import { supabase } from "@/lib/supabaseClient";

export const useCardsStore = defineStore("cards", () => {
	const cards = ref([]);
	const binderStore = useBinderStore();

	async function fetchCards() {
		const found = cards.value.find(
			(el) => el.binder == binderStore.currentBinder
		);

		if (!found) {
			console.log("loading new binder", binderStore.currentBinder);

			try {
				const { data, error } = await supabase
					.from("cards")
					.select()
					.eq("binder", binderStore.currentBinder)
					.order("order", { ascending: true });

				if (error) throw error;

				cards.value.push({
					binder: binderStore.currentBinder,
					data: data,
				});

				//console.log('last order', data[data.length - 1].order)
				binderStore.setLastOrder(data[data.length - 1].order);
			} catch (error) {
				console.log(error);
			}
		} else {
			console.log("returning cached binder", found);
			//console.log('last order', found.data[found.data.length - 1].order)
			binderStore.setLastOrder(found.data[found.data.length - 1].order);
		}
	}

	async function refreshCards() {
    try {
      const { data, error } = await supabase
        .from('cards')
        .select()
        .eq('binder', binderStore.currentBinder)
        .order('order', { ascending: true });
  
      cards.value.find(el => el.binder == binderStore.currentBinder).data = data
  
      console.log('refreshed data binder', binderStore.currentBinder)
      console.log(cards.value.find(el => el.binder == binderStore.currentBinder))
  
      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  }

	/* const deleteCard = async (c) => {
    //console.log(c)
    try {
      const { data, error } = await supabase
        .from('cards')
        .delete()
        .eq('id', c.id)
        .select()
  
      //console.log('delete card', data)
      fetchCards()
  
      if (error) throw error
    } catch (error) {
      //console.log(error)
    }
  } */

	return { cards, fetchCards, refreshCards };
});
