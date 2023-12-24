<script>
    export let title = "",
        open = false;
</script>

<!-- Main modal -->
<div
    id="crud-modal"
    tabindex="-1"
    aria-hidden="true"
    class:hidden={!open}
    class=" fixed left-0 right-0 top-0 z-50 flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
>
    <div class="relative max-h-full w-full max-w-md p-4">
        <!-- Modal content -->
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div
                class="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5"
            >
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                </h3>
                <button
                    type="button"
                    class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="crud-modal"
                    on:click={() => (open = !open)}
                >
                    <svg
                        class="h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <slot />
        </div>
    </div>
</div>

<div
    modal-backdrop=""
    class="fixed inset-0 z-40 bg-gray-900/50 dark:bg-gray-900/80"
/>
