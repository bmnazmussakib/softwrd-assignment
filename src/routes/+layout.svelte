<script>
  import "../app.css";
</script>

<header>
  <ul class="list-none m-0 p-0 overflow-hidden bg-slate-500 flex">
    <li><a class="text-white text-center no-underline px-6 py-3.5 block uppercase font-medium hover:bg-slate-800" href="/">Home</a></li>
    <li><a class="text-white text-center no-underline px-6 py-3.5 block uppercase font-medium hover:bg-slate-800" href="/layout">Layout</a></li>
    <li><a class="text-white text-center no-underline px-6 py-3.5 block uppercase font-medium hover:bg-slate-800" href="/chart">Chart</a></li>
    <li><a class="text-white text-center no-underline px-6 py-3.5 block uppercase font-medium hover:bg-slate-800" href="/map">Map</a></li>
  </ul>
</header>
<slot />
