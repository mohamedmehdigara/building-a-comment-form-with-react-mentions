import { useState } from "react";
import { Mention, MentionsInput } from "react-mentions";
import style from "./styles.module.css";

const MentionExample = () => {
  const [result, setResult] = useState("");

  const data = [
    {
      id: "Ichigo",
      display: "Kurosaki Ichigo",
    },
    {
      id: "Madara",
      display: "Madara Uchiha",
    },
    {
      id: "Nobody",
      display: "nobody@someone.whoknows",
    },
    {
      id: "Iamvictorsam",
      display: "iamvictorsam@gmail.com",
    },
  ];

  return (
    <>
      <h1>Multi Line Input</h1>
      <MentionsInput
        classNames={style}
        value={result}
        onChange={(e) => setResult(e.target.value)}
      >
        <Mention className={style.mentions__mention} data={data} />
      </MentionsInput>
    </>
  );
}

export default MentionExample;
