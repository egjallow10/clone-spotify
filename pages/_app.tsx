import "reset-css";
import type { AppProps } from "next/app";
import { ChakraProvider, color, extendTheme} from '@chakra-ui/react'
import PlayerLayout from "@/components/playerlayout";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

const theme = extendTheme({
  color: {
    gray:{
      100: "#F7F7F7",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    }
  },
  component:{
    Button: {
      variant:{
        link: {
          "focus":{
            outline: "none",
            boxShadow: "none"
          }
        }
      }
    },
  }
});

const App = ({ Component, pageProps } :AppProps )=>{
 
  return(
    <ChakraProvider theme={theme}>
      <PlayerLayout>
        <Component {...pageProps} />;
      </PlayerLayout>
    </ChakraProvider>
  );
};

export default App;