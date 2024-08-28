import styles from "./index.module.css";

//コンポーネントに値を渡す仕組みのことをPropsという
type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
}
