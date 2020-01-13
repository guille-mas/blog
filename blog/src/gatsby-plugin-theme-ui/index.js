import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/index";
import mdxTheme from "@awolf81/gatsby-theme-mdx/src/templates/default";
import merge from "deepmerge";

const baseTheme = merge(mdxTheme, wavesTheme);

console.log(baseTheme);

export default merge(baseTheme, {
  styles: {
    waves: {
      default: {
        Wave: {
          width: "100%",
          marginLeft: 0
        },
        ScrollerProgress: {
          backgroundColor: "#e8a87c",
        },
        Sticker: {
          borderColor: "#e8a87c",
        }
      }
    }
  }
});