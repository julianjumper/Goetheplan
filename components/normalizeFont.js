import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 320;

export function normalizeFontSize(size) {
    const newSize = size * scale;
    if (Platform.OS === "ios") {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  }