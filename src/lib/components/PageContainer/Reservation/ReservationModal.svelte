<script>
    import axios from "axios";
    import DatePicker from "../../DatePicker/DatePicker.svelte";
    import Modal from "../../Modal/Modal.svelte";
    import ReservationTimeslot from "./ReservationTimeslot.svelte";

    let title = "Reservation";
    let mainActionTitle = "Confirm";
    let secondActionTitle = "Cancel";
    let name = "Dupont";
    let telephone = "0712345678";
    let timeslot;
    let email = "";
    let today = new Date();
    let date = `${today.getFullYear()}-${
        today.getMonth() + 1
    }-${today.getDate()}`;
    let totalGuest = 1;
    let note = "";
    let telephoneError = false;
    let classInputBorder = "border-gray-300";

    export let openModalReservation = false;

    const isFormValid = (data) => {
        if (!isTelephoneValid(data["telephone"])) {
            return false;
        }
        return true;
    };

    const isTelephoneValid = (value) => {
        telephoneError = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(
            telephone
        );

        classInputBorder = telephoneError
            ? "border-gray-300 focus:border-primary-600 focus:ring-primary-600"
            : "border-red-300 focus:border-red-600 focus:ring-red-600 focus-visible:border-red-300";

        return telephoneError;
    };

    const handleSubmit = async (e) => {
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        console.log(data);
        if (isFormValid(data)) {
            const res = await axios.post(`http://localhost:8000/v2/booking/`, {
                name,
                phone: telephone,
                email,
                date: new Date(date).toISOString(),
                timeslot,
                totalGuest,
                note,
            });

            if (res.status === 200) {
                console.log("ok", res.data);
            } else {
                console.error("something wrong: ", res.data.message);
            }
        } else {
            console.error("Invalid Form");
        }
    };
</script>

{#if openModalReservation}
    <Modal {title} bind:open={openModalReservation}>
        <form class="p-4 md:p-5" on:submit|preventDefault={handleSubmit}>
            <div class="mb-4 gap-4">
                <div class="my-1">
                    <label
                        for="name"
                        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        placeholder="Dupont"
                        bind:value={name}
                    />
                </div>
                <div class="my-1">
                    <label
                        for="telephone"
                        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Téléphone
                    </label>
                    <input
                        type="text"
                        name="telephone"
                        id="telephone"
                        class={`${classInputBorder} dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border  bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400`}
                        placeholder="07 12 34 56 78"
                        bind:value={telephone}
                        required={true}
                    />
                </div>
                <div class="my-1">
                    <label
                        for="email"
                        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Mail
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        class={`${classInputBorder} dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border  bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400`}
                        placeholder="dupont@gmail.com"
                        pattern=".+@example\.com"
                        size="40"
                        bind:value={email}
                    />
                </div>
                <div class="my-1">
                    <label
                        for="guestNumber"
                        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Number of guest
                    </label>
                    <input
                        type="number"
                        name="guestNumber"
                        id="guestNumber"
                        class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                        placeholder="2"
                        required
                        bind:value={totalGuest}
                        min="1"
                    />
                </div>
                <div class="my-1">
                    <label
                        for="date"
                        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Date
                    </label>
                    <DatePicker required={true} bind:date />
                </div>
                <div class="my-1">
                    <ReservationTimeslot
                        bind:date
                        bind:selectedTimeSlot={timeslot}
                    />
                </div>
                <div class="col-span-2">
                    <label
                        for="note"
                        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Note
                    </label>
                    <textarea
                        id="note"
                        rows="4"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Saississez votre commentaire ici..."
                        bind:value={note}
                    />
                </div>
            </div>
            <button
                type="submit"
                class="inline-flex items-center rounded-lg bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                {mainActionTitle}
            </button>
            <button
                type="submit"
                class="inline-flex items-center rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                on:click={() => (openModalReservation = !openModalReservation)}
            >
                {secondActionTitle}
            </button>
        </form>
    </Modal>
{/if}
