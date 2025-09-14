export const revalidate = 10; // 秒

export default function ISRPage() {
  const now = new Date().toISOString();
  return (
    <main style={{ padding: 24 }}>
      <h1>ISR ページ</h1>
      <p>このページは {revalidate} 秒ごとに再生成されます。</p>
      <p>
        生成時刻 (ISO): <time suppressHydrationWarning>{now}</time>
      </p>
      <p>静的再生成の動作: 初回ビルド後、一定間隔でバックグラウンド再生成されます。</p>
      <a href="/">トップへ戻る</a>
    </main>
  );
}


