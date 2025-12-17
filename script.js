document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#menu");

    if (!toggle || !menu) return;

    const closedIcon = "|||";
    const openIcon = "X";

    const setState = (isOpen) => {
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        const icon = toggle.querySelector(".menu-ico");
        if (icon) icon.textContent = isOpen ? openIcon : closedIcon;
    };

    toggle.addEventListener("click", () => {
        const open = menu.classList.toggle("menu-open");
        setState(open);
    });

    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
        menu.classList.remove("menu-open");
        setState(false);
    }));
});
