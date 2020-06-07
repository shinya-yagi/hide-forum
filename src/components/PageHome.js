import { firestore } from "firebase/app";
import React, { useEffect, useState } from "react";
import { collectionData } from "rxfire/firestore";
import CardThread from "./CardThread";
import FormThread from "./FormThread";
import Progress from "./Progress";

const PageHome = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [threads, setThreads] = useState([]);

  const query = firestore().collection("threads").orderBy("updatedAt", "desc");

  useEffect(() => {
    const subscription = collectionData(query, "id").subscribe((data) => {
      setIsLoading(false);
      setThreads(data);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <React.Fragment>
      <h1>Home</h1>
      <FormThread />
      {threads.map((thread) => (
        <CardThread key={thread.id} thread={thread} />
      ))}
      {isLoading && <Progress />}
    </React.Fragment>
  );
};

export default PageHome;
