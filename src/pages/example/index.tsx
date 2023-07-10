import {
  ConfigProvider,
  SignIn,
  PortkeyConfigProvider,
  SignInInterface,
} from "@portkey/did-ui-react";
import { useRef } from "react";

const iconAddress = `favicon.ico`;

ConfigProvider.setGlobalConfig({
  graphQLUrl:
    "https://dapp-portkey-test.portkey.finance/Portkey_DID/PortKeyIndexerCASchema/graphql",
  socialLogin: {
    Portkey:
      process.env.NEXT_PUBLIC_APP_ENV === "main"
        ? undefined
        : {
            websiteName: "Bingo Game",
            websiteIcon: iconAddress,
          },
  },
  network: {
    defaultNetwork: "TESTNET",
    networkList: [
      {
        name: "aelf Testnet",
        walletType: "aelf",
        networkType: "TESTNET",
        isActive: true,
        apiUrl: "https://did-portkey-test.portkey.finance",
      },
    ],
  },
});

function App() {
  const ref = useRef<SignInInterface>();

  return (
    <PortkeyConfigProvider>
      <button
        onClick={async () => {
          if (ref.current) ref.current.setOpen(true);
        }}
      >
        Open sign in
      </button>
      <SignIn
        ref={ref}
        uiType="Modal"
        onFinish={(didWallet) => {
          console.log(didWallet, "didWallet====onFinish");
        }}
        onCancel={() => ref.current?.setOpen(false)}
      />
    </PortkeyConfigProvider>
  );
}

export default App;
