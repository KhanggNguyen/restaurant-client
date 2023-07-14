<script>
    export let text = "button"
    export let theme = "outlined";

    $: outlinedStyle =
        theme === "outlined"
            ? "bg-red-500 hover:bg-transparent hover:text-red-500 hover:border-red-500"
            : "";
    $: filledStyle =
        theme === "filled"
            ? "border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white hover:border-transparent"
            : "";
</script>

<button
    class={`${outlinedStyle} ${filledStyle} m-1 rounded-md border-2 border-solid border-transparent pb-3 pl-5 pr-5 pt-3 text-xs font-semibold text-white outline-none transition-all duration-200 ease-in-out focus:outline-none`}
>
    {text}
</button>
