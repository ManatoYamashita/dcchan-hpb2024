// pages/_document.tsx 
import Document, { Html, Head, Main, NextScript } from 'next/document'

class Doc extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta property="og:title" content="でじこんちゃん HPB 2024" />
          <meta property="og:description" content="東京都市大学 デジタルコンテンツ研究会の公式キャラクター「でじこんちゃん」お誕生日おめでとう！" />
          <meta property="og:image" content="/ogp.jpg" />
          <meta property="og:url" content="https://tcu-dc.net" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@tcu_dc" />
          <meta name="twitter:creator" content="@tcu_dc" />
          <meta name="twitter:title" content="でじこんちゃん HPB 2024" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  };
}

export default Doc
