import os
import sys
import openai

def main():
    openai.api_key = os.environ["INPUT_API-KEY"]
    input_text = os.environ["INPUT_TEXT"]

    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=input_text[0:4000] + "\n\nTl;dr",
        temperature=0.7,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )

    output_text = response.choices[0].text
    print(f"::set-output name=text::{output_text}")
    sys.exit(0)


if __name__ == "__main__":
    main()