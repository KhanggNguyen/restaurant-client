<script>
    import Logo from "../Logo/Logo.svelte";

    const descriptionContainerStyle =
        "mr-2 flex flex-col pl-10 pr-10 md:mr-16 md:pl-3 md:pr-3";

    const sectionContainerStyle =
        "mr-2 mt-7 flex w-full flex-col pl-10 pr-10 md:mr-16 md:mt-0 md:w-auto md:pl-3 md:pr-3";

    const daysOfWeek = [
        {
            name: "Monday",
            value: 1,
            time: "Closed",
        },
        {
            name: "Tuesday",
            value: 2,
            time: "12:00–14:00, 18:30–22:00",
        },
        {
            name: "Wednesday",
            value: 3,
            time: "12:00–14:00, 18:30–22:00",
        },
        {
            name: "Thursday",
            value: 4,
            time: "12:00–14:00, 18:30–22:00",
        },
        {
            name: "Friday",
            value: 5,
            time: "12:00–14:00, 18:30–22:00",
        },
        {
            name: "Sartuday",
            value: 6,
            time: "12:00–14:00, 18:30–22:00",
        },
        {
            name: "Sunday",
            value: 7,
            time: "12:00–14:00, 18:30–22:00",
        },
    ];

    const isToday = (dayInt) => {
        const day = new Date().getDay();

        return day === dayInt ? "text-red-500" : "";
    };
</script>

<div
    class="mx-5 flex flex-col items-center justify-center rounded-md bg-[#F5F5F5] pt-10 md:py-16"
>
    <div class="max-w-screen-2xl flex h-full w-full flex-wrap justify-between">
        <div class={`${descriptionContainerStyle} justify-between`}>
            <div class="flex flex-col gap-2">
                <Logo />
                <p class="mt-2 min-w-[10rem] max-w-xs font-normal leading-5">
                    39 Rue des Lois,<br />
                    31000 Toulouse
                </p>
                <span
                    on:keydown
                    on:keyup
                    on:keypress
                    on:click={() => (window.location.href = "tel:3301234567")}
                    class="mt-2 min-w-[10rem] max-w-xs font-normal leading-5"
                    role="button"
                    tabIndex={0}
                >
                    <i class="fa fa-phone" /> +33 01 23 45 67
                </span>

                <p class="mt-2 min-w-[10rem] max-w-xs font-normal leading-5">
                    contact@ebisu-restaurant.com
                </p>
            </div>
            <div class="flex-start mt-2 flex flex-row">
                <a href="#"><i class="fab fa-facebook w-11" /></a>
                <a href="#"><i class="fab fa-instagram w-11" /></a>
                <a href="#"><i class="fab fa-google w-11" /></a>
                <a href="#"><i class="fab fa-tripadvisor w-11" /></a>
            </div>
        </div>
        <div
            class={`mr-2 mt-7  flex w-full min-w-[20rem] flex-col pl-10 pr-10 md:mr-16 md:mt-0 md:w-auto md:pl-3 md:pr-3`}
        >
            <h3 class="mb-3 text-2xl font-bold">Find us</h3>
            <div
                class="relative flex h-full w-full items-end justify-start overflow-hidden rounded-lg p-10 sm:mr-10 md:w-full lg:w-full"
            >
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    class="absolute inset-0"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    style={{ filter: "opacity(0.7)" }}
                    src={`https://www.google.com/maps/embed/v1/place?q=Toulouse&key=${
                        import.meta.env.VITE_GOOGLE_MAP_API
                    }`}
                />
            </div>
        </div>
        <div class={`${sectionContainerStyle} min-w-[20rem]`}>
            <h3 class="mb-3 text-2xl font-bold">Schedule</h3>
            <div class="flex flex-row justify-between">
                <div class="font-bold">
                    <ul class="flex list-none flex-col">
                        {#each daysOfWeek as day}
                            <li class={`mb-3 ${isToday(day.value)}`}>
                                <span>{day.name}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
                <div>
                    <ul class="flex list-none flex-col outline-none">
                        {#each daysOfWeek as day}
                            <li class={`mb-3 ${isToday(day.value)}`}>
                                <span>{day.time}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
        <div class={`${sectionContainerStyle}`}>
            <h3 class="mb-3 text-2xl font-bold">Our Links</h3>
            <ul class="flex list-none flex-col outline-none">
                <li class="mb-3">
                    <a
                        class=" transition-all hover:font-bold hover:text-red-500"
                        href="#"
                    >
                        Home
                    </a>
                </li>
                <li class="mb-3">
                    <a
                        class=" transition-all hover:font-bold hover:text-red-500"
                        href="#"
                    >
                        About Us
                    </a>
                </li>
                <li class="mb-3">
                    <a
                        class=" transition-all hover:font-bold hover:text-red-500"
                        href="#"
                    >
                        Services
                    </a>
                </li>
                <li class="mb-3">
                    <a
                        class=" transition-all hover:font-bold hover:text-red-500"
                        href="#"
                    >
                        Blog
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="max-w-screen-2xl mt-7 flex w-full justify-center md:mt-1">
    <div class="mb-2 flex w-full flex-col items-center">
        <a class="text-gray-500" href="#">Mentions légales</a>
        <p style="font-size: 1rem" class="text-black-300">
            Copyright &copy; {new Date().getFullYear()} Ebisu Restaurant. All rights
            reserved.
        </p>
    </div>
</div>
