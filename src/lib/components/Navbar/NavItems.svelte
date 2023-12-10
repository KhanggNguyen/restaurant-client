<script>
    import routes from "./routes.json";

</script>

<ul class=" flex list-none">
    {#each routes as route}
        <li
            class="mr-1 cursor-pointer text-sm font-medium text-black transition duration-300 ease-in-out hover:text-gray-700 md:mr-5 md:text-base"
        >
            <a
                href={route.url}
                
            >
                {route.name}
            </a>
        </li>
    {/each}
</ul>
