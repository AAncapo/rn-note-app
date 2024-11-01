import { Color } from "../constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";

export const ImageIcon = (props) => (
  <Entypo name="image" size={24} color="black" {...props} />
);

export const CheckboxIcon = ({ checked = false }) => (
  <Fontisto
    name={checked ? "checkbox-active" : "checkbox-passive"}
    size={20}
    color="black"
  />
);

export const PinIcon = (props) => (
  <MaterialCommunityIcons
    name="pin-outline"
    size={20}
    color={Color.iconSecondaryColor}
    {...props}
  />
);

export const SearchIcon = (props) => (
  <FontAwesome name="search" size={20} color="gray" {...props} />
);

export const SettingsIcon = (props) => (
  <Ionicons
    name="settings-outline"
    size={20}
    color={Color.iconSecondaryColor}
    {...props}
  />
);

export const TagIcon = (props) => (
  <FontAwesome name="tag" size={20} color={Color.iconPrimaryColor} {...props} />
);

export const ArrowIcon = (props) => (
  <MaterialIcons name={"arrow-forward-ios"} size={15} color="gray" {...props} />
);

export const AddIcon = (props) => (
  <Ionicons
    name="add-circle-sharp"
    size={80}
    color={Color.iconPrimaryColor}
    {...props}
  />
);
