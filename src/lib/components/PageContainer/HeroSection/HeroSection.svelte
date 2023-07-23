<script>
    import Button from "../../Button/Button.svelte";
    import "./HeroSection.scss";
</script>

<div
    style="min-height: 400px; margin-top: 6em;"
    class="max-w-screen-2xl flex w-full justify-between pl-3 pr-3 lg:pl-12 lg:pr-12"
>
    <div class="flex w-1/2 flex-col">
        <h1
            class="mb-4 text-2xl font-bold text-black
            sm:text-3xl sm:leading-snug
            md:text-5xl md:font-extrabold
            lg:font-black lg:leading-normal
            xl:text-6xl xl:leading-relaxed"
        >
            Journey to Southeast Asia on a Plate
        </h1>
        <p
            class="max-h-12 overflow-hidden text-xs text-gray-800
        sm:max-h-full
        lg:text-sm
        xl:text-lg"
        >
            Experience Southeast Asian flavors brought to life at Ebisu
            Restaurant. Indulge in vibrant dishes inspired by Thailand, Vietnam,
            Malaysia, and beyond. Taste the essence of the East in every bite.
        </p>
        <div class="mt-4 flex flex-wrap">
            <Button text="Menu" />
            <Button theme="filled" text="Reservation" />
        </div>
    </div>
    <div class="relative flex w-1/2 flex-col">
        <div class="standalone">
            <img class="hero" alt="hero" src="/images/hero-image.png" />
        </div>
    </div>
</div>
