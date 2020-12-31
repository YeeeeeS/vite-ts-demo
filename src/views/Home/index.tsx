import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Home',
  setup() {
    
    const store = useStore();
    console.log(store);

    return () => (
      <div>
        Home
      </div>
    )
  }
})