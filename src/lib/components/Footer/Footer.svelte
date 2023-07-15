<script>
    import Logo from "../Logo/Logo.svelte";

    const descriptionContainerStyle =
        "mr-2 flex flex-col pl-10 pr-10 md:mr-16 md:pl-3 md:pr-3";

    const sectionContainerStyle =
        "mr-2 mt-7 flex w-full flex-col pl-10 pr-10 md:mr-16 md:mt-0 md:w-auto md:pl-3 md:pr-3";
</script>

<div
    style="background-color: #1d2124;"
    class="flex min-w-full flex-col items-center justify-center pt-10 md:pt-16"
>
    <div class="max-w-screen-2xl flex h-full w-full flex-wrap justify-between">
        <div class={`${descriptionContainerStyle}`}>
            <Logo />
            <p
                class="mt-2 min-w-[10rem] max-w-xs font-normal leading-5 text-white"
            >
                39 Rue des Lois,
            </p>
            <p
                class="mt-2 min-w-[10rem] max-w-xs font-normal leading-5 text-white"
            >
                31000 Toulouse
            </p>

            <p
                class="mt-2 min-w-[10rem] max-w-xs font-normal leading-5 text-white"
            >
                +33 01 23 45 67
            </p>

            <p
                class="mt-2 min-w-[10rem] max-w-xs font-normal leading-5 text-white"
            >
                contact@ebisu-restaurant.com
            </p>

            <div class="flex-start mt-2 flex flex-row text-white">
                <a href="#"><i class="fab fa-facebook w-11" /></a>
                <a href="#"><i class="fab fa-instagram w-11" /></a>
                <a href="#"><i class="fab fa-google w-11" /></a>
                <a href="#"><i class="fab fa-tripadvisor w-11" /></a>
            </div>
        </div>
        <div
            class={`mr-2 mt-7  flex w-full min-w-[20rem] flex-col pl-10 pr-10 md:mr-16 md:mt-0 md:w-auto md:pl-3 md:pr-3`}
        >
            <h3 class="mb-3 text-2xl font-bold text-white">Find us</h3>
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
            <h3 class="mb-3 text-2xl font-bold text-white">Schedule</h3>
            <div class="flex flex-row justify-between text-white">
                <div class="font-bold">
                    <ul class="flex list-none flex-col">
                        <li class="mb-3"><span>Lundi</span></li>
                        <li class="mb-3"><span>Mardi</span></li>
                        <li class="mb-3"><span>Mercredi</span></li>
                        <li class="mb-3"><span>Jeudi</span></li>
                        <li class="mb-3"><span>Vendredi</span></li>
                        <li class="mb-3"><span>Samedi</span></li>
                        <li class="mb-3"><span>Dimanche</span></li>
                    </ul>
                </div>
                <div >
                    <ul class="flex list-none flex-col outline-none">
                        <li class="mb-3"><span>Closed</span></li>
                        <li class="mb-3">
                            <span>12:00–14:00, 18:30–22:00</span>
                        </li>
                        <li class="mb-3">
                            <span>12:00–14:00, 18:30–22:00</span>
                        </li>
                        <li class="mb-3"><span>12:00–14:00</span></li>
                        <li class="mb-3">
                            <span>12:00–14:00, 18:30–22:00</span>
                        </li>
                        <li class="mb-3">
                            <span>12:00–14:00, 18:30–22:00</span>
                        </li>
                        <li class="mb-3">
                            <span>12:00–14:00, 18:30–22:00</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class={`${sectionContainerStyle}`}>
            <h3 class="mb-3 text-2xl font-bold text-white">Our Links</h3>
            <ul class="flex list-none flex-col outline-none">
                <li class="mb-3">
                    <a
                        class="text-sm text-white transition-all hover:text-gray-200"
                        href="#"
                    >
                        Home
                    </a>
                </li>
                <li class="mb-3">
                    <a
                        class="text-sm text-white transition-all hover:text-gray-200"
                        href="#"
                    >
                        About Us
                    </a>
                </li>
                <li class="mb-3">
                    <a
                        class="text-sm text-white transition-all hover:text-gray-200"
                        href="#"
                    >
                        Services
                    </a>
                </li>
                <li class="mb-3">
                    <a
                        class="text-sm text-white transition-all hover:text-gray-200"
                        href="#"
                    >
                        Blog
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="max-w-screen-2xl mt-7 flex w-full justify-center md:mt-1">
        <small style="font-size: 12px" class="text-gray-300">
            Copyright &copy; {new Date().getFullYear()} Ebisu Restaurant. All rights
            reserved.
        </small>
    </div>
</div>
