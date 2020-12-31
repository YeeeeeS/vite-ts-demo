import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Home',
  setup() {
    
    const store = useStore();
    store.dispatch('userAction', { name: 'Lisa' })
    console.log(store.getters.userInfo);

    return () => (
      <div>
        Home
      </div>
    )
  }
})