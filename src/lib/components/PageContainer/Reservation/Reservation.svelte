<script>
    import ReservationModal from "./ReservationModal.svelte";

    let openModalReservation = false;
</script>

<div
    id="reservation"
    class="flex flex-col bg-[#F5F5F5] px-2 py-10 md:my-10 md:flex-row md:items-center md:justify-between"
>
    <div class="my-auto pl-10 md:w-1/2">
        <p class="text-center text-lg text-sm md:text-2xl">
            Book your table now for a tantalizing taste of Southeast Asia at
            Ebisu Restaurant
        </p>
    </div>

    <div
        class="my-6 flex items-center justify-center gap-4 p-0 md:my-auto md:w-1/2 md:justify-end md:pr-10"
    >
        <button
            class="w-auto rounded-md border-2 border-solid border-red-500 px-7 py-3.5 text-red-500 hover:border-transparent hover:bg-red-500 hover:text-white"
            on:click={() => (openModalReservation = !openModalReservation)}
        >
            <span class="font-bold">
                <i class="fa fa-calendar" /> Reservation
            </span>
        </button>
        <button
            on:click={() => (window.location.href = "tel:3301234567")}
            class="w-auto rounded-md border-2 border-solid border-red-500 px-7 py-3.5 text-red-500 hover:border-transparent hover:bg-red-500 hover:text-white"
            href="#"
        >
            <span class="font-bold"> <i class="fa fa-phone" /> Call us </span>
        </button>
    </div>
</div>

<ReservationModal bind:openModalReservation />
