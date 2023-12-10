<script>
    import Logo from "../Logo/Logo.svelte";
    import routes from "./routes.json";
    let openMobileNav = false;
</script>

<div
    class="sticky top-0 z-50 mx-auto flex w-full items-center justify-between border-b border-gray-400 bg-white px-8 py-8"
>
    <Logo />

    <nav>
        <section class="flex md:hidden">
            <div
                role="button"
                tabindex="0"
                on:keydown
                on:keyup
                on:keypress
                on:click={() => (openMobileNav = !openMobileNav)}
                class="space-y-2"
            >
                <span class="block h-0.5 w-8 animate-pulse bg-gray-600" />
                <span class="block h-0.5 w-8 animate-pulse bg-gray-600" />
                <span class="block h-0.5 w-8 animate-pulse bg-gray-600" />
            </div>

            <div class={openMobileNav ? "showMenuNav" : "hideMenuNav"}>
                <div
                    class="absolute right-0 top-0 px-8 py-8"
                    role="button"
                    tabindex="0"
                    on:keydown
                    on:keyup
                    on:keypress
                    on:click={() => (openMobileNav = false)}
                >
                    <svg
                        class="h-8 w-8 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
                <ul
                    class="flex min-h-[250px] flex-col items-center justify-between"
                >
                    {#each routes as route}
                        <li class="my-8 border-b border-gray-400 uppercase">
                            <a
                                href={route.url}
                                on:keydown
                                on:keyup
                                on:keypress
                                on:click={(e) => {
                                    openMobileNav = false;
                                }}
                            >
                                {route.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </section>
    </nav>
</div>

<style>
    .hideMenuNav {
        display: none;
    }
    .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
</style>
