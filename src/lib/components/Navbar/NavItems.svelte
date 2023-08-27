<script>
    const items = [
        {
            name: "Home",
            url: "#",
        },
        {
            name: "About Us",
            url: "#about",
        },
        {
            name: "Menu",
            url: "#",
        },
        {
            name: "Reservation",
            url: "#",
        },
    ];
</script>

<ul class=" flex list-none">
    {#each items as item}
        <li
            class="mr-1 cursor-pointer text-sm font-medium text-black transition duration-300 ease-in-out hover:text-gray-700 md:mr-5 md:text-base"
        >
            <a href={item.url}>{item.name}</a>
        </li>
    {/each}
</ul>
