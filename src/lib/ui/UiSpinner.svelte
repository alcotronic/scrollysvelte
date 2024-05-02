<script lang="ts">
  import { onMount } from "svelte";

  let angle = 0;

  const animate = () => {
    angle = angle < 360 ? angle + 2 : 0;
  }

  onMount(() => {
    const animationInterval = setInterval(() => animate(), 10);
    return () => {
			clearInterval(animationInterval);
		};
  });
</script>

<div class="spinner">
  <svg viewBox="0 0 250 250">
    <g transform="rotate({angle} 125 125)">
      <path d="M 125,25 A 100 100 0 0 0 125,225" fill="none" stroke="#a351b1" stroke-width="50"/>
      <path d="M 125,75 A 25 25 0 0 0 125,175" fill="#a351b1"/>
    </g>
  </svg>
</div>

<style>
  .spinner {
    height: 100px;
    width: 100px;
  }
</style>