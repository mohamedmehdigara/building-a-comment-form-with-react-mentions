const [result, setResult] = useState("");

const data = [
  {
    id: "Avatar",
    display: "Avatar Aang",
  },
  {
    id: "Spiderman",
    display: "Peter Parker",
  },
];

<MentionsInput value={result} onChange={(e) => setValue(e.target.value)}>
  <Mention style={mentionStyle} data={data} />
</MentionsInput>;