# Next.js with ChatGPT Web App

<img width="500" alt="screenshot2" src="https://github.com/ManatoYamashita/gpt-api/assets/95745485/495305e1-ab55-4d1e-8173-840cb114b445">

This project is a simple web application built with Next.js and TypeScript. It allows users to input a prompt and receive a response generated by OpenAI's ChatGPT API.

## Features

<img width="500" alt="screenshot1" src="https://github.com/ManatoYamashita/gpt-api/assets/95745485/3db0b8d0-fc6b-4f00-91f8-c29cbfa2dfc4">

- User can input a prompt
- The app sends the prompt to the ChatGPT API
- Displays the response from ChatGPT

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/ManatoYamashita/gpt-api.git
   cd your-repo-name
   ```

2. Install the dependencies:

``` sh
npm install
```

3. Create a .env.local file in the root of the project and add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key
```
ChatGPTのサブスクリプションを購読していない方は`api/chat.tsx`の`model`を`gpt-3.5`に変えてください（defaultではgpt-4）。

### Running the App
To start the development server, run:

```sh
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure
* pages/ - Contains the Next.js pages

    * index.tsx - Main page where the user inputs their prompt

    * api/chatgpt.ts - API endpoint that handles the interaction with the OpenAI API
* public/ - Static assets
* styles/ - CSS styles (if any)
* .env.local - Environment variables

## Deployment
To build and deploy the app, run:

```sh
npm run build
npm run start
```

Ensure that your deployment environment has the `OPENAI_API_KEY` environment variable set.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
* Next.js
* TypeScript
* OpenAI

## Contributing

Feel free to submit issues and enhancement requests.

## Contact

Manato Yamashita - g2172117[at]tcu.ac.jp

Project Link: `https://github.com/ManatoYamashita/gpt-api`