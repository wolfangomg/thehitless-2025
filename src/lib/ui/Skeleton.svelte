<script lang="ts">
    interface Props {
      class?: string;
    }
    
    let { class: className = '' }: Props = $props();
  </script>
  
  <div class="animate-pulse bg-base-200/70 rounded {className}"></div>