import { useEffect } from "react";
import { useCartStore } from "../store/store";
import Admin from "layouts/Admin";
import { useRouter } from "next/router";

function withAuthHook(WrappedComponent) {
  function HookWrapper(props) {
    const router = useRouter();
    const login = useCartStore((store) => store.login);

    useEffect(() => {
      if (!login) {
        router.push("/auth/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  }

  HookWrapper.layout = Admin;

  return HookWrapper;
}

export default withAuthHook;
