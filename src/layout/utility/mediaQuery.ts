export const mediaQuery = (): string => {
    const screen = window.screen.width;
    let media = "desktop";

    if(screen <= 767) {
        media = "mobile";
    }

    return media;
}