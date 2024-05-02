<div class="ui-action-bar">
  
  <div class="left" >
    <slot name="left"></slot>
  </div>
  <div class="center" >
    <slot name="center"></slot>
  </div>
  <div class="right" >
    <slot name="right"></slot>
  </div>
</div>

<style>
  .ui-action-bar {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .center {
    text-align: center;
    align-self: center;
  }
</style>