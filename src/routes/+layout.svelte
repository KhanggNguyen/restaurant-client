<script>
    import "../app.css";
    import Navbar from "../lib/components/Navbar/Navbar.svelte";
</script>

<div class="flex h-full w-full flex-col items-center overflow-x-hidden">
    <Navbar />
    <slot />
</div>
