<script>
    import "./Menu.scss";

    const menu = [
        {
            category: "Appetizers",
            options: [
                {
                    id: 0,
                    originName: "Goi cuon",
                    name: "Fresh Spring Rolls",
                    ingredients:
                        "Delicate rice paper rolls filled with shrimp, vermicelli noodles, fresh herbs (mint, basil, cilantro), and crunchy vegetables (carrots, lettuce, cucumber). Served with a side of hoisin-peanut dipping sauce",
                    price: 3,
                    description:
                        "Rice paper rolls with veggies, herbs, and protein, served fresh.",
                },
                {
                    id: 1,
                    originName: "Cha Gio",
                    name: "Vietnamese Egg Rolls",
                    ingredients:
                        "Crispy fried spring rolls stuffed with ground pork, shrimp, taro, shredded carrots, and aromatic mushrooms. Served with sweet chili dipping sauce",
                    price: 6,
                    description:
                        "Crispy rolls filled with seasoned pork/chicken/shrimp and vegetables, Vietnamese delicacy.",
                },
            ],
        },
        {
            category: "Soups",
            options: [
                {
                    id: 0,
                    originName: "Pho Bo",
                    name: "Beef Noodle Soup",
                    ingredients:
                        "An aromatic beef broth infused with charred onions, ginger, and spices, ladled over flat rice noodles and topped with tender slices of beef. Served with bean sprouts, fresh herbs, lime, and hoisin sauce",
                    price: 14,
                    description:
                        "Savory broth, beef, and noodles, a comforting Asian soup classic.",
                },
            ],
        },
        {
            category: "Main Courses",
            options: [
                {
                    id: 0,
                    originName: "Com Ga Xao Xa Ot",
                    name: "Lemongrass Chicken",
                    ingredients:
                        "Sliced chicken stir-fried with fragrant lemongrass, chili, and onions. Served with steamed jasmine rice and a side of pickled vegetables.",
                    price: 11,
                    description:
                        "a Vietnamese dish featuring lemongrass chili chicken served with rice.",
                },
                {
                    id: 1,
                    originName: "Bun Thit Nuong",
                    name: "Grilled Pork Noodle",
                    ingredients:
                        "Vermicelli noodles topped with grilled marinated pork, fresh herbs, crushed peanuts, and fried shallots. Served with a zesty nuoc cham sauce.",
                    price: 12,
                    description:
                        "Grilled pork noodle, a flavorful Vietnamese dish with charred pork and vermicelli.",
                },
                {
                    id: 2,
                    originName: "Bo Luc lac",
                    name: "Shaking Beef",
                    ingredients:
                        "Cubes of tender beef marinated in oyster sauce and wok-seared with garlic, onions, and tomatoes. Served with a bed of lettuce and tomato rice.",
                    price: 12,
                    description:
                        "Bo Luc Lac, or shaking beef, is a Vietnamese dish of tender cubed beef stir-fried and served with a flavorful dipping sauce.",
                },
            ],
        },
    ];
</script>

<div
    id="menu"
    class="mx-20 my-10 rounded-3xl border-2 border-black px-40 py-10"
>
    {#each menu as menuItem}
        <div class="my-10 flex w-full justify-center">
            <h2 class="mb-2 text-4xl">
                {menuItem.category}
            </h2>
        </div>
        <div class="flex w-full flex-wrap">
            {#each menuItem.options as item}
                <div class="border-b-solid w-full border-b-2 border-black py-6">
                    <div class="upper flex w-full flex-nowrap">
                        <div class="left w-1/2">
                            <p class="font-bold">
                                {item.name}
                            </p>
                        </div>
                        <span />
                        <div class="right w-1/2 text-right">
                            <p>
                                {item.price} €
                            </p>
                        </div>
                    </div>
                    <div class="lower w-full">
                        <p>
                            {item.description}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    {/each}
</div>
