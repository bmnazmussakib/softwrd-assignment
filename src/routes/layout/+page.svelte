<div
  class="grid gap-4 md:grid-cols-12 md:grid-rows-6 grid-cols-12 grid-rows-12"
>
  <div
    class="col-span-4 row-span-3 col-start-5 bg-blue-400 md:col-span-2 md:row-span-3"
  >
    3x2
  </div>
  <div
    class="col-span-4 row-span-3 col-start-5 row-start-4 bg-rose-100 md:col-span-4 md:col-start-3 md:row-span-5"
  >
    5x4
  </div>
  <div
    class="col-span-4 row-span-3 col-start-5 row-start-7 bg-blue-400 md:col-span-6 md:col-start-7 md:row-span-2"
  >
    4
  </div>
  <div
    class="col-span-4 row-span-3 col-start-5 row-start-10 bg-teal-400 md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-4"
  >
    2x2
  </div>
  <div
    class="col-span-4 row-span-3 col-start-5 row-start-13 bg-yellow-100 md:col-span-4 md:col-start-7 md:row-span-4 md:row-start-3 min-h-full"
  >
    6
    <section class="parent-square bg-yellow-100">
      <div class="second-square">
        <div class="main-circle bg-yellow-100">
          <div class="big-shape bg-red-400" />
          <div class="small-shape bg-red-400" />
        </div>
      </div>
    </section>
  </div>
  <div
    class="col-span-4 row-span-3 col-start-5 row-start-16 bg-emerald-400 md:col-span-2 md:col-start-11 md:row-span-4 md:row-start-3"
  >
    7
  </div>
  <div
    class="col-span-4 bg-fuchsia-400 col-start-5 row-start-19 md:col-span-6 md:row-start-6"
  >
    8
  </div>
</div>

<style>
  .parent-square {
    width: 100%;
    min-height: 350px;
    /* background: red; */
    position: relative;
    margin: auto;
    align-items: center;
  }
  .parent-square .second-square {
    width: 250px;
    height: 250px;
    background: #293462;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  .parent-square .second-square .main-circle {
    /* background: red; */
    width: 150px;
    height: 150px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;
    z-index: 9;
    overflow: hidden;
  }
  .parent-square .second-square .main-circle .big-shape {
    width: 100px;
    height: 100px;
    /* background: yellow; */
    position: absolute;
    z-index: -1;
    top: 80px;
    transform: rotate(45deg);
    left: 54px;
  }
  .parent-square .second-square .main-circle .small-shape {
    width: 50px;
    height: 50px;
    /* background: yellow; */
    position: absolute;
    z-index: -1;
    top: 100px;
    transform: rotate(45deg);
    left: 15px;
  } /*# sourceMappingURL=style.css.map */
</style>
