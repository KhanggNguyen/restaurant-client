export const scrollIntoView = (route) => {
    const el = document.getElementById(route.id);
    if (!el) {
        window.location.href = route.url;
        return;
    }
    el.scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
};
