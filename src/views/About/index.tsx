import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'About',
  setup() {
    const store = useStore();

    return () => (
      <div>
        About
      </div>
    )
  }
})