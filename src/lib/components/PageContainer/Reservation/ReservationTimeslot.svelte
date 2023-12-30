<script>
    import axios from "axios";
    import moment from "moment";
    import { fade, fly } from "svelte/transition";
    import Loader from "../../Loader/Loader.svelte";

    let timeslots = [];
    let selectedTimeSlot;
    let today = new Date();
    let loading = false;
    let error = false;
    let messageError = "";

    export let date = `${today.getFullYear()}-${
        today.getMonth() + 1
    }-${today.getDay()}`;

    const getTimeSlotAvailable = async (date) => {
        timeslots = [];
        loading = true;
        const res = await axios.get(
            `http://localhost:8000/v2/booking/${date}`,
            {}
        );

        if (res.status === 200) {
            res.data.shift.timeslots.forEach((shift) => {
                timeslots = [...timeslots, ...generateTimes(shift)];
            });
            console.log(timeslots);
        } else {
            error = true;
            messageError = res.data.message;
        }

        loading = false;
    };

    const generateTimes = (timeslot) => {
        let ts = [];

        let startTime = moment(timeslot.start, "HH:mm");
        let endTime = moment(timeslot.end, "HH:mm");
        let interval = convertHoursToMinutes(timeslot.interval);
        while (startTime < endTime) {
            ts.push(new moment(startTime).format("HH:mm"));
            startTime.add(interval, "minutes");
        }
        return ts;
    };

    const convertHoursToMinutes = (hours) => {
        let hh = hours.split(":")[0];
        let mm = hours.split(":")[1];

        while (hh > 0) {
            mm = parseInt(mm) + parseInt(60);
            hh -= 1;
        }
        return mm;
    };

    $: date && getTimeSlotAvailable(date);
</script>

{#if loading}
    <Loader />
{:else if error}
    <div
        class="mb-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
    >
        {messageError}
    </div>
{:else}
    <div in:fade={{ duration: 1000 }} class="flex w-full flex-wrap">
        {#each timeslots as timeslot}
            <button
                type="button"
                tabindex="0"
                class="m-1 w-20 rounded-lg bg-green-500 p-2.5 text-center hover:bg-green-300"
                on:click={() => (selectedTimeSlot = timeslot)}
            >
                <span>
                    {timeslot}
                </span>
            </button>
        {/each}
    </div>
{/if}
