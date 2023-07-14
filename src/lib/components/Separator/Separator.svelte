<script>
    export let size = 1;
    export let direction = "horizontal";

    $: size = typeof size === "string" ? size : size + "px";
    
    $: marginStyle =
        direction === "horizontal"
            ? `min-width: ${size}`
            : `min-height: ${size}`;
</script>

<span style={`${marginStyle}`} class="flex" />
