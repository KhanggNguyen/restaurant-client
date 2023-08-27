<script>
    import Logo from "../Logo/Logo.svelte";
    import NavItems from "./NavItems.svelte";
    import { SCREENS } from "../Responsive/index";
    import NavHamburger from "./NavHamburger.svelte";

    let isMobile = false;
    

    let screenWidth;

    $: isMobile = screenWidth < parseInt(SCREENS.sm);
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if isMobile}
    <NavHamburger />
{:else}
    <div
        style="min-height: 68px;"
        class="max-w-screen-2xl flex w-full flex-row items-center justify-between lg:pl-12 lg:pr-12"
    >
        <div>
            <Logo />
        </div>
        <NavItems />
    </div>
{/if}
