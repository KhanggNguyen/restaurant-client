<script>
    import Logo from "../Logo/Logo.svelte";
    import NavItems from "./NavItems.svelte";
    import { SCREENS } from "../Responsive/index";
    import NavHamburger from "./NavHamburger.svelte";

    let isMobile = false;

    let screenWidth;

    $: isMobile = screenWidth < parseInt(SCREENS.sm);

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute("href"));
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth",
        });
    }
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if isMobile}
    <NavHamburger />
{:else}
    <div
        style="min-height: 68px;"
        class="sticky top-0 z-50 flex w-full max-w-screen-2xl flex-row items-center justify-between bg-white lg:pl-12 lg:pr-12"
    >
        <div>
            <Logo />
        </div>
        <NavItems />
    </div>
{/if}
