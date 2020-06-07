import { firestore } from "firebase/app";

export const createThread = async (input) => {
  const now = firestore.Timestamp.now();

  const syatemFields = { createdAt: now, updatedAt: now };
  const threadRef = firestore().collection("threads").doc();

  await threadRef.set({
    ...syatemFields,
    title: input.title,
    responseCount: 1,
  });

  const responseRef = threadRef.collection("responses").doc();

  console.log(responseRef);

  await responseRef.set({
    ...syatemFields,
    threadId: threadRef.id,
    username: input.username,
    text: input.text,
    index: 0,
  });
};
