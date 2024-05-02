<div class="card">
  <slot></slot>
</div>

<style>
  .card {
    display: flex;
    align-content: center;
    flex-direction: column;
    border: 1px solid rgb(179, 89, 194);
    border-radius: 5px;
    box-shadow:
      0px 2px 1px -1px rgba(26, 26, 26, 0.2),
      0px 1px 1px 0px rgba(26, 26, 26, 0.14),
      0px 1px 3px 0px rgba(26, 26, 26, 0.12);
    padding: 1vw;
  }
</style>
