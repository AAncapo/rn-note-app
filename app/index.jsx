import { useEffect } from "react";
import { router } from "expo-router";
import useGlobal from "../hooks/useGlobal";
import { getFromStorage } from "../services/async-strorage-handler";

export default function Index() {
  const { setDatabase } = useGlobal();

  useEffect(() => {
    getFromStorage("data").then((data) => {
      if (data) setDatabase({ ...data });
      router.replace("/main");
    });
  }, []);
}
