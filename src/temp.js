{
  Array(3)
    .fill(0)
    .map((_, index) => (
      <Page key={index} pageNumber={index + 1}>
        <Section>
          <div>
            <Title txt={vimData[0]["title"]} />
            {vimData[0]["keyChars"].map((item, index) => (
              <KeyCell
                key={index}
                keyChar={item["cmd"]}
                description={item["description"]}
              />
            ))}
          </div>
        </Section>

        <Section>
          <div>
            <Title txt={vimData[1]["title"]} />
            {vimData[1]["keyChars"].map((item, index) => (
              <KeyCell
                key={index}
                keyChar={item["cmd"]}
                description={item["description"]}
              />
            ))}
          </div>
          <div className="pt-2">
            <Title txt={vimData[2]["title"]} />
            {vimData[2]["keyChars"].map((item, index) => (
              <KeyCell
                key={index}
                keyChar={item["cmd"]}
                description={item["description"]}
              />
            ))}
          </div>
        </Section>
        <Section>
          <div>
            <Title txt={vimData[4]["title"]} />
            {vimData[4]["keyChars"].map((item, index) => (
              <KeyCell
                key={index}
                keyChar={item["cmd"]}
                description={item["description"]}
              />
            ))}
          </div>
        </Section>
      </Page>
    ));
}
