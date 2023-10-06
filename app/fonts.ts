import { Merriweather_Sans, Raleway, League_Spartan } from "next/font/google";

export const raleway = Raleway({
    subsets: ["latin", "cyrillic"],
    variable: "--font-raleway",
});
export const leagueSpartan = League_Spartan({
    subsets: ["latin"],
    variable: "--font-leaguespartan",
});
export const merriweather = Merriweather_Sans({
    subsets: ["cyrillic-ext", "latin"],
    variable: "--font-merriweather",
});
