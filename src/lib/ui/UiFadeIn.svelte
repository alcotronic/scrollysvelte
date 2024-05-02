<script lang="ts">
  import { fade } from "svelte/transition";
  import { onDestroy, onMount } from "svelte";

  let element: any;
  let observer: IntersectionObserver;
  let isInView = false;

  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      if (entries[0] && entries[0].isIntersecting) {
        isInView = true;
        observer.disconnect();
      }
    });

    observer.observe(element);
  });

  onDestroy(() => {
    observer.disconnect();
  });
</script>

<div bind:this={element}>
  {#if isInView}
    <div transition:fade={{ delay: 250, duration: 300 }}>
      <slot></slot>
    </div>
  {/if}
</div>
