import os
import sys

def main():
  
    api_key = os.environ["INPUT_API-KEY"]
    input_text = os.environ["INPUT_TEXT"]

    print(api_key, input_text)

    print(f"::set-output name=text::{input_text}")

    sys.exit(0)


if __name__ == "__main__":
    main()