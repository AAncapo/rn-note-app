import { useContext, useEffect } from "react";
import { DatabaseContext } from "../context/database-context";
import { getFromStorage } from "../services/async-strorage-handler";
import { router } from "expo-router";

export default function Index() {
  const { setDatabase } = useContext(DatabaseContext);

  useEffect(() => {
    getFromStorage("data").then((data) => {
      if (data) setDatabase({ ...data });
      router.replace("/main");
    });
  }, []);
}
