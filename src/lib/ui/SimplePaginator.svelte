
<script lang="ts">
    interface SimplePaginatorProps {
        currentPage: number;
        totalPages: number;
        onPageChange: (v: number) => void
	}

    let { 
      currentPage = 0, 
      totalPages = 1, 
      onPageChange = () => {} 
    }: SimplePaginatorProps = $props();


    let hasPrevious = $derived(currentPage > 0);
    let hasNext = $derived(currentPage < totalPages - 1);
    let showPage = $derived(currentPage + 1)
    
    function goToPrevious() {
      if (hasPrevious) {
        onPageChange(currentPage - 1);
      }
    }
    
    function goToNext() {
      if (hasNext) {
        onPageChange(currentPage + 1);
      }
    }
  </script>
  
<div class="flex items-center gap-4 w-full py-2">
    {#if totalPages > 0}
      <span class="text-sm">
        Page {showPage} of {totalPages}
      </span>
    {/if}
    <div class="ml-auto join grid grid-cols-2">
        <button 
        class="join-item btn btn-outline"
        onclick={goToPrevious}
        disabled={!hasPrevious}
        >
        Previous page
        </button>
        <button 
        class="join-item btn btn-outline"
        onclick={goToNext}
        disabled={!hasNext}
        >
        Next
        </button>
  </div>
</div>