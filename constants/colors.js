import { theme } from "../config";

export const Color = {
  bgPrimaryColor: theme === "light" ? "#fff" : "#202124",
  headerColor: theme === "light" ? "#fff" : "black",
  textPrimaryColor: theme === "light" ? "#202124" : "#fff",
  textSecondaryColor: "gray",
  iconPrimaryColor: "#1099DB",
  iconSecondaryColor: "#3DC0FF",
};

export const textStyle = {
  color: Color.textPrimaryColor,
  fontFamily: "Instrument Sans",
};
