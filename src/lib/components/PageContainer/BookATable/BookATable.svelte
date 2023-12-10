<script>
    import { DateInput } from "date-picker-svelte";
    let date = new Date();
    let time = "";
    let numOfPeople = 1;
    let name = "";
    let tel = "";

    let times = ["11:00", "11:30", "12:00", "12:30", "13:00"];
    let numOfPeoples = [1, 2, 3, 4, 5, 6, 7, "8+"];
</script>

<div id="menu" class="mx-20 my-10 w-full px-40 py-10">
    <form>
        <div class="flex">
            <div class="mx-2">
                <label for="date">
                    Date
                    <DateInput
                        id="date"
                        name="date"
                        min={new Date()}
                        closeOnSelection
                        required
                        format="dd-MM-yyyy"
                        bind:value={date}
                    />
                </label>
            </div>
            <div class="mx-2">
                <label for="time">
                    Time
                    <select
                        name="start"
                        id="start"
                        class="block w-40 rounded border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        required="true"
                        bind:value={time}
                    >
                        <option value="" disabled selected>Time</option>
                        {#if times && times.length > 0}
                            {#each times as t}
                                <option value={parseInt(t)}>{t}</option>
                            {/each}
                        {/if}
                    </select>
                </label>
            </div>
            <div class="mx-2">
                <label for="guest">
                    Number of people
                    <select
                        name="start"
                        id="guest"
                        class="block w-40 rounded border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        required
                        bind:value={numOfPeople}
                    >
                        {#each numOfPeoples as n}
                            <option value={n}>{n}</option>
                        {/each}
                    </select>
                </label>
            </div>
            <div class="mx-2">
                <label for="phone">
                    Telephone
                    <input
                        type="number"
                        name="phone-number"
                        id="phone"
                        bind:value={tel}
                        class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded border border-gray-300 p-1.5 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                        placeholder="e.g. +(12)3456 789"
                        required
                    />
                </label>
            </div>
            <div class="mx-2">
                <label for="name">
                    Name
                    <input
                        type="text"
                        name="name"
                        id="name"
                        bind:value={name}
                        class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded border border-gray-300 p-1.5 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                        placeholder="Your name"
                        required
                    />
                </label>
            </div>
        </div>

        <div>
            <button type="submit">Book</button>
        </div>
    </form>
</div>
