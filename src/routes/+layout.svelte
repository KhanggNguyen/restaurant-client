<script>
    import "../app.css";
    import Footer from "../lib/components/Footer/Footer.svelte";
    import Navbar from "../lib/components/Navbar/Navbar.svelte";
</script>

<div class="flex h-full w-full flex-col items-center">
    <Navbar />
    <slot />
    <Footer />
</div>
