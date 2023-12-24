<script>
    import { createEventDispatcher } from "svelte";

    export let text = "button";
    export let theme = "outlined";

    const dispatch = createEventDispatcher();

    $: outlinedStyle =
        theme === "outlined"
            ? "bg-red-500 hover:bg-transparent hover:text-red-500 hover:border-red-500 border-transparent text-white"
            : "";
    $: filledStyle =
        theme === "filled"
            ? "border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white hover:border-transparent border-solid"
            : "";
</script>

<button
    {...$$restProps}
    on:click={() => dispatch("click")}
    class={`${outlinedStyle}${filledStyle} m-1 rounded-md border-2 pb-3 pl-5 pr-5 pt-3 text-xs font-semibold  outline-none transition-all duration-200 ease-in-out focus:outline-none`}
>
    {text}
</button>
