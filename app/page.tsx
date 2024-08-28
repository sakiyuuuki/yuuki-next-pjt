import styles from "./page.module.css";
import Image from "next/image";
import ButtonLink from "@/app/components/ButtonLink/ButtonLink";
import { News } from "@/app/_libs/microcms";
import NewsList from "./components/ButtonLink/NewsList";
//JavaScriptの定数や式などを書くことが出来る
const name = "世界";
//HTMLのようなマークアップを書くことが出来る
//JavaScriptを書いたり、参照する際には{}で囲む

//NewsListcomponentを作ったが、このページでも同様にNEWS型が指定されると管理が難しくなるので、同じ型をを使う場合は専用のlibsというディレクトリを作成してその配下で管理する
//type News = {
// id: string;
// title: string;
//category: {
//    name: string;
//};
// publishedAt: string;
// createdAt: string;
//};

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/29",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/29",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジー{name}で力を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
