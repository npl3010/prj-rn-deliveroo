import { TailwindProvider } from "tailwindcss-react-native";

const AppProviders = ({ children }) => {
    return <TailwindProvider>{children}</TailwindProvider>;
}

export default AppProviders;