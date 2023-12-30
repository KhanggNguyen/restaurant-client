<script>
    import routes from "./routes.json";
    import { scrollIntoView } from "../../../helpers/transition";
</script>

<ul class=" flex list-none">
    {#each routes as route}
        <li
            class="mr-1 cursor-pointer text-sm font-medium text-black transition duration-300 ease-in-out hover:text-gray-700 md:mr-5 md:text-base"
        >
            <a
                href={route.url}
                on:click|preventDefault={() => {
                    scrollIntoView(route);
                }}
            >
                {route.name}
            </a>
        </li>
    {/each}
</ul>
